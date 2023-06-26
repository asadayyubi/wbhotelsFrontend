import { Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)`
  // position: absolute;
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #000000;
  background-image: url(https://cdn.cnn.com/cnnnext/dam/assets/190816161527-hotel-views-intercontinental-hong-kong-full-169.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Cover = styled(Box)`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-wrap: wrap;
  background: rgba(0, 0, 0, 0.5);
`;

export const MainTop = styled(Box)`
  width: 100%;
  display: flex;
  color: #ffffff;
  align-items: center;
  height: 10rem;
`;

export const MainBox = styled(Box)`
  width: 100%;
  height: 80vh;
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const MainLeft = styled(Box)`
  width: 64%;
  color: #ffffff;
  height: 40%;
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 1080px) {
    margin: auto;
    width: 100%;
  }
`;

export const LeftInner = styled(Box)`
  width: 67.5%;
  display: flex;
  flex-wrap: wrap;
  font-size: 4.5rem;
  margin-left: auto;
  margin-right: 13%;
  align-content: flex-end;

  @media (max-width: 1080px) {
    width: 90%;
    margin: auto;
    font-size: 2.5rem;
  } 
`;

export const Heading1 = styled(Typography)`
  font-size: 4.5rem;
  height: 45%;
  fontWeight: bold;
  line-height: 42px;
    font-size: 40px;
    height: 23%;
}

  @media (max-width: 1080px) {
    margin: auto;
    font-size: 4rem;
    height: 45%;
    fontWeight: bold;
    lineHeight: 1.15;
  } 
`;

export const MainRight = styled(Box)`
  width: 35%;

  @media (max-width: 1080px) {
    margin: auto;
    width: 90%;
  }
`;

export const LoginBox = styled(Box)`
  width: 80%;
  height: 50rem;
  margin: auto 13rem auto auto;
  background: #ffffff;

  @media (max-width: 1080px) {
    margin: auto;
    width: 100%;
  }
`;

export const LoginTop = styled(Box)`
  width: 100%;
  background-image: linear-gradient(to right, #250ebd, #060e7a);
  height: 4vh;
  color: #ffffff;
  font-size: 1.5rem;
  font-weight: bold;
  display: flex;
  padding-left: 8%;
  align-items: center;
`;

export const LoginMid = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const LoginInner = styled(Box)`
  width: 90%;
  margin: 3rem auto 2rem auto;
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled(Box)`
  width: 100%;
  margin-top: 2rem;
  font-size: 16px;
`;

export const LoginBottom = styled(Box)`
  width: 95%;
  margin: auto;
`;