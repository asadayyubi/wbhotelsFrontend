import React from "react";
import PropTypes from "prop-types";

const LoaderPrimary = (props) => {
  const { isFull } = props;
  return (
    <div className={`loader-primary ${isFull ? "loader-primary-full" : ""}`}>
      <div className="bar" />
    </div>
  );
};

LoaderPrimary.propTypes = {
  isFull: PropTypes.bool,
};

export default LoaderPrimary;
