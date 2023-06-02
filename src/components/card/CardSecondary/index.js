import React from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const CardSecondary = (props) => {
  const { data } = props;
  return (
    <div className="card-secondary">
      <div className="left">
        <h3>{data.city}</h3>
        <p>
          {data.from} - {data.to}
        </p>
        <p>
          {data.no_of_guest} {data.no_of_guest === 1 ? "guest" : "guests"}
        </p>
      </div>
      <div className="right">
        <ArrowForwardIosIcon />
      </div>
    </div>
  );
};

export default CardSecondary;
