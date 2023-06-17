import React, { useContext, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  Switch,
} from "react-router-dom";
import Footer from "../layout/Footer";
import LoaderPrimary from "../layout/Loader/LoaderPrimary";
import LoaderSecondary from "../layout/Loader/LoaderSecondary";
import Navbar2 from "../layout/Navbar2";
import Booking from "../pages/Booking";
import ConfirmationPage from "../pages/ConfirmationPage";
import HotelPage from "../pages/HotelPage";
import ProfilePage from "../pages/ProfilePage";
import CancellationPage from "../pages/CancellationPage";
import DealsPage from "../pages/DealsPage";
import Landing from "../pages/Landing";
import LoginPage from "../pages/LoginPage";
import Policy from "../pages/Policy";
import AboutUs from "../pages/AboutUs";
import MyAccountPage from "../pages/MyAccountPage";
import SearchResults from "../pages/SearchResults";
import Rating from "../pages/Rating";
import {
  getCityMenu,
  getHotelsByCustomerOrLocation,
} from "../redux/actions/hotels";
import ScrollToTop from "./ScrollToTop";
import PaymentForm from "../pages/PaymentForm";
import DateRoomsAdultCount from "../components/DateRoomsAdultCount";
import CityList from "../pages/CityList";
import FetchStatus from "../pages/Booking/FetchStatus";
import AirpayResponse from "../airpay";
import TermsAndConditions from "../pages/TermsAndConditions";
import Careers from "../pages/CancellationPage/Careers";
import RefundPolicy from "../pages/CancellationPage/RefundPolicy";
import ContactUs from "../pages/CancellationPage/ContactUs";
import WhatsAppWidget from "react-whatsapp-chat-widget";
import "react-whatsapp-chat-widget/index.css";
import companyLogo from "../media/images/logowithtext.png"
import { Propertylisting } from "../pages/PropertyListing/Propertylisting";
import Businesswb from "../pages/Wbbusiness/Businesswb";
import InvestorRelation from "../pages/InvesterRelation/InvestorRelation";
import Cancellation from "../pages/CancellationPage/Cancellation";
import Member from "../pages/Member/Member";
import Support from "../pages/Support/Support"


const Router = () => {
  const dispatch = useDispatch();
  const defaultSearchParams = {
    postalzipcode: 0,
    latitude: 0,
    longitude: 0,
    city_id: 2,
    locality_id: 0,
    customer_id: 0,
    from_date: new Date(),
    to_date: new Date(),
    room_count: 0,
    no_of_adults: 0,
    no_of_children: 0,
    search_text: "",
    room_info: [
      {
        no_of_adults: 2,
      },
    ],
  };

  const { cityMenu, hotels } = useSelector((state) => state.hotels);

  useEffect(() => {
    dispatch(getCityMenu());
    dispatch(getHotelsByCustomerOrLocation(defaultSearchParams));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (cityMenu === null || hotels === null) {
    return <LoaderPrimary />;
  }

  return (
    <BrowserRouter>
      <ScrollToTop>
        <Navbar2 />
        {/* author:asad:03-06-23: start */}
        <WhatsAppWidget
          phoneNo="918591975256"
          position="right"
          iconSize="50"
          iconColor="white"
          iconBgColor="#25D366"
          headerIcon={companyLogo}
          headerIconColor="pink"
          headerTxtColor="white"
          headerBgColor="#128C7E"
          headerTitle="Support@Wb"
          headerCaption="Online"
          bodyBgColor="#bbb"
          chatPersonName="Support"
          chatMessage={
            <>
              Hi there 👋 <br />
              <br /> How can I help you?
            </>
          }
          footerBgColor="#999"
          btnBgColor="yellow"
          btnTxtColor="black"
        />
        {/* author:asad:03-06-23: end */}
        <Routes>
          <Route exact path="/" element={<Landing />} />
          <Route exact path="/search" element={<SearchResults />} />
          <Route exact path="/hotelpage" element={<HotelPage />} />
          <Route exact path="/booking" element={<Booking />} />
          <Route exact path="/booking-fetching" element={<FetchStatus />} />
          <Route exact path="/property-listing" element={<Propertylisting />} />
          <Route exact path="/business-wb" element={<Businesswb />} />
          <Route
            exact
            path="/confirmationpage"
            element={<ConfirmationPage />}
          />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/myaccount" element={<MyAccountPage />} />
          <Route exact path="/profilepage" element={<ProfilePage />} />
          <Route
            exact
            path="/cancellationpage"
            element={<CancellationPage />}
          />
          <Route exact path="/transaction" element={<PaymentForm />} />
          <Route exact path="/deals" element={<DealsPage />} />
          <Route exact path="/daterange" element={<DateRoomsAdultCount />} />
          <Route exact path="/citylist" element={<CityList />} />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/about-us" element={<AboutUs />} />
          <Route exact path="/rating" element={<Rating />} />
          <Route exact path="/support" element={<Support />} />
          <Route exact path="/member" element={<Member />} />
          <Route
            exact
            path="/terms-and-conditions"
            element={<TermsAndConditions />}
          />
           <Route
            exact
            path="/careers"
            element={<Careers />}
          />
           <Route exact path="/investor-relation" element={<InvestorRelation/>} />
          <Route exact path="/cancellation" element={<Cancellation/>} />
          <Route exact path="/contact-us" element={<ContactUs />} />
          <Route exact path="/manage-booking" element={<RefundPolicy />} />
          <Route
            exact
            path="/airpay/responseairpay"
            element={<AirpayResponse />}
          />
          <Route path="*" element={<Navigate replace to="/" />} />
        </Routes>
        <Footer />
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default Router;
