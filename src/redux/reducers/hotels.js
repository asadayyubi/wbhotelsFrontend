import { GET_CITY_MENU, GET_HOTELS_BY_LOCATION, GET_HOTELS_BY_CUSTOMER_OR_LOCATION, GET_HOTELS_BY_ID, GET_USER_DETAILS_BY_ID, GET_CUSTOMER_BOOKING_INFO } from "../types/hotels";

const initialState = {
  cityMenu: null,
  hotels: null,
  searchResults: null,
  hotelDetails: null,
};

const hotelsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case GET_CITY_MENU:
      return { ...state, cityMenu: payload };
    case GET_HOTELS_BY_CUSTOMER_OR_LOCATION:
      return { ...state, hotels: payload };
    case GET_HOTELS_BY_LOCATION:
      return { ...state, searchResults: payload };
    case GET_HOTELS_BY_ID:
      return { ...state, hotelDetails: payload };
    case GET_USER_DETAILS_BY_ID:
      return { ...state, userDetails: payload };
    case GET_CUSTOMER_BOOKING_INFO:
      return { ...state, customerBookingInfo: payload };
    default:
      return state;
  }
};

export default hotelsReducer;
