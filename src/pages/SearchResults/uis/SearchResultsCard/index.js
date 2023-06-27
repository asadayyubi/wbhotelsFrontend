import React, { useState } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import StarIcon from "@mui/icons-material/Star";
import ElevatorIcon from "@mui/icons-material/Elevator";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import VideoCameraFrontIcon from "@mui/icons-material/VideoCameraFront";
import BeenhereIcon from "@mui/icons-material/Beenhere";
import ButtonPrimary from "../../../../components/button/ButtonPrimary";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import { Rating } from "@mui/material";

const SearchResultsCard = (props) => {
  const {
    data: {
      hotel_star,
      city,
      state,
      country,
      hotelname,
      member_lable_text,
      discount,
      price,
      hotel_gallery,
      amenities,
      rating_json,
      location_info,
    },
    onClickCard,
  } = props;
  const [mainImageIndex, setmainImageIndex] = useState(0);

  const filterAmeneties = () => {

  }

  return (
    <div className="search-results-card" onClick={onClickCard}>
      <div className="images">
        <div className="main-img">
          <div
            className="icon prev"
            onClick={(e) => {
              e.stopPropagation();
              mainImageIndex > 0 && setmainImageIndex(mainImageIndex - 1);
            }}
          >
            <ArrowBackIosNewIcon />
          </div>
          {hotel_gallery.map(
            (item, i) =>
              i === mainImageIndex && (
                <img key={i} src={item.file} alt={item.label} />
              )
          )}
          <div className="badge">
            <BeenhereIcon />
            <p>Badge</p>
          </div>
          <div
            className="icon next"
            onClick={(e) => {
              e.stopPropagation();
              mainImageIndex < hotel_gallery.length - 1 &&
                setmainImageIndex(mainImageIndex + 1);
            }}
          >
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="side-img">
          {hotel_gallery.map(
            (item, i) =>
              i < 5 && (
                <div
                  key={i}
                  className="img"
                  onClick={(e) => {
                    e.stopPropagation();
                    setmainImageIndex(i);
                  }}
                >
                  <img src={item.file} alt={item.label} />
                </div>
              )
          )}
        </div>
      </div>
      <div className="desc">
        <div className="top">
          <h1 className="name">{hotelname}</h1>
          <p className="loc">
            {country}, {city.city_name} · <LocationOnIcon />{" "}
            {`${location_info.distance} ${location_info.distance_in}`}
          </p>
        </div>
        <div className="middle">
          <div className="ratings">
            {rating_json?.rating > 0 ? (
              <div className="badge">
                {rating_json?.rating}
                <StarIcon />
              </div>
            ) : null}
            {hotel_star > 1 ? (
              <Rating
                name="size-large"
                size="large"
                value={hotel_star}
                readOnly
              />
            ) : null}
            <p className="rating-feedback">{rating_json?.rating_in_words}</p>
          </div>
          <div className="facilities">
            {amenities.map((item,i) => {
              if (item?.id > 0 && i < 5)  {
                // console.log(item, item.id, "from ameneties card");
                return (
                  <div key={item.id} className="tab">
                    <div className="img">
                      <img src={item.file} alt={item.name} />
                    </div>
                    {item.name}
                  </div>
                );
              // }  else if (flag && item.id === 0) {
              //   console.log(item, item.id, "else from ameneties card");
              //   return (
              //     <div key={item.id} className="tab">
              //       <div className="img">
              //         <img src={"https://cdn-icons-png.flaticon.com/512/5569/5569304.png"} alt={item.name} />
              //       </div>
              //       {item.name}
              //     </div>
              //   );
              }
            })}

            {amenities.length > 3 && (
              <div className="more">
                <p>+ {amenities.length} more</p>
              </div>
            )}
          </div>
          <div className="member">
            <ButtonPrimary text={member_lable_text} icon={<BeenhereIcon />} />
          </div>
        </div>
        <div className="bottom">
          <div className="left-sec">
            <div className="price">
              <h1>₹{price.min}</h1>
              <p>₹{price.max} </p>
              <h3>{discount.max}% off</h3>
            </div>
            <p className="bottom-desc">per room per night</p>
          </div>
          <div className="right-sec">
            <ButtonPrimary text="Book Now" onClick={onClickCard} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchResultsCard;
