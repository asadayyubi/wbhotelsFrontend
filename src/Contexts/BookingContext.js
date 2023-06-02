import { createContext, useContext, useState } from "react"

const BookingContext = createContext();

export const useBookingData = () => useContext(BookingContext);

export const BookingProvider = ({ children }) => {
    const [ bookingData, setBookingData ] = useState({});
    const [ priceAndRoomDetails, setPriceAndRoomDetails ] = useState({});
    const [ booking_id, setBooking_idStatic ] = useState(localStorage.getItem("booking_id") || null);
    const setBooking_id = (data) => {
      localStorage.setItem("booking_id", data);
      setBooking_idStatic(data);
    }

    const value={
        bookingData,
        setBookingData,
        priceAndRoomDetails,
        setPriceAndRoomDetails,
        setBooking_id
    }

    return(
        <BookingContext.Provider value={value}>
            {children}
        </BookingContext.Provider>
    )
}