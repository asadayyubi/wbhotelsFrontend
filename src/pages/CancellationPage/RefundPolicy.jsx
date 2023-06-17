import { useEffect, useRef } from "react";
import "./refundPolicy.css";

const RefundPolicy = () => {
  return (
    <>
      <div className=" panel-heading">
        <div className="js-title">
          <h2>Manage Booking</h2>
        </div>
      </div>


      <div className=" panel-body ">
        <div className="form-group">
            <div>
          <label for="booking_id" className="col-xs-12 col-sm-3 control-label">
            Booking ID<span>*</span>
          </label>
          </div>
          <div className="col-xs-12 col-sm-9 element-wrapper">
           
              <input
                type="text"
                className="form-control element-input"
                name="booking_id"
                id="booking-id"
                placeholder="Please enter the Booking ID"
                required=""
              />
           
          </div>
        </div>

        <div className="form-group">
            <div>
          <label for="guest_email" className="control-label-email control-label">
            Email<span>*</span>
          </label>
          </div>
          <div className=" element-wrapper">
           
              <input
                type="text"
                className="form-control element-input"
                name="guest_email"
                id="guest-email"
                placeholder="Please enter your email id"
                required=""
              />
           
          </div>
        </div>

        <div className="form-group">
         
            <button type="submit" className="btn btn-default submit-btn">
              Get Details
            </button>
         
        </div>
        <p>
          <small>*Required fields</small>
        </p>
      </div>
    </>
  );
};
export default RefundPolicy;
