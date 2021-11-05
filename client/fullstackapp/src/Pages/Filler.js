import React from "react";
import { Link, useHistory } from "react-router-dom";
function Filler() {
  let history = useHistory();
  return (
    <div>
      <h1 style={{ color: "red" }}>Wrong email or password</h1>
      <Link to="/samplePage">Back</Link>
    </div>
  );
}

export default Filler;
