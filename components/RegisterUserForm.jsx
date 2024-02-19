import { Button, TextField, Typography } from "@mui/material";
import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
const RegisterUserForm = () => {
  return (
    <Formik
      initialValues={{ firstName: "", lastName: "" }}
      validationSchema={Yup.object({
        firstName: Yup.string()
          .max(15, "Must be 50 characters or less")
          .required("First Name is required"),
        lastName: Yup.string()
          .max(15, "Must be 50 characters or less")
          .required("Last Name is required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {({ handleSubmit, getFieldProps, touched, errors }) => (
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "1rem",
            flexDirection: "column",
            gap: "1rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: "200px",
            width: "400px",
            boxShadow:
              "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
          }}
        >
          <Typography variant="h5">Register User</Typography>
          <TextField
            required
            label="First Name"
            variant="outlined"
            {...getFieldProps("firstName")}
            fullWidth
          />
          <TextField
            required
            label="Last Name"
            variant="outlined"
            {...getFieldProps("LastName")}
            fullWidth
          />
          {touched.firstName && errors.firstName ? (
            <div style={{ color: "red" }}> {errors.firstName}</div>
          ) : null}
          <br />
          <Button type="submit" variant="contained" fullWidth color="success">
            Submit
          </Button>
        </form>
      )}
    </Formik>
  );
};

export default RegisterUserForm;
