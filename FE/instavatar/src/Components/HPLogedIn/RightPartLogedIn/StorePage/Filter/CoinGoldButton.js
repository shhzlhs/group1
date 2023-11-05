import React from "react";
import { Button } from "reactstrap";
import "./Filter.css";
import { useDispatch, useSelector } from "react-redux";
import { setCoinGoldStoreToFilterAction } from "../../../../../Redux/Actions/StoreActions";
function CoinGoldButton(props) {
  let dispatch = useDispatch();
  let coinOrGold = useSelector((state) => state.coinOrGoldStore);
  let img = "COIN1.png";
  if (coinOrGold.trim() === "") {
    img = "COIN1.png";
  } else if (coinOrGold === "C") {
    img = "GOLD1.png";
  } else {
    img = "ALL.png";
  }
  const click = () => {
    if (coinOrGold.trim() === "") {
      dispatch(setCoinGoldStoreToFilterAction("C"));
    } else if (coinOrGold === "C") {
      dispatch(setCoinGoldStoreToFilterAction("G"));
    } else {
      dispatch(setCoinGoldStoreToFilterAction(""));
    }
  };
  return (
    <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <Button onClick={click} id="StoreFilterButton">
        <img
          src={`/imgs/icons/${img}`}
          alt="COIN/GOLD"
          className="StoreFilterImg"
        />
      </Button>
    </div>
  );
}

export default CoinGoldButton;
