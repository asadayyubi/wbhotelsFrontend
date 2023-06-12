import { CardContent, Grid, TextField } from "@material-ui/core";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import React, { useState } from "react";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import { spacing } from "@mui/system";
import BasicModal from "../../components/Modal/Modal";
import axios from "axios";
import { API_INSERT_LIST_PROPERTY_DATA } from "../../apis";

const initState = {
  email: "",
  company_name: "",
  company_type: "",
  address: "",
  number: "",
  website: "",
  inquired_for:"for_bussiness"
};



const insertData = async (params = {}) => {
  try {
    console.log(params,"calling api");
    const res = await axios.post(API_INSERT_LIST_PROPERTY_DATA, params);
    console.log(res);
  } catch (error) {
    console.log(error);
  }
};

const Businesswb = () => {
  const [inputData, setInputData] = useState(initState);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputData({
      ...inputData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    // e.preventDefaut();
    console.log("button clicked");
    console.log(inputData);
    insertData(inputData);
    setInputData(initState);
    
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const { email, company_name, address, number, company_type, website } =
    inputData;

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

      <Card
        sx={{ maxWidth: 600, padding: 2 }}
        align="center"
        style={{ textAlign: "center", margin: "auto", marginBottom: 4 }}
      >
        <CardContent>
          <Grid container spacing={1}>
            <Grid xs={12} item>
              <TextField
                label="Company name"
                placeholder="Please enter your Company name"
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { fontSize: 25 } }}
                InputProps={{ sx: { height: 80 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="company_name"
                onChange={handleInputChange}
                value={company_name}
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Types of company"
                placeholder="Please enter your types of company"
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { fontSize: 25 } }}
                InputProps={{ sx: { height: 80 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="company_type"
                onChange={handleInputChange}
                value={company_type}
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Address"
                placeholder="Please enter your address"
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { fontSize: 25 } }}
                InputProps={{ sx: { height: 80 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                name="address"
                type="text"
                value={address}
                onChange={handleInputChange}
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Mobile"
                placeholder="Please enter your mobile number"
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { fontSize: 25 } }}
                InputProps={{ sx: { height: 80 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                type="number"
                name="number"
                value={number}
                onChange={handleInputChange}
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Website"
                placeholder="Please enter your website link"
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { fontSize: 25 } }}
                InputProps={{ sx: { height: 80 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                type="text"
                name="website"
                value={website}
                onChange={handleInputChange}
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <TextField
                label="Email"
                placeholder="Please enter your email"
                fullWidth
                variant="outlined"
                required
                inputProps={{ style: { fontSize: 25 } }}
                InputProps={{ sx: { height: 80 } }}
                InputLabelProps={{ style: { fontSize: 12 } }}
                type="email"
                name="email"
                value={email}
                onChange={handleInputChange}
              ></TextField>
            </Grid>
            <Grid xs={12} item>
              <ButtonPrimary
                text={"Submit"}
                onClick={(e) => handleSubmit(e)}
              ></ButtonPrimary>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
      {showModal && <BasicModal onClose={handleCloseModal} />}
    </div>
  );
};

export default Businesswb;
