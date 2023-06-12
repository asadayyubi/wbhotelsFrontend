import React, {useRef, useContext, useEffect, useState } from "react";
import SearchHotels from "../../components/SearchHotels";
import Navbar from "../../layout/Navbar";
import ScrollContainer from "react-indiana-drag-scroll";
import CardSecondary from "../../components/card/CardSecondary";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import NotificationsActiveIcon from "@mui/icons-material/NotificationsActive";
import InputPrimary from "../../components/input/InputPrimary";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { useSelector } from "react-redux";
import Section from "./Section";
import { LoginContext } from "../../Contexts/LoginContext";
import axios from 'axios';
import banner from "../../media/images/BANNER_up.jpg"
import mobBanner from "../../media/images/150-01.jpg"
import "./banner.css"

const Landing = () => {
  const {setUserProfileDetails, userProfileDetails} = useContext(LoginContext);
  const sec2Ref = useRef();
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    if(userProfileDetails?.id) {
      axios.post('https://api.ratebotai.com:8443/get_customer_info_data', {user_id: userProfileDetails.id}).then((response) => {
        console.log("landing page, user Profile:", response.data);
        setUserProfileDetails(response.data.data);
      })
    }
}, []);
  const { hotels } = useSelector((state) => state.hotels);
  console.log("landing page hotels", hotels);

  function scrollSec(direction, ref) {
    const scrollValue = 500;
    if (direction === "l") {
      ref.current.scrollLeft -= scrollValue;
    }
    if (direction === "r") {
      ref.current.scrollLeft += scrollValue;
    }
  }
  

  useEffect(() => {
    const handleResize = () => {
      console.log(window.innerWidth <= 756);
      setIsMobile(window.innerWidth <= 650); // Change the breakpoint as per your needs
    };

    // Add event listener for window resize
    window.addEventListener('resize', handleResize);

    // Initial check for mobile screen
    handleResize();
    console.log(isMobile);
    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);

  return (
    <div className="landing">
      <Navbar />
      <div className="search-cont">
        <h1>Over 45,000 Rooms Across 200+ Locations</h1>
        <SearchHotels />
         {/* author:poojamai:02-06-2023: start */}
         <div className="img-container">
          <img src={isMobile ? mobBanner : banner} alt="Banner" />
          {/* <h2>{isMobile ? "isMobile" : "laptop"}</h2> */}
        </div>
        {/* author:poojamai:02-06-2023: end */}
      </div>
      <Section title="Handpicked for you" data={hotels.handpicked} />
      <Section title="Favourites" data={hotels.favourite} />

      {/* <div className="section mb-5">
        <div className="header">
          <h1 className="sec-title">Explore collections</h1>
          <div className="see-all">
            <p>SEE ALL</p>
            <ArrowForwardIosIcon />
          </div>
        </div>
        <div className="flex-relative flex-relative-cardsec">
          <div className="btn-left" onClick={() => scrollSec("l", sec2Ref)}>
            <ChevronLeftIcon />
          </div>
          <ScrollContainer className="flex" innerRef={sec2Ref}>
            {hotels?.exploreCollections?.map((item) => (
              <CardSecondary key={item.city} data={item} />
            ))}
          </ScrollContainer>
          <div className="btn-right" onClick={() => scrollSec("r", sec2Ref)}>
            <ChevronRightIcon />
          </div>
        </div>

        <div className="newsletter">
          <div className="left">
            <h1>Get access to exclusive deals</h1>
            <p>Only the best deals reach your inbox</p>
          </div>
          <div className="right">
            <InputPrimary />
            <ButtonPrimary text="Notify me" icon={<NotificationsActiveIcon />} />
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Landing;
