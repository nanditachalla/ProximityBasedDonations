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
    axios.get("http://localhost:3001/acceptor").then((response) => {
      setnoOfUsers(response.data);
      //console.log(response);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:3001/User/byId/${email}`).then((response) => {
      setnoOfInd(response.data);
      //console.log(response);
    });
  }, []);
  const HandleClick = () => {
    axios
      .get(`http://localhost:3001/acceptor/filterProv/${noOfInd.province}`)
      .then((response) => {
        setnoOfUsers(response.data);
        //console.log(response);
      });
  };
  const HandleClick1 = () => {
    axios
      .get(`http://localhost:3001/acceptor/filterPin/${noOfInd.pincode}`)
      .then((response) => {
        setnoOfUsers(response.data);
        //console.log(response);
      });
  };
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
            to={`/About/${email}`}
            style={{
              padding: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            About Us
          </Link>
          <Link
            to={`/Profile/${email}`}
            style={{
              padding: "5px",
              color: "white",
              textDecoration: "none",
            }}
          >
            <div>{noOfInd.email}</div>
          </Link>
          <Link
            to={`/ContactUs/${email}`}
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
      <div
        className="STobTab"
        style={{
          backgroundColor: "offwhite",
          paddingInline: "10px",
          display: "flex",
          flexDirection: "row",
          paddingTop: "2px",
        }}
      >
        <p>Filter by: </p>
        <button onClick={HandleClick}>Province </button>
        <button onClick={HandleClick1}>Pincode</button>
        {/* <button onClick={HandleClick1}>Remove filters</button> */}
        <p>(Refresh the page to remove filters)</p>
      </div>
      <div className="MiddleTab">
        <div style={{ textAlign: "center" }}>
          <h1 style={{ color: "red" }}>Organizations</h1>
        </div>
        {noOfUsers.map((value, key) => {
          return (
            <div
              className="Homepost"
              key={key}
              onClick={() => {
                history.push(`/IndPost2/${value.email}`);
              }}
            >
              <p>Organization Name: {value.name}</p>
              <p>About Organization: {value.description}</p>
              <p>Email: {value.email}</p>
              <p>Contact Details: {value.phone}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Home;
