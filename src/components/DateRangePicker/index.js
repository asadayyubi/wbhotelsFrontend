import React, { useState } from "react";
import { DateRangePicker as DateRange } from "react-date-range";
import "react-date-range/dist/styles.css"; // main css file
import "react-date-range/dist/theme/default.css"; // theme css file

const DateRangePicker = (props) => {
  const { value, setvalue } = props;

  function handleSelect(date) {
    // console.log(date.selection);
    setvalue(date.selection);
  }

  return (
    <DateRange ranges={[value]} onChange={handleSelect} minDate={new Date()} />
  );
};

export default DateRangePicker;
