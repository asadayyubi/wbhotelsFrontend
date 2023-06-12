const BASE_URL = "https://api.ratebotai.com:8443";

const API_INSERT_LIST_PROPERTY_DATA = BASE_URL + "/insert_property_data"
const API_GET_CITY_MENU = BASE_URL + "/get_city_locality";
const API_GET_HOTELS_BY_CUSTOMER_OR_LOCATION =
    BASE_URL + "/get_hotels_by_customer_or_location";
    export const API_GET_HOTEL_BY_WORD_SEARCH =
  BASE_URL + "/get_hotel_by_word_search";
const API_GET_HOTELS_BY_LOCATION = BASE_URL + "/get_hotels_by_location";
const API_GET_HOTELS_BY_ID = BASE_URL + "/get_hotels_by_id";
const API_GET_USER_DETAILS_BY_ID = BASE_URL + "/get_user_data";
const API_GET_CUSTOMER_BOOKING_INFO = BASE_URL + "/get_customer_booking_info";
const API_GET_AIRPAY_ORDER_VERIFY = BASE_URL + "/get_airpay_order_verify";

const API_LOGIN_BY_OTP = BASE_URL + "/login_by_otp";
const API_CHECK_OTP = BASE_URL + "/check_otp";

const API_GET_RATING_DATA = `${BASE_URL}/get_rating_data`;

const API_INSERT_RATING_DATA = BASE_URL + "/insert_rating_data";

export { API_INSERT_RATING_DATA, API_GET_RATING_DATA, API_GET_AIRPAY_ORDER_VERIFY, API_GET_CITY_MENU, API_GET_HOTELS_BY_LOCATION, API_GET_HOTELS_BY_CUSTOMER_OR_LOCATION, API_GET_HOTELS_BY_ID, API_GET_USER_DETAILS_BY_ID, API_GET_CUSTOMER_BOOKING_INFO, API_LOGIN_BY_OTP, API_CHECK_OTP ,API_INSERT_LIST_PROPERTY_DATA};
