import React from "react";
import { Link, useParams } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
function ContactUs(props) {
  //let history = useHistory();
  let { email } = useParams();
  const initialValues = {
    title: "",
    post: "",
    email: "",
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required("You must input a Title!"),
    post: Yup.string().required("required"),
    email: Yup.string().required("required"),
  });

  const onSubmit = (data) => {
    axios.post("http://localhost:3001/Complaint", data).then((response) => {
      console.log(response);
    });
    props.history.push(`/Home/${email}`);
  };
  return (
    <div className="ContactUs">
      <div className="Ctab">
        <div>
          <Link
            to={`/Home/${email}`}
            style={{ padding: "5px", color: "white", textDecoration: "none" }}
          >
            Back
          </Link>
        </div>
        <div style={{ paddingRight: "10px" }}>
          <text
            style={{
              color: "white",
            }}
          >
            Call us at : +918888899999
          </text>
        </div>
      </div>
      <div className="Complaint">
        <div style={{ textAlign: "center", marginBottom: "10px" }}>
          <text
            style={{
              fontSize: "larger",
              fontStyle: "oblique",
              fontWeight: "bold",
            }}
          >
            Complaint box
          </text>
        </div>
        <div className="Cbox">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            <Form className="formContainer" autoComplete="on">
              <div className="Title">
                <label style={{ fontSize: "large" }}>Title: </label>
                <ErrorMessage name="title" component="span" />
                <Field
                  autocomplete="on"
                  id="inputCreatePost"
                  name="title"
                  placeholder="(Ex. Title...)"
                />
              </div>
              <div className="Post">
                <label style={{ fontSize: "large" }}>Post: </label>
                <ErrorMessage name="post" component="span" />
                <Field
                  autocomplete="on"
                  id="inputCreatePost"
                  name="post"
                  placeholder="(Ex. Post...)"
                />
              </div>
              <div className="Email">
                <label style={{ fontSize: "large" }}>Email: </label>
                <ErrorMessage name="email" component="span" />
                <Field
                  autocomplete="on"
                  id="inputCreatePost"
                  name="email"
                  placeholder="(Ex. John123@gmail.com...)"
                />
              </div>
              <button type="submit"> Send </button>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
