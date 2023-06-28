import "./guestpolicy.css";

import React from "react";

const GuestPolicy = () => {
  return (
    <>
      <div className="policy__container">
        <div className="policy__termtabswrap">
          <ul className="policy__termtabs"></ul>
        </div>
        <div className="policy policy__terms">
          <div>
            <div>
              <div className="policy__hero">
                <h1 className="policy__hero--heading u-textCapitalize">
                  {" "}
                  Guest Policies for WB Hotels & Resorts in India.{" "}
                </h1>
                <span></span>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">
                  General Booking Policy:
                </div>
                <ul
                //    style="list-style-type: decimal;"
                >
                  <li>
                    <div>
                      <div>
                        Certain destinations may have different travel
                        guidelines for specific times during the year. Please
                        abide by all laws and guidelines as applicable.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        Policies are booking specific and would be informed to
                        the guest at the time of booking or upon Check-In.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      Reference to Wb Hotels & Resorts includes its affiliates,
                      employees and officers. “Hotel” refers to the hotel or
                      home in which you have made a valid booking through Wb
                      Hotels & Resorts.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div>
                  <strong>
                    If you need to cancel or change your reservation made
                    through the Wb Hotels & Resorts app, website or call center,
                    please contact Wb Hotels & Resorts customer care number{" "}
                    <a href="tel:080480 36907">080480 36907</a>
                  </strong>
                </div>

                <div>
                  <div>
                    <strong>
                      If you need any help in creating new booking Wb Hotels &
                      Resorts Booking expert has a 24*7 support to help you
                      around the clock. Please contact Wb Hotels & Resorts hotel
                      booking support number{" "}
                      <a href="tel:080480 36907">080480 36907</a>
                    </strong>
                  </div>
                </div>
                {/* </p> */}
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Check-in Policy:</div>
                <ul>
                  <li>
                    <div>
                      The primary guest must be at least 18 years of age to be
                      able to check into the hotel.
                    </div>
                  </li>
                  <li>
                    <div>
                      The usual standard check-in time is 12 noon. Wb Hotels &
                      Resorts tries to ensure that you can check-in any time
                      after that till your reservation is valid.
                    </div>
                  </li>
                  <li>
                    <div>
                      It is mandatory for all guests to present valid photo
                      identification at the time of check-in. According to
                      government regulations, a valid Photo ID has to be carried
                      by every person above the age of 18 staying at the hotel.
                      The identification proofs accepted are Aadhar Card,
                      Driving License, Voter ID Card, and Passport. Note that
                      PAN card is not acceptable. Without an original copy of a
                      valid ID, you will not be allowed to check-in.
                    </div>
                  </li>
                  <li>
                    <div>
                      After reaching the hotel, if you face any difficulty in
                      check-in and it cannot be resolved by the Hotel, you are
                      requested to contact Wb Hotels & Resorts immediately. Wb
                      Hotels & Resorts will verify the issue with the Hotel and
                      post verification, you would be provided the following
                      assistance:<br></br>
                      <br></br>
                      a. Wb Hotels & Resorts will try to arrange for
                      accommodation in the same Hotel<br></br>
                      <br></br>
                      b. Wb Hotels & Resorts will try to provide you with
                      alternate accommodation in its other listed properties if
                      the same is available.<br></br>
                      <br></br>
                      c. If Wb Hotels & Resorts is unable to provide alternative
                      accommodation or you do not accept such alternate
                      accommodation, you may be offered full refund.
                      <br></br>
                      <br></br>
                      d. Wb Hotels & Resorts will not be liable for compensation
                      beyond your booking payment.<br></br>
                    </div>
                  </li>
                  <li>
                    <div>
                      Unless specifically intimated, Wb Hotels & Resorts shall
                      not be held liable to refund the booking amount or any
                      part thereof in case of unavailability of rooms due to
                      natural disaster (earthquake, landslide etc.), terrorist
                      activity, government guidelines or any force majeure act,
                      beyond the control of Wb Hotels & Resorts.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">
                  Early Check-in and Late Check-out:
                </div>

                <div>
                  <strong>1. Early Check-In:</strong> The standard check-in time
                  in Hotels is 12 noon unless mentioned otherwise in your
                  Booking voucher. Early check-in is subject to availability.
                  Extra charges will usually apply as per below policy:
                  <div>
                    <div className="policy__tableWrap">
                      <table className="policy__table">
                        <tbody>
                        <tr>
                          <th>Check-in Time </th>
                          <th> Early Check-in Charges</th>
                        </tr>
                        <tr>
                          <td>Before 9 AM </td>
                          <td>
                            {" "}
                            100% charges for one day payable as per room rates
                            for the previous day
                          </td>
                        </tr>
                        <tr>
                          <td>Between 9 AM and 12 PM </td>
                          <td>
                            {" "}
                            Subject to room availability and hotel policy
                          </td>
                        </tr>
                       
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>

                <div>
                  <div>
                    Complimentary breakfast will not be available to you for the
                    day of early check in.
                  </div>
                </div>

                <div>
                  <div>
                    <strong>2. Late Check-out:</strong> The standard check-out
                    time in Hotels is 11AM unless mentioned otherwise in your
                    Booking voucher. Late check-out is subject to availability
                    and cannot be confirmed with the Hotel in advance. Extra
                    charges will usually apply as per the below policy:
                  </div>
                </div>

                <div>
                  <div>
                    <div className="policy__tableWrap">
                      <table className="policy__table">
                        <tbody>
                        <tr>
                          <th>Check-out Time </th>
                          <th> Late Check-out Charges</th>
                        </tr>
                        <tr>
                          <td>Between 11 AM and 1 PM </td>
                          <td> Complimentary</td>
                        </tr>
                        <tr>
                          <td>Between 1 PM and 5 PM </td>
                          <td>
                            {" "}
                            Upto 50% of the room rate for the day, depending on
                            hotel policy & subject to room availability
                          </td>
                        </tr>
                        <tr>
                          <td>After 5 PM </td>
                          <td> 100% of the room rate for the day</td>
                        </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
                {/* </p> */}
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">
                  Booking Extension Policy:
                </div>

                <div>
                  Any extension of stay at the Hotel is subject to availability
                  of the rooms at the current ongoing rate and not at the rate
                  at which the original booking was made.
                </div>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Cancellation Policy:</div>
                <ul>
                  <li>
                    <div>
                      1. You can cancel your booking using the Wb Hotels &
                      Resorts website, mobile app or calling customer care.
                    </div>
                  </li>
                  <li>
                    <div>
                      2. The applicable refund amount will be credited to you
                      within 7-14 working days. Wb Hotels & Resorts reserves the
                      right to debit from Wb Hotels & Resorts Money account, in
                      case of cancellation amount being higher than money
                      already paid by you.
                      <br></br>
                      <br></br>3. Some Hotels do not accept bookings from
                      unmarried couples, do not accept local id proofs. This
                      information is available to the Guest prior to making the
                      booking. For any cancellations or check-in denial
                      associated with such bookings that are dishonoured by the
                      Hotel, Wb Hotels & Resorts shall be under no obligation to
                      refund any amount to the Guest.
                      <br></br>
                      <br></br>4. Hotels reserve the right to deny check-in
                      where customers are unable to provide a valid government
                      id or where minor Guests are travelling unaccompanied or
                      if the Hotel is suspicious of the Guests check-in at it’s
                      Property. Under all such cases Wb Hotels & Resorts shall
                      be under no obligation to refund any amount to the Guest.
                    </div>
                  </li>
                  <li>
                    <div>
                      5. You can find the cancellation policies at:<br></br>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <b>Website:</b>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <br></br>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        <b>Mobile app:</b>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div></div>
                  </li>
                  <li>
                    <div>
                      <div>
                        6. For corporate bookings, the cancellation policy
                        mentioned on your contract will apply.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      7. In case no cancellation policy is mentioned on the
                      Hotel details page, the following cancellation policy
                      shall apply:<br></br>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>Guest cancellation policy:</b> For booking specific
                      cancellation policy, please refer to your booking voucher.
                      <br></br>
                    </div>
                  </li>
                  <li>
                    <div>
                      <b>No Show:</b> For booking specific cancellation policy,
                      please refer to your booking voucher.<br></br>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Long Stay Bookings</div>

                <div>
                  For bookings of more than 7 nights, you have to settle all
                  outstanding payments on a weekly basis. Further accommodation
                  is subject to settlement of the outstanding amount.
                </div>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">
                  Triple Occupancy Policy:
                </div>

                <div>
                  Some Hotels allow triple occupancy by providing an extra
                  mattress for the third person for extra fee. However no extra
                  bed is usually provided.
                </div>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Visitors Policy</div>
                <ul>
                  <li>
                    <div>
                      You should check with the Hotel for its Visitor Policy.
                    </div>
                  </li>
                  <li>
                    <div>
                      In order to maintain privacy of guests and the
                      tranquillity of the Hotel, Wb Hotels & Resorts encourages
                      its Hotel Partners to have a visitor policy where:
                      <br></br>
                      <br></br>
                      a. Visitors are generally allowed to meet guests in the
                      hotel lobby during the day, except if there is an
                      emergency.<br></br>
                      <br></br>
                      b. The Hotel front desk requires all visitors to present a
                      government approved photo identity prior to accessing
                      guest floors/rooms.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Child Policy</div>
                <ul>
                  <li>
                    <div>
                      Stay of 1 child up to 5 years of age is complementary
                      without the use of an extra mattress.
                    </div>
                  </li>
                  <li>
                    <div>
                      Breakfast charges may be applicable for the child.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Service On-Time policy</div>
                <ul>
                  <li>
                    <div>
                      The hotels associated with the program will have Service
                      On-time tag/information displayed on the app.
                    </div>
                  </li>
                  <li>
                    <div>
                      If you face any issue related to your stay in these
                      hotels, we promise issue resolution within 2 hours.
                    </div>
                  </li>
                  <li>
                    <div>
                      If the issue can not be resolved, we will offer shifting
                      to another room in the same hotel or shifting to a
                      different hotel.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        You need to call{" "}
                        <strong>
                          Wb Hotels & Resorts customer care number{" "}
                          <a href="tel:080480 36907">080480 36907</a>
                        </strong>{" "}
                        to register the issue for quick assistance.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      Refund amount will be subjected to the severity of the
                      issues and will be decided as per our guidelines.
                    </div>
                  </li>
                  <li>
                    <div>
                      As of now, this service is available for only selected
                      hotels in these cities: Mumbai , Delhi , Bengaluru ,
                      Gurugram, Hyderabad, and Lucknow.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Code of Conduct:</div>
                <ul>
                  <li>
                    <div>
                      Illegal activities are not permitted in any Wb Hotels &
                      Resorts.
                    </div>
                  </li>
                  <li>
                    <div>
                      <div>
                        You should be aware that the Hotel may refuse service or
                        evict you<br></br>
                        a) For refusal or failure to pay for accommodation,
                        <br></br>
                        b) If you act in a disorderly fashion as to disturb the
                        peace of other guests,<br></br>
                        c) If you destroy, damage, deface or threaten harm to
                        hotel property or guests,<br></br>
                        d) Any of your actions are deemed inappropriate by the
                        Hotel.
                      </div>
                    </div>
                  </li>
                  <li>
                    <div>
                      Please keep the Hotel room in a good condition and
                      maintain hygiene and cleanliness. You may be held liable
                      for any damage to Hotel assets (except normal wear and
                      tear).
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">
                  Smoking, Drugs and Alcohol
                </div>
                <ul>
                  <li>
                    <div>
                      Smoking is prohibited in Wb Hotels & Resorts. Some Hotels
                      may prohibit smoking in their guest rooms so it is prudent
                      to check with the Hotel Front Desk.
                    </div>
                  </li>
                  <li>
                    <div>
                      Anyone found using or under the influence of illegal drugs
                      or substances classified under the{" "}
                      <i>
                        <u>
                          <b>
                            Narcotic Drugs and Psychotropic Substances Act, 1985
                          </b>
                        </u>
                      </i>{" "}
                      will be reported to the police and asked to leave the
                      Hotel. Any evidence or suspicion of drug use at the Hotel
                      will also be reported immediately to the police.
                    </div>
                  </li>
                  <li>
                    <div>
                      Drinking alcohol is prohibited in all public areas
                      including; in the Hotel’s lobby, hallways, and parking
                      areas of Wb Hotels & Resorts. Please contact the Hotel
                      Front Desk regarding consumption of alcoholic beverages
                      within your room, without disturbing the discipline of the
                      Hotel or other guests.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Safety and Security</div>
                <ul>
                  <li>
                    <div>
                      1. For your own safety, please follow fire safety and
                      emergency response procedures as directed by Hotel staff.
                    </div>
                  </li>
                  <li>
                    <div>
                      2. Wb Hotels & Resorts are not liable for lost, misplaced,
                      damaged or stolen valuables or belongings.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Contact Policies:</div>
                <ul>
                  <li>
                   
                      <div>
                        You may be contacted any time before your check-in date
                        to confirm your arrival status/arrival time through
                        calls or messages. If Wb Hotels & Resorts does not
                        receive a response from you after multiple attempts,
                        your booking may be put on hold or cancelled. Wb Hotels
                        & Resorts will reinstate your booking when you contact
                        us back or make a payment through our secure payment
                        options, subject to availability.
                      </div>
                    
                  </li>
                  <li>
                    <div>
                     
                        As we continue to strive to improve our services, we may
                        reach out to you for your feedback on your experience
                        through calls or messages.
                      </div>
                    
                  </li>
                  <li>
                    <div>
                      <div>We might reach out to you for offers.</div>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Beware of Fraud:</div>
                <ul>
                  <li>
                    
                      <div>
                        Wb Hotels & Resorts does not authorise any of its
                        employees, consultants, third-party vendors, associates
                        to collect payment in any other form other than payments
                        from secure Wb Hotels & Resorts gateway and its
                        affiliated OTA payment gateway links.
                      </div>
                    
                  </li>
                  <li>
                    <div>
                      
                        Any instances where collection of payment is attempted
                        from any unauthorized payment gateways other than the
                        ones mentioned above are acts of fraud. Encountering and
                        acting on the same is solely on your own accord and
                        discretion. Wb Hotels & Resorts will not be responsible
                        for any loss/liability arising out of such an event.
                      </div>
                    
                  </li>
                </ul>
              </div>
            </div>
            <div>
             
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">
                  Contact Wb Hotels & Resorts
                </div>
               
                  <div>
                    While Wb Hotels & Resorts works with our Hotel Partners to
                    enable a comfortable stay, we recognise that you may have
                    some concerns. If they are not addressed by the Hotel during
                    your stay at the hotel, you may escalate the same to Wb
                    Hotels & Resorts. No complaint would be entertained post
                    check out. For any assistance from Wb Hotels & Resorts,
                    please contact{" "}
                    <a href="https://wbhotels.in/support">
                      https://wbhotels.in/support
                    </a>
                    .
                  </div>
                
              
              </div>
              <div className="policy__section"></div>
            </div>
            <div>
              <div>
                <div className="policy__subHeading">Grievances</div>
               
                  <div>
                    For any grievances:
                    <strong> Phone </strong> : 080480 36907 <br></br>
                    <strong> Help </strong>:{" "}
                    <a href="https://wbhotels.in/support">
                      https://wbhotels.in/support
                    </a>
                    <br />
                    <strong>Email </strong>: grievances@wbhotels.in
                  </div>
               
              </div>
              <div className="policy__section"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GuestPolicy;
