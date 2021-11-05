import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Profile() {
  let { email } = useParams();
  const [noOfInd, setnoOfInd] = useState([]);
  //const [noOfUsers, setnoOfUsers] = useState([]);
  // useEffect(() => {
  //   axios.get("http://localhost:3001/acceptor").then((response) => {
  //     setnoOfUsers(response.data);
  //     console.log(response);
  //   });
  // });
  useEffect(() => {
    axios
      .get(`http://localhost:3001/acceptor/byId/${email}`)
      .then((response) => {
        setnoOfInd(response.data);
        //console.log(response);
      });
  }, []);

  return (
    <div>
      <div className="Profile">
        <div
          className="Back"
          style={{ paddingLeft: "10px", paddingTop: "10px" }}
        >
          <Link
            to={`/Home1/${email}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "large",
            }}
          >
            Back
          </Link>
        </div>
        <div className="ProfHead">
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "large",
              paddingRight: "15px",
            }}
          >
            Delete Account
          </Link>
          <Link
            to="/samplePage"
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "large",
              paddingRight: "15px",
            }}
          >
            Log Out
          </Link>
        </div>
      </div>
      <div style={{ paddingTop: "20px" }}>
        <div
          style={{
            borderStyle: "solid",
            paddingInline: "10px",
            fontSize: "large",
            fontFamily: "monospace",
          }}
        >
          <p>Organization Name: {noOfInd.name}</p>
          <p>About Organization: {noOfInd.description}</p>
          <p>Email: {noOfInd.email}</p>
          <p>Contact Details: {noOfInd.phone}</p>
          <p>
            Address: {noOfInd.house_no},{noOfInd.province},{noOfInd.city},
            {noOfInd.pincode}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
