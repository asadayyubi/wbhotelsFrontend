
import Typography from "@mui/material/Typography";
import React, { useEffect, useState } from "react";
import ConnectedForm from "../../components/Form/MyForm"

import axios from "axios";
import { API_INSERT_LIST_PROPERTY_DATA } from "../../apis";

const insertData = async (params = {}) => {
  try {
    console.log(params,"calling api");
    const res = await axios.post(API_INSERT_LIST_PROPERTY_DATA, params);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};



export const Propertylisting = () => {
 

  return (
    <div>
      <Typography
        gutterBottom
        variant="h2"
        align="center"
        sx={{
          paddingTop: 2,
          paddingBottom: 2,
          marginTop: 2,
          fontSize: 25,
          fontWeight: 600,
        }}
      >
        WB hotels & Resorts. <br />
        Please enter your property details
      </Typography>
        <ConnectedForm insertData={insertData} propertylisting={"property_listing"}/>
     
    </div>
  );
};
