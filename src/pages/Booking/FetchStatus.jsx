import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { SkewLoader } from "react-spinners";
import { getAirpayOrderVerify } from "../../apis/booking.api";
import { useBookingData } from "../../Contexts/BookingContext";
import { LoginContext } from "../../Contexts/LoginContext";

const FetchStatus = () => {

  const { userProfileDetails } = useContext(LoginContext);
  const { booking_id } = useBookingData();
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {
    console.log("booking id from fetch page", booking_id);
    getAirpayOrderVerify({
      booking_id: parseInt(booking_id),
      customer_id: userProfileDetails.id
    })
  }, [])
  return (
    <>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "50vh",
        }}
      >
        {loading? 
        <SkewLoader
        color="#17837a"
        size={40}
        cssOverride={{ margin: "auto" }}
        />
        :
        <h2>not loading</h2>
        }
        </div>
    </>
  );
};

export default FetchStatus;
