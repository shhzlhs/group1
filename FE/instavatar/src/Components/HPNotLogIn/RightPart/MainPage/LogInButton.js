import React from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";

function LogInButton(props) {
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <Link to={"instavatar/logIn"}>
        {" "}
        <Button color="primary">Đăng nhập</Button>{" "}
      </Link>
      <br></br>
      <br></br>Top Follows<br></br>
      <br></br>
    </div>
  );
}

export default LogInButton;
