import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import userSchema from "../validation/uservalidation";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";

export default function Login() {

  let navigate = useNavigate();
  const handleLogin = async (props) => {
    const userDetails = {
      email: props.email,
      password: props.password,
    };

    const data = await axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/login`,
      userDetails
    );
    if(data.data.status === 500) {
      alert("Invalid Credentials")
    }
    else{
      navigate("/sideBar");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "auto",
        width: "20%",
        padding: "10px",
      }}
    >
      <p></p>
      <b style={{ fontSize: "20px" }}>Login</b>

      <Formik
        initialValues={{
          email: "",
          password: "",
        }}
        validationSchema={userSchema}
        onSubmit={(values, { setSubmitting }) => {
          handleLogin(values);
          setSubmitting(false);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              label="Email-Id"
              name="email"
              type="email"
             
            />
            {errors.email && touched.email ? (
              <div className="validate">{errors.email}</div>
            ) : null}
            <Field
              as={TextField}
              label="Password"
              name="password"
              type="password"
             
            />
            {errors.password && touched.password ? (
              <div className="validate">{errors.password}</div>
            ) : null}
            <br />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              disabled={isSubmitting}
              style={{ marginTop: "15px" }}
            >
              Log In
            </Button>
            {"  "}
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
              onClick={() => navigate("/")}
            >
              Sign Up
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
