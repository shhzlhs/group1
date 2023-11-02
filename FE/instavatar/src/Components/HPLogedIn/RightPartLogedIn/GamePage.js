import React, { useEffect } from "react";
import "./MainPageLogedIn.css";
import GameTopArea from "./GamePage/GameTopArea";
import { useDispatch, useSelector } from "react-redux";
import { getAllGameAction } from "../../../Redux/Actions/GameActions";
import GameList from "./GamePage/GameList";
import { addGameSlotsByUserAPI } from "../../../API/GameSlotAPI";
import { getGameSlotByUserAction } from "../../../Redux/Actions/GameSlotActions";
function GamePage(props) {
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  useEffect(() => {
    addGameSlotsByUserAPI(userLogedIn.id).then(() => {
      dispatch(getAllGameAction());
      dispatch(getGameSlotByUserAction(userLogedIn.id));
    });
  }, [userLogedIn]);
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <GameTopArea />
        <GameList />
      </div>
    </div>
  );
}

export default GamePage;
