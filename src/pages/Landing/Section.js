import React, { useRef } from "react";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ScrollContainer from "react-indiana-drag-scroll";
import CardPrimary from "../../components/card/CardPrimary";
import { useNavigate } from "react-router-dom";

const Section = (props) => {
  const navigate = useNavigate();
  const { title, data } = props;

  const secRef = useRef();

  function scrollSec(direction, ref) {
    const scrollValue = 500;
    console.log(secRef);
    if (direction === "l") {
      ref.current.scrollLeft -= scrollValue;
    }
    if (direction === "r") {
      ref.current.scrollLeft += scrollValue;
    }
  }
  return (
    <div className="section">
      <div className="header">
        <h1 className="sec-title">{title}</h1>
      </div>

      <div className="flex-relative">
        <div className="btn-left" onClick={() => scrollSec("l", secRef)}>
          <ChevronLeftIcon />
        </div>
        <ScrollContainer className="flex" innerRef={secRef}>
          {data.map((hotel) => (
            <CardPrimary key={hotel.id} data={hotel} onClickCard={() => navigate("/hotelpage", { state: { data: hotel.id } })} />
          ))}
        </ScrollContainer>
        <div className="btn-right" onClick={() => scrollSec("r", secRef)}>
          <ChevronRightIcon />
        </div>
      </div>
    </div>
  );
};

export default Section;
