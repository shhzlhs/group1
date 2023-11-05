import React from "react";
import { useSelector } from "react-redux";
function ItemsList(props) {
  let baseItems = useSelector((state) => state.items);
  let type = useSelector((state) => state.itemType);
  let coinOrGold = useSelector((state) => state.coinOrGoldStore);
  let getItems = () => {
    if (baseItems && baseItems.length > 0) {
      if (coinOrGold.trim() === "") {
        return baseItems.filter((item) => item.type === type);
      } else if (coinOrGold === "C") {
        return baseItems.filter(
          (item) => item.type === type && item.coinCost > 0
        );
      } else {
        return baseItems.filter(
          (item) => item.type === type && item.goldCost > 0
        );
      }
    } else {
      return null;
    }
  };
  return <div className="row"></div>;
}

export default ItemsList;
