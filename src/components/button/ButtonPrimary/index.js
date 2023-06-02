import React from "react";
import { Link } from "react-router-dom";
import { ButtonBase } from "@mui/material";

const ButtonPrimary = (props) => {
  const { link, text, icon, onClick, className } = props;
  return link ? (
    <a className={`button-primary-comp ${className}`} href={link} target="_blank">
      {icon}
      <p>{text}</p>
    </a>
  ) : (
    <div className={`button-primary-comp ${className}`} onClick={onClick}>
      {icon}
      <p>{text}</p>
    </div>
  );
};

export default ButtonPrimary;
