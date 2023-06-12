import SliderInput from "../../components/SliderInput";
import { Switch } from "@mui/material";
const selectedFilter = [];

const FilterComponent = function (props) {

    const {onFilterChange, searchResults } = props;

    const handleSliderChange = (event, newValue) => {
      const isInput = selectedFilter.find((input) => {
        if (input.category === 'price') {
          input.value = newValue;
          return true;
        }
      });
      if (!isInput) {
        selectedFilter.push({
          category: 'price',
          name: 'min',
          value: newValue
        });
      }
      onFilterChange(selectedFilter);
    }
    const toggleChecked = (data, value) => {
      const nameData = data.target.name.split('~');
      const isInput = selectedFilter.find((input) => {
        if (input.name === nameData[0]) {
          input.value = data.target.checked;
          return true;
        }
      });
      if (!isInput) {
        selectedFilter.push({
          category: nameData[1],
          name: nameData[0],
          value: data.target.checked
        });
      }
      onFilterChange(selectedFilter);
    };
    
    if (searchResults) {
      const { filter_info } = searchResults;
      // console.log("fiterInfo -> ",filter_info      );
      return (
        <div className="left" >
          <div className="header">
            <h1>Filter</h1>
            <div className="btn">Clear all</div>
          </div>
          <div className="price">
            <h3>Price</h3>
            <SliderInput min={filter_info?.price_range?.min} max={filter_info?.price_range?.max} handleChangeCallBack={handleSliderChange} />
            <div className="range">
              <p>{filter_info?.price_range?.min}</p>
              <p>{filter_info?.price_range?.max}</p>
            </div>
          </div>
          <div className="filters">
            <h3>Amenities</h3>
            {filter_info?.amenities?.map(data => {
              return (
                <div className="filter">
                  <Switch onChange={toggleChecked} name={`${data}~amenities`} />
                  <p>{data}</p>
                </div>
              )
            })}
          </div>
          <div className="filters">
            <h3>Check-in features</h3>
            {filter_info?.payment_wise?.map(data => {
              return (
                <div className="filter">
                  <Switch onChange={toggleChecked} name={`${data}~payment_wise`} />
                  <p>{data}</p>
                </div>
              )
            })}
          </div>
          <div className="filters">
            <h3>Room Type</h3>
            {filter_info?.room_types?.map(data => {
              return (
                <div className="filter">
                  <Switch onChange={toggleChecked} name={`${data}~room_types`} />
                  <p>{data}</p>
                </div>
              )
            })}
          </div>
        </div>
      )
    }
};

export default FilterComponent;