import React, { useContext, useEffect, useState } from "react";
import CarouselPrimary from "../../components/carousel/CarouselPrimary";
import ShareIcon from "@mui/icons-material/Share";
import CollectionsIcon from "@mui/icons-material/Collections";
import StarIcon from "@mui/icons-material/Star";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import CardRightNew from "../../components/CardRightNew";
import { useLocation } from "react-router-dom";
import Button from "@mui/material/Button";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import CardPrimary from "../../components/card/CardPrimary";
import Rating from "@mui/material/Rating";
import { getRoomPriceBreaks, getNoOfNight } from "../../utils";
import { LoginContext } from "../../Contexts/LoginContext";
import axios from "axios";
import { API_GET_HOTELS_BY_ID } from "../../apis/index";
import LoaderPrimary from "../../layout/Loader/LoaderPrimary";
import { useBookingData } from "../../Contexts/BookingContext";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookIcon from "@mui/icons-material/Facebook";
import EmailIcon from "@mui/icons-material/Email";
import "./dabba.css";
import WifiTwoToneIcon from "@mui/icons-material/WifiTwoTone";
import airCondition from "../../media/images/air-conditioner.png";
const handleWhatsAppShare = () => {
  const currentUrl = encodeURIComponent(window.location.href);
  const message = `Check out this page: ${currentUrl}`;
  const url = `https://api.whatsapp.com/send?text=${message}`;
  window.open(url, "_blank");
};

const handleFacebookShare = () => {
  const currentUrl = encodeURIComponent(window.location.href);
  const url = `https://www.facebook.com/sharer/sharer.php?u=${currentUrl}`;
  window.open(url, "_blank");
};

const handleEmailShare = () => {
  const currentUrl = encodeURIComponent(window.location.href);
  const subject = "Check out this page";
  const body = `I thought you might be interested in this page: ${currentUrl}`;
  const url = `mailto:?subject=${subject}&body=${body}`;
  window.location.href = url;
};

