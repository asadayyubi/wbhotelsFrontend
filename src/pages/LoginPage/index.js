import { Button, OutlinedInput, Typography } from "@mui/material";
import axios from "axios";
import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { API_CHECK_OTP, API_LOGIN_BY_OTP } from "../../apis";
import {
  Container,
  Cover,
  Heading1,
  LeftInner,
  LoginBottom,
  LoginBox,
  LoginInner,
  LoginInput,
  LoginMid,
  LoginTop,
  MainBox,
  MainLeft,
  MainRight,
  MainTop,
} from "./index.sty";
import { getUserDetails } from "../../redux/actions/hotels";
import { useSelector, useDispatch } from "react-redux";
import { LoginContext } from "../../Contexts/LoginContext";
import "./login.css";

const LoginPage = () => {
  const { setUserProfileDetails, setIsLoggedIn } = useContext(LoginContext);
  const location = useLocation();
  var redirectPage = undefined;

  if (location?.state?.data) {
    redirectPage = location?.state?.data?.redirectPage;
  }
  // const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(getUserDetails(1));
  // }, []);
  // let { userDetails } = useSelector((state) => state.hotels);
  // if (userDetails) {
  //   setUserProfileDetails(userDetails);
  // }

  const [phone_number, setPhone_number] = useState("");

  const [otp, setOtp] = useState("");

  const [content, setContent] = useState(
    "Please enter your phone number to continue"
  );

  const [optSent, setOtpSent] = useState(false);

  const navigate = useNavigate();

  // console.log(phone_number)

  const checkOtp = (otp) => {
    axios.post(API_CHECK_OTP, { phone_number, otp }).then((res) => {
      if (res.data.status_message === "success") {
        setIsLoggedIn(true);
        setUserProfileDetails(res.data.data);
        if (redirectPage && redirectPage === "hotelpage") {
          const { searchParams, hotelData, roomsDetails } =
            location?.state?.data;
          navigate("/booking", {
            state: { data: { searchParams, hotelData, roomsDetails } },
          });
        } else {
          navigate("/");
        }
      } else {
        setContent("Please enter valid OTP");
      }
    });
  };

  const loginByOtp = (phone_number) => {
    axios.post(API_LOGIN_BY_OTP, phone_number).then((res) => {
      // checkOtp({...phone_number, otp: res.data.otp})
      setContent("Please enter your otp to continue");
      setOtpSent(true);
    });
  };

  return (
    <Container>
      <Cover>
        <MainTop>
          <br />
          <Typography style={{ marginLeft: "12%", marginTop: "13rem" }}>
            {" "}
            WB HOTELS Hotels across 200 cities, 2 countries
          </Typography>
        </MainTop>
        <MainBox>
          <MainLeft>
            <LeftInner>
              <Heading1>WB Hotels your accommodations buddy</Heading1>
              <br />
              <Typography
                style={{
                  fontSize: "1.5rem",
                  height: "20%",
                  fontWeight: "bold",
                }}
              >
                Sign up with your phone number and get exclusive access to
                discounts and savings on WB HOTELS stays and with our many
                travel partners.
              </Typography>
              <br />
            </LeftInner>
          </MainLeft>
          <MainRight>
            <LoginBox>
              <LoginTop />
              <LoginMid>
                <LoginInner>
                  <Typography
                    style={{ fontWeight: "bold", fontSize: "2.8rem" }}
                  >
                    Login / Signup
                  </Typography>
                  {!optSent ? (
                    <>
                      <LoginInput>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            marginBottom: "1rem",
                           
                          }}
                        >
                          {content}
                        </Typography>
                        <OutlinedInput
                          fullWidth
                          type="number"
                          value={phone_number}
                          onChange={(e) => setPhone_number(e.target.value)}
                        />
                      </LoginInput>
                      <Button
                        variant="contained"
                        disabled={phone_number.length === 0}
                        style={{ margin: "2rem 0 0.5rem 0" }}
                        onClick={() => loginByOtp({ phone_number })}
                      >
                        Continue
                      </Button>
                      <Typography style={{}}>
                        Prefer to Sign in with password instead?{" "}
                        <span style={{ color: "red" }}>Click here</span>
                      </Typography>
                    </>
                  ) : (
                    <>
                      <LoginInput>
                        <Typography
                          style={{
                            fontWeight: "bold",
                            marginBottom: "1rem",
                            fontSize: "18px",
                          }}
                        >
                          {content}
                        </Typography>
                        <OutlinedInput
                          fullWidth
                          type="number"
                          value={otp}
                          onChange={(e) => setOtp(e.target.value)}
                        />
                      </LoginInput>
                      <Button
                        variant="contained"
                        disabled={phone_number.length === 0}
                        style={{ margin: "2rem 0 0.5rem 0" }}
                        onClick={() => checkOtp(otp)}
                      >
                        Continue
                      </Button>
                      <Typography style={{}}>
                        Prefer to Sign in with password instead?{" "}
                        <span style={{ color: "red" }}>Click here</span>
                      </Typography>
                    </>
                  )}
                  <div className="main-login-trvl">
                    <div className="login-sign-main-p">
                      <p className="login-sign-p">Or sign in as</p>
                    </div>
                    <div className="both-btn-trvl-crpt">
                      <div className="btn-travel-main">
                        <a href="https://travelagent.wbhotels.in/">
                          {" "}
                          <button
                            className="btn-travel-agent "
                            // onClick={() => navigate("/superAgent")}
                          >
                            Travel Agent
                          </button>
                        </a>
                      </div>
                      <div>
                        <button className="btn-travel-agent">Corporate</button>
                      </div>
                    </div>
                  </div>
                </LoginInner>
              </LoginMid>
            </LoginBox>
          </MainRight>
        </MainBox>
      </Cover>
    </Container>
  );
};

export default LoginPage;
