import React, { useContext, useEffect, useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangePicker from "../DateRangePicker";
import { Link, useNavigate } from "react-router-dom";
import AutoSearch from "../AutoSearch";
import { LoginContext } from "../../Contexts/LoginContext";
import axios from "axios";
import { autocompleteClasses, Button, TextField } from "@mui/material";
import { API_GET_HOTELS_BY_LOCATION } from "../../apis";

const searchListData = [
  {
    id: "1",
    name: "Search result 1",
  },
  {
    id: "2",
    name: "Search result 2",
  },
  {
    id: "3",
    name: "Search result 3",
  },
  {
    id: "4",
    name: "Search result 4",
  },
  {
    id: "5",
    name: "Search result 5",
  },
  {
    id: "6",
    name: "Search result 6",
  },
  {
    id: "7",
    name: "Search result 7",
  },
  {
    id: "8",
    name: "Search result 8",
  },
  {
    id: "9",
    name: "Search result 9",
  },
  {
    id: "10",
    name: "Search result 10",
  },
];
const options = {
  types: ["restaurant", "cafe", "food", "locality", "neighborhood"],
};
const apiKey = "AIzaSyBPsL0YubbTmSDuPDksHgNpJDl2m95bFbg";

const SearchHotels = (props) => {
  const {
    userProfileDetails,
    searchResults,
    setSearchResults,
    searchParams,
    setSearchParams,
    setrange,
    range,
    rooms,
    setrooms,
    setAutoCompleteSelectedValue,
  } = useContext(LoginContext);
  const navigate = useNavigate();
  const [search, setsearch] = useState("");
  const [searchList, setsearchList] = useState(searchListData);
  const [calendarVisible, setcalendarVisible] = useState(false);
  const [roomsCardVisible, setroomsCardVisible] = useState(false);
  const [no_of_children, setNoOfChild] = useState(0);
  const [child_range1, setChildRange1] = useState(0);
  const [child_range2, setChildRange2] = useState(0);

  function onSuggestionSlected(place, selectedValueInString, lat_Lng) {
    if (place) {
      searchParams.latitude = lat_Lng?.lat;
      searchParams.longitude = lat_Lng?.lng;
      searchParams.search_text = selectedValueInString;
      setSearchParams(searchParams);
      setAutoCompleteSelectedValue(selectedValueInString);
    } else if (selectedValueInString) {
      searchParams.latitude = 0;
      searchParams.longitude = 0;
      searchParams.search_text = selectedValueInString;
      setSearchParams(searchParams);
      setAutoCompleteSelectedValue(selectedValueInString);
    }
  }
  function OnNearMeClick() {
    navigator.geolocation.getCurrentPosition(function (position) {
      // console.log(position);
      // console.log(searchParams);
      searchParams.latitude = position.coords.latitude;
      searchParams.longitude = position.coords.longitude;
      searchParams.search_text = "";
      const url = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${position.coords.latitude},${position.coords.longitude}&sensor=true&key=${apiKey}`;
      // console.log(url);
      axios.get(url).then((response) => {
        // console.log(response);
        const locationName = response?.data?.results[0]?.formatted_address;
        setAutoCompleteSelectedValue(locationName);
      });
      setSearchParams(searchParams);
      axios.post(API_GET_HOTELS_BY_LOCATION, searchParams).then((response) => {
        setSearchResults(response.data.data);
      });
      navigate("/search");
      // console.log(searchParams);
    });
    // navigate("/search");
  }
  function onSetRange(value) {
    const startDate = value.startDate;
    const endDate = value.endDate;
    searchParams.from_date = startDate;
    searchParams.to_date = endDate;
    // console.log("search params onSetRange: ", searchParams);
    setSearchParams(searchParams);
    setrange(value);
  }
  useEffect(() => {
    updateSearchParams(rooms, rooms.length);
    function onScroll() {
      setsearchList([]);
    }
    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    if (search) {
      setsearchList(searchListData);
    } else {
      setsearchList([]);
    }
  }, [search]);

  useEffect(() => {
    if (calendarVisible || roomsCardVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [calendarVisible, roomsCardVisible]);

  function onAddRoom() {
    rooms.length < 5 &&
      setrooms([
        ...rooms,
        {
          roomNo: rooms.length + 1,
          personNo: 2,
          no_of_children: no_of_children,
          child_range1: child_range1,
          child_range2: child_range2,
        },
      ]);
    updateSearchParams(
      [
        ...rooms,
        {
          roomNo: rooms.length + 1,
          personNo: 2,
          no_of_children: no_of_children,
          child_range1: child_range1,
          child_range2: child_range2,
        },
      ],
      rooms.length + 1
    );
  }
  function onDeleteRoom() {
    rooms.length > 1 && setrooms(rooms.slice(0, -1));
    updateSearchParams(rooms.slice(0, -1), rooms.length - 1);
  }
  function addPerson(item, i) {
    const roomsCopy = [...rooms];
    roomsCopy[i].personNo = roomsCopy[i].personNo + 1;
    // console.log(roomsCopy);
    setrooms(roomsCopy);
    updateSearchParams(roomsCopy, roomsCopy.length);
  }
  function addTotalChild(item, i) {
    const roomsCopy = [...rooms];
    roomsCopy[i].no_of_children = roomsCopy[i].no_of_children + 1;
    // console.log(roomsCopy);
    setrooms(roomsCopy);
    updateSearchParams(roomsCopy, roomsCopy.length);
    addChild1(item, i);
  }
  function addChild1(item, i) {
    const roomsCopy = [...rooms];
    roomsCopy[i].child_range1 = roomsCopy[i].child_range1 + 1;
    // console.log(roomsCopy);
    setrooms(roomsCopy);
    updateSearchParams(roomsCopy, roomsCopy.length);
  }
  function addChild2(item, i) {
    const roomsCopy = [...rooms];
    roomsCopy[i].child_range2 = roomsCopy[i].child_range2 + 1;
    // console.log(roomsCopy);
    setrooms(roomsCopy);
    updateSearchParams(roomsCopy, roomsCopy.length);
  }
  function deletePerson(item, i) {
    const roomsCopy = [...rooms];

    if (roomsCopy[i].personNo > 1) {
      roomsCopy[i].personNo = roomsCopy[i].personNo - 1;
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
    }
  }
  function deleteTotalChild(item, i) {
    const roomsCopy = [...rooms];

    if (roomsCopy[i].no_of_children > 0) {
      roomsCopy[i].no_of_children = roomsCopy[i].no_of_children - 1;
      roomsCopy[i].child_range2 > 0
        ? deleteChild2(item, i)
        : deleteChild1(item, i);
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
    }
  }
  function deleteChild1(item, i) {
    const roomsCopy = [...rooms];

    if (roomsCopy[i].child_range1 > 0) {
      roomsCopy[i].child_range1 = roomsCopy[i].child_range1 - 1;
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
    }
    // roomsCopy[i].no_of_children > roomsCopy[i].child_range2
    //   ? deleteChild1(item, i) :
    // addChild2(item, i);
  }
  function deleteChild2(item, i) {
    const roomsCopy = [...rooms];
    if (roomsCopy[i].child_range2 > 0) {
      roomsCopy[i].child_range2 = roomsCopy[i].child_range2 - 1;
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
    }
    // addChild1(item, i);
  }
  function updateSearchParams(roomCopy, roomLength) {
    const room_info = [];
    roomCopy.forEach((roomInfo) => {
      const obj = {
        no_of_adults: roomInfo.personNo,
        no_of_children: roomInfo.no_of_children,
        child_range1: roomInfo.child_range1,
        child_range2: roomInfo.child_range2,
      };
      room_info.push(obj);
    });
    const totalRoom = roomLength;
    const totalPerson = getPersonNo(roomCopy);
    searchParams.room_count = totalRoom;
    searchParams.no_of_adults = totalPerson.no_of_adults;
    searchParams.no_of_children = totalPerson.no_of_children;
    // searchParams.no_of_adults = totalPerson;
    searchParams.room_info = room_info;
    // console.log("search params: ", searchParams);
    setSearchParams(searchParams);
  }

  function getPersonNo(roomCopy) {
    const totalPerson = {
      no_of_adults: 0,
      no_of_children: 0,
    };
    let personNo = 0;
    if (roomCopy && roomCopy.length) {
      roomCopy.forEach((item) => {
        // personNo = personNo + item.personNo;
        personNo = personNo + item.personNo;
        totalPerson.no_of_adults = personNo;
        totalPerson.no_of_children =
          totalPerson.no_of_children + item.no_of_children;
        // totalPerson.no_of_children = item.child_range1 + item.child_range2;
      });
      // console.log("total persons -----> ", totalPerson);
      return totalPerson;
      // return personNo;
    }
    rooms.forEach((item) => {
      // personNo = personNo + item.personNo;
      personNo = personNo + item.personNo;
      totalPerson.no_of_children =
        totalPerson.no_of_children + item.no_of_children;
      totalPerson.no_of_adults = totalPerson.no_of_adults + item.personNo;
    });

    return totalPerson;
    // return personNo;
  }
  function onSearchClick() {
    if (userProfileDetails && userProfileDetails.id) {
      searchParams.customer_id = userProfileDetails.id;
      setSearchParams(searchParams);
    }
    setSearchResults(undefined);
    axios.post(API_GET_HOTELS_BY_LOCATION, searchParams).then((response) => {
      setSearchResults(response.data.data);
    });
    navigate("/search");
  }
  return (
    <div className="search-hotels">
      <div className="input">
        <AutoSearch onPlaceSelected={onSuggestionSlected} />
        <div className="near-me" onClick={() => OnNearMeClick()}>
          <LocationOnIcon />
          <p>Near me</p>
        </div>
      </div>
      <div className="date">
        <div
          className="date-btn"
          onClick={() => setcalendarVisible(!calendarVisible)}
        >
          <h3>
            {range.startDate
              .toLocaleDateString("default", { weekday: "long" })
              .slice(0, 3)}{" "}
            {range.startDate.getDate()}{" "}
            {range.startDate
              .toLocaleString("default", { month: "long" })
              .slice(0, 3)}{" "}
            -{" "}
            {range.endDate
              .toLocaleDateString("default", { weekday: "long" })
              .slice(0, 3)}{" "}
            {range.endDate.getDate()}{" "}
            {range.endDate
              .toLocaleString("default", { month: "long" })
              .slice(0, 3)}
          </h3>
        </div>
        {calendarVisible && (
          <div className="bg-tr" onClick={() => setcalendarVisible(false)} />
        )}

        {calendarVisible && (
          <div className="calendar-range">
            <DateRangePicker value={range} setvalue={onSetRange} />
          </div>
        )}
      </div>
      <div className="rooms">
        <div
          className="rooms-btn"
          onClick={() => setroomsCardVisible(!roomsCardVisible)}
        >
          <h3>
            {rooms.length} room,{" "}
            {getPersonNo(rooms).no_of_adults +
              getPersonNo(rooms).no_of_children}{" "}
            guests
          </h3>
        </div>
        {roomsCardVisible && (
          <div className="bg-tr" onClick={() => setroomsCardVisible(false)} />
        )}

        {roomsCardVisible && (
          <div className="rooms-card">
            <div className="header">
              <h3>Rooms</h3>
              <h3>Guests</h3>
            </div>
            {rooms.map((item, i) => (
              <>
                <div key={item.roomNo} className="details">
                  {/* {console.log("item", item)} */}
                  <p>Room {item.roomNo}</p>
                  <div className="actions">
                    <div className="btn" onClick={() => deletePerson(item, i)}>
                      -
                    </div>
                    <p className="no">{item.personNo}</p>
                    <div
                      className="btn"
                      onClick={() => {
                        if (item.personNo < 4) addPerson(item, i);
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div key={item.roomNo + 1} className="details">
                  <div className="child_div">
                    <p>Children</p>
                    <p className="child_age">{"(Age 12 years & below)"}</p>
                  </div>
                  <div className="actions">
                    <div
                      className="btn"
                      onClick={() => {
                        if (item.no_of_children > 0) {
                          deleteTotalChild(item, i);
                        }
                      }}
                    >
                      -
                    </div>
                    <p className="no">{item.no_of_children}</p>
                    <div
                      className="btn"
                      onClick={() => {
                        if (item.no_of_children < 4) addTotalChild(item, i);
                      }}
                    >
                      +
                    </div>
                  </div>
                </div>
                <div key={item.roomNo + 1} className="details">
                  <div className="child_div">
                    <p>Younger Children</p>
                    <p className="child_age">{"(Age:- 0 - 6 years)"}</p>
                    <div className="actions">
                      <div
                        className="btn"
                        onClick={() => {
                          if (item.child_range1 > 0) {
                            deleteChild1(item, i);
                            addChild2(item, i);
                          }
                        }}
                      >
                        -
                      </div>
                      <p className="no">{item.child_range1}</p>
                      <div
                        className="btn"
                        onClick={() => {
                          if (
                            item.child_range2 > 0
                            // item.child_range1 + item.child_range2 <
                            // item.no_of_children
                          ) {
                            addChild1(item, i);
                            deleteChild2(item, i);
                          }
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  <div className="child_div">
                    <p>Older Children</p>
                    <p className="child_age">{"(Age:- 7 - 12 years)"}</p>
                    <div className="actions">
                      <div
                        className="btn"
                        onClick={() => {
                          if (item.child_range2 > 0) {
                            deleteChild2(item, i);
                            addChild1(item, i);
                          }
                        }}
                      >
                        -
                      </div>
                      <p className="no">{item.child_range2}</p>
                      <div
                        className="btn"
                        onClick={() => {
                          if (
                            item.child_range1 > 0
                            // item.child_range1 + item.child_range2 <
                            // item.no_of_children
                          ) {
                            addChild2(item, i);
                            deleteChild1(item, i);
                          }
                        }}
                      >
                        +
                      </div>
                    </div>
                  </div>
                  {/* <div className="actions">
                    <div
                      className="btn"
                      onClick={() => {
                        if (item.child_range1 > 0) {
                          deleteChild1(item, i);
                        }
                      }}
                    >
                      -
                    </div>
                    <p className="no">{item.child_range1}</p>
                    <div
                      className="btn"
                      onClick={() => {
                        if (
                          item.child_range1 + item.child_range2 <
                          item.no_of_children
                        ) {
                          addChild1(item, i);
                        }
                      }}
                    >
                      +
                    </div>
                  </div> */}
                  {/* </div>
                <div key={item.roomNo + 1} className="details"> */}
                  {/* <div className="child_div">
                    <p>Older Children</p>
                    <p className="child_age">{"(Age:- 7 - 12 years)"}</p>
                  </div> */}
                  {/* <div className="actions">
                    <div
                      className="btn"
                      onClick={() => {
                        if (item.child_range2 > 0) {
                          deleteChild2(item, i);
                        }
                      }}
                    >
                      -
                    </div>
                    <p className="no">{item.child_range2}</p>
                    <div
                      className="btn"
                      onClick={() => {
                        if (
                          item.child_range1 + item.child_range2 <
                          item.no_of_children
                        ) {
                          addChild2(item, i);
                        }
                      }}
                    >
                      +
                    </div>
                  </div> */}
                </div>
                <hr />
              </>
            ))}

            <div className="room-actions">
              <div
                className={`btn ${rooms.length === 1 ? "btn-disabled" : ""}`}
                onClick={onDeleteRoom}
              >
                Delete room
              </div>
              <div
                className={`btn ${rooms.length === 5 ? "btn-disabled" : ""}`}
                onClick={onAddRoom}
              >
                Add room
              </div>
            </div>
          </div>
        )}
      </div>
      <Button className="btn" onClick={() => onSearchClick()}>
        Book Now
      </Button>
      {/* <Link className="btn" to="/search">
        <p>Search</p>
      </Link> */}
    </div>
  );
};

export default SearchHotels;
