import React, { useContext } from "react";
import EmojiPeopleIcon from "@mui/icons-material/EmojiPeople";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import HouseOutlinedIcon from "@mui/icons-material/HouseOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import ArrowDropDownOutlinedIcon from "@mui/icons-material/ArrowDropDownOutlined";
import ArrowForwardOutlinedIcon from "@mui/icons-material/ArrowForwardOutlined";
import { useSelector } from "react-redux";
import logoImg from "../../media/images/logo.png";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";

const Navbar = () => {
  const { isLoggedIn, userProfileDetails } = useContext(LoginContext);
  const navigate = useNavigate();
  const { cityMenu } = useSelector((state) => state.hotels);

  return (
    <div style={{width: "80%", margin: "20px auto", minHeight: "50vh"}}>
        <div className="navbar">
      <div className="bottom">
        {cityMenu.map((city, cityIndex) => (
            <div key={city.id} className="item-wrapper">
            <div className="item">
              <p>{city.city_name}</p>
              <ArrowDropDownOutlinedIcon />
            </div>
            <div className="menu">
              <h3>Popular Localities</h3>
              {city.locality.map((locality, key) => (
                <div key={locality.id} className="menu-item" onClick={() => navigate("/search", { state: { localityId: locality.id } })}>
                  <p>{locality.locality_name}</p>
                </div>
              ))}

              {/* <div className="menu-item all" style={{display: "flex"}}>
                <p>SEE ALL</p> <span><ArrowForwardOutlinedIcon /></span>                
              </div> */}
            </div>
            
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Navbar;
