import { Box, styled } from "@mui/material";

export const Container = styled(Box)`
  position: absolute;
  background: #ffffff;
  width: 100vw;
  height: 100vh;
  display: flex;
  color: #000000;
  z-index: 1000;
`;

export const LoginBox = styled(Box)`
  width: 98%;
  margin: 1rem auto;
`;

export const MenuBox = styled(Box)`
  width: 100%;
  padding: 2rem;
  font-size: 5rem;
  display: flex;
  align-items: center;
`;

export const LoginTop = styled(Box)`
  width: 100%;
  background-image: linear-gradient(to right, #ed2a25, #d2154f);
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
  width: 95%;
  margin: 3rem auto 2rem auto;
  display: flex;
  flex-direction: column;
`;

export const LoginInput = styled(Box)`
  width: 100%;
  margin-top: 2rem;
`;

export const LoginBottom = styled(Box)`
  width: 95%;
  margin: auto;
`;