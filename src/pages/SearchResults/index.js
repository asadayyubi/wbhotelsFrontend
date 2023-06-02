import { Switch, Button } from "@mui/material";
import React, { useContext, useEffect, useState } from "react";
import InputSelect from "../../components/input/InputSelect";
import LoaderPrimary from "../../layout/Loader/LoaderPrimary";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import SearchResultsCard from "./uis/SearchResultsCard";
import { useDispatch } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import { getHotelsByLocation } from "../../redux/actions/hotels";
import FilterComponent from "./FilterComponent";
import { LoginContext } from "../../Contexts/LoginContext";
import Drawer from "@mui/material/Drawer";
import FilterComponentForMobile from "./FileComponentForMobile";
import { API_GET_HOTELS_BY_LOCATION } from "../../apis";
import axios from "axios";

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

const SearchResults = () => {
  const { searchResults, setSearchResults, userProfileDetails } =
    useContext(LoginContext);
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  const { searchParams } = useContext(LoginContext);
  // console.log("..location...", location?.state?.localityId);
  // console.log("..cityid..", location);

  // let { searchResults } = useSelector((state) => state.hotels);
  let [filterInput, setFilterInput] = useState([]);
  let [isFilterView, setIsFilterView] = useState(false);
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const [selectedValue, setSelectedValue] = useState("Popularity");
  let filterResult = searchResults
    ? JSON.parse(JSON.stringify(searchResults))
    : {};

  function onFilterChange(filterInput) {
    filterInput = filterInput.filter((data) => {
      if (data.value === true) {
        return true;
      } else if (data.category === "price") {
        return true;
      }
      return false;
    });
    // console.log(filterInput);
    console.log(filterInput);
    setFilterInput(filterInput);
  }

  useEffect(() => {
    if (location?.state?.localityId) {
      setSearchResults(undefined);
      const payload = {
        postalzipcode: 0,
        latitude: 0,
        longitude: 0,
        city_id: 0,
        locality_id: location?.state?.localityId,
        customer_id: userProfileDetails?.id || 0,
        from_date: searchParams.from_date,
        to_date: searchParams.to_date,
        room_count: searchParams.room_count,
        no_of_adults: searchParams.no_of_adults,
        no_of_children: 0,
        room_info: searchParams.room_info,
        search_text: "",
      };
      axios.post(API_GET_HOTELS_BY_LOCATION, payload).then((response) => {
        setSearchResults(response.data.data);
      });
    }
  }, [location?.state?.localityId]);

  useEffect(() => {
    if (windowDimensions.width <= 525) {
      setIsFilterView(true);
    } else {
      setIsFilterView(false);
    }
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [windowDimensions.width]);

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    console.log("consoling value - ", selectedValue);
  };

  function filterResultFun(filterResult, searchResults) {
    if (searchResults && filterInput.length > 0) {
      filterResult.hotel_data = searchResults.hotel_data.filter((data) => {
        let amenitiesCheck = true;
        let priceCheck = true;
        let checkInFeature = true;
        let roomType = true;

        console.log("filterInput ", filterInput);
        // console.log(filterResult);

        filterInput.forEach((filter) => {
          if (filter.category === "amenities") {
            if (data.amenities) {
              const findAmenitiesTypeHotel = data.amenities.find((amenitie) => {
                return amenitie.name === filter.name;
              });
              if (findAmenitiesTypeHotel) {
                amenitiesCheck = true;
              } else {
                amenitiesCheck = false;
                return 0;
              }
            }
          }
          console.log("data -> ", data);
          if (filter.category === "payment_wise") {
            if (data.check_in_features) {
              console.log("data paymentwise -> ", data.check_in_features);

              // const payAtHotel = data.partialamountpercentage === 0;
              // const partialPayment = data.partialamountpercentage > 0 && data.partialamountpercentage < 100;
              // const fullPayment = data.partialamountpercentage === 100;
              //   console.log(filter)
              const isPaymentWiseAvailable = data.check_in_features.find(
                (check_in_feature) => {
                  return check_in_feature === filter.name;
                }
              );
              console.log("isPaymentWiseAvailable ", isPaymentWiseAvailable);
              if (isPaymentWiseAvailable) {
                checkInFeature = true;
              } else {
                checkInFeature = false;
                return 0;
              }
            }
          }
          if (filter.category === "room_types") {
            if (data.room_types.length) {
              const isRoomTypeAvailable = data.room_types.find((room_type) => {
                return room_type === filter.name;
              });
              if (isRoomTypeAvailable) {
                roomType = true;
              } else {
                roomType = false;
                return;
              }
            }
          }
          if (filter.category === "price" && filter.value !== 0) {
            if (data.price.min <= filter.value) {
              priceCheck = true;
            } else {
              priceCheck = false;
              return;
            }
          }
        });
        if (amenitiesCheck && priceCheck && checkInFeature && roomType)
          return true;
        return false;
      });
      console.log("fiterResult here ", filterResult.hotel_data);
    }
  }

  filterResultFun(filterResult, searchResults);

  if (searchResults) {
    if (isFilterView) {
      return (
        <div className="search-results">
          <div className="left">
            <Button
              onClick={toggleDrawer("left", true)}
              style={{
                fontSize: "20px",
                backgroundColor: "#0d9488",
                color: "#fafaff",
                marginLeft: "5px",
              }}
            >
              filter
            </Button>
            <Drawer
              anchor={"left"}
              open={state["left"]}
              onClose={toggleDrawer("left", false)}
            >
              <FilterComponentForMobile
                onFilterChange={onFilterChange}
                searchResults={searchResults}
              />
            </Drawer>
          </div>
          <div className="right">
            <div className="header">
              <h1>{filterResult?.hotel_data?.length} WBs in Around me</h1>
              <div className="map-switch">
                <p>Map View</p>
                <Switch />
              </div>
              <div className="sort-select">
                <InputSelect
                  label="Sort by"
                  options={[
                    { value: "popularity", name: "Popularity" },
                    { value: "guestratings", name: "Guest ratings" },
                    { value: "pricelh", name: "Price Low to High" },
                    { value: "pricehl", name: "Price High to Low" },
                    { value: "closest", name: "Show closest" },
                  ]}
                  value={selectedValue}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
            <div className="coupon">
              <div className="icon">
                <FileOpenIcon />
              </div>
              <div className="desc">
                <h3>
                  Earn <span>₹500</span>
                </h3>
                <p>Create an account to get ₹500 as LOGO Money</p>
              </div>
            </div>
            {filterResult ? (
              filterResult?.hotel_data?.map((hotel) => (
                <SearchResultsCard
                  key={hotel.id}
                  data={hotel}
                  onClickCard={() =>
                    navigate(`/hotelpage?id=${hotel.id}`, {
                      state: { data: hotel.id },
                    })
                  }
                />
              ))
            ) : (
              <LoaderPrimary />
            )}
          </div>
        </div>
      );
    } else {
      return (
        <div className="search-results">
          <FilterComponent
            onFilterChange={onFilterChange}
            searchResults={searchResults}
          />
          <div className="right">
            <div className="header">
              <h1>{filterResult?.hotel_data?.length} WBs in Around me</h1>
              <div className="map-switch">
                <p>Map View</p>
                <Switch />
              </div>
              <div className="sort-select">
                <InputSelect
                  label="Sort by"
                  options={[
                    { value: "popularity", name: "Popularity" },
                    { value: "guestratings", name: "Guest ratings" },
                    { value: "pricelh", name: "Price Low to High" },
                    { value: "pricehl", name: "Price High to Low" },
                    { value: "closest", name: "Show closest" },
                  ]}
                  value={selectedValue}
                  onChange={handleSelectChange}
                />
              </div>
            </div>
            <div className="coupon">
              <div className="icon">
                <FileOpenIcon />
              </div>
              <div className="desc">
                <h3>
                  Earn <span>₹500</span>
                </h3>
                <p>Create an account to get ₹500 as LOGO Money</p>
              </div>
            </div>
            {filterResult ? (
              filterResult?.hotel_data?.map((hotel) => (
                <SearchResultsCard
                  key={hotel.id}
                  data={hotel}
                  onClickCard={() =>
                    navigate(`/hotelpage?id=${hotel.id}`, {
                      state: { data: hotel.id },
                    })
                  }
                />
              ))
            ) : (
              <LoaderPrimary />
            )}
          </div>
        </div>
      );
    }
  } else {
    return <LoaderPrimary />;
  }
};

export default SearchResults;
