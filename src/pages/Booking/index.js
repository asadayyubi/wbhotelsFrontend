import React, { useState, useContext, useEffect } from 'react'
import { Button, FormGroup, Rating, Typography } from '@mui/material'

import validator from 'validator'

import Filter1Icon from '@mui/icons-material/Filter1';
import Filter2Icon from '@mui/icons-material/Filter2';
import HttpsIcon from '@mui/icons-material/Https';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import SensorDoorOutlinedIcon from '@mui/icons-material/SensorDoorOutlined';

import { Bottom, BottomLeft, BottomRight, ButtonBox, Container, ContainerLeft, ContainerRight, FormLeft, FormRight, Formrow, Heading, Inner, MainLeft, ModifyTypo, NumBox, PriceLeft, PriceRight, PriceRow, RightBottom, RightMid, RightPrice, RightTop, RightTopLeft, RightTopRight, StyledInput, StyledLabel } from './index.sty'
import { useLocation, useNavigate } from 'react-router-dom';
import StarIcon from "@mui/icons-material/Star";
import { LoginContext } from '../../Contexts/LoginContext';
import axios from 'axios';
import { getBookingDetails, getNoOfNight } from '../../utils';
import { useBookingData } from '../../Contexts/BookingContext';


const Booking = () => {
    const navigate = useNavigate();
    const [ partialPay, setPartialPay ] = useState(false);
    useEffect(() => {
        if (userProfileDetails?.first_name && userProfileDetails?.last_name) {
            const name = `${userProfileDetails?.first_name} ${userProfileDetails?.last_name}`;
            setFullName(name);
        }
        if (userProfileDetails?.email) {
            setEmail(userProfileDetails?.email);
        }
        if (userProfileDetails?.phone_number) {
            setNumber(userProfileDetails?.phone_number);
        }
    }, []);
    const [firstDetailsEntered, setFirstDetailsEntered] = useState(false);
    const [fullName, setFullName] = useState(() => '');
    const [email, setEmail] = useState('');
    const [number, setNumber] = useState('');
    const [payAtHotel, setPayAtHotel] = useState(false);
    const [emailError, setEmailError] = useState('')

    const { userProfileDetails, setUserProfileDetails } = useContext(LoginContext);
    const {booking_id, setBooking_id } = useBookingData();
    console.log("===userProfileDetails", userProfileDetails)
    const location = useLocation();
    const { searchParams, hotelData, roomsDetails } = location?.state?.data;
    const { priceAndSelectedRoomDetails, selectedRoomInfo } = roomsDetails;
    function onPayNowClick() {
        setPayAtHotel(false);
        checkAndSetSecondDetails(payAtHotel, true, false);
    };

    function onPayPartialClick() {
        // setPayAtHotel(false);
        checkAndSetSecondDetailsPartial(payAtHotel, true, false);
    };
    
    console.log("..hotelData, roomDetails...", hotelData, roomsDetails);
    const props = {
        email: userProfileDetails?.email,
        buyerPhone: userProfileDetails?.phone_number,
        fname: userProfileDetails?.first_name,
        lname: userProfileDetails?.last_name,
        BuyerPincode: '',
        city: '',
        state: '',
        country: '',
        buyerAddress: '',
        orderid: booking_id,
        amount:  (Number((priceAndSelectedRoomDetails.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails.taxAndServiceObj?.totalTaxAmount))).toFixed().toString(),
        customField1: '',
        currency: '356',
        isocurrency: 'INR',
        chmod: '',
        tWallet: '',
        subtype: '',
    }
    function setAndUpdateFirstDetails(value) {
        const fullNameArray = fullName?.split(' ');
        const dataToBeUpdate = {
            first_name: fullNameArray[0],
            last_name: fullNameArray[1],
            username: fullNameArray[0],
            email,
            customer_id: userProfileDetails.id,
            phone_number: userProfileDetails.phone_number
        }
        axios.post('https://api.ratebotai.com:8443/update_customer_info_data', dataToBeUpdate).then((response) => {
            console.log("data has beed updated: ", response);
            if(response.status_message === "success") {
                userProfileDetails.first_name = dataToBeUpdate.first_name;
                userProfileDetails.last_name = dataToBeUpdate.last_name;
                userProfileDetails.email = dataToBeUpdate.email;
                userProfileDetails.username = dataToBeUpdate.first_name;
                setUserProfileDetails(userProfileDetails);
            }
        })
        setFirstDetailsEntered(value);
        
    }
    function checkAndSetSecondDetails(paymentType, isPaymentTypeSelected, ispayAtHotel) {
        if (firstDetailsEntered && isPaymentTypeSelected && searchParams) {
            let hotelAndCustomerDetails = getBookingDetails(searchParams, hotelData, roomsDetails, userProfileDetails, fullName, email, priceAndSelectedRoomDetails, selectedRoomInfo);
            if(ispayAtHotel) {
                hotelAndCustomerDetails.transaction_status = "pending";
                hotelAndCustomerDetails.booking_status = "confirmed";
                hotelAndCustomerDetails.paid_amount = 0;
            }
            hotelAndCustomerDetails.paid_amount = parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount);
            
            axios.post('https://api.ratebotai.com:8443/insert_booking_data', hotelAndCustomerDetails).then((res) => {
                console.log(res.data);
                if (res.data.data && res.data.message === "booking  successful") {
                    res.data.data.hotel_gallery = hotelData.hotel_gallery;
                    if(ispayAtHotel) {
                        setBooking_id(res.data.data.booking_id);
                        navigate(`/confirmationpage?booking_id=${res.data.data.booking_id}&custumer_id=${res.data.data.customer_id}`, { state: { data: res.data.data } });
                    } else {
                        setBooking_id(res.data.data.booking_id);
                        console.log("bookingid:", res.data.data.booking_id)
                        navigate("/transaction", { state: { data: {...props, amount: (parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)).toFixed().toString(), orderid: res.data.data.booking_id.toString()} } });
                        // setTimeout(() => {
                        //     navigate("/confirmationpage", { state: { data: res.data.data } });
                        // }, 10000);
                    }
                }
            })
        }
    }
    
    function checkAndSetSecondDetailsPartial(paymentType, isPaymentTypeSelected, ispayAtHotel) {
        if (firstDetailsEntered && isPaymentTypeSelected && searchParams) {
            let hotelAndCustomerDetails;
            if (hotelData.partialamountpercentage === 0) {
                hotelAndCustomerDetails = getBookingDetails(searchParams, hotelData, roomsDetails, userProfileDetails, fullName, email, priceAndSelectedRoomDetails, selectedRoomInfo);
            } else {
                hotelAndCustomerDetails = getBookingDetails(searchParams, hotelData, roomsDetails, userProfileDetails, fullName, email, priceAndSelectedRoomDetails, selectedRoomInfo);
            }
            hotelAndCustomerDetails.paid_amount = (priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((hotelData?.partialamountpercentage)/100)) * ((100 + hotelData?.partial_tax_gst) / 100);
            hotelAndCustomerDetails.balance_amount = (parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)) - ((priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((hotelData?.partialamountpercentage)/100)) * ((100 + hotelData?.partial_tax_gst) / 100));
            // hotelAndCustomerDetails.paid_amount = (parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)) * (hotelData.partialamountpercentage/100);
            // hotelAndCustomerDetails.balance_amount = (parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)) * ((100 - hotelData.partialamountpercentage)/100);
            
            axios.post('https://api.ratebotai.com:8443/insert_booking_data', hotelAndCustomerDetails).then((res) => {
                console.log(res.data);
                if (res.data.data && res.data.message === "booking  successful") {
                    res.data.data.hotel_gallery = hotelData.hotel_gallery;
                    if(ispayAtHotel) {
                        res.data.data.booking_status = "confirmed";
                        navigate("/confirmationpage", { state: { data: res.data.data } });
                    } else {
                        console.log(res.data.data)
                        res.data.data.booking_status = "pending";
                        setBooking_id(res.data.data.booking_id);
                        console.log("bookingid:", res.data.data.booking_id)
                        // console.log("===tax details", priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)
                        // console.log("===amount data", priceAndSelectedRoomDetails.totalHotelSumAfterDisCount)
                        // console.log("=== partial amount",((parseInt(priceAndSelectedRoomDetails.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount))  * (hotelData.partialamountpercentage/100)).toFixed().toString())
                        navigate("/transaction", { state: { data: {...props, amount: (Number(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((hotelData?.partialamountpercentage)/100)) * ((100 + hotelData?.partial_tax_gst) / 100)).toFixed().toString(), orderid: res.data.data.booking_id.toString()} } });
                        // setTimeout(() => {
                        //     navigate("/confirmationpage", { state: { data: res.data.data } });
                        // }, 10000);
                    }
                }
            })
        }
    }


    const validateEmail = (e) => {
        var email = e.target.value;
        setEmail(e.target.value);

        if (validator.isEmail(email)) {
            setEmailError('')
        } else {
            setEmailError('Enter valid Email!')
        }
    }
    function getDiscountPrice(price, discount) {
        const value = (price * discount / 100);
        return value;
    }

    return (
        <Container>
            {!firstDetailsEntered ?
                <MainLeft>
                    <ContainerLeft>
                        <Heading> <Filter1Icon /><span style={{ width: '1rem' }} /> Enter your details</Heading>
                        <form>
                            <Inner>
                                <Typography>We will use these details to share your booking information</Typography>

                                <Formrow>
                                    <FormGroup style={{ width: '48%' }}>
                                        <StyledLabel>Full Name</StyledLabel>
                                        <StyledInput
                                            type='text'
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)}
                                        />
                                    </FormGroup>
                                    <FormGroup style={{ width: '48%' }}>
                                        {/* <pre>
                                    <input type="text" id="userEmail" value={email}
                                    onChange={(e) => validateEmail(e)}></input> <br />
                                    <span style={{
                                        fontWeight: 'bold',
                                        color: 'red',
                                    }}>{emailError}</span>
                                </pre> */}
                                        <StyledLabel>Email Address</StyledLabel>
                                        <StyledInput
                                            type='email'
                                            value={email}
                                            onChange={(e) => validateEmail(e)}
                                        />
                                        <span style={{
                                            fontWeight: 'bold',
                                            color: 'red',
                                        }}>{emailError}</span>
                                    </FormGroup>
                                </Formrow>
                                <Formrow>
                                    <FormGroup style={{ width: '48%' }}>
                                        <StyledLabel>Mobile Number</StyledLabel>
                                        <StyledInput
                                            type='number'
                                            value={number}
                                            onChange={(e) => setNumber(e.target.value)}
                                            disabled
                                        />
                                    </FormGroup>
                                </Formrow>
                                <Formrow>
                                    <Button
                                        variant='contained'
                                        size='large'
                                        type='submit'
                                        color='success'
                                        disabled={!fullName || !email || !number || emailError === "Enter valid Email!" ? true : false}
                                        style={{
                                            marginTop: '2rem',
                                            width: '40%'
                                        }}
                                        onClick={() => {
                                            setAndUpdateFirstDetails(true);
                                        }}
                                    >
                                        Continue
                                    </Button>
                                </Formrow>
                            </Inner>
                        </form>
                    </ContainerLeft>
                </MainLeft>
                :
                <>
                    <MainLeft>
                        <ContainerLeft p={2}>
                            <ModifyTypo>
                                <NumBox>1</NumBox>
                                Your details
                                <span
                                    style={{ marginLeft: 'auto' }}
                                >
                                    <Button
                                        variant='outlined'
                                        color='warning'
                                        onClick={() => setFirstDetailsEntered(false)}
                                    >
                                        Modify
                                    </Button>
                                </span>
                            </ModifyTypo>
                            <Typography> &nbsp;&nbsp;{fullName} &nbsp; | &nbsp; {email} &nbsp; | &nbsp; {number}</Typography>
                        </ContainerLeft>
                        <ContainerLeft style={{ margin: '2rem auto' }}>
                            <Heading> <Filter2Icon /><span style={{ width: '1rem' }} />  Complete Your Booking<span style={{ display: 'flex', alignItems: 'center', marginLeft: 'auto', fontWeight: 'normal', fontSize: '1.3rem', color: '#616161' }} ><HttpsIcon style={{ color: 'green' }} /> 100% secure payments</span></Heading>
                            <Inner>
                                <FormLeft>
                                    <ButtonBox onClick={() => setPayAtHotel(true)} style={{ boxShadow: !payAtHotel ? null : '0px 0px 15px 10px #e4e4e4', position: "relative", zIndex: hotelData?.partialamountpercentage > 0 ? "-1" : "1" }}>
                                        Pay At Hotel
                                    </ButtonBox>
                                    <ButtonBox onClick={() => setPayAtHotel(false)} style={{ boxShadow: payAtHotel ? null : '0px 0px 15px 10px #e4e4e4' }}>
                                    {/* <ButtonBox onClick={() => onPayNowClick()} style={{ boxShadow: payAtHotel ? null : '0px 0px 15px 10px #e4e4e4' }}> */}
                                        <span>Pay Now</span>
                                        <span><ChevronRightIcon /></span>
                                    </ButtonBox>
                                </FormLeft>
                                {payAtHotel ?
                                    <FormRight>
                                        <Typography style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}>⭐ No payment needed today</Typography>
                                        <Typography style={{ textAlign: 'center', color: '#616161', marginBottom: '2rem' }}>We will confirm your Stay without any charge. Pay directly at the hotel during your stay.</Typography>
                                        <Button
                                            variant='contained'
                                            type='button'
                                            fullWidth
                                            color='success'
                                            onClick={() => checkAndSetSecondDetails(payAtHotel, true, true)}
                                        >
                                            Book Now
                                        </Button>
                                    </FormRight>
                                    :
                                    <FormRight style={{display: "flex", flexWrap: "wrap", justifyContent: "space-between"}}>
                                        <Typography style={{width: "100%", textAlign: 'center', fontWeight: 'bold', marginBottom: '2rem' }}>⭐ No payment needed today</Typography>
                                        <Typography style={{ textAlign: 'center', color: '#616161', marginBottom: '2rem' }}>We will confirm your Stay without any charge. Pay directly at the hotel during your stay.</Typography>
                                        <Button
                                            variant='contained'
                                            type='button'
                                            color='success'
                                            style={{
                                                width: "49%"
                                            }}
                                            onClick={() => {
                                                setPartialPay(true);
                                                onPayPartialClick();
                                            }}                                
                                        >
                                            Pay Partial
                                        </Button>
                                        <Button
                                            variant='contained'
                                            type='button'
                                            color='success'
                                            style={{
                                                width: "49%"
                                            }}
                                            onClick={onPayNowClick}                                
                                        >
                                            Pay Full
                                        </Button>
                                    </FormRight>}
                            </Inner>
                        </ContainerLeft>
                    </MainLeft>
                </>
            }
            <ContainerRight>
                <RightTop>
                    <RightTopLeft>
                        <Typography style={{ fontWeight: 'bold' }}>{hotelData.hotelname}</Typography>
                        <Typography style={{ color: '#e4e4e4' }}>{hotelData.locality.locality_name}</Typography>
                        <div className="left-rating" style={{ display: 'flex', flexWrap: 'wrap', margin: '10px 5px' }}>
                            <div style={{ flex: '1 1 auto' }}>
                                <Button variant="contained" color="success" endIcon={<StarIcon />}>
                                    {hotelData.rating_json.rating}
                                </Button>
                            </div>
                            <div style={{ flex: '1 1 auto', textAlign: 'right' }}>
                                <p className="rating-words">{hotelData.rating_json.rating_in_words}</p>
                                <Rating name="size-large" fontSize="inherit" size="large" value={hotelData?.hotel_star} readOnly/>
                            </div>
                        </div>
                        <Typography style={{ fontWeight: 'bold' }} >{searchParams?.to_date?.getDate() - searchParams?.from_date?.getDate() + 1} Night</Typography>
                    </RightTopLeft>
                    <RightTopRight>
                        <img
                            alt='img'
                            width='100%'
                            src={selectedRoomInfo?.rooms_types_gallery[0]?.file}
                            style={{
                                marginBottom: 'auto',
                                marginLeft: 'auto'
                            }}
                        />
                    </RightTopRight>
                </RightTop>
                <RightMid>
                    <Typography style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><CalendarMonthOutlinedIcon style={{ marginRight: '1rem' }} /> {searchParams.from_date.toDateString()} - {searchParams.to_date.toDateString()} | {searchParams?.room_count} Room, {searchParams?.no_of_adults} Guests</Typography>
                    <hr style={{ margin: '1rem auto' }} />
                    <Typography style={{ fontWeight: 'bold', display: 'flex', alignItems: 'center' }}><SensorDoorOutlinedIcon style={{ marginRight: '1rem' }} /> {selectedRoomInfo?.roomtype}</Typography>
                </RightMid>
                <RightPrice>
                    <PriceRow>
                        <PriceLeft>
                            Room price for <span style={{ fontStyle: "italic", opacity: '0.5' }}>{searchParams?.room_count} Room X {getNoOfNight(searchParams?.from_date, searchParams?.to_date) || 1} Night X {searchParams?.no_of_adults} Guests </span>
                        </PriceLeft>
                        <PriceRight>
                            ₹{priceAndSelectedRoomDetails.totalHotelSumBeforeDisCount}
                        </PriceRight>
                    </PriceRow>
                    {priceAndSelectedRoomDetails?.mendatoryRoomServiceArray ?
                        priceAndSelectedRoomDetails.mendatoryRoomServiceArray.map((mendatoryRoomServiceObj) => {
                            return <PriceRow>
                                <PriceLeft>
                                    {mendatoryRoomServiceObj.serviceName} <span style={{ fontStyle: "italic", opacity: '0.5' }}>{getNoOfNight(searchParams?.from_date, searchParams?.to_date) || 1} Night</span>
                                </PriceLeft>
                                <PriceRight>
                                    +₹{mendatoryRoomServiceObj.grossAmount}
                                </PriceRight>
                            </PriceRow>
                        }) : <></>
                    }
                    {priceAndSelectedRoomDetails?.discountArray ?
                        priceAndSelectedRoomDetails.discountArray.map((discountObj) => {
                            if (discountObj.discountAmount > 0) {
                                return <PriceRow>
                                    <PriceLeft>
                                        <span>{discountObj.discountName}</span> <span style={{ fontStyle: "italic", opacity: '0.5' }}>Discount</span>
                                    </PriceLeft>
                                    <PriceRight>
                                        -₹{discountObj.discountAmount.toFixed(2)}
                                    </PriceRight>
                                </PriceRow>
                            }

                        }) : <></>
                    }
                    <PriceRow>
                            <PriceLeft>
                                Taxes & Service Fees
                            </PriceLeft>
                            <PriceRight>
                                ₹{(priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)}
                            </PriceRight>
                        </PriceRow>
                </RightPrice>
                <hr style={{ width: '90%', margin: '2rem auto' }} />
                <RightBottom>
                    <BottomLeft>
                    <Typography style={{ fontSize: '2rem' }} >Total Amount to be paid</Typography>
                    </BottomLeft>
                    <BottomRight>
                            ₹{parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)}
                        </BottomRight>
                </RightBottom>
                <hr style={{ width: '90%', margin: '2rem auto' }} />
                <RightBottom>
                    <BottomLeft>
                    <Typography style={{ fontSize: '1.5rem' }} >Partial Amount without GST</Typography>
                    </BottomLeft>
                    <BottomRight>
                            {/* ₹{parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)} */}
                            {/* ₹{(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((100 - hotelData.partialamountpercentage)/100)) + (priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * (hotelData?.partial_tax_gst / 100))} */}
                            ₹{priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((hotelData?.partialamountpercentage)/100)}
                            {/* ₹{priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((hotelData?.partialamountpercentage)/100) + ((priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((100-hotelData?.partialamountpercentage)/100)) * (hotelData?.partial_tax_gst/100))} */}
                        </BottomRight>
                </RightBottom>
                <RightBottom>
                    <BottomLeft>
                    <Typography style={{ fontSize: '1.5rem' }} >Partial Amount GST %</Typography>
                    </BottomLeft>
                    <BottomRight>
                            {/* ₹{parseFloat(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount) + (priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount)} */}
                           {hotelData?.partial_tax_gst}%
                        </BottomRight>
                </RightBottom>
                <RightBottom>
                    <BottomLeft>
                    <Typography style={{ fontSize: '2rem' }} >Total Partial Amount to be paid</Typography>
                    </BottomLeft>
                    <BottomRight>
                            ₹{(priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount * ((hotelData?.partialamountpercentage)/100)) * ((100 + hotelData?.partial_tax_gst) / 100)}
                        </BottomRight>
                </RightBottom>
                <Bottom>
                    All staff vaccinated with 1st dose
                </Bottom>
            </ContainerRight>
        </Container>
    )
}

export default Booking