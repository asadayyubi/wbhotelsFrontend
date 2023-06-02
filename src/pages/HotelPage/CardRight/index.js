import React, { useState } from "react";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import DateRangePicker from "../../../components/DateRangePicker";
import EditIcon from "@mui/icons-material/Edit";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardRight = () => {
  const [calendarVisible, setcalendarVisible] = useState(false);
  const [roomsCardVisible, setroomsCardVisible] = useState(false);
  const [rooms, setrooms] = useState([
    {
      roomNo: 1,
      personNo: 2,
      no_of_children: 0,
      child_range1: 0,
      child_range2: 0,
    },
  ]);
  const [range, setrange] = useState({
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  });

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
  }
  function onDeleteRoom() {
    rooms.length > 1 && setrooms(rooms.slice(0, -1));
  }
  function addPerson(item, i) {
    const roomsCopy = [...rooms];
    roomsCopy[i].personNo = roomsCopy[i].personNo + 1;
    setrooms(roomsCopy);
  }
  function deletePerson(item, i) {
    const roomsCopy = [...rooms];

    if (roomsCopy[i].personNo > 1) {
      roomsCopy[i].personNo = roomsCopy[i].personNo - 1;
      setrooms(roomsCopy);
    }
  }

  function getPersonNo() {
    let personNo = 0;
    rooms.forEach((item) => {
      personNo = personNo + item.personNo;
    });

    return personNo;
  }
  return (
    <div className="card-book">
      <div className="header">
        <div className="offer">
          <LocalOfferIcon />
          <p>LOG IN NOW TO GET EXCLUSIVE DEALS</p>
        </div>
        <div className="btn">LOGIN</div>
      </div>
      <div className="price">
        <h1>₹704</h1>
        <h1>₹1677</h1>
        <h3>58% off</h3>
      </div>
      <div className="taxes">inclusive of all taxes</div>
      <div className="filter">
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
              <DateRangePicker value={range} setvalue={setrange} />
            </div>
          )}
        </div>
        <div className="rooms">
          <div
            className="rooms-btn"
            onClick={() => setroomsCardVisible(!roomsCardVisible)}
          >
            <h3>
          {rooms.length} room, {getPersonNo()} guests
            </h3>
          </div>
          {roomsCardVisible && (
            <div className="bg-tr" onClick={() => setroomsCardVisible(false)} />
          )}

          {roomsCardVisible && (
            <div className="rooms-card">
              <div className="header-rooms">
                <h3>Rooms</h3>
                <h3>Guests</h3>
              </div>
              {rooms.map((item, i) => (
                <div key={item.roomNo} className="details-room">
                  <p>Room {item.roomNo}</p>
                  <div className="actions-room">
                    <div
                      className="btn-room"
                      onClick={() => deletePerson(item, i)}
                    >
                      -
                    </div>
                    <p className="no">{item.personNo}</p>
                    <div
                      className="btn-room"
                      onClick={() => addPerson(item, i)}
                    >
                      +
                    </div>
                  </div>
                </div>
              ))}
              <div className="room-actions">
                <div
                  className={`btn-room-actions ${
                    rooms.length === 1 ? "btn-disabled" : ""
                  }`}
                  onClick={onDeleteRoom}
                >
                  Delete room
                </div>
                <div
                  className={`btn-room-actions ${
                    rooms.length === 5 ? "btn-disabled" : ""
                  }`}
                  onClick={onAddRoom}
                >
                  Add room
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="room-type">
        <div className="details">
          <ArrowForwardIosIcon />
          <p>Classic</p>
        </div>
        <EditIcon />
      </div>

      <div className="coupon">
        <div className="details">
          <LocalOfferIcon />
          <p>Apply coupon</p>
        </div>
        <div className="btn">SELECT</div>
      </div>
    </div>
  );
};

export default CardRight;
