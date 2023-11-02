import React from "react";
import { Link } from "react-router-dom";
import "./UserItemsTop.css";
function LinkToStore(props) {
  return (
    <div id="TextCenter" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
      <Link to={"/instavatar/logedIn/Store"}>
        <h3>Đến Cửa hàng</h3>
      </Link>
    </div>
  );
}

export default LinkToStore;
