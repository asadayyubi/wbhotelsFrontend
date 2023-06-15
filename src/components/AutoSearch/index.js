import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import parse from "autosuggest-highlight/parse";
import throttle from "lodash/throttle";
import "./autoStyle.css";
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from "use-places-autocomplete";
import { LoginContext } from "../../Contexts/LoginContext";
import { Tooltip } from "@mui/material";

// This key was created specifically for the demo in mui.com.
// You need to create a new one for your application.
const GOOGLE_MAPS_API_KEY = "AIzaSyBPsL0YubbTmSDuPDksHgNpJDl2m95bFbg";

function loadScript(src, position, id) {
  if (!position) {
    return;
  }

  const script = document.createElement("script");
  script.setAttribute("async", "");
  script.setAttribute("id", id);
  script.src = src;
  position.appendChild(script);
}

const autocompleteService = { current: null };

export default function GoogleMaps(props) {
  const { onPlaceSelected } = props;
  const { autoCompleteSelectedValue, setAutoCompleteSelectedValue } =
    React.useContext(LoginContext);
  const [value, setValue] = React.useState(null);
  const [inputValue, setInputValue] = React.useState("");
  const [options, setOptions] = React.useState([]);
  const [lat_Lng, setLatLng] = React.useState({});
  const loaded = React.useRef(false);

  if (typeof window !== "undefined" && !loaded.current) {
    if (!document.querySelector("#google-maps")) {
      loadScript(
        `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
        document.querySelector("head"),
        "google-maps"
      );
    }

    loaded.current = true;
  }

  const fetch = React.useMemo(
    () =>
      throttle((request, callback) => {
        autocompleteService.current.getPlacePredictions(request, callback);
      }, 200),
    []
  );

  React.useEffect(() => {
    // console.log("autoComplete1:");
    // console.log("value:", value);
    // console.log("inputValue:", inputValue);
    // console.log("options:", options);
    onPlaceSelected(value, inputValue || autoCompleteSelectedValue, lat_Lng);
    let active = true;

    if (!autocompleteService.current && window.google) {
      autocompleteService.current =
        new window.google.maps.places.AutocompleteService();
    }
    if (!autocompleteService.current) {
      return undefined;
    }

    if (inputValue === "") {
      setOptions(value ? [value] : []);
      return undefined;
    }

    fetch(
      { input: inputValue, componentRestrictions: { country: "IN" } },
      (results) => {
        if (active) {
          let newOptions = [];

          if (value) {
            newOptions = [value];
          }

          if (results) {
            newOptions = [...newOptions, ...results];
          }

          setOptions(newOptions);
        }
      }
    );

    return () => {
      active = false;
    };
  }, [value, inputValue, fetch, lat_Lng]);

  function setSelectedValue(selectedValue) {
    setValue(selectedValue);
    if (selectedValue) {
      getGeocode({ address: selectedValue.description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => setLatLng({ lat, lng }))
        .catch((error) => console.log("😱 Error: ", error));
    }
  }
  function handleSelect({ description }) {
    return () => {
      setValue(description, false);

      // Get latitude and longitude via utility functions
      getGeocode({ address: description })
        .then((results) => getLatLng(results[0]))
        .then(({ lat, lng }) => setLatLng({ lat, lng }))
        .catch((error) => console.log("😱 Error: ", error));
    };
  }
  return (
    <Autocomplete
      id="google-map-demo"
      getOptionLabel={(option) =>
        typeof option === "string" ? option : option.description
      }
      style={{ fontWeight: "bold", color: "red" }}
      filterOptions={(x) => x}
      options={options}
      autoComplete
      includeInputInList
      filterSelectedOptions
      value={autoCompleteSelectedValue}
      onChange={(event, newValue) => {
        setOptions(newValue ? [newValue, ...options] : options);
        setSelectedValue(newValue);
      }}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        setAutoCompleteSelectedValue(newInputValue);
      }}
      renderInput={(params) => (
        <Tooltip
          title={autoCompleteSelectedValue}
          sx={{ fontWeight: "bold", color: "red" }}
        >
          <TextField
            {...params}
            label="Search by city, hotel or neighbourhood"
            variant="standard"
          />
        </Tooltip>
      )}
      renderOption={(props, option) => {
        const matches =
          option.structured_formatting.main_text_matched_substrings;
        const parts = parse(
          option.structured_formatting.main_text,
          matches.map((match) => [match.offset, match.offset + match.length])
        );

        return (
          <li {...props}>
            <Grid container alignItems="center" onClick={handleSelect(option)}>
              <Grid item>
                <Box
                  component={LocationOnIcon}
                  sx={{ color: "text.secondary", mr: 2 }}
                />
              </Grid>
              <Grid item md>
                {parts.map((part, index) => (
                  <span
                    key={index}
                    style={{
                      fontWeight: part.highlight ? 700 : 400,
                    }}
                  >
                    {part.text}
                  </span>
                ))}

                <Typography variant="h5" color="text.secondary">
                  {option.structured_formatting.secondary_text}
                </Typography>
              </Grid>
            </Grid>
          </li>
        );
      }}
    />
  );
}

// author:asad:06-06-23:start

// import * as React from "react";
// import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";
// import Autocomplete from "@mui/material/Autocomplete";
// import LocationOnIcon from "@mui/icons-material/LocationOn";
// import Grid from "@mui/material/Grid";
// import Typography from "@mui/material/Typography";
// import parse from "autosuggest-highlight/parse";
// import throttle from "lodash/throttle";
// import "./autoStyle.css";
// import usePlacesAutocomplete, {
//   getGeocode,
//   getLatLng,
// } from "use-places-autocomplete";
// import { LoginContext } from "../../Contexts/LoginContext";
// import { Tooltip } from "@mui/material";
// import { useEffect, useState } from "react";
// import { getHotelByWordSearch } from "../../apis/searchHotel.api";

// const GOOGLE_MAPS_API_KEY = "AIzaSyBPsL0YubbTmSDuPDksHgNpJDl2m95bFbg";

// function loadScript(src, position, id) {
//   if (!position) {
//     return;
//   }

//   const script = document.createElement("script");
//   script.setAttribute("async", "");
//   script.setAttribute("id", id);
//   script.src = src;
//   position.appendChild(script);
// }

// const autocompleteService = { current: null };

// export default function GoogleMaps(props) {
//   const { onPlaceSelected } = props;
//   const { autoCompleteSelectedValue, setAutoCompleteSelectedValue } =
//     React.useContext(LoginContext);
//   const [value, setValue] = React.useState(null);
//   const [inputValue, setInputValue] = React.useState("");
//   const [options, setOptions] = React.useState([]);
//   const [latLng, setLatLng] = React.useState({});
//   const [isInitialRender, setIsInitialRender] = useState(true);
//   const [hotelData, setHotelData] = useState([]);
//   const [searchType, setSearchType] = useState("place");
//   const loaded = React.useRef(false);

//   if (typeof window !== "undefined" && !loaded.current) {
//     if (!document.querySelector("#google-maps")) {
//       loadScript(
//         `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAPS_API_KEY}&libraries=places`,
//         document.querySelector("head"),
//         "google-maps"
//       );
//     }

//     loaded.current = true;
//   }

//   useEffect(() => {
//     if (isInitialRender) {
//       setIsInitialRender(false);
//       return;
//     }

//     const delayDebounceFn = setTimeout(() => {
//       if (searchType === "hotel") {
//         // Fetch hotel suggestions
//         getHotelByWordSearch(
//           { search_text: inputValue },
//           10,
//           (responseData) => {
//             setHotelData(responseData);
//             const apiOptions = responseData.map((item) => ({
//               description: item.hotelname,
//               structured_formatting: {
//                 main_text: item.hotelname,
//                 main_text_matched_substrings: [],
//                 secondary_text: item.completeaddress,
//               },
//               isHotel: true,
//               hotelData: item,
//             }));
//             setOptions(apiOptions);
//           }
//         );
//       } else {
//         // Fetch place suggestions
//         const service = new window.google.maps.places.AutocompleteService();
//         service.getPlacePredictions({ input: inputValue }, (results) => {
//           if (results) {
//             const googleOptions = results.map((result) => ({
//               description: result.description,
//               structured_formatting: {
//                 main_text: result.structured_formatting.main_text,
//                 main_text_matched_substrings:
//                   result.structured_formatting.main_text_matched_substrings,
//                 secondary_text:
//                   result.structured_formatting.secondary_text || "",
//               },
//               isGooglePlace: true,
//             }));
//             const mergedOptions = [...googleOptions, ...hotelData];
//             setOptions(mergedOptions);
//           } else {
//             setOptions([]);
//           }
//         });
//       }
//     }, 200);

//     return () => clearTimeout(delayDebounceFn);
//   }, [inputValue, searchType, hotelData]);

//   const fetch = React.useMemo(
//     () =>
//       throttle((request, callback) => {
//         if (request.input === inputValue) {
//           if (searchType === "hotel") {
//             // Fetch hotel suggestions
//             getHotelByWordSearch(
//               { search_text: inputValue },
//               10,
//               (responseData) => {
//                 setHotelData(responseData);
//                 const apiOptions = responseData.map((item) => ({
//                   description: item.hotelname,
//                   structured_formatting: {
//                     main_text: item.hotelname,
//                     main_text_matched_substrings: [],
//                     secondary_text: item.completeaddress,
//                   },
//                   isHotel: true,
//                   hotelData: item,
//                 }));
//                 callback(apiOptions);
//               }
//             );
//           } else {
//             // Fetch place suggestions
//             const service = new window.google.maps.places.AutocompleteService();
//             service.getPlacePredictions({ input: inputValue }, (results) => {
//               if (results) {
//                 const googleOptions = results.map((result) => ({
//                   description: result.description,
//                   structured_formatting: {
//                     main_text: result.structured_formatting.main_text,
//                     main_text_matched_substrings:
//                       result.structured_formatting.main_text_matched_substrings,
//                     secondary_text:
//                       result.structured_formatting.secondary_text || "",
//                   },
//                   isGooglePlace: true,
//                 }));
//                 const mergedOptions = [...googleOptions, ...hotelData];
//                 callback(mergedOptions);
//               } else {
//                 callback([]);
//               }
//             });
//           }
//         }
//       }, 200),
//     [searchType, hotelData]
//   );

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);

//     // Determine the search type based on the input value
//     const newSearchType = event.target.value.toLowerCase().includes("hotel")
//       ? "hotel"
//       : "place";
//     setSearchType(newSearchType);
//   };

//   const handleChange = (event, newValue) => {
//     setValue(newValue);

//     if (newValue) {
//       if (newValue.isGooglePlace) {
//         getGeocode({ address: newValue.description })
//           .then((results) => getLatLng(results[0]))
//           .then((latLng) => {
//             setLatLng(latLng);
//             onPlaceSelected({
//               location: latLng,
//               description: newValue.description,
//             });
//           })
//           .catch((error) => {
//             console.log("Error: ", error);
//           });
//       } else if (newValue.isHotel) {
//         setAutoCompleteSelectedValue(newValue.hotelData);
//       }
//     } else {
//       setLatLng({});
//       onPlaceSelected(null);
//     }
//   };

//   return (
//     <Box>
//       <div className="autocomplete-root">
//         <Autocomplete
//           id="google-map-demo"
//           sx={{ width: 300 }}
//           getOptionLabel={(option) =>
//             typeof option === "string" ? option : option.description
//           }
//           filterOptions={(x) => x}
//           options={options}
//           autoComplete
//           includeInputInList
//           value={value}
//           onChange={handleChange}
//           onInputChange={handleInputChange}
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               label="Location"
//               variant="outlined"
//               fullWidth
//             />
//           )}
//           renderOption={(props, option) => {
//             const { structured_formatting } = option;
//             const matches = structured_formatting.main_text_matched_substrings;
//             const parts = parse(
//               structured_formatting.main_text,
//               matches.map((match) => [
//                 match.offset,
//                 match.offset + match.length,
//               ])
//             );

//             return (
//               <li {...props} key={option.description}>
//                 <Grid container alignItems="center">
//                   <Grid item>
//                     <LocationOnIcon sx={{ color: "text.secondary" }} />
//                   </Grid>
//                   <Grid item xs>
//                     {parts.map((part, index) => (
//                       <span
//                         key={index}
//                         style={{
//                           fontWeight: part.highlight ? 700 : 400,
//                         }}
//                       >
//                         {part.text}
//                       </span>
//                     ))}

//                     <Typography variant="body2" color="text.secondary">
//                       {structured_formatting.secondary_text}
//                     </Typography>
//                   </Grid>
//                 </Grid>
//               </li>
//             );
//           }}
//         />
//         {value && (
//           <Tooltip title="Clear">
//             <button
//               className="clear-button"
//               onClick={() => {
//                 setValue(null);
//                 setInputValue("");
//                 setLatLng({});
//                 onPlaceSelected(null);
//               }}
//             >
//               X
//             </button>
//           </Tooltip>
//         )}
//       </div>
//     </Box>
//   );
// }
