import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useHistory, useParams } from "react-router-dom";
function Home() {
  let { email } = useParams();
  const [noOfUsers, setnoOfUsers] = useState([]);
  const [noOfInd, setnoOfInd] = useState([]);

  let history = useHistory();
  useEffect(() => {
    axios.get("http://localhost:3001/CreatePost").then((response) => {
      setnoOfUsers(response.data);
      //console.log(response);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/acceptor/byId/${email}`)
      .then((response) => {
        setnoOfInd(response.data);
        //console.log(response);
      });
  }, []);
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
            to={`/About1/${email}`}
            style={{
              padding: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            About Us
          </Link>
          <Link
            to={`/Profile1/${email}`}
            style={{
              padding: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            {noOfInd.email}
          </Link>
          <Link
            to={`/ContactUs1/${email}`}
            style={{
              padding: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            Contact Us
          </Link>
          {/* <Link
            to="/Register"
            style={{ padding: "5px", color: "white", textDecoration: "none" }}
          >
            Register
          </Link> */}
        </div>
      </div>
      <div className="MiddleTab">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "red" }}>Donors</h1>
        </div>
        {noOfUsers.map((value, key) => {
          return (
            <div
              className="Homepost"
              key={key}
              onClick={() => {
                history.push(`/IndPost/${value.contact}`);
              }}
            >
              {/* <p>Donor Name: {value.name}</p>
              <p>About Donor: {value.description}</p> */}
              <p>Items they wish to donate: {value.items}</p>
              <p>Offer valid for (hours): {value.timespan}</p>
              <p>Contact: {value.contact}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
