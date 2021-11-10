import React from "react";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
function Profile() {
  //let history = useHistory();
  let { email } = useParams();
  const [noOfInd, setnoOfInd] = useState([]);
  useEffect(() => {
    axios.get(`http://localhost:3001/User/byId/${email}`).then((response) => {
      setnoOfInd(response.data);
      console.log(response);
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
            to={`/Home/${email}`}
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
          to={`/DelAcc/${email}`}
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

          <Link
            to={`/CreatePost/${email}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "large",
              paddingRight: "15px",
            }}
          >
            Create a post
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
          <p>Name: {noOfInd.name}</p>
          <p>Descriptipn: {noOfInd.description}</p>
          <p>Email: {noOfInd.email}</p>
          <p>
            Address: {noOfInd.house_no},{noOfInd.province},{noOfInd.city},
            {noOfInd.pincode}
          </p>
          <p>Phone: {noOfInd.phone}</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
