import axios from "axios";
import { API_GET_CITY_MENU, API_GET_HOTELS_BY_LOCATION, API_GET_HOTELS_BY_CUSTOMER_OR_LOCATION, API_GET_HOTELS_BY_ID, API_GET_USER_DETAILS_BY_ID, API_GET_CUSTOMER_BOOKING_INFO } from "../../apis";
import { GET_CITY_MENU, GET_HOTELS_BY_LOCATION, GET_HOTELS_BY_CUSTOMER_OR_LOCATION, GET_HOTELS_BY_ID, GET_USER_DETAILS_BY_ID, GET_CUSTOMER_BOOKING_INFO } from "../types/hotels";

export const getCityMenu = () => async (dispatch) => {
  try {
    const cityMenu = await axios.get(API_GET_CITY_MENU);
    if (cityMenu.status === 200 && cityMenu.data.status === 200) {
      dispatch({ type: GET_CITY_MENU, payload: cityMenu.data.data });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getHotelsByLocation = (payload) => async (dispatch) => {
  // const { latitude, longitude } = locationInfo;
  // if (latitude && longitude) {
  //   cityId = 2; //we can remove this condition once we have data for each city id in database.
  // }
  // console.log("..cityid..", cityId);
  try {
    const searchResults = await axios.post(API_GET_HOTELS_BY_LOCATION, payload);
    if (searchResults.status === 200 && searchResults.data.status === 200) {
      dispatch({
        type: GET_HOTELS_BY_LOCATION,
        payload: searchResults.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getHotelsById = (id) => async (dispatch) => {
  try {
    const searchResults = await axios.post(API_GET_HOTELS_BY_ID, {
      id,
      user_id: 0,
    });
    if (searchResults.status === 200 && searchResults.data.status === 200) {
      dispatch({
        type: GET_HOTELS_BY_ID,
        payload: searchResults.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getUserDetails = (id) => async (dispatch) => {
  try {
    const searchResults = await axios.post(API_GET_USER_DETAILS_BY_ID, {
      user_id: id,
    });
    if (searchResults.status === 200 && searchResults.data.status === 200) {
      dispatch({
        type: GET_USER_DETAILS_BY_ID,
        payload: searchResults.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};
export const getCustomerBookingInfo = (id) => async (dispatch) => {
  try {
    const searchResults = await axios.post(API_GET_CUSTOMER_BOOKING_INFO, {
      customer_id: id,
    });
    if (searchResults.status === 200 && searchResults.data.status === 200) {
      dispatch({
        type: GET_CUSTOMER_BOOKING_INFO,
        payload: searchResults.data.data,
      });
    }
  } catch (error) {
    console.log(error);
  }
};

export const getHotelsByCustomerOrLocation = (searchParams) => async (dispatch) => {
  try {
    const hotels = await axios.post(API_GET_HOTELS_BY_CUSTOMER_OR_LOCATION, searchParams);
    if (hotels.status === 200 && hotels.data.status === 200) {
      dispatch({
        type: GET_HOTELS_BY_CUSTOMER_OR_LOCATION,
        payload: {
          exploreCollections: hotels.data.data.explore_collections,
          favourite: hotels.data.data.favourite,
          handpicked: hotels.data.data.handpicked,
          offersJson: hotels.data.data.offers_json,
          walletsJson: hotels.data.data.wallets_json,
        },
      });
    }
  } catch (error) {
    console.log(error);
  }
};
