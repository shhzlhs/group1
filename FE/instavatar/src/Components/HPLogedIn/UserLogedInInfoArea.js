import React from "react";
import { useSelector } from "react-redux";
import "./UserLogedInInfoArea.css";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";
function UserLogedInInfoArea(props) {
  let navigate = useNavigate();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  return (
    <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
      <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5">
        <img
          className="OfficialAvatar"
          alt={userLogedIn.username}
          src={`/imgs/avatars/${userLogedIn.avatar}`}
        ></img>
      </div>

      <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
        <div id="left" className="row">
          <b>{userLogedIn.username}</b>
        </div>

        <div id="MID" className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              className="CoinGoldIcon"
              alt="coin"
              src="/imgs/icons/coin.png"
            ></img>
          </div>
          <div id="left" className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {userLogedIn.coin}
          </div>

          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <Button
              onClick={() => {
                navigate("/instavatar/logedIn/addCoin");
              }}
              id="NoneButton"
            >
              <img
                className="CoinGoldIcon"
                alt="addCoin"
                src="/imgs/icons/add.png"
              ></img>
            </Button>
          </div>
        </div>
        <div id="MID" className="row">
          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <img
              className="CoinGoldIcon"
              alt="coin"
              src="/imgs/icons/gold.png"
            ></img>
          </div>
          <div id="left" className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            {userLogedIn.gold}
          </div>

          <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
            <Button
              onClick={() => {
                navigate("/instavatar/logedIn/addGold");
              }}
              id="NoneButton"
            >
              <img
                className="CoinGoldIcon"
                alt="addGold"
                src="/imgs/icons/add.png"
              ></img>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserLogedInInfoArea;
