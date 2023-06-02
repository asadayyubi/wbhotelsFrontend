import { createContext, useState } from "react";
export const LoginContext = createContext({});

export const LoginProvider = ({ children }) => {
  const defaultSearchParams = {
    postalzipcode: 0,
    latitude: 0,
    longitude: 0,
    city_id: 0,
    locality_id: 0,
    customer_id: 0,
    from_date: new Date(),
    to_date: new Date(new Date().valueOf() + 1000 * 3600 * 24),
    room_count: 0,
    no_of_adults: 0,
    no_of_children: 0,
    room_info: [
      {
        no_of_adults: 2,
      },
    ],
  };
  const [isLoggedIn, setIsLoggedIn] = useState(
    JSON.parse(localStorage.getItem("userProfileDetails")) || false
  );
  const [userProfileDetails, setUserProfileDetailsOld] = useState(
    JSON.parse(localStorage.getItem("userProfileDetails")) || {}
  );
  const [searchParams, setSearchParams] = useState(defaultSearchParams);
  const [rooms, setrooms] = useState([
    {
      roomNo: 1,
      personNo: 1,
      no_of_children: 0,
      child_range1: 0,
      child_range2: 0,
    },
  ]);
  const [range, setrange] = useState({
    startDate: new Date(),
    endDate: new Date(new Date().valueOf() + 1000 * 3600 * 24),
    key: "selection",
  });
  const [autoCompleteSelectedValue, setAutoCompleteSelectedValue] =
    useState("");
  const [discountsArray, setDiscountsArray] = useState([]);
  const [hotelDetails, setHotelDetails] = useState(undefined);
  const [searchResults, setSearchResults] = useState(undefined);

  const setUserProfileDetails = (data) => {
    setUserProfileDetailsOld(data);
    localStorage.setItem("userProfileDetails", JSON.stringify(data));
  };

  const logout = () => {
    setIsLoggedIn(false);
    setUserProfileDetails(null);
  };

  const value = {
    searchResults,
    setSearchResults,
    hotelDetails,
    setHotelDetails,
    isLoggedIn,
    setIsLoggedIn,
    userProfileDetails,
    setUserProfileDetails,
    searchParams,
    setSearchParams,
    range,
    setrange,
    rooms,
    setrooms,
    autoCompleteSelectedValue,
    setAutoCompleteSelectedValue,
    discountsArray,
    setDiscountsArray,
    logout,
  };

  return (
    <LoginContext.Provider value={value}>{children}</LoginContext.Provider>
  );
};
