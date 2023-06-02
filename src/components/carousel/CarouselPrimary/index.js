import React, { useState, useEffect, useRef } from "react";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

export default function CarouselPrimary(props) {
  const { carouselId, children } = props;

  const cardScrollRef = useRef();

  const [leftArrowVisible, setleftArrowVisible] = useState(false);
  const [rightArrowVisible, setrightArrowVisible] = useState(true);

  const scrollTable = (direction) => {
    if (direction === "left") {
      cardScrollRef.current.scrollLeft -= 1000;
    }
    if (direction === "right") {
      cardScrollRef.current.scrollLeft += 1000;
    }
  };

  useEffect(() => {
    const scroll = cardScrollRef.current;
    function getScrollPos(e) {
      if (scroll.scrollLeft === 0) {
        setleftArrowVisible(false);
        setrightArrowVisible(true);
      } else if (scroll.offsetWidth + scroll.scrollLeft >= scroll.scrollWidth - 10) {
        setrightArrowVisible(false);
      } else {
        setleftArrowVisible(true);
        setrightArrowVisible(true);
      }
    }

    scroll.addEventListener("scroll", getScrollPos);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    return () => {
      scroll.removeEventListener("scroll", getScrollPos);
    };
  }, []);

  useEffect(() => {
    const slider = cardScrollRef.current;
    let isDown = false;
    let startX;
    let scrollLeft;

    const mouseDown = (e) => {
      isDown = true;
      slider.classList.add("grab-active");
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    };

    const mouseLeave = () => {
      isDown = false;
      slider.classList.remove("grab-active");
    };

    const mouseUp = () => {
      isDown = false;
      slider.classList.remove("grab-active");
    };

    const mouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    };

    slider.addEventListener("mousedown", mouseDown);
    slider.addEventListener("mouseleave", mouseLeave);
    slider.addEventListener("mouseup", mouseUp);
    slider.addEventListener("mousemove", mouseMove);

    return () => {
      slider.removeEventListener("mousedown", mouseDown);
      slider.removeEventListener("mouseleave", mouseLeave);
      slider.removeEventListener("mouseup", mouseUp);
      slider.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <div className="carousel-primary" id={carouselId}>
      <div className="cards">
        <div className="content" ref={cardScrollRef}>
          {children}
        </div>
        {leftArrowVisible && (
          <div className="arrow-left hd-mb">
            <ChevronLeftIcon onClick={() => scrollTable("left")} />
          </div>
        )}
        {rightArrowVisible && (
          <div className="arrow-right hd-mb">
            <ChevronRightIcon onClick={() => scrollTable("right")} />
          </div>
        )}
      </div>
    </div>
  );
}
