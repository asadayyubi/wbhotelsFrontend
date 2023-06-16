import "./cancellation.css";

import React from "react";

const Cancellation = () => {
  return (
    <>
      <div className="parent-cancellation">
        <div className="policy__cancelltion">
          Reservations, Amendment and Cancellation
        </div>
        <p>
          <div>
            <div className="font-style-cancellation">
              Hotel reservations are contingent upon availability, meaning that
              a booking is not confirmed until a confirmation number is provided
              to the guest via email or whatsapp. These initial reservations are
              considered conditional. Hotels may periodically communicate with
              guests to reconfirm their reservations and prevent fraudulent
              bookings.<br></br> <br></br>
              The purpose of reconfirmation is twofold. Firstly, it ensures that
              the desired dates and accommodations are still required, allowing
              the hotel to make necessary adjustments or cancellations if
              needed. This helps prevent accidental or mistaken bookings.
              Secondly, it helps identify and prevent simulated bookings or
              fraudulent activities, where individuals reserve rooms without
              intending to stay. By staying in contact with guests and
              confirming their intentions, hotels can maintain the integrity of
              their inventory and provide reliable services.<br></br> <br></br>
              By adhering to these procedures, hotels can manage their inventory
              effectively, prevent overbooking, and offer accurate and
              trustworthy services to guests. These measures benefit both guests
              and the hotel by ensuring that reservations are made in good faith
              and that rooms are available to genuine guests who truly need
              them.
            </div>
          </div>
        </p>
      </div>
    </>
  );
};

export default Cancellation;
