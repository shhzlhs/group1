import React from "react";
import { Button } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import "../../RightPartLogedIn/AdminPage.css"
import { FaMoneyBill } from "react-icons/fa";
function TransactionsButton(props) {
    let navigate = useNavigate();
  return (
    <div class="buttonDefault" >
        <Button id="MenuButton"
            onClick={() => {
              navigate("/instavatar/logedIn/admin/transactions");
            }}>
              <div class="AdminIconParent">
                <FaMoneyBill class="AdminIcon" />
             </div>
              <h3  class="title">Quản lý giao dich</h3>
        </Button>
    </div>
  );
}

export default TransactionsButton;
