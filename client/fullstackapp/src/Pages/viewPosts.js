import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";

function ViewPosts() {
  const { email } = useParams();
  const [noOfUsers, setnoOfUsers] = useState([{ photo: { data: [] } }]);
  //const img =
  //console.log(img);
  useEffect(() => {
    axios
      .get(`http://localhost:3001/CreatePost/byId/${email}`)
      .then((response) => {
        setnoOfUsers(response.data);

        //console.log(response);
      });
  }, []);
  //const base64String =
  return (
    <div>
      <div className="Profile" style={{ paddingBottom: "20px" }}>
        <Link
          to={`/CreatePost/${email}`}
          style={{
            color: "white",
            textDecoration: "none",
            fontSize: "large",
            paddingRight: "15px",
            paddingBottom: "10px",
          }}
        >
          Back
        </Link>
      </div>
      <div>
        {noOfUsers.map((value, key) => {
          return (
            <div className="Homepost" style={{ marginTop: "10px" }} key={key}>
              <p>Item: {value.items}</p>
              <p>About Donor: {value.timespan}</p>
              {/* <img
              src={new Buffer.from(value.data).toString("ascii")}
              alt="loading.."
            /> */}
              <p>Contact Details: {value.contact}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ViewPosts;
