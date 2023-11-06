import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./StorePage.css";
import { Button } from "reactstrap";
import { setItemToBuyAction } from "../../../../Redux/Actions/StoreActions";
import {
  showBuyItemModal,
  showListToGive,
} from "../../../../Redux/Actions/ModalActions";
import BuyModal from "./BuyOrGive/Buy/BuyModal";
import ListFollowingsToGiveItems from "./BuyOrGive/Give/ListFollowingsToGiveItems";
import ConfirmGiveModal from "./BuyOrGive/Give/ConfirmGiveModal";
function ItemsList(props) {
  let dispatch = useDispatch();
  let baseItems = useSelector((state) => state.items);
  let type = useSelector((state) => state.itemType);
  let coinOrGold = useSelector((state) => state.coinOrGoldStore);
  let getItems = () => {
    if (baseItems && baseItems.length > 0) {
      if (coinOrGold.trim() === "") {
        return baseItems.filter((item) => item.type.includes(type));
      } else if (coinOrGold === "C") {
        return baseItems.filter(
          (item) => item.type.includes(type) && item.coinCost > 0
        );
      } else {
        return baseItems.filter(
          (item) => item.type.includes(type) && item.goldCost > 0
        );
      }
    } else {
      return null;
    }
  };
  let items = getItems();
  let showItems =
    items && items.length > 0
      ? items.map((item, index) => {
          let img = "/imgs/items/" + item.image;
          let className = item.coinCost > 0 ? "CoinItem" : "GoldItem";
          let price =
            item.coinCost > 0 ? (
              <div id="coinColor" className="row">
                <img
                  alt="Price"
                  src="/imgs/icons/coin.png"
                  className="PriceIcon"
                />{" "}
                {item.coinCost}
              </div>
            ) : (
              <div id="goldColor" className="row">
                <img
                  alt="Price"
                  src="/imgs/icons/gold.png"
                  className="PriceIcon"
                />{" "}
                {item.goldCost}
              </div>
            );

          return (
            <div key={index} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
              <div className="row">
                <img alt={img.name} src={img} className={className}></img>
              </div>

              <div className="row">
                <h4>{item.name}</h4>
              </div>
              {price}

              <div className="row">
                <Button
                  onClick={() => {
                    dispatch(setItemToBuyAction(item));
                    dispatch(showListToGive());
                  }}
                  id="BuyButton"
                  color="primary"
                >
                  Tặng
                </Button>
                <Button
                  onClick={() => {
                    dispatch(setItemToBuyAction(item));
                    dispatch(showBuyItemModal());
                  }}
                  id="BuyButton"
                  color="success"
                >
                  Mua
                </Button>
              </div>
            </div>
          );
        })
      : null;
  return (
    <div id="ItemListStore" className="row">
      {showItems}
      <BuyModal />
      <ListFollowingsToGiveItems />
    </div>
  );
}

export default ItemsList;
