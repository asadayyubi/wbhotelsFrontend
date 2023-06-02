import { Box, InputLabel, OutlinedInput, styled, Typography } from "@mui/material";

export const Container = styled(Box)`
  width: 80%;
  margin: 10rem auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const ContainerLeft = styled(Box)`
  width: 100%;
  border: 1px solid #e3e3e3;
  padding-bottom: 2rem;
`;

export const MainLeft = styled(Box)`
  width: 55%;
`;

export const ContainerRight = styled(Box)`
  width: 40%;
  border: 1px solid #e3e3e3;
`;

export const Inner = styled(Box)`
  width: 95%;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export const Heading = styled(Typography)`
  background: #f9f9fb;
  color: #000000;
  padding: 1rem;
  display: flex;
  width: 100%;
  align-items: center;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const Formrow = styled(Box)`
  width: 100%;
  margin: 1.5rem auto;
  display: flex;
  justify-content: space-between;
`;

export const StyledLabel = styled(InputLabel)`
  font-weight: bold;
  color: black;
  font-size: 1.5rem;
`;

export const StyledInput = styled(OutlinedInput)`
  font-size: 1.5rem;
`;

export const FormLeft = styled(Box)`
  width: 35%;
  display: flex;
  flex-wrap: wrap;
`;

export const FormRight = styled(Box)`
  width: 60%;
`;

export const ButtonBox = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
  border: 1px solid gray;
  align-items: center;
  padding: 0 1rem;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 15px 10px #e4e4e4;
  }
`;

export const ModifyTypo = styled(Typography)`
  display: flex; 
  align-items: center; 
  font-weight: bold; 
  font-size: 2rem; 
  margin-bottom: 1rem;
`;

export const NumBox = styled(Box)`
  color: green;
  background: #b4d6b6; 
  width: 2rem; 
  height: 2rem; 
  display: flex; 
  align-items: center; 
  justify-content: center; 
  margin-right: 2rem; 
  border-radius: 5px; 
  font-size: 1rem;
`;

export const RightTop = styled(Box)`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
`;

export const RightTopLeft = styled(Box)`
  width: 70%;
`;

export const RightTopRight = styled(Box)`
  width: 20%;
`;

export const RightMid = styled(Box)`
  width: 90%;
  margin: 2rem auto;
`;

export const PriceRow = styled(Box)`
  width: 100%;
  margin: 1rem auto;
  display: flex;
  justify-content: space-between;
`;

export const PriceLeft = styled(Typography)`
  width: 75%;
`;

export const PriceRight = styled(Typography)`
  width: 20%;
  font-weight: bold;
  text-align: right;
`;

export const RightPrice = styled(Box)`
  width: 90%;
  margin: auto;
`;

export const RightBottom = styled(Box)`
  width: 90%;
  margin: 2rem auto;
  display: flex;
  justify-content: space-between;
`;

export const BottomLeft = styled(Box)`
  width: 50%;
`;

export const BottomRight = styled(Typography)`
  width: 40%;
  font-weight: bold;
  font-size: 2rem;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Bottom = styled(Box)`
  width: 90%;
  padding: 1rem;
  margin: 1rem auto;
  background: #fde8e4;
  color: red;
  text-align: center;
  font-weight: bold;
  font-size: 1.25rem;
  border-radius: 5px;
`;