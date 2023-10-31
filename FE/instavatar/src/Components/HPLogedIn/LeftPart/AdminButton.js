import React from "react";
import { Button } from "reactstrap";
import "./Menu.css";
import { useNavigate } from "react-router-dom";
function AdminButton(props) {
  let navigate = useNavigate();
  return (
    <div id="menu" className="row">
      <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
        <img className="Icon" src="/imgs/icons/Admin.png" alt="Admin" />
      </div>

      <div id="MenuTitle" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <Button
          onClick={() => {
            navigate("/instavatar/logedIn/admin");
          }}
          id="MenuButton"
        >
          {" "}
          <h3> Admin</h3>
        </Button>
      </div>
    </div>
  );
}

export default AdminButton;
