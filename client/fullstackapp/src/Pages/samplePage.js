import React from "react";
//import axios from "axios";
//import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { Formik, Form, Field, ErrorMessage } from "formik";
function samplePage() {
  const onSubmit = (data) => {
    <Link to="/Home">HomePage</Link>;
    console.log("OK!");
  };
  const validateSchema = Yup.object().shape({
    email: Yup.string().required("Require email"),

    password: Yup.string().min(8).required("Require password"),
  });
  return (
    <div className="Login">
      <h1 className="heading1">Login</h1>
      <Formik onSubmit={onSubmit} validationSchema={validateSchema}>
        <Form className="Form2" autoComplete="on">
          <div className="userid">
            <label>UserId/Email</label>
            <ErrorMessage name="email" component="span" />
            <Field
              id="inputUser"
              name="email"
              placeholder="Eg. nanditachalla@onnet.com"
            />
          </div>
          <div className="password">
            <label>Password</label>
            <ErrorMessage name="password" component="span" />
            <Field id="inputUser" name="password" type="password" />
          </div>
          <button type="submit">Login</button>
        </Form>
      </Formik>
      <div className="note">
        <h3>Note:</h3>
        <text>1.Password must contain 8 characters minimum.</text>
        <text>2.Password must contain both letters and numbers.</text>
      </div>
    </div>
  );
}

export default samplePage;
