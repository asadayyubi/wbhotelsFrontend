import React, { useContext } from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import PhoneIcon from "@mui/icons-material/Phone";
import { useSelector } from "react-redux";
import logoImg from "../../media/images/logo.png";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";

const Navbar = () => {
  const { isLoggedIn, userProfileDetails } = useContext(LoginContext);
  const navigate = useNavigate();
  const { cityMenu } = useSelector((state) => state.hotels);
  console.log(cityMenu);
  function onSeeAllClick() {
    navigate("/citylist");
  }

  return (
    <div className="navbar">
      <div className="top">
        <div className="left">
          <img src={logoImg} alt="logo" onClick={() => navigate("/")} />
        </div>
        <div className="right">
          <div className="card">
            <div className="icon">
              <EmojiPeopleIcon />
            </div>
            <div className="details">
              <h3>Become a Member</h3>
              <p>Additional 10% off on stays</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <BusinessCenterOutlinedIcon />
            </div>
            <div className="details">
              <h3>WB for Business</h3>
              <p>Corporate booking solution</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <HouseOutlinedIcon />
            </div>
            <div className="details">
              <h3>List your Property</h3>
              <p>Start earning in 30 mins</p>
            </div>
          </div>
          <div className="card">
            <div className="icon">
              <PhoneIcon />
            </div>
            <div className="details">
              <h3>80480 36907</h3>
              <p>Call us to book now</p>
            </div>
          </div>
          <div
            className="card"
            onClick={() =>
              isLoggedIn ? navigate("/profilepage") : navigate("/login")
            }
          >
            <div className="icon">
              <AccountCircleOutlinedIcon />
            </div>
            {isLoggedIn ? (
              <div className="details">
                <h3>
                  {userProfileDetails?.first_name ||
                    userProfileDetails?.phone_number}
                </h3>
              </div>
            ) : (
              <div className="details">
                <h3>Login / Signup</h3>
              </div>
            )}
          </div>
        </div>
      </div>
      <div className="bottom">
        {cityMenu.map((city, cityIndex) => {
          console.log(city)
          if (cityIndex < 10) {
            return (
              <div key={city.id} className="item-wrapper">
                <div className="item">
                  <p>{city.city_name}</p>
                  <ArrowDropDownOutlinedIcon />
                </div>
                <div className="menu">
                  <h3>Popular Localities</h3>
                  {city.locality.map((locality, key) => (
                    <div
                      key={locality.id}
                      className="menu-item"
                      onClick={() =>
                        navigate("/search", {
                          state: { localityId: locality.id },
                        })
                      }
                    >
                      <p>{locality.locality_name}</p>
                    </div>
                  ))}

                  <div className="menu-item all" style={{ display: "flex" }}>
                    <p>SEE ALL</p>{" "}
                    <span>
                      <ArrowForwardOutlinedIcon />
                    </span>
                  </div>
                </div>
              </div>
            );
          }
        })}
        <div
          className="menu-item all"
          style={{ display: "flex" }}
          onClick={() => onSeeAllClick()}
        >
          <span style={{ fontSize: "14px" }}>All Cities</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
