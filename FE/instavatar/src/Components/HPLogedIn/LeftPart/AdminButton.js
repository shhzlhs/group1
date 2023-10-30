import React from "react";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "./Menu.css";
function AdminButton(props) {
    let navigate = useNavigate();
  return (
    <div className="row">
        <Button id="MenuButton"
            onClick={() => {
              navigate("/instavatar/logedIn/admin");
            }}>
          <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <img className="Icon" src="/imgs/icons/Admin.png" alt="Admin" />
            </div>

            <div id="MenuTitle" className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
              <h3>Admin</h3>
            </div>
          </div>
        </Button>
    </div>
  );
}

export default AdminButton;
