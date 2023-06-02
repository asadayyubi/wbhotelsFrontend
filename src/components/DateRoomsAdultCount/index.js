import React, { useContext, useEffect, useState } from "react";
import DateRangePicker from "../DateRangePicker";
import { LoginContext } from "../../Contexts/LoginContext";
import { Typography } from "@mui/material";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import axios from "axios";
import { API_GET_HOTELS_BY_ID } from "../../apis";

const SearchHotels = (props) => {
  const {
    searchParams,
    setSearchParams,
    setrange,
    range,
    rooms,
    setrooms,
    hotelDetails,
    setHotelDetails,
    setSelectedRoom,
  } = useContext(LoginContext);
  const [calendarVisible, setcalendarVisible] = useState(false);
  const [roomsCardVisible, setroomsCardVisible] = useState(false);
  const { setRoomDetails } = props;
  function onSetRange(value) {
    const startDate = value.startDate;
    const endDate = value.endDate;
    searchParams.from_date = startDate;
    searchParams.to_date = endDate;
    // console.log("search params: ", searchParams);
    setSearchParams(searchParams);
    setrange(value);
    if (hotelDetails) {
      axios
        .post(API_GET_HOTELS_BY_ID, {
          id: hotelDetails?.hotel_data?.id,
          ...searchParams,
        })
        .then((response) => {
          console.log("getHotelById", response.data.data);
          setHotelDetails(response.data.data);
          setSelectedRoom(response.data.data?.rooms_info[0]?.roomtype);
        });
    }
  }
  function onClickOk() {
    onSetRange(range);
    if (hotelDetails) {
      axios
        .post(API_GET_HOTELS_BY_ID, {
          id: hotelDetails?.hotel_data?.id,
          ...searchParams,
        })
        .then((response) => {
          console.log("getHotelById", response.data.data);
          setHotelDetails(response.data.data);
          setSelectedRoom(response.data.data?.rooms_info[0]?.roomtype);
        });
    }
    setroomsCardVisible(!roomsCardVisible);
  }
  function onClickCancel() {
    setroomsCardVisible(!roomsCardVisible);
  }
  useEffect(() => {
    updateSearchParams(rooms, rooms.length);
  }, []);

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
          no_of_children: 0,
          child_range1: 0,
          child_range2: 0,
        },
      ]);
    updateSearchParams(
      [
        ...rooms,
        {
          roomNo: rooms.length + 1,
          personNo: 2,
          no_of_children: 0,
          child_range1: 0,
          child_range2: 0,
        },
      ],
      rooms.length + 1
    );
  }
  function onDeleteRoom() {
    rooms.length > 1 && setrooms(rooms.slice(0, -1));
    updateSearchParams(rooms.slice(0, -1), rooms.length - 1);
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
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
      deleteChild1(item, i);
    }
  }
  function deleteChild1(item, i) {
    const roomsCopy = [...rooms];

    if (roomsCopy[i].child_range1 > 0) {
      roomsCopy[i].child_range1 = roomsCopy[i].child_range1 - 1;
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
    }
  }
  function deleteChild2(item, i) {
    const roomsCopy = [...rooms];

    if (roomsCopy[i].child_range2 > 0) {
      roomsCopy[i].child_range2 = roomsCopy[i].child_range2 - 1;
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
    }
  }
  function addPerson(item, i) {
    const roomsCopy = [...rooms];
    roomsCopy[i].personNo = roomsCopy[i].personNo + 1;
    // console.log(roomsCopy);
    // console.log("consoling rooms here -- > ", rooms);
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
  function deletePerson(item, i) {
    const roomsCopy = [...rooms];

    if (roomsCopy[i].personNo > 1) {
      roomsCopy[i].personNo = roomsCopy[i].personNo - 1;
      setrooms(roomsCopy);
      updateSearchParams(roomsCopy, roomsCopy.length);
    }
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
    searchParams.room_info = room_info;
    // console.log("search params: ", searchParams);
    setSearchParams(searchParams);
  }

  function getPersonNo(roomCopy) {
    let totalPerson = {
      no_of_adults: 0,
      no_of_children: 0,
    };
    let personNo = 0;
    if (roomCopy && roomCopy.length) {
      roomCopy.forEach((item) => {
        // console.log("===checking for numbers", item);
        personNo = personNo + item.personNo;
        totalPerson.no_of_adults = personNo;
        totalPerson.no_of_children =
          totalPerson.no_of_children + item.no_of_children;
        // totalPerson.no_of_children = item.child_range1 + item.child_range2;
        // totalPerson.no_of_adults = totalPerson.no_of_adults + item.personNo;
        // personNo = personNo + item.personNo + item.child_range1 + item.child_range2;
      });
      return totalPerson;
      // return personNo;
    }
    rooms.forEach((item) => {
      // console.log("===bad number check", item);
      personNo = personNo + item.personNo;
      totalPerson.no_of_children =
        totalPerson.no_of_children + item.no_of_children;
      totalPerson.no_of_adults = totalPerson.no_of_adults + item.personNo;
      // totalPerson.no_of_children = item.no_of_children;
    });
    return totalPerson;
    // return personNo;
  }
  return (
    <div className="search-hotels">
      <div className="date">
        <div
          className="date-btn"
          onClick={() => setcalendarVisible(!calendarVisible)}
        >
          <h3>
            <span>
              <CalendarMonthOutlinedIcon style={{ marginRight: "1rem" }} />
            </span>
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
          <div className="rooms-card" style={{ left: 0 }}>
            <div className="header">
              <h3>Rooms</h3>
              <h3>Guests</h3>
            </div>
            {rooms.map((item, i) => (
              <>
                {/* <div key={item.roomNo} className="details">
                  <p>Room {item.roomNo}</p>
                  <div className="actions">
                    <div className="btn" onClick={() => deletePerson(item, i)}>
                      -
                    </div>
                    <p className="no">{item.personNo}</p>
                    <div className="btn" onClick={() => addPerson(item, i)}>
                      +
                    </div>
                  </div>
                </div>
                <div key={item.roomNo + 1} className="details">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>Children</p>
                    <p style={{ fontSize: "x-small", opacity: "0.7" }}>
                      {"(Age 12 years & below)"}
                    </p>
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
                    <div className="btn" onClick={() => addTotalChild(item, i)}>
                      +
                    </div>
                  </div>
                </div>
                <div key={item.roomNo + 1} className="details">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>Younger Children</p>
                    <p style={{ fontSize: "x-small", opacity: "0.7" }}>
                      {"(Age:- upto 6 years)"}
                    </p>
                  </div>
                  <div className="actions">
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
                  </div>
                </div>
                <div key={item.roomNo + 1} className="details">
                  <div style={{ display: "flex", flexDirection: "column" }}>
                    <p>Older Children</p>
                    <p style={{ fontSize: "x-small", opacity: "0.7" }}>
                      {"(Age:- 7 - 12 years)"}
                    </p>
                  </div>
                  <div className="actions">
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
            <br />
            <div className="room-actions">
              <div
                className={`btn ${rooms.length === 1 ? "btn-disabled" : ""}`}
                onClick={() => onClickCancel()}
              >
                Cancle
              </div>
              <div
                className={`btn ${rooms.length === 5 ? "btn-disabled" : ""}`}
                onClick={() => onClickOk()}
              >
                Ok
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SearchHotels;
