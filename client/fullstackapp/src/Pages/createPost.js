import React from "react";
import { Link, useParams } from "react-router-dom";
//import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
//import { Input } from "reactstrap";

function CreatePost(props) {
  let { email } = useParams();
  // const [noOfInd, setnoOfInd] = useState([]);
  // useEffect(() => {
  //   axios.get(`http://localhost:3001/User/byId/${email}`).then((response) => {
  //     setnoOfInd(response.data);
  //     console.log(response);
  //   });
  // }, []);

  const initialValues = {
    items: "",
    timespan: "",
    contact: "",
    //photo: null,
  };

  const validationSchema = Yup.object().shape({
    items: Yup.string().required("You must input a Title!"),
    timespan: Yup.number().required("required"),
    contact: Yup.string().required("required"),
    //photo: Yup.mixed().required("required"),
  });

  const onSubmit = (data) => {
    axios
      .post(`http://localhost:3001/CreatePost/${email}`, data)
      .then((response) => {
        //console.log(response);
      });

    props.history.push(`/Home/${email}`);
  };

  //const fileRef = useRef(null);

  return (
    <div className="createPost">
      <div className="Ctab">
        <div>
          <Link
            to={`/Profile/${email}`}
            style={{ padding: "5px", color: "white", textDecoration: "none" }}
          >
            Back
          </Link>
        </div>
        <div style={{ paddingRight: "10px" }}>
          <Link
            to={`/viewPosts/${email}`}
            style={{
              color: "white",
              fontSize: "large",
              textDecoration: "none",
              marginRight: "10px",
            }}
          >
            View Posts
          </Link>
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
            Donation box
          </text>
        </div>
        <div className="Cbox">
          <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {
              /*({ values, setFieldValue }) => (*/
              <Form className="formContainer" autoComplete="on">
                <div className="Title">
                  <label style={{ fontSize: "large" }}>Items: </label>
                  <ErrorMessage name="items" component="span" />
                  <Field
                    component="select"
                    name="items"
                    id="inputItem"
                    placeholder="select an item"
                  >
                    <option value="select an item">Select an item</option>
                    <option value="food">Food</option>
                    <option value="medicines">Medicines</option>
                    <option value="clothes">Clothes</option>
                    <option value="stationery">Stationery</option>
                  </Field>
                </div>
                <div className="Post">
                  <label style={{ fontSize: "large" }}>
                    Timespan: ( expiry in hours) * enter zero if validity is for
                    more than a week*
                  </label>
                  <ErrorMessage name="timespan" component="span" />
                  <Field
                    autocomplete="on"
                    id="inputCreatePost"
                    name="timespan"
                    placeholder="(Ex. 2,3,...)"
                  />
                </div>
                {/* <div className="Email">
                  <label style={{ fontSize: "large" }}>Upload Image: </label>
                  <Input
                    //ref={fileRef}
                    // hidden
                    type="file"
                    name="photo"
                    onChange={(event) => {
                      setFieldValue("photo", event.target.files[0]);
                    }}
                  />
                </div> */}
                {/* <button
                  onClick={() => {
                    fileRef.current.click();
                  }}
                >
                  Upload
                </button> */}
                <div className="Email">
                  <label style={{ fontSize: "large" }}>Contact: </label>
                  <ErrorMessage name="contact" component="span" />
                  <Field
                    autocomplete="on"
                    id="inputCreatePost"
                    name="contact"
                    placeholder="(Ex. John123@gmail.com or 8888899999...)"
                  />
                </div>
                <button type="submit"> Send </button>
              </Form>
              /*)}*/
            }
          </Formik>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
