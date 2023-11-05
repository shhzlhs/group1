import React from "react";
import CoinGoldButton from "./Filter/CoinGoldButton";
import CapButton from "./Filter/CapButton";
import ShirtButton from "./Filter/ShirtButton";
import TrousersButton from "./Filter/TrousersButton";
import EquipButton from "./Filter/EquipButton";
import OthersButton from "./Filter/OthersButton";
import "./StorePage.css";
function StoreFilterBar(props) {
  return (
    <div id="StoreFilterBar" className="row">
      <CoinGoldButton />
      <CapButton />
      <ShirtButton />
      <TrousersButton />
      <EquipButton />
      <OthersButton />
    </div>
  );
}

export default StoreFilterBar;
