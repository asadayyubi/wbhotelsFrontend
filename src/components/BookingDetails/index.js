import React, { useState, useRef } from "react";
import Divider from '@mui/material/Divider';
import KeyboardArrowDownSharpIcon from '@mui/icons-material/KeyboardArrowDownSharp';
import KeyboardArrowUpSharpIcon from '@mui/icons-material/KeyboardArrowUpSharp';
import { useContext } from "react";
import { LoginContext } from "../../Contexts/LoginContext";
export default function BookDetails(props) {
  const { bookInfo } = props;
  const {searchParams} = useContext(LoginContext);
  const [isArrowDown1, setIsArrowDown1] = useState(true);
  const [isArrowDown2, setIsArrowDown2] = useState(true);

  function displayTableBody() {
    setIsArrowDown1(!isArrowDown1);
    const tableBody = document.getElementById('table-body');
    const tableFooter = document.getElementById('tfooter');
    if (tableBody.style.display === 'none' || tableBody.style.display === '') {
      tableBody.style.display = 'contents';
    } else {
      tableBody.style.display = 'none';
    }
    if (tableFooter.style.display === 'none' || tableFooter.style.display === '') {
      tableFooter.style.display = 'contents';
    } else {
      tableFooter.style.display = 'none';
    }
  }
  function hideDiscountSection() {
    setIsArrowDown2(!isArrowDown2);
    const tableBody = document.getElementsByClassName('discount');
    for (let element of tableBody) {
      if (element.style.display === 'none') {
        element.style.display = '';
      } else {
        element.style.display = 'none';
      }
    }
  }

  return (
    <div className='book-details-container column-flex'>
      <div className='header section row-flex'>
        <div className='left'>
          <h2>Booking Id</h2>
          <div style={{ fontSize: '20px', lineHeight: '2.5' }}>{bookInfo.booking_id}</div>
        </div>
        <div className='right'>
          <p>Booked by {bookInfo.first_name} on Mon, 24 Oct 2022</p>
        </div>
      </div>
      <Divider variant="middle" />
      <div className='hotel-details section row-flex'>
        <div className='left column-flex'>
          <div>
            <h3>{bookInfo?.hotel_name || bookInfo?.hotelname}</h3>
            <p>{bookInfo?.address}</p>
          </div>
          <div>
            <h3>Hotel Direction</h3>
            <p>{bookInfo?.hotel_direction}</p>
          </div>
          <div><h3>{bookInfo?.land_mark}</h3></div>
        </div>
        <div className='right'>
          <img className='image' src={bookInfo?.hotel_gallery? bookInfo.hotel_gallery[0].file : 'http://ratebotai.com/python_assets/pic2.jpeg'} alt={''} ></img>
        </div>
      </div>
      <Divider variant="middle" />
      <div className='user-details section row-flex'>
        <div className='left column-flex'>
          <div className='row-flex'>
            <div>
              <p>Primary Guest</p>
              <p><strong>{bookInfo.first_name}</strong></p>
            </div>
            <div>
              <p>Check In</p>
              <p><strong>{bookInfo.from_date}</strong></p>
            </div>
            <div>
              <p>Check In Time</p>
              <p><strong>{'12:00 PM - 10:16 PM'}</strong></p>
            </div>
          </div>
          <div className='row-flex'>
            <div>
              <p>Mobile Number</p>
              <p><strong>{bookInfo.mobile_number}</strong></p>
            </div>
            <div>
              <p>Check Out</p>
              <p><strong>{bookInfo.to_date}</strong></p>
            </div>
            <div>
              <p>Check Out Time</p>
              <p><strong>{'11:00 AM'}</strong></p>
            </div>
          </div>
          <div className='row-flex'>
            <div>
              <p>Email Address</p>
              <p><strong>{bookInfo.email}</strong></p>
            </div>
          </div>
        </div>
        <div className='right column-flex'>
          <div className='row-flex'>
            <div>
              <h1>{bookInfo.no_of_nights} Night</h1>
            </div>
          </div>
          <div className='row-flex'>
            <div>
              <p>{bookInfo.no_of_adults} Guests</p>
            </div>
            <div>
              <p>{bookInfo?.no_of_rooms || 1} Room</p>
              <p><strong>{bookInfo?.room_booking?.length? bookInfo?.room_booking[0].room_title : "Deluxe"}</strong></p>
            </div>
          </div>
        </div>
      </div>
      <Divider variant="middle" />
      <div className='payment-details section column-flex'>
        <div>
          <h3>Payment Details</h3>
        </div>
        <div>
          <table className='shadow'>
            <thead onClick={() => displayTableBody()}>
              <tr className='table-row'>
                <td className='left-cell' colSpan={2}>Total booking amount</td>
                <th className='right-cell'>₹{bookInfo.total_without_tax + bookInfo.total_services_amount + bookInfo.tax_amount - (bookInfo.coupon_value + bookInfo.discount_value)} <span>{isArrowDown1 ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon />}</span></th>
              </tr>
            </thead>
            <tbody id='table-body'>
              <tr className='table-row'>
                <td className='left-cell'>Room charges for</td>
                <td className='left-cell'>1 Room  x  1 Night</td>
                <th className='right-cell'>₹{bookInfo.total_without_tax}</th>
              </tr>
              <tr className='table-row' onClick={() => hideDiscountSection()}>
                <td className='left-cell' colSpan={2}>Discounts <span> {isArrowDown2 ? <KeyboardArrowDownSharpIcon /> : <KeyboardArrowUpSharpIcon />} </span></td>
                <th className='right-cell'>-₹{bookInfo.coupon_value + bookInfo.discount_value}</th>
              </tr>
              <tr className='table-row discount'>
                <td className='left-cell' colSpan={2}>Coupon: FINDWB</td>
                <th className='right-cell'>-₹{bookInfo.coupon_value}</th>
              </tr>
              <tr className='table-row discount'>
                <td className='left-cell' colSpan={2}>WB Discount</td>
                <th className='right-cell'>-₹{bookInfo.discount_value}</th>
              </tr>
              <tr className='table-row'>
                <td className='left-cell' colSpan={2}>Service & Tax</td>
                <th className='right-cell'>₹{bookInfo.total_services_amount + bookInfo.tax_amount}</th>
              </tr>
            </tbody>
            <tfoot id='tfooter'>
              <tr className='table-row table-footer'>
                <td className='left-cell' colSpan={2}><h3>Total booking amount</h3></td>
                <th className='right-cell'><h1>₹{bookInfo.total_without_tax + bookInfo.total_services_amount + bookInfo.tax_amount - (bookInfo.coupon_value + bookInfo.discount_value)}</h1></th>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
      <div className='help section row-flex'>
        <div className='column-flex'>
          <div><h2>Things To Know</h2></div>
        </div>
        <div className='column-flex'>
          <div><p>Something not right?<a href="#"> Chat with us</a> for help. </p></div>
          <div><p><a href="#">Read WB's Terms and Condition</a></p></div>
        </div>
      </div>

    </div>
  );
}
