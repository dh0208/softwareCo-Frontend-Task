import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@material-ui/core";
import schema from "../validation/signupValidation";

export default function SignUp() {

  let navigate = useNavigate();
  const handleSignup = (props) => {
    const userDetails = {
      first_ame: props.firstName,
      last_Name: props.lastName,
      email: props.email,
      password: props.password,
      address: props.address,
    };

    const data = axios.post(
      `${process.env.REACT_APP_BACKEND_URL}/signup`,
      userDetails
    );
    navigate("/login");
  };
  return (
    // <div>
    //   <input
    //     type="text"
    //     placeholder="First Name"
    //     onChange={(e) => setFname(e.target.value)}
    //     value={fname}
    //   ></input><br/>
    //   <input
    //     type="text"
    //     placeholder="Last Name"
    //     onChange={(e) => setLname(e.target.value)}
    //     value={lname}
    //   ></input><br/>
    //   <input
    //   type="text"
    //   placeholder="email"
    //   onChange={(e) => setEmail(e.target.value)}
    //   value={email}
    // ></input><br/>
    // <input
    //   type="password"
    //   placeholder="Password"
    //   onChange={(e) => setPassword(e.target.value)}
    //   value={password}
    // ></input><br/>

    //   <button onClick={handleSignup}>SignUp</button>
    // </div>
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
          firstName: "",
          lastName: "",
          address: "",
        }}
        validationSchema={schema}
        onSubmit={(values, { setSubmitting }) => {
          handleSignup(values);
          setSubmitting(false);
        }}
      >
        {({ touched, errors, isSubmitting }) => (
          <Form>
            <Field
              as={TextField}
              label="firstName"
              name="firstName"
              type="text"
              
            />
            {errors.firstName && touched.firstName ? (
              <div className="validate">{errors.firstName}</div>
            ) : null}

            <Field
              as={TextField}
              label="lastName"
              name="lastName"
              type="text"
            
            />
            {errors.lastName && touched.lastName ? (
              <div className="validate">{errors.lastName}</div>
            ) : null}

            <Field
              as={TextField}
              label="address"
              name="address"
              type="text"
            
            />
            {errors.address && touched.address ? (
              <div className="validate">{errors.address}</div>
            ) : null}

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
              Sign Up
            </Button>
            {"  "}
            <Button
              variant="contained"
              color="primary"
              style={{ marginTop: "15px" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
}
