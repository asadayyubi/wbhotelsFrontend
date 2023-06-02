import React from "react";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import appStoreBadge from "../../media/images/app_store_badge.png";
import googlePlayBadge from "../../media/images/google_play_badge.png";
import ApartmentIcon from "@mui/icons-material/Apartment";
import CopyrightIcon from "@mui/icons-material/Copyright";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import logoImg from "../../media/images/logo.png";
import { Link } from "react-router-dom";
import "./footerdemo.css";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="sec1">
          <div className="left">
            <div className="action">
              <h1>Join our network and grow your business!</h1>
              <ButtonPrimary
                text="List your property"
                icon={<ApartmentIcon />}
              />
            </div>
          </div>
          <div className="right">
            <div className="desc">
              <h3>Download WB Hotels app for exciting offers.</h3>
            </div>
            <div className="badges">
              <div className="app-store-badge">
                <img src={appStoreBadge} alt="app store badge" />
              </div>
              <div className="google-play-badge">
                <img src={googlePlayBadge} alt="google play badge" />
              </div>
            </div>
          </div>
        </div>

        <div className="sec2">
          <h3>Important links</h3>
          <div className="flex">
            <div className="col">
              <a href="/about-us">About us</a>
              <a href="/cancellation-policy">Cancellation Policy</a>
              <a href="/refund-policy">Refund Policy</a>
              <a href="/contact-us">Contact Us</a>
            </div>
            <div className="col">
              <a href="/">Support</a>
              <a href="/">Investor relations</a>
              <a href="/terms-and-conditions">Terms and conditions</a>
              <Link to="/policy">Privacy policy</Link>
            </div>
            <div className="col rem">
              
              <div className="sec3">
                <div className="top">
                <h3>Follow Us On</h3>
                  <div className="icons">
                    <a
                      href="https://www.instagram.com/wbhotelsnresorts99"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <div className="icon">
                        <InstagramIcon />
                      </div>
                    </a>
                    <a
                      href="https://www.facebook.com/wbhotelsnresorts"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <div className="icon">
                        <FacebookIcon />
                      </div>
                    </a>
                    <a
                      href="https://www.linkedin.com/in/wbhotels/"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <div className="icon">
                        <LinkedInIcon />
                      </div>
                    </a>
                    <a
                      href="https://www.youtube.com/@wbhotelsresorts5569"
                      target={"_blank"}
                      rel="noreferrer"
                    >
                      <div className="icon">
                        <YouTubeIcon />
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

            {/* cut from here */}
            {/* <div className="right">
          <div className="desc">
            <h3>Download WB Hotels app for exciting offers.</h3>
          </div>
          <div className="badges">
            <div className="app-store-badge">
              <img src={appStoreBadge} alt="app store badge" />
            </div>
            <div className="google-play-badge">
              <img src={googlePlayBadge} alt="google play badge" />
            </div>
          </div>
        </div> */}
          </div>
          <div className="bottom" style={{backgroundColor:"#4e4e4e", textAlign:"center", fontWeight:"400", padding:"0 0 2rem 2rem" , color: "white" , paddingTop:"2rem"}}>
            <p className="copyright">
              Copyright © 2022, All Right Reserved WB Hotels & Resorts
            </p>
          </div>
    </>
  );
};

export default Footer;

{
  /* <div className="desc" style={{ display: "flex", margin: "2rem" }}>
<div className="logo">
  <img src={logoImg} alt="logo" style={{ maxHeight: "5rem" }} />
</div>
<h3>India's No. 1 tech based hotel brand</h3>
</div> */
}
