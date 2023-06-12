import React, { useState } from "react";
import { Field, Form, ErrorMessage, withFormik } from "formik";
import * as Yup from "yup";
import { TextField, Button, Modal, Card, CardContent } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import "./MyForm.css";
import { useNavigate } from 'react-router-dom';

const validationSchema = Yup.object().shape({
  hotelName: Yup.string().required("Hotel Name is required"),
  location: Yup.string().required("Location is required"),
  numberOfRooms: Yup.number()
    .required("Number of Rooms is required")
    .positive("Number of Rooms must be positive"),
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
    navigate("/")
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
    <Form onSubmit={handleSubmit}>
      <Card className="form-card form-container">
        <CardContent>
          <div className="form-field input-field">
            <Field
              as={TextField}
              id="hotelName"
              name="hotelName"
              label="Hotel Name"
              value={values.hotelName}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.hotelName && !!errors.hotelName}
              helperText={touched.hotelName && errors.hotelName}
              fullWidth
              style={{ fontSize: "16px" }}
            />
          </div>

          <div className="form-field input-field">
            <Field
              as={TextField}
              id="location"
              name="location"
              label="Location"
              value={values.location}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.location && !!errors.location}
              helperText={touched.location && errors.location}
              fullWidth
              style={{ fontSize: "16px" }}
            />
          </div>

          <div className="form-field input-field">
            <Field
              as={TextField}
              id="numberOfRooms"
              name="numberOfRooms"
              label="Number of Rooms"
              type="number"
              value={values.numberOfRooms}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.numberOfRooms && !!errors.numberOfRooms}
              helperText={touched.numberOfRooms && errors.numberOfRooms}
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
  );
};

const ConnectedForm = withFormik({
  mapPropsToValues: ({propertylisting}) => ({
    hotelName: "",
    location: "",
    numberOfRooms: "",
    mobile: "",
    email: "",
    inquired_for: propertylisting || ""
  }),
  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 500);
  },
  validationSchema: validationSchema,
})(MyForm);

export default ConnectedForm;
