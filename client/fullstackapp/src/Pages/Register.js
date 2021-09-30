import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
//import { useState } from "react";
function Register() {
  const initialValues = {
    name: "",
    description: "",
    phone: "",
  };
  const onSubmit = (data) => {
    axios.post("http://localhost:3001/User", data).then((response) => {
      console.log("it worked");
    });
  };
  const validateSchema = Yup.object().shape({
    name: Yup.string().required("Require name"),
    descriprion: Yup.string(),
    phone: Yup.string().min(10).max(10).required("Require num"),
  });

  return (
    <div className="Register">
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validateSchema}
      >
        <Form className="Form1" autoComplete="on">
          <Link to="/Home">HomePage</Link>
          <h1>Register Today as a user!</h1>
          <div className="username">
            <label>Username:</label>

            <ErrorMessage name="name" component="span" />
            <Field
              id="inputUser"
              name="name"
              placeholder="Eg. Nandita Challa"
            />
          </div>
          <div className="description">
            <label>Description:</label>
            <Field
              id="inputDesc"
              name="description"
              placeholder="Eg. Student, Volunteer"
            />
          </div>
          <div className="phone">
            <label>Phone:</label>
            <ErrorMessage name="phone" component="span" />
            <Field id="inputPhone" name="phone" placeholder="Eg. 897856191" />
          </div>
          <div className="submit">
            <button type="submit">Register</button>
          </div>
        </Form>
      </Formik>
      <div className="log">
        <Link to="/samplepage">Already have an account?</Link>
      </div>
    </div>
  );
}

export default Register;
