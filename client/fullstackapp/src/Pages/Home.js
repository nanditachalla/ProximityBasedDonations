import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Home() {
  const [noOfUsers, setnoOfUsers] = useState([]);
  useEffect(() => {
    axios.get("http://localhost:3001/User").then((response) => {
      setnoOfUsers(response.data);
      console.log(response);
    });
  }, []);
  return (
    <div className="Home">
      {noOfUsers.map((value, key) => {
        return (
          <div className="head">
            <h2>Donations</h2>
            <h2>{value.name}</h2>
            <Link to="/samplepage">Sample Page</Link>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
