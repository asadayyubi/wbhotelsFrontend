import { Accordion, Box, styled, Typography } from "@mui/material";

export const Container = styled(Box)`
  width: 80%;
  margin: 10rem auto;
  display: flex;
  flex-wrap: wrap;
  color: #000000;
  font-size: 4rem;

  @media (max-width: 1080px) {
    width: 100%;
  } 
`;

export const BookingId = styled(Box)`
  width: 95%;
  margin: 3rem auto;
  display: flex;

  @media (max-width: 1080px) {
    width: 100%;
    flex-direction: column;
    justify-content: center;
    text-align: center;
  } 
`;

export const Heading1 = styled(Typography)`
  text-align: right;

  @media (max-width: 1080px) {
    text-align: center;
  } 
`;

export const Heading2 = styled(Typography)`
  text-align: left;
  
  @media (max-width: 1080px) {
    text-align: center;
  } 
`;

export const IdLeft = styled(Box)`
  width: 35%;
  margin: auto;
`;

export const IdRight = styled(Box)`
  width: 65%;
  margin: auto;
`;

export const HotelDetails = styled(Box)`
  width: 95%;
  margin: 2rem auto;
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  } 
`;

export const HotelDetails1 = styled(Box)`
  width: 95%;
  margin: 2rem auto;
  display: flex;

  @media (max-width: 1080px) {
    flex-direction: column-reverse;
  } 
`;

export const CheckTop = styled(Box)`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Block = styled(Box)`
  width: 33%;
  margin-bottom: 2rem;
`;

export const DetailsLeft = styled(Box)`
  width: 75%;

  @media (max-width: 1080px) {
    margin: auto;
    width: 90%;
  }
`;

export const DetailsRight = styled(Box)`
  width: 25%;

  @media (max-width: 1080px) {
    margin: auto;
    width: 90%;
  }
`;

export const PaymentDetails = styled(Box)`
  width: 95%;
  margin: 2rem auto;
  display: flex;
  flex-wrap: wrap;
`;

export const StyledAccordion = styled(Accordion)`
  width: 100%;
  margin: 2rem auto;
  padding-top: 1rem;
`;

export const StyledAccordion2 = styled(Accordion)`
  width: 100%;
  margin: 2rem auto;
  padding: 0;
  border: none;
`;

export const PaymentRow = styled(Box)`
  width: 100%;
  display: flex;
  padding: 1.5rem 0;
`;

export const PaymentLeft = styled(Box)`
  width: 70%;
`;

export const PaymentRight = styled(Box)`
  width: 30%;
`;