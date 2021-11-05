import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
function IndPost() {
  let { email } = useParams();
  const [postObj, setPostObj] = useState({});
  useEffect(() => {
    axios.get(`http://localhost:3001/User/byId/${email}`).then((response) => {
      setPostObj(response.data);
      //console.log(response);
    });
  });
  return (
    <div>
      <div className="Profile" style={{ paddingBottom: "20px" }}>
        <div
          className="Back"
          style={{ paddingLeft: "10px", paddingTop: "10px" }}
        >
          {/* <Link
            to={`/Home1/${email}`}
            style={{
              color: "white",
              textDecoration: "none",
              fontSize: "large",
            }}
          >
            Back
          </Link> */}
        </div>
      </div>
      <div className="IndPost" style={{ marginTop: "20px" }}>
        <div>Email :{postObj.email}</div>
        <div>Name:{postObj.name}</div>
      </div>
    </div>
  );
}

export default IndPost;
