import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Buy.css";
import { closeBuyItemModal } from "../../../../../../Redux/Actions/ModalActions";
import { addUserItemAPI } from "../../../../../../API/UserItemAPI";
import { getUserByUsernameAPI } from "../../../../../../API/UserAPI";
import {
  setUserLogedIn,
  updateCoinGoldUserLogedIn,
} from "../../../../../../Redux/Actions/UserActions";
import { addTranAPI } from "../../../../../../API/TransactionAPI";
function BuyModal(props) {
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let item = useSelector((state) => state.itemToBuy);
  let show = useSelector((state) => state.showBuyItem);
  let price =
    item.goldCost > 0 ? `${item.goldCost} lượng` : `${item.coinCost} xu`;
  let ownItem =
    userLogedIn.items && userLogedIn.items.length > 0
      ? userLogedIn.items.find((it) => it.name === item.name)
      : null;
  let className = item.goldCost > 0 ? "GoldImg" : "CoinImg";
  let buy = () => {
    if (ownItem) {
      alert("Bạn đã sở hữu món đồ này rồi!");
    } else {
      if (item.coinCost > 0) {
        if (item.coinCost > userLogedIn.coin) {
          alert("Tài khoản của bạn không đủ, vui lòng nạp tiền!");
        } else {
          dispatch(
            updateCoinGoldUserLogedIn(userLogedIn.id, -item.coinCost, 0)
          );
          addTranAPI({
            userId: userLogedIn.id,
            coinOrGold: "C",
            type: "DOWN",
            content: `Mua ${item.name}`,
            changedNumber: item.coinCost,
            lastBalance: userLogedIn.coin - item.coinCost,
          }).then(() => {
            addUserItemAPI(userLogedIn.id, item.id).then(() => {
              getUserByUsernameAPI(userLogedIn.username).then((res) => {
                dispatch(setUserLogedIn(res));
                dispatch(closeBuyItemModal());
                alert(`Chúc mừng bạn đã mua thành công ${item.name}`);
              });
            });
          });
        }
      } else {
        if (item.goldCost > userLogedIn.gold) {
          alert("Tài khoản của bạn không đủ, vui lòng nạp tiền!");
        } else {
          dispatch(
            updateCoinGoldUserLogedIn(userLogedIn.id, 0, -item.goldCost)
          );
          addTranAPI({
            userId: userLogedIn.id,
            coinOrGold: "G",
            type: "DOWN",
            content: `Mua ${item.name}`,
            changedNumber: item.goldCost,
            lastBalance: userLogedIn.gold - item.goldCost,
          }).then(() => {
            addUserItemAPI(userLogedIn.id, item.id).then(() => {
              getUserByUsernameAPI(userLogedIn.username).then((res) => {
                dispatch(setUserLogedIn(res));
                dispatch(closeBuyItemModal());
                alert(`Chúc mừng bạn đã mua thành công ${item.name}`);
              });
            });
          });
        }
      }
    }
  };
  return (
    <Modal id="BuyModal" isOpen={show} fade={false}>
      <ModalHeader>
        Xác nhận mua <b className="PressText">{item.name}</b> với giá{" "}
        <b className="PressText">{price}</b>
      </ModalHeader>
      <ModalBody>
        <img
          className={className}
          src={`/imgs/items/${item.image}`}
          alt={item.name}
        ></img>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeBuyItemModal());
          }}
          color="danger"
        >
          Huỷ
        </Button>
        <Button onClick={buy} color="success">
          Xác nhận mua
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default BuyModal;
