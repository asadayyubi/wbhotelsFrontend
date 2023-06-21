import React, { useState } from "react";
import Businesswb from "../Wbbusiness/Businesswb";
import "./superAgent.css";
import countries from "../../media/images/countries.svg";
import hotels from "../../media/images/hotels.svg";
import cities from "../../media/images/cities.svg";
import help from "../../media/images/need-help.svg";
import count from "../../media/images/count.svg";

const SuperAgent = () => {
  const [toggle, setToggle] = useState(false);
  console.log(toggle);

  // const handleToggle = () => {
  //   setToggle(!toggle)
  // }

  return (
    <>
      <div className="superAgent-main">
        <div>
          <div className="jumbo-title">Super Charge your business by</div>
          <div className="jumbo-title2">
            making WB Hotels your growth partner!
          </div>
          <div className="jumbo-sub-title">
            Trusted by over 45,000 travel agents worldwide
          </div>
          <div className="row mt-5">
            <div>
              <div className=" mt-3">
                <img alt="countries" src={countries}></img>
                <div className="jumbo-counter-text">
                  200+<span>Locations</span>
                </div>
              </div>
            </div>
            <div className="col-md-3 col-4">
              <div className=" mt-3">
                <img alt="hotels" src={hotels}></img>
                <div className="jumbo-counter-text">
                  45,000+<span>Rooms</span>
                </div>
              </div>
            </div>
            <div>
              <div className=" mt-3">
                <img alt="cities" src={cities}></img>
                <div className="jumbo-counter-text">
                  200+<span>Cities</span>
                </div>
              </div>
            </div>
          </div>
          <button
            className="help row mt-5 need-help-button "
            onClick={() => setToggle(!toggle)}
          >
            <div className=" mt-3 need-help-text need-help-click">
              <span className="popuptext" id="myPopup">
                Start filling your details here!!
              </span>
              <img alt="help" src={help}></img>
              {/* <img src="./assets/images/need_help.svg" class="jumbo_images need_help_logo"> */}
              <div className="need-help-text">
                <div className="need-help">Need help?</div>
                <div className="need-help">
                  <span>Connect with your dedicated support manager </span>
                </div>
              </div>
            </div>
          </button>
        </div>

        <div className="SuperAgent-Businesswb">
          <Businesswb />
        </div>
      </div>
      <div className={toggle ? "" : "toggle-false"}>
        <div className="SuperAgent-notification">
          <p>Start filling your details here!!</p>
        </div>
      </div>

      <div className="looooogo">
        <img alt="countr" src={count}></img>
      </div>
    </>
  );
};

export default SuperAgent;
