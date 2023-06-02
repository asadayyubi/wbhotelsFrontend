import React from "react";
import StarIcon from "@mui/icons-material/Star";
import { useNavigate } from "react-router-dom";
import { Rating } from "@mui/material";

const CardPrimary = (props) => {
  const navigate = useNavigate();
  const {
    data: {
      hotel_star,
      city,
      state,
      hotelname,
      discount,
      price,
      hotel_gallery,
      rating_json,
      id,
    },
    onClickCard,
  } = props;
  return (
    <div
      className="card-primary"
      onClick={() => navigate(`/hotelpage?id=${id}`, { state: { data: id } })}
    >
      <div className="img">
        <img src={hotel_gallery[0].file} alt={hotelname} />
        <div className="badge">
          <p>All deals</p>
        </div>
        {rating_json.rating > 0 ? 
          (<div className="rating">
            <p>{rating_json.rating}</p>
            <StarIcon />
          </div>) : null
        }
        
      </div>
      <div className="desc">
        <h3 className="name">{hotelname}</h3>
        <p className="place">
          {city.city_name}, {state}
        </p>
        {hotel_star > 1 ? (
            <div>
              <Rating
                name="size-large"
                sx={{ heigh: "20px" }}
                size="large"
                value={hotel_star}
                readOnly
              />
          </div>
          ) : null
        }
        
        {/* <div className="price">
          <h3>₹{price.min}</h3>
          <p>{discount.max}% OFF</p>
        </div> */}
      </div>
    </div>
  );
};

export default CardPrimary;
