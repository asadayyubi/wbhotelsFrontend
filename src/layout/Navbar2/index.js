import React, { useEffect, useState, useContext } from "react";
import SearchHotels from "../../components/SearchHotels";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useLocation, useNavigate } from "react-router-dom";
import logoImg from "../../media/images/logo.png";
import { LoginContext } from "../../Contexts/LoginContext";
import useWindowDimensions from '../../windowDimensionHook'
function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}
const Navbar2 = () => {
  const { isLoggedIn, userProfileDetails, searchParams } = useContext(LoginContext);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [navbarActive, setnavbarActive] = useState(false);
  const [navbarWidthTab, setnavbarWidthTab] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 360) {
        setnavbarActive(true);
      }else {
        setnavbarActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if(windowDimensions.width <= 900) {
      setnavbarWidthTab(false);
    } else {
      setnavbarWidthTab(true);
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions.width]);

  return (
    <div className={`navbar-2 ${navbarActive || pathname !== "/" ? "navbar-active" : ""} ${navbarWidthTab || pathname !== "/" ? "navbar-active-desktop" : "navbar-active-tab"}`}>
      <div className="logo" onClick={() => navigate("/")}>
        <img src={logoImg} alt="logo" />
      </div>
      <SearchHotels />
      <div className="card" onClick={() => {isLoggedIn? navigate("/profilepage") : navigate('/login') }} style={{marginLeft: "auto"}}>
        <div className="icon">
          <AccountCircleOutlinedIcon />
        </div>
        {
          isLoggedIn ?
            <div className="details1">
              <h3>{userProfileDetails?.username || userProfileDetails?.phone_number}</h3>
            </div> :
            <div className="details">
              <h3>Login / Signup</h3>
            </div>
        }
      </div>
    </div>
  );
};

export default Navbar2;
