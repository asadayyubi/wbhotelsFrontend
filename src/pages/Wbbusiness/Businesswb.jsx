import React, { useState } from "react";
import { Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Modal, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./MyForm.css";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object().shape({
  companyName: Yup.string().required("Company Name is required"),
  typeOfCompany: Yup.string().required("Type of Company is required"),
  address: Yup.string().required("Address is required"),
  // .positive("Number of Rooms must be positive"),
  website: Yup.string().required("Website Name is required"),
  mobile: Yup.string()
    .required("Mobile Number is required")
    .matches(/^\d{10}$/, "Mobile Number must be 10 digits"),
  email: Yup.string().email("Invalid email").required("Email is required"),
});

const MyForm = ({
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  isSubmitting,
  resetForm, // Added resetForm from Formik
  insertData,
}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleModalClose = () => {
    setModalOpen(false);
    navigate("/");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validationSchema
      .validate(values)
      .then(() => {
        setModalOpen(true);
        console.log(values);
        insertData(values);
        resetForm(); // Reset the form after successful submission
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div className="wb-business-heading">
        <h3>WB hotels & Resorts. <br></br> Please enter your property details</h3>
      </div>

      <Form onSubmit={handleSubmit}>
        <Card className="form-card form-container">
          <CardContent>
            <div className="form-field input-field">
              <Field
                as={TextField}
                id="companyName"
                name="companyName"
                label="Company Name"
                value={values.companyName}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.companyName && !!errors.companyName}
                helperText={touched.companyName && errors.companyName}
                fullWidth
                style={{ fontSize: "16px" }}
              />
            </div>

            <div className="form-field input-field">
              <Field
                as={TextField}
                id="typeOfCompany"
                name="typeOfCompany"
                label="Type Of Company"
                value={values.typeOfCompany}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.typeOfCompany && !!errors.typeOfCompany}
                helperText={touched.typeOfCompany && errors.typeOfCompany}
                fullWidth
                style={{ fontSize: "16px" }}
              />
            </div>

            <div className="form-field input-field">
              <Field
                as={TextField}
                id="address"
                name="address"
                label="Address"
                type="address"
                value={values.address}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.address && !!errors.address}
                helperText={touched.address && errors.address}
                fullWidth
                style={{ fontSize: "16px" }}
              />
            </div>

            <div className="form-field input-field">
              <Field
                as={TextField}
                id="website"
                name="website"
                label="Website"
                type="website"
                value={values.website}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.website && !!errors.website}
                helperText={touched.website && errors.website}
                fullWidth
                style={{ fontSize: "16px" }}
              />
            </div>

            <div className="form-field input-field">
              <Field
                as={TextField}
                id="mobile"
                name="mobile"
                label="Mobile"
                type="tel"
                value={values.mobile}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.mobile && !!errors.mobile}
                helperText={touched.mobile && errors.mobile}
                fullWidth
                style={{ fontSize: "16px" }}
              />
            </div>

            <div className="form-field input-field">
              <Field
                as={TextField}
                id="email"
                name="email"
                label="Email"
                type="email"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
                error={touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                fullWidth
                style={{ fontSize: "16px" }}
              />
            </div>

            <Button
              type="submit"
              variant="contained"
              color="primary"
              disabled={isSubmitting}
              style={{
                display: "block",
                margin: "0 auto",
                fontSize: "12px",
                padding: "6px 24px",
              }}
            >
              Submit
            </Button>
          </CardContent>
        </Card>

        <Modal
          open={modalOpen}
          onClose={handleModalClose}
          className="modal-container"
        >
          <Card className="modal-card">
            <CardContent>
              <CheckCircleIcon
                className="tick-icon"
                style={{ fontSize: 60, color: "green" }}
              />
              <h3>Thank You!</h3>
              <p>We will get back to you within 24 hours.</p>
            </CardContent>
          </Card>
        </Modal>
      </Form>
    </>
  );
};

const Businesswb = withFormik({
  mapPropsToValues: ({ propertylisting }) => ({
    companyName: "",
    location: "",
    address: "",
    website: "",
    mobile: "",
    email: "",
    inquired_for: propertylisting || "",
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  },
  validationSchema: validationSchema,
})(MyForm);

export default Businesswb;
