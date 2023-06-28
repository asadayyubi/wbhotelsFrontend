import React from "react";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import BookingDetails from "../../components/BookingDetails";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import LoaderPrimary from "../../layout/Loader/LoaderPrimary";

const ConfirmationPage = () => {
  const location = useLocation();
  const [bookInfo, setBookInfo] = useState(undefined);
  const navigate = useNavigate();
  const bookInfoFromLocation = location?.state?.data;
  let queryParams;
  let custumer_id;
  let booking_id;
  // console.log("..booking info...", location?.state?.data);
  useEffect(() => {
    queryParams = new URLSearchParams(window.location.search);
    custumer_id = queryParams.get("custumer_id");
    booking_id = queryParams.get("booking_id");
    axios
      .get(
        `https://api.ratebotai.com:8443/get_booking_data?booking_id=${
          location?.state?.data?.booking_id || booking_id
        }&custumer_id=${location?.state?.data?.customer_id || custumer_id}`
      )
      .then((response) => {
        // console.log("cutomer+_id wala data ----> ",response.data.data);
        setBookInfo(response?.data?.data);
        localStorage.setItem("items", JSON.stringify(response?.data?.data));
      });
  }, [location?.state?.data]);

  // const printPdf = () => {
  //     const queryParams = new URLSearchParams(window.location.search);
  //     const custumer_id = queryParams.get("custumer_id");
  //     const booking_id = queryParams.get("booking_id");
  //     navigate(`https://api.ratebotai.com:8443/booking_pdf?booking_id=${location?.state?.data?.booking_id || booking_id}&customer_id=${location?.state?.data?.customer_id || custumer_id}`)
  //     // return axios.get(`https://api.ratebotai.com:8443/booking_pdf?booking_id=${location?.state?.data?.booking_id || booking_id}&customer_id=${location?.state?.data?.customer_id || custumer_id}`);
  //     return axios.post('https://api.ratebotai.com:8443/get_customer_booking_info', {customer_id: userProfileDetails.id}).then((response) => {
  //         setCustomerBookingInfo(response.data.data);
  // })

  const Header = function (props) {
    const { bookInfo } = props;
    // console.log(props);
    if (bookInfo.booking_status === "confirmed") {
      return (
        <div>
          <div className="confirm text">Great! Your stay is confirmed.</div>
          <div className="confirm-sub-text">
            You will soon receive an email confirmation on {bookInfo.email}
          </div>
          <div className="print-button">
            {/* <a href={`https://api.ratebotai.com:8443/booking_pdf?booking_id=${location?.state?.data?.booking_id || booking_id}&customer_id=${location?.state?.data?.customer_id || custumer_id}`} target="_blank"></a> */}
            <ButtonPrimary
              text="Print"
              link={`https://api.ratebotai.com:8443/booking_pdf?booking_id=${bookInfo.booking_id}&customer_id=${bookInfo.customer_id}`}
            />
            {/* <ButtonPrimary text="Print" link={`https://api.ratebotai.com:8443/booking_pdf?booking_id=${location?.state?.data?.booking_id || booking_id}&customer_id=${location?.state?.data?.customer_id || custumer_id}`}/> */}
          </div>
        </div>
      );
    } else if (bookInfo.booking_status === "cancelled") {
      return (
        <div className="cancelled text">Your booking has been cancelled</div>
      );
    } else if (bookInfo.booking_status === "pending") {
      return (
        <>
          <div className="cancelled text">Your booking is in pending</div>
          <div className="print-button">
            <ButtonPrimary text="Confirm Now" />
          </div>
        </>
      );
    }
  };
  if (bookInfo) {
    return (
      <div className="confirmation-page column-flex">
        <div className="header section">
          <Header bookInfo={bookInfo} />
        </div>
        <div className="main section shadow">
          <BookingDetails bookInfo={bookInfo} />
        </div>
      </div>
    );
  } else {
    return <LoaderPrimary />;
  }
};

export default ConfirmationPage;
