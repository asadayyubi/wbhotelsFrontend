import React from "react";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import BookingDetails from "../../components/BookingDetails";

const ConfirmationPage = () => {
    const userData = {
        fName: "Manish",
        lName: "Kumar",
        phonNo: "9987235467",
        email: "abc123@gmail.com",
        WBMoneyBalance: 1000,
        balanceExpiryDate: "Jan 21, 2023"
    };
    const bookInfo = {
        bookingId: "E18N3735",
        hotelName: "FlagShip 75037 Kings Stay",
        bookingData: "Aug 22, 2022",
        startDate: "Aug 22, 2022",
        endDate: "Aug 23, 2022",
        imageDetail: {
            url: 'http://ratebotai.com/python_assets/pic2.jpeg',
            alt: 'FlagShip'
        },
        guestCount: 2,
        roomCount: 1,
        pendingAmount: 0,
        chekedOut: true,
        confirm: false,
        cancelled: true,
    };
    const Header = function(props) {
        const {bookInfo, userData} = props;
        console.log(props);
        if(bookInfo.confirm) {
            return (
                <div>
                    <div class="confirm text">Great! Your stay is confirmed.</div>
                    <div class="confirm-sub-text">You will soon receive an email confirmation on {userData.email}</div>
                    <div class="print-button">
                        <ButtonPrimary text="Print" />
                    </div>
                </div>
            )
        } else {
            return (
                <div class="cancelled text">Your booking has been cancelled</div>
            )
        }
    }
    return (
        <div className="cancellation-page column-flex">
            <div class="header section">
                <Header bookInfo={bookInfo} userData={userData}/>
            </div>
            <div class="main section shadow">
                <BookingDetails bookInfo={bookInfo} userData={userData}/>
            </div>
        </div>
    );
};

export default ConfirmationPage;
