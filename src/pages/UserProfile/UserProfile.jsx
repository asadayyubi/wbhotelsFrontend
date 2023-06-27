// import React from 'react'
import React, { useContext } from "react";
import ButtonPrimary from "../../components/button/ButtonPrimary";
import { useNavigate } from "react-router-dom";
import { LoginContext } from "../../Contexts/LoginContext";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import axios from "axios";
import "./userProfile.css";

const UserProfile = () => {
  const { userProfileDetails, setUserProfileDetails, logout } =
    useContext(LoginContext);
  function onEdit() {
    const inputElements = document.querySelectorAll(".profile-input1");
    for (let inputElement of inputElements) {
      console.log(inputElement);
      if (inputElement.id !== "phoneNumber") {
        inputElement.style.border = "solid 0.1rem black";
        inputElement.disabled = false;
        const submitButton = document.getElementById("submit");
        submitButton.style.display = "block";
      }
    }
  }

  function onUpdate() {
    let userDataForm = {
      firstname: "",
      lastname: "",
      email: "",
    };
    const inputElements = document.getElementsByClassName("profile-input1");
    console.log(inputElements);
    for (let inputElement of inputElements) {
      if (inputElement.id === "fullName") {
        const fullName = inputElement.value.split(" ");
        userDataForm.firstname = fullName[0];
        userDataForm.lastname = fullName[1];
      }
      if (inputElement.id === "email") {
        userDataForm.email = inputElement.value;
      }
      inputElement.style.border = "hidden";
      inputElement.disabled = true;
      const submitButton = document.getElementById("submit");
      submitButton.style.display = "none";
    }
    userProfileDetails.first_name = userDataForm.firstname;
    userProfileDetails.last_name = userDataForm.lastname;
    userProfileDetails.email = userDataForm.email;
    userProfileDetails.username = userDataForm.firstname;
    userProfileDetails.customer_id = userProfileDetails.id;
    const dateToBeUpdate = {
      first_name: userProfileDetails.first_name,
      last_name: userProfileDetails.last_name,
      username: userProfileDetails.username,
      email: userProfileDetails.email,
      customer_id: userProfileDetails.id,
      phone_number: userProfileDetails.phone_number,
    };
    axios
      .post(
        "https://api.ratebotai.com:8443/update_customer_info_data",
        dateToBeUpdate
      )
      .then((response) => {
        console.log("data has beed updated: ", response);
        setUserProfileDetails(userProfileDetails);
      });
  }

  return (
    <>
      <div className="edit-card-container">
        <div className="left-card shadow edit">
          <h1>
            {" "}
            Edit Profile{" "}
            <span onClick={() => onEdit()}>
              <ModeEditOutlineOutlinedIcon />
            </span>
          </h1>
          <form className="form-edit">
            <div>
              <span>Full Name</span>
              <div>
                <input
                  id="fullName"
                  type="text"
                  className="profile-input1"
                  defaultValue={
                    userProfileDetails.first_name +
                    " " +
                    userProfileDetails.last_name
                  }
                  disabled
                />
              </div>
            </div>
            <div>
              <span>Phone Number</span>
              <div>
                <input
                  id="phoneNumber"
                  type="text"
                  defaultValue={userProfileDetails.phone_number}
                  className="profile-input1"
                  disabled
                />
              </div>
            </div>
            <div>
              <span>Email Address</span>
              <div>
                <input
                  id="email"
                  type="email"
                  className="profile-input1"
                  defaultValue={userProfileDetails.email}
                  disabled
                />
              </div>
            </div>
            <div id="submit" style={{ display: "none", width: "100px" }}>
              <ButtonPrimary text="Update" onClick={() => onUpdate()} />
            </div>
          </form>
        </div>
        {/* <div className="right-card shadow edit">
                        <h1> Change Password  <span onClick={() => onEditPassword()}><ModeEditOutlineOutlinedIcon /></span> </h1>
                        <div>
                            <form className="form-edit">
                                <div>
                                    <span>Current Password</span>
                                    <div>
                                        <input id="password" type="password" className="profile-input2" defaultValue={"*******"} disabled />
                                    </div>
                                </div>
                                <div id="submitPassword" style={{ display: 'none', width: '100px' }}>
                                    <ButtonPrimary text="Update" onClick={onPasswordUpdate} />
                                </div>
                            </form>
                        </div>
                    </div> */}
      </div>
    </>
  );
};

export default UserProfile;
