import React from "react";
// import axios from "axios";
// import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  //   const [noOfUsers, setnoOfUsers] = useState([]);
  //   let history = useHistory();
  //   useEffect(() => {
  //     axios.get("http://localhost:3001/User").then((response) => {
  //       setnoOfUsers(response.data);
  //       console.log(response);
  //     });
  //   }, []);
  return (
    <div className="Home">
      <div className="TopTab">
        <div className="Homelogo">
          <img
            src="https://img.freepik.com/free-vector/charity-logo-with-human-icons_1025-131.jpg?size=338&ext=jpg"
            width="50px"
            height="50px"
            alt=""
          />
          <text
            style={{
              fontFamily: "monospace",
              color: "white",
              fontSize: "25px",
              paddingLeft: "10px",
              justifyItems: "center",
              paddingTop: "10px",
            }}
          >
            Proximity Based Donations
          </text>
        </div>

        <div className="TopTabComponents">
          <Link
            to="/About"
            style={{
              padding: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            About Us
          </Link>

          <Link
            to="/ContactUs"
            style={{
              padding: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
          <Link
            to="/Register"
            style={{ padding: "5px", color: "white", textDecoration: "none" }}
          >
            Register
          </Link>
        </div>
      </div>
      <div className="MiddleTab">
        {/* {noOfUsers.map((value, key) => {
          return (
            <div
              className="Homepost"
              onClick={() => {
                history.push(`/IndPost/${value.email}`);
              }}
            >
              <text>Donor Name: {value.name}</text>
              <text>About Donor: {value.description}</text>
              <text>Email: {value.email}</text>
              <text>Contact Details: {value.phone}</text>
            </div>
          );
        })} */}
      </div>
    </div>
  );
}

export default Home;
