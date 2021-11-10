import React from "react";
import { Link, useParams } from "react-router-dom";
//import { useHistory } from "react";
import axios from "axios";
function DelAcc1(props) {
  //let history = useHistory();
  let { email } = useParams();

  //const [noOfInd, setnoOfInd] = useState([]);
  const HandleClick = () => {
    axios
      .delete(`http://localhost:3001/acceptor/del/${email}`)
      .then((response) => {
        //setnoOfInd(response.data);
        //console.log(response);
      });
    props.history.push("/");
  };
  return (
    <div>
      <div className="Ctab" style={{ marginBottom: "20px" }}>
        <Link
          to={`/Profile/${email}`}
          style={{ padding: "5px", color: "white", textDecoration: "none" }}
        >
          Back
        </Link>
      </div>
      <div className="Cbox" style={{ alignItems: "center" }}>
        <p style={{ textAlign: "center" }}>
          Are you sure you want to delete your account?
        </p>

        <button
          type="submit"
          onClick={HandleClick}
          style={{ marginLeft: "550px" }}
        >
          Yes I am sure
        </button>
      </div>
    </div>
  );
}

export default DelAcc1;
