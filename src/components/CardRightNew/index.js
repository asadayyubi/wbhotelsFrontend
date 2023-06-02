import { Rating, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import StarIcon from "@mui/icons-material/Star";
import InfoIcon from "@mui/icons-material/Info";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import SensorDoorOutlinedIcon from "@mui/icons-material/SensorDoorOutlined";
import {
  Bottom,
  BottomLeft,
  BottomRight,
  Container,
  ContainerRight,
  PriceLeft,
  PriceRight,
  PriceRow,
  RightBottom,
  RightMid,
  RightPrice,
  RightTop,
  RightTopLeft,
  RightTopRight,
} from "./index.sty";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { getNoOfNight } from "../../utils";
import { LoginContext } from "../../Contexts/LoginContext";
import DateRoomsAdultCount from "../DateRoomsAdultCount";

const CardRight = (props) => {
  const { searchParams, userProfileDetails, rooms } = useContext(LoginContext);
  const newRooms = rooms;

  // function getIntersectingDates(range1, range2) {
  //     const start1 = new Date(range1[0]);
  //     const end1 = new Date(range1[1]);
  //     const start2 = new Date(range2[0]);
  //     const end2 = new Date(range2[1]);

  //     if (start1 > end1 || start2 > end2) {
  //         return null;
  //     }

  //     const intersectionStart = start1 > start2 ? start1 : start2;
  //     const intersectionEnd = end1 < end2 ? end1 : end2;

  //     if (intersectionStart > intersectionEnd) {
  //         return null;
  //     }

  //     return [intersectionStart, intersectionEnd];
  // }

  const navigate = useNavigate();
  const { hotelData, roomsDetails, buttonMsg, setRoomDetails } = props;
  // console.log("..roomsDetails..", roomsDetails);
  // console.log("..selectedRoomDetails..", roomsDetails?.selectedRoomInfo);
  // console.log(
  //   "priceAndSelectedRoomDetails",
  //   roomsDetails?.priceAndSelectedRoomDetails
  // );
  // console.log(
  //   "mendatoryRoomServiceArray",
  //   roomsDetails?.mendatoryRoomServiceArray
  // );
  function onBookNowClick() {
    if (!userProfileDetails.phone_number) {
      navigate("/login", {
        state: {
          data: {
            redirectPage: "hotelpage",
            searchParams,
            hotelData,
            roomsDetails,
          },
        },
      });
    } else {
      navigate("/booking", {
        state: { data: { searchParams, hotelData, roomsDetails } },
      });
    }
  }
  if (hotelData && roomsDetails && searchParams) {
    const { rooms, priceAndSelectedRoomDetails, selectedRoomInfo } =
      roomsDetails;
    // console.log("===check this immediately", priceAndSelectedRoomDetails);
    return (
      <Container>
        <ContainerRight>
          <RightTop>
            <RightTopLeft>
              <Typography style={{ fontWeight: "bold" }}>
                {hotelData.hotelname}
              </Typography>
              <Typography style={{ color: "#e4e4e4" }}>
                {hotelData.locality.locality_name}
              </Typography>
              <div
                className="left-rating"
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  margin: "10px 5px",
                }}
              >
                <div style={{ flex: "1 1 auto" }}>
                  <Button
                    variant="contained"
                    color="success"
                    endIcon={<StarIcon />}
                  >
                    {hotelData.rating_json.rating}
                  </Button>
                </div>
                <div style={{ flex: "1 1 auto", textAlign: "right" }}>
                  <p className="rating-words">
                    {hotelData.rating_json.rating_in_words}
                  </p>
                  <Rating
                    name="size-large"
                    size="large"
                    value={hotelData?.hotel_star}
                    readOnly
                  />
                </div>
              </div>
              <Typography style={{ fontWeight: "bold" }}>
                {getNoOfNight(searchParams?.from_date, searchParams?.to_date) ||
                  1}{" "}
                Night
              </Typography>
            </RightTopLeft>
            <RightTopRight>
              <img
                alt="img"
                width="100%"
                src={selectedRoomInfo?.rooms_types_gallery[0]?.file}
                style={{
                  marginBottom: "auto",
                  marginLeft: "auto",
                }}
              />
            </RightTopRight>
          </RightTop>
          <RightMid>
            <DateRoomsAdultCount setRoomDetails={setRoomDetails} />
            <hr style={{ margin: "1rem auto" }} />
            <Typography
              style={{
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
              }}
            >
              <SensorDoorOutlinedIcon style={{ marginRight: "1rem" }} />{" "}
              {selectedRoomInfo?.roomtype}
            </Typography>
          </RightMid>
          <RightPrice>
            <PriceRow>
              <PriceLeft>
                <span>
                  {searchParams?.room_count} Room X{" "}
                  {getNoOfNight(
                    searchParams?.from_date,
                    searchParams?.to_date
                  ) || 1}{" "}
                  Night X {searchParams?.no_of_adults} Guests
                </span>
                {(priceAndSelectedRoomDetails?.allSelectedRooms[0]?.room_price
                  ?.extra_adults_price > 0 ||
                  priceAndSelectedRoomDetails?.allSelectedRooms[0]?.room_price
                    ?.child_price > 0) && (
                  <Tooltip
                    title={
                      <>
                        <div style={{ fontSize: "small" }}>
                          Price for extra adults/children
                        </div>
                        <div style={{ fontSize: "small" }}>
                          {priceAndSelectedRoomDetails?.allSelectedRooms[0]
                            ?.room_price?.extra_adults_price > 0 && (
                            <PriceRow>
                              <PriceLeft>Extra adult price </PriceLeft>
                              <PriceRight>
                                ₹
                                {
                                  priceAndSelectedRoomDetails
                                    ?.allSelectedRooms[0]?.room_price
                                    ?.extra_adults_price
                                }
                              </PriceRight>
                            </PriceRow>
                          )}
                          {priceAndSelectedRoomDetails?.allSelectedRooms[0]
                            ?.room_price?.child_price > 0 && (
                            <PriceRow>
                              <PriceLeft>Children price</PriceLeft>
                              <PriceRight>
                                ₹
                                {
                                  priceAndSelectedRoomDetails
                                    ?.allSelectedRooms[0]?.room_price
                                    ?.child_price
                                }
                              </PriceRight>
                            </PriceRow>
                          )}
                        </div>
                      </>
                    }
                    placement="right-start"
                    arrow
                  >
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                )}
                {/* <span style={{ fontStyle: "italic", opacity: "0.5" }}>
                  {searchParams?.room_count} Room X{" "}
                  {getNoOfNight(
                    searchParams?.from_date,
                    searchParams?.to_date
                  ) || 1}{" "}
                  Night X {searchParams?.no_of_adults} Guests{" "}
                </span> */}
              </PriceLeft>
              <PriceRight>
                ₹
                {priceAndSelectedRoomDetails?.allSelectedRooms[0]?.room_price
                  ?.price * searchParams?.room_count}
                {/* ₹{priceAndSelectedRoomDetails?.totalHotelSumBeforeDisCount} */}
              </PriceRight>
            </PriceRow>
            {priceAndSelectedRoomDetails?.allSelectedRooms[0]
              .room_price_date_wise.length > 1 ? (
              <PriceRow>
                <PriceLeft>
                  Room price for Date
                  <Tooltip
                    title={
                      <>
                        {priceAndSelectedRoomDetails?.allSelectedRooms[0]?.room_price_date_wise?.map(
                          (date) => {
                            return (
                              <PriceRow>
                                <PriceLeft>
                                  {date.start_date} to {date.end_date}
                                </PriceLeft>
                                <PriceRight>₹{date.price}</PriceRight>
                              </PriceRow>
                            );
                          }
                        )}
                      </>
                    }
                    placement="right-start"
                    arrow
                  >
                    <IconButton>
                      <InfoIcon />
                    </IconButton>
                  </Tooltip>
                </PriceLeft>
              </PriceRow>
            ) : null}
            {priceAndSelectedRoomDetails?.mendatoryRoomServiceArray ? (
              priceAndSelectedRoomDetails.mendatoryRoomServiceArray.map(
                (mendatoryRoomServiceObj) => {
                  return (
                    <PriceRow>
                      <PriceLeft>
                        {mendatoryRoomServiceObj.serviceName}{" "}
                        <span style={{ fontStyle: "italic", opacity: "0.5" }}>
                          {getNoOfNight(
                            searchParams?.from_date,
                            searchParams?.to_date
                          ) || 1}{" "}
                          Night
                        </span>
                      </PriceLeft>
                      <PriceRight>
                        +₹{mendatoryRoomServiceObj.grossAmount}
                      </PriceRight>
                    </PriceRow>
                  );
                }
              )
            ) : (
              <></>
            )}
            {priceAndSelectedRoomDetails?.discountArray ? (
              priceAndSelectedRoomDetails.discountArray.map((discountObj) => {
                if (discountObj.discountAmount > 0) {
                  return (
                    <PriceRow>
                      <PriceLeft>
                        <span>{discountObj.discountName}</span>{" "}
                        <span style={{ fontStyle: "italic", opacity: "0.5" }}>
                          Discount
                        </span>
                      </PriceLeft>
                      <PriceRight>
                        -₹{discountObj.discountAmount.toFixed(2)}
                      </PriceRight>
                    </PriceRow>
                  );
                }
              })
            ) : (
              <></>
            )}

            {/* {priceAndSelectedRoomDetails?.allSelectedRooms[0]?.no_of_adults >
              2 && ( */}
            {/* <PriceRow>
              <PriceLeft>Extra adult price</PriceLeft>
              <PriceRight>
                ₹
                {
                  priceAndSelectedRoomDetails?.allSelectedRooms[0]?.room_price
                    ?.extra_adults_price
                }
              </PriceRight>
            </PriceRow> */}
            {/* )} */}
            {/* {priceAndSelectedRoomDetails.allSelectedRooms[0].room_price
              .child_price && ( */}
            {/* <PriceRow>
              <PriceLeft>Children price</PriceLeft>
              <PriceRight>
                ₹
                {
                  priceAndSelectedRoomDetails?.allSelectedRooms[0]?.room_price
                    ?.child_price
                }
              </PriceRight>
            </PriceRow> */}
            {/* )} */}

            <PriceRow>
              <PriceLeft>Taxes & Service Fees</PriceLeft>
              <PriceRight>
                ₹{priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount}
              </PriceRight>
            </PriceRow>
          </RightPrice>
          <hr style={{ width: "90%", margin: "2rem auto" }} />
          <RightBottom>
            <BottomLeft>
              <Typography style={{ fontSize: "2rem" }}>
                Total Amount to be paid
              </Typography>
            </BottomLeft>
            <BottomRight>
              ₹
              {parseFloat(
                priceAndSelectedRoomDetails?.totalHotelSumAfterDisCount *
                  searchParams?.room_count
              ) + priceAndSelectedRoomDetails?.taxAndServiceObj?.totalTaxAmount}
            </BottomRight>
          </RightBottom>
          {buttonMsg !== "" ? (
            <Bottom
              style={{
                backgroundColor: "gray",
                color: "#fff",
                cursor: "pointer",
              }}
              disabled
            >
              {buttonMsg}
            </Bottom>
          ) : (
            <Bottom
              style={{
                backgroundColor: "#1ab64f",
                color: "#fff",
                cursor: "pointer",
              }}
              onClick={() => onBookNowClick()}
            >
              Continue to Book
            </Bottom>
          )}
          <Bottom>All staff vaccinated.</Bottom>
        </ContainerRight>
      </Container>
    );
  }
};
export default CardRight;
