import axios from "axios"
import { API_GET_AIRPAY_ORDER_VERIFY, API_GET_RATING_DATA, API_INSERT_RATING_DATA } from "."

export const getAirpayOrderVerify = (data, fucn) => {
    axios.post(API_GET_AIRPAY_ORDER_VERIFY, data)
    .then(res => {
        console.log(res.data);
        // func(res.data);
    })
}

export const getRatingData = (data, func) => {
    axios.get(`${API_GET_RATING_DATA}?custumer_id=${data.custumer_id}&booking_id=${data.booking_id}&hotel_id=${data.hotel_id}`)
    .then(res => func(res.data.data));
}

export const insertRatingData = (data) => {
    axios.post(API_INSERT_RATING_DATA, data)
    .then(res => console.log(res.data));
}