const HotelPage = () => {
  const location = useLocation();
  const { searchParams, hotelDetails, setHotelDetails } =
    useContext(LoginContext);
  const { setPriceAndRoomDetails } = useBookingData();
  // console.log("..location...", location?.state?.data);
  const [showdabba, setShowdabba] = useState(false);
  useEffect(() => {
    setHotelDetails(undefined);
    const queryParams = new URLSearchParams(window.location.search);
    const id = queryParams.get("id");
    axios
      .post(API_GET_HOTELS_BY_ID, { id: Number(id), ...searchParams })
      .then((response) => {
        // console.log("getHotelById", response.data.data);
        setHotelDetails(response.data.data);
        setSelectedRoom(response.data.data?.rooms_info[0]?.roomtype);
      });
  }, [window.location.search]);
  // console.log("hotelDeatils: ", hotelDetails);
  const [roomsDetails, setRoomsDetails] = useState({});
  const [selectedRoom, setSelectedRoom] = useState("");
  const [buttonMsg, setButtonMsg] = useState("");

  const onRoomSelected = function (
    roomsDetailsArray,
    priceAndSelectedRoomDetails,
    selectedRoomInfo
  ) {
    // setRoomsDetails({
    //   rooms: roomsDetailsArray,
    //   priceAndSelectedRoomDetails,
    //   selectedRoomInfo
    // })
    roomsDetails.rooms = roomsDetailsArray;
    roomsDetails.priceAndSelectedRoomDetails = priceAndSelectedRoomDetails;
    roomsDetails.selectedRoomInfo = selectedRoomInfo;
    setRoomsDetails(roomsDetails);
  };

  function onSelectButtonClick(
    rooms,
    selectedRoomType,
    selectedRoomInfo,
    mendatoryRoomService,
    onRoomSelected,
    buttonMsg
  ) {
    const priceAndSelectedRoomDetails = getRoomPriceBreaks(
      getNoOfNight(searchParams?.from_date, searchParams?.to_date) || 1,
      rooms,
      mendatoryRoomService,
      hotelDetails
    );
    onRoomSelected(rooms, priceAndSelectedRoomDetails, selectedRoomInfo);
    setSelectedRoom(selectedRoomType);
    setButtonMsg(buttonMsg);
  }
  const ButtonType = (props) => {
    const {
      selectedRoom,
      roomInfo,
      mandatory_room_service,
      rooms,
      onRoomSelected,
    } = props;
    // console.log(props);
    if (roomInfo.occupancy_room_count === 0) {
      return (
        <Button
          variant="outlined"
          onClick={onSelectButtonClick(
            rooms,
            roomInfo?.roomtype,
            roomInfo,
            mandatory_room_service,
            onRoomSelected,
            "Low Occupency"
          )}
          disabled
        >
          Low Occupency
        </Button>
      );
    }
    if (roomInfo.avilable_room_count === 0) {
      return (
        <Button
          variant="outlined"
          onClick={onSelectButtonClick(
            rooms,
            roomInfo?.roomtype,
            roomInfo,
            mandatory_room_service,
            onRoomSelected,
            "SoldOut"
          )}
          disabled
        >
          Sold Out
        </Button>
      );
    }
    if (selectedRoom === roomInfo.roomtype) {
      if (roomInfo.occupancy_room_count > 0) {
        return (
          <Button
            variant="outlined"
            onClick={onSelectButtonClick(
              rooms,
              roomInfo?.roomtype,
              roomInfo,
              mandatory_room_service,
              onRoomSelected,
              ""
            )}
            startIcon={<CheckCircleOutlineIcon color="success" />}
          >
            Selected
          </Button>
        );
      }
    } else {
      return (
        <Button
          variant="outlined"
          onClick={() =>
            onSelectButtonClick(
              rooms,
              roomInfo?.roomtype,
              roomInfo,
              mandatory_room_service,
              onRoomSelected,
              ""
            )
          }
        >
          Select
        </Button>
      );
    }
  };
  const RoomInfo = function (props) {
    const { roomsInfo, onRoomSelected } = props;
    if (roomsInfo && roomsInfo.length) {
      return (
        <div className="choose">
          <h1>Choose your room</h1>
          {roomsInfo.map((roomInfo) => {
            const { rooms, mandatory_room_service } = roomInfo;
            return (
              <div className="choose-container">
                <div className="content">
                  <div className="content-left">
                    <h2>{roomInfo.roomtype}</h2>
                    <p className="specification">
                      {"Saver: Spaces with functional amenities"}
                    </p>
                    <div className="amenities">
                      <div className="grid">
                        <div className="amenity">
                          <div className="img">
                            {/* <img
                              src="https://cdn-icons-png.flaticon.com/512/5569/5569304.png"
                              alt="amenities"
                            /> */}
                            <WifiTwoToneIcon
                              style={{
                                color: "blue",
                                fontSize: "20px",
                                marginTop: "5px",
                                marginLeft: "3px",
                              }}
                            />
                          </div>
                          <p>{"WiFi"}</p>
                        </div>
                        <div className="amenity">
                          <div className="img">
                            <img src={airCondition} alt="amenities" />
                          </div>
                          <p>{"AC"}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="content-right1">
                    <img
                      className="image"
                      src={
                        roomInfo?.rooms_types_gallery[0]?.file ||
                        "http://ratebotai.com/python_assets/pic3.jpeg"
                      }
                      alt={"hotels"}
                    ></img>
                  </div>
                </div>
                <div className="content">
                  <div className="content-left">
                    <h1>
                      {" "}
                      ₹{rooms.length ? rooms[0].room_price.price : "2000"}{" "}
                      <span>
                        {rooms.length
                          ? rooms[0].room_price.minimumprice
                          : "4000"}
                      </span>{" "}
                    </h1>
                  </div>
                  <div className="content-right2">
                    <ButtonType
                      selectedRoom={selectedRoom}
                      roomInfo={roomInfo}
                      mandatory_room_service={mandatory_room_service}
                      rooms={rooms}
                      onRoomSelected={onRoomSelected}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  if (hotelDetails) {
    const { hotel_data, related_hotel_data, rooms_info } = hotelDetails;
    // console.log("..hotel-data..", hotel_data);
    return (
      <div className="hotel-page">
        <CarouselPrimary carouselId="123">
          <>
            <div
              className="carousel-btn share"
              onClick={() => setShowdabba(!showdabba)}
            >
              <ShareIcon />
              <p>Share</p>
            </div>
            <div
              className={`dabba ${showdabba ? "hide-dabba" : "display-dabba"}`}
            >
              <div style={{ display: "flex" }}>
                <p>
                  <WhatsAppIcon
                    onClick={handleWhatsAppShare}
                    style={{
                      fontSize: "40px",
                      paddingTop: "8px",
                      paddingLeft: "10px",
                    }}
                  />
                </p>
                <div
                  style={{
                    fontSize: "16px",
                    paddingTop: "14px",
                    paddingLeft: "10px",
                  }}
                >
                  WhatsApp
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <p>
                  <FacebookIcon
                    onClick={handleFacebookShare}
                    style={{
                      fontSize: "40px",
                      paddingTop: "8px",
                      paddingLeft: "10px",
                    }}
                  />
                </p>
                <div
                  style={{
                    fontSize: "16px",
                    paddingTop: "14px",
                    paddingLeft: "10px",
                  }}
                >
                  Facebook
                </div>
              </div>
              <div style={{ display: "flex" }}>
                <p>
                  <EmailIcon
                    onClick={handleEmailShare}
                    style={{
                      fontSize: "40px",
                      paddingTop: "8px",
                      paddingLeft: "10px",
                    }}
                  />
                </p>
                <div
                  style={{
                    fontSize: "16px",
                    paddingTop: "14px",
                    paddingLeft: "10px",
                  }}
                >
                  E-mail
                </div>
              </div>
            </div>
            {hotel_data?.hotel_gallery.map((hotel) => {
              return (
                <div className="img">
                  <img src={hotel.file} alt={hotel.label} />
                </div>
              );
            })}
            <div className="carousel-btn view-all-photos">
              <CollectionsIcon />
              <p>View all photos</p>
            </div>
          </>
        </CarouselPrimary>
        <div className="hotel-page-content">
          <div className="left-hotel-page">
            <div className="hotel-name">
              <div className="title">
                <h1 className="hotel-title">{hotel_data?.hotelname}</h1>
                <p>{hotel_data.hoteldescription}</p>
              </div>
              <div className="ratings">
                {hotel_data.rating_json.rating > 0 ? (
                  <div className="badge">
                    <StarIcon />
                    <p>{hotel_data.rating_json.rating}</p>
                  </div>
                ) : null}
                {hotel_data?.hotel_star > 1 ? (
                  <Rating
                    name="size-large"
                    size="large"
                    value={hotel_data?.hotel_star}
                    readOnly
                  />
                ) : null}
              </div>
            </div>
            <div className="check-in">
              <p className="mr-1">{hotel_data.rating_json.rating}</p>
              <StarIcon />
              <p className="mr-1">Check-in rating</p>
              <ArrowForwardIosIcon />
              <p>{hotel_data.rating_json.rating_in_words}</p>
            </div>
            <div className="amenities">
              <h1>Amenities</h1>
              <div className="grid">
                {hotel_data.amenities.map((amenity) => {
                  return (
                    <div className="amenity">
                      <div className="img">
                        <img src={amenity.file} alt="amenities" />
                      </div>
                      <p>{amenity.lable}</p>
                    </div>
                  );
                })}
              </div>
            </div>
            {
              <RoomInfo
                roomsInfo={rooms_info}
                onRoomSelected={onRoomSelected}
              />
            }
            <div className="rating">
              <h1>Ratings and reviews</h1>
              <div className="rating-container">
                <div className="left-rating">
                  <Button
                    variant="contained"
                    color="success"
                    endIcon={<StarIcon />}
                  >
                    {hotel_data.rating_json.rating}
                  </Button>
                  <p className="rating-words">
                    {hotel_data.rating_json.rating_in_words}
                  </p>
                  <p className="ratings-count">
                    {hotel_data.rating_json.no_of_people_gave_this_rating}{" "}
                    ratings
                  </p>
                </div>
                <div className="right-rating">
                  {hotel_data.rating_json.types_of_rating.map((rating) => {
                    return (
                      <div className="rating-with-label">
                        <Rating
                          name="size-large"
                          defaultValue={2}
                          value={rating.rating}
                          size="large"
                          readOnly
                        />
                        <p>{rating.type}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            <div className="policy">
              <h1>Hotel policies</h1>
              <div className="policy-container">
                <div className="checkin">
                  <div>
                    <p>Check In</p>
                    <p>
                      <strong>{hotel_data.checkintime}</strong>
                    </p>
                  </div>
                  <div>
                    <p>Check Out</p>
                    <p>
                      <strong>{hotel_data.checkouttime}</strong>
                    </p>
                  </div>
                </div>
                <div className="description">
                  <List
                    sx={{ width: "100%", m: 0.1, fontSize: 14 }}
                    aria-label="contacts"
                  >
                    {hotel_data.privacypolicy.map((policy) => {
                      return (
                        <ListItem disablePadding>
                          <ListItemButton>
                            <ListItemIcon>
                              <FiberManualRecordIcon />
                            </ListItemIcon>
                            <ListItemText primary={policy.policy} />
                          </ListItemButton>
                        </ListItem>
                      );
                    })}
                  </List>
                  <h3>
                    <a href="/guest-policy">View Guest Policy</a>
                    {/* <Link to= "/guest-policy">View Guest Policy</Link> */}
                  </h3>
                </div>
              </div>
            </div>
            <div className="similar">
              <h1>Similar WBs</h1>
              <div className="similar-room-container">
                {related_hotel_data.map((hotel_data) => {
                  // console.log(hotel_data);
                  return (
                    <div className="room">
                      <CardPrimary key={hotel_data.id} data={hotel_data} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="right-hotel-page">
            <CardRightNew
              hotelData={hotel_data}
              roomsDetails={roomsDetails}
              setRoomsDetails={setRoomsDetails}
              buttonMsg={buttonMsg}
            />
          </div>
        </div>
      </div>
    );
  } else {
    return <LoaderPrimary />;
  }
};

export default HotelPage;
