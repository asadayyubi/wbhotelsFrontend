import React, { useEffect, useState, useContext } from "react";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import MediaCard from './MediaCard'
import ModeEditOutlineOutlinedIcon from '@mui/icons-material/ModeEditOutlineOutlined';
import { getCustomerBookingInfo, getUserDetails } from "../../redux/actions/hotels";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";
import axios from "axios";
import wbImg from "../../media/images/logowithtext.png"
import { Button } from "@mui/material";


const ProfilePage = () => {
    const {userProfileDetails, setUserProfileDetails, logout} = useContext(LoginContext);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    // let { customerBookingInfo } = useSelector((state) => state.hotels);
    const [customerBookingInfo, setCustomerBookingInfo] = useState({});
    useEffect(() => {
        dispatch(getCustomerBookingInfo(userProfileDetails?.id));
        axios.post('https://api.ratebotai.com:8443/get_customer_booking_info', {customer_id: userProfileDetails.id}).then((response) => {
            // console.log("customer_booking_info", response.data.data);
            setCustomerBookingInfo(response.data.data);
        } )
    }, []);
    console.log('...userProfileDetails...: ', userProfileDetails);
    console.log('customerBookingInfo: ', customerBookingInfo);
    const bookingStatus = {
        cancelled: 'Cancelled',
        pending: 'Pending',
        check_out: 'Checked Out',
        check_in: 'Checked In',
        confirmed: 'Confirmed'
    }
    const data = {
        fName: "Manish",
        lName: "Kumar",
        phonNo: "9987235467",
        email: "abc123@gmail.com",
        WBMoneyBalance: 1000,
        balanceExpiryDate: "Jan 21, 2023"
    };
    const [userData, setUserData] = useState(data);
    const BookingHistory = function (props) {
        const bookingHistory = [];
        const { customerBookingInfo } = props;
        console.log("customerBookingInfo", customerBookingInfo);
        for (const property in customerBookingInfo) {
            if (property) {
                bookingHistory.push(...customerBookingInfo[property])
            }
        }
        console.log("bookingHistory", bookingHistory);
        function navigateToConfirmationPage(bookingInfo) {
            navigate("/confirmationpage", { state: { data: bookingInfo } })
        }
        return bookingHistory.map((bookingInfo) => {
            return (
                <div className="booking-history shadow">
                    <MediaCard bookInfo={bookingInfo} onClickOnHistory={() => navigate(`/confirmationpage?booking_id=${bookingInfo.booking_id}&custumer_id=${bookingInfo.customer_id}`, { state: { data: bookingInfo } })} />
                    <div> <h3>{bookingInfo.booking_id}</h3></div>
                    <div>
                        <h3>{bookingStatus[bookingInfo.booking_status]}</h3>
                        <p> Pending Amount: <strong>₹{bookingInfo.balance_amount}</strong></p>
                        <a onClick={() => navigateToConfirmationPage(bookingInfo)} style={{ color: 'red', cursor: 'pointer' }}> View Details</a><br />
                        <a href="#" style={{ color: 'red' }}> Need Help?</a>
                    </div>
                </div>
            )
        })
    }
    function onEdit() {
        const inputElements = document.getElementsByClassName('profile-input1');
        for (let inputElement of inputElements) {
            console.log(inputElement);
            if (inputElement.id !== "phoneNumber") {
                inputElement.style.border = "solid 0.1rem black";
                inputElement.disabled = false;
                const submitButton = document.getElementById('submit');
                submitButton.style.display = 'block'
            }
            ;
        };
    }
    function onEditPassword() {
        const inputElements = document.getElementsByClassName('profile-input2');
        for (let inputElement of inputElements) {
            inputElement.style.border = "solid 0.1rem black";
            inputElement.disabled = false;
            const submitButton = document.getElementById('submitPassword');
            submitButton.style.display = 'block';
        };
    }
    function onUpdate() {
        let userDataForm = {
            firstname: '',
            lastname: '',
            email: ''
        }
        const inputElements = document.getElementsByClassName('profile-input1');
        for (let inputElement of inputElements) {
            if (inputElement.id === 'fullName') {
                const fullName = inputElement.value.split(' ');
                userDataForm.firstname = fullName[0];
                userDataForm.lastname = fullName[1];
            }
            if (inputElement.id === 'email') {
                userDataForm.email = inputElement.value;
            }
            inputElement.style.border = "hidden";
            inputElement.disabled = true;
            const submitButton = document.getElementById('submit');
            submitButton.style.display = 'none';
        };
        userProfileDetails.first_name = userDataForm.firstname;
        userProfileDetails.last_name = userDataForm.lastname;
        userProfileDetails.email = userDataForm.email;
        userProfileDetails.username = userDataForm.firstname;
        userProfileDetails.customer_id = userProfileDetails.id;
        const dateToBeUpdate = {
            first_name: userProfileDetails.first_name,
            last_name: userProfileDetails.last_name,
            username: userProfileDetails.username,
            email: userProfileDetails.email,
            customer_id: userProfileDetails.id,
            phone_number: userProfileDetails.phone_number
        }
        axios.post('https://api.ratebotai.com:8443/update_customer_info_data', dateToBeUpdate).then((response) => {
            console.log("data has beed updated: ", response);
            setUserProfileDetails(userProfileDetails);
        })
    }
    function onPasswordUpdate() {
        const inputElements = document.getElementsByClassName('profile-input2');
        for (let inputElement of inputElements) {
            inputElement.style.border = "hidden";
            inputElement.disabled = true;
            const submitButton = document.getElementById('submitPassword');
            submitButton.style.display = 'none';
        };
    }
    if (userProfileDetails) {
        return (
            <div className="profile-page">
                <h1 style={{display: "flex", width: "100%"}}>Hello, {userProfileDetails.username}
                    {/* <Button
                        variant="contained"
                        style={{
                            marginLeft: "auto",
                            background: "#17837a",
                            width: "10rem"
                        }}
                        onClick={() => {
                            logout();
                            navigate("/");

                        
                        }}
                    >log out</Button> */}
                </h1>
                
                <div className="container">
                    <div className="left-card shadow">
                        <span className="svg-container">
                            <img className="" src={wbImg} width="45px" />
                            {/* <svg xmlns="http://www.w3.org/2000/svg" width="25" height="42" viewBox="0 0 55 46"><g fill="none" stroke="#ffb121" stroke-width=".6" fill-rule="evenodd"><path d="M27.9 16.2c-.6-.2-1.1 0-1.4.6l-9.6 24.8L2.6 6.5c-.3-.6-.7-1-1.2-.9-.3 0-.6.2-.8.5-.2.3-.2.7-.1 1 .2.8.6 1.5.9 2.2.2.4.4.8.5 1.1l7.2 17.7c2.3 5.5 4.5 11.1 6.8 16.6.1.2.2.3.3.5l.1.1.2.2h1.1l.2-.3c0-.1.1-.1.1-.2.1-.1.2-.3.3-.5 2.9-7.5 5.8-15.1 8.7-22.6l.9-2.3c.3-.7.6-1.4.8-2.1.2-.5-.1-1.1-.7-1.3zm26.92-9.525c-.1-.3-.3-.5-.6-.6-.6-.2-1.1 0-1.4.6l-15.2 35.3-7.4-19.9v-.1c-.1-.2-.1-.3-.2-.5-.2-.5-.7-.7-1.3-.5-.5.2-.8.6-.7 1.2 0 .2.1.3.1.5l.4 1.2c2.6 7.1 5.3 14.2 7.9 21.3.1.2.2.4.3.5l.1.1.2.2h1l.2-.2.1-.1c.1-.1.2-.3.3-.5 4.6-10.7 9.2-21.5 13.9-32.2l1.5-3.4c.3-.6.5-1.3.8-1.9.1-.4.1-.7 0-1z"></path><path d="M17.3 30.2c.3-.1.6-.4.7-.8 2.6-6.7 5.2-13.5 7.8-20.2l1.7-4.4c0-.1.1-.1.1-.2l9.2 24.8c.1.3.3.9 1.1.9.7 0 1-.6 1.1-.9L49.7 4c.2-.4.2-.8.1-1.1-.1-.2-.2-.4-.6-.6-.6-.2-1.2.1-1.4.7L38 26.1 28.7 1.2c-.3-.9-.9-.9-1.3-.8-.6.1-.8.6-.9.9l-7.9 20.2-2 5.2c-.3.6-.5 1.3-.7 1.9-.1.4 0 .8.1 1.1.3.6 1 .7 1.3.5zm-4.8-9.1c.1.3.2.6.4.9.2.4.5.6 1 .6h.2c.3-.1.8-.3.9-1v-.1l-.1-.2c0-.1-.1-.2-.1-.3L9.4 7.5c-.6-1.4-1.1-2.8-1.7-4.3-.3-.8-1-.8-1.2-.8-.3.1-.6.2-.7.5-.2.3-.2.7 0 1.1l6.7 17.1z"></path><path d="M12.5 21.1c.1.3.2.6.4.9.2.4.5.6 1 .6h.2c.3-.1.8-.3.9-1v-.1l-.1-.2c0-.1-.1-.2-.1-.3L9.4 7.5c-.6-1.4-1.1-2.8-1.7-4.3-.3-.8-1-.8-1.2-.8-.3.1-.6.2-.7.5-.2.3-.2.7 0 1.1l6.7 17.1zM28.7 1.4c-.3-.9-.9-.9-1.3-.8-.6.1-.8.6-.9.9l-7.9 20.2-2 5.2c-.3.6-.5 1.3-.7 1.9-.1.4 0 .8.1 1.1.2.4.8.5 1.2.4.3-.1.6-.4.7-.8 2.6-6.7 5.2-13.5 7.8-20.2l1.7-4.4c0-.1.1-.1.1-.2l7 19 2-.9-7.8-21.4zm21 2.7c.2-.4.2-.8.1-1.1-.1-.2-.2-.4-.6-.6-.6-.2-1.2.1-1.4.7L40.2 21l2.9-1.3 6.6-15.6z"></path><path d="M30.22 22.177v-.1c-.1-.2-.1-.3-.2-.5-.2-.5-.7-.7-1.3-.5-.5.2-.8.6-.7 1.2 0 .2.1.3.1.5l.4 1.2c.3.9.6 1.7 1 2.6l2-.9-1.3-3.5zM51 16.1c.5-1.2 1.1-2.5 1.6-3.7L54.1 9c.3-.6.5-1.3.8-1.9.1-.3.1-.6 0-.9-.1-.3-.3-.5-.6-.6-.6-.2-1.1 0-1.4.6l-4.8 11.2 2.9-1.3zM2.6 6.5c-.3-.6-.7-1-1.2-.9-.3 0-.6.2-.8.5-.2.3-.2.7-.1 1 .2.8.6 1.5.9 2.2.2.4.4.8.5 1.1l7.2 17.7c.8 2 1.7 4.1 2.5 6.1l2-.9-11-26.8zM26.8 22l.9-2.3c.3-.7.6-1.4.8-2.1.2-.6 0-1.2-.6-1.4-.6-.2-1.1 0-1.4.6l-5 12.8 2.8-1.3c.9-2 1.7-4.1 2.5-6.3z"></path></g></svg> */}
                        </span>
                        <h1> WB Reward </h1>
                        <p>WB Reward is our hospitality membership program. As a member, you will be entitled to additional discounts of up to 10% on WB Reward member hotels and will also enjoy exclusive benefits with our partner alliances.</p>
                        <div className="button-holder">
                            <ButtonPrimary text="Buy Membership" />
                        </div>
                    </div>
                    <div className="right-card shadow">
                        <span className="svg-container">
                        <img className="" src={wbImg} width="45px" />
                           
                        </span>
                        <h1> Your WB Money </h1>
                        <div className="user-balance-info">
                            <div><span>WB Money Balance</span>: <strong>₹{userData.WBMoneyBalance}</strong></div>
                            <div><span>Expires</span>: <strong>{userData.balanceExpiryDate}</strong></div>
                            <div><span>Usable this month</span>: <strong>₹{userData.WBMoneyBalance} <span>(max ₹25000 per month)</span></strong></div>
                        </div>
                    </div>
                </div>
                <div className="history-card-container">
                    <div className="history-card-toolbar">
                        <h1> Booking History </h1>
                        <select>
                            <option>Checked Out</option>
                            <option>Upcoming</option>
                            <option>Cancelled</option>
                        </select>
                    </div>
                    <div className="booking-history-container">
                        <BookingHistory customerBookingInfo={customerBookingInfo} />
                    </div>
                </div>
                <div className="edit-card-container">
                    <div className="left-card shadow edit">
                        <h1> Edit Profile <span onClick={() => onEdit()}><ModeEditOutlineOutlinedIcon /></span></h1>
                        <form className="form-edit">
                            <div>
                                <span>Full Name</span>
                                <div>
                                    <input id="fullName" type="text" className="profile-input1" defaultValue={userProfileDetails.first_name + " " + userProfileDetails.last_name} disabled />
                                </div>
                            </div>
                            <div>
                                <span>Phone Number</span>
                                <div>
                                    <input id="phoneNumber" type="text" defaultValue={userProfileDetails.phone_number} className="profile-input1" disabled />
                                </div>
                            </div>
                            <div>
                                <span>Email Address</span>
                                <div>
                                    <input id="email" type="email" className="profile-input1" defaultValue={userProfileDetails.email} disabled />
                                </div>
                            </div>
                            <div id="submit" style={{ display: 'none', width: '100px' }}>
                                <ButtonPrimary text="Update" onClick={() => onUpdate()} />
                            </div>
                        </form>

                    </div>
                    {/* <div className="right-card shadow edit">
                        <h1> Change Password  <span onClick={() => onEditPassword()}><ModeEditOutlineOutlinedIcon /></span> </h1>
                        <div>
                            <form className="form-edit">
                                <div>
                                    <span>Current Password</span>
                                    <div>
                                        <input id="password" type="password" className="profile-input2" defaultValue={"*******"} disabled />
                                    </div>
                                </div>
                                <div id="submitPassword" style={{ display: 'none', width: '100px' }}>
                                    <ButtonPrimary text="Update" onClick={onPasswordUpdate} />
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
            </div>
        );
    }
};

export default ProfilePage;
