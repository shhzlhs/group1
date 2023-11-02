import React from "react";
import { Link } from "react-router-dom";

function WebInfo(props) {
  return (
    <div className="row">
      <div id="WebInfo" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Link>Giới thiệu </Link>

        <Link>Trợ giúp </Link>

        <Link>Điều khoản</Link>

        <p>
          <br></br>© 2023 INSTAVATAR FROM GROUP 1 THANKS FOR @DAONQ
        </p>
      </div>
    </div>
  );
}

export default WebInfo;
