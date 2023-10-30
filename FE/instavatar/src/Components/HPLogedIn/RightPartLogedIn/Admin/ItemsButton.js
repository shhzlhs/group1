import React from "react";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../RightPartLogedIn/AdminPage.css"
import { PiTerminalWindowDuotone } from "react-icons/pi";
function ItemsButton(props) {
    let navigate = useNavigate();
  return (
    <div class="buttonDefault">
        <Button id="MenuButton"
            onClick={() => {
              navigate("/instavatar/logedIn/admin/items");
            }}>
              <div class="AdminIconParent">
              <PiTerminalWindowDuotone class="AdminIcon"/>
              </div>
              <h3  class="title">Quản lý items</h3>
    
       
        </Button>
    </div>
  );
}

export default ItemsButton;
