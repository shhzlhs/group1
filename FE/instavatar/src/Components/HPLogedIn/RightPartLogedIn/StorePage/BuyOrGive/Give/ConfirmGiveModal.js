import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./Give.css";
import {
  closeConfirmGiveItemAction,
  closeGiveInMessageAction,
} from "../../../../../../Redux/Actions/ModalActions";
import { addUserItemAPI } from "../../../../../../API/UserItemAPI";
import { getUserByUsernameAPI } from "../../../../../../API/UserAPI";
import {
  getAllUsers,
  setUserLogedIn,
  updateCoinGoldUserLogedIn,
} from "../../../../../../Redux/Actions/UserActions";
import { addTranAPI } from "../../../../../../API/TransactionAPI";
import { createNotificationAPI } from "../../../../../../API/NotificationAPI";
import { setUserToGiveItemAction } from "../../../../../../Redux/Actions/StoreActions";
function ConfirmGiveModal(props) {
  let dispatch = useDispatch();
  let show = useSelector((state) => state.showConfirmGive);
  let itemToGive = useSelector((state) => state.itemToBuy);
  let userToGive = useSelector((state) => state.userToGive);
  let users = useSelector((state) => state.users);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let price =
    itemToGive.coinCost > 0
      ? `${itemToGive.coinCost} xu`
      : `${itemToGive.goldCost} lượng`;
  let className = itemToGive.coinCost > 0 ? "CoinImg" : "GoldImg";
  let give = () => {
    if (itemToGive.coinCost > 0) {
      if (itemToGive.coinCost > userLogedIn.coin) {
        alert("Tài khoản của bạn không đủ, vui lòng nạp tiền!");
      } else {
        addUserItemAPI(userToGive.id, itemToGive.id).then(() => {
          createNotificationAPI({
            userId: userToGive.id,
            creatorId: userLogedIn.id,
            content: `${userLogedIn.fullName} đã tặng ${itemToGive.name} cho bạn`,
          });
          addTranAPI({
            userId: userLogedIn.id,
            coinOrGold: "C",
            type: "DOWN",
            content: `Tặng ${itemToGive.name} cho ${userToGive.fullName}`,
            changedNumber: itemToGive.coinCost,
            lastBalance: userLogedIn.coin - itemToGive.coinCost,
          }).then(() => {
            dispatch(
              updateCoinGoldUserLogedIn(userLogedIn.id, -itemToGive.coinCost, 0)
            );
            getUserByUsernameAPI(userLogedIn.username).then((res) => {
              dispatch(setUserLogedIn(res));
              dispatch(closeConfirmGiveItemAction());

              dispatch(getAllUsers());
              dispatch(closeGiveInMessageAction());

              alert("Bạn đã tặng món đồ thành công!");
            });
          });
        });
      }
    } else {
      if (itemToGive.goldCost > userLogedIn.gold) {
        alert("Tài khoản của bạn không đủ, vui lòng nạp tiền!");
      } else {
        addUserItemAPI(userToGive.id, itemToGive.id).then(() => {
          createNotificationAPI({
            userId: userToGive.id,
            creatorId: userLogedIn.id,
            content: `${userLogedIn.fullName} đã tặng ${itemToGive.name} cho bạn`,
          });
          addTranAPI({
            userId: userLogedIn.id,
            coinOrGold: "G",
            type: "DOWN",
            content: `Tặng ${itemToGive.name} cho ${userToGive.fullName}`,
            changedNumber: itemToGive.goldCost,
            lastBalance: userLogedIn.gold - itemToGive.goldCost,
          }).then(() => {
            dispatch(
              updateCoinGoldUserLogedIn(userLogedIn.id, 0, -itemToGive.goldCost)
            );
            getUserByUsernameAPI(userLogedIn.username).then((res) => {
              dispatch(setUserLogedIn(res));
              dispatch(closeConfirmGiveItemAction());
              dispatch(getAllUsers());
              dispatch(closeGiveInMessageAction());
              alert("Bạn đã tặng món đồ thành công!");
            });
          });
        });
      }
    }
  };
  return (
    <Modal isOpen={show} fade={false} id="Mid">
      <ModalHeader>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <img
              className="Atatar"
              alt={userToGive.username}
              src={`/imgs/avatars/${userToGive.avatar}`}
            ></img>
          </div>

          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            Xác nhận tặng <b className="red">{itemToGive.name}</b> cho{" "}
            <b className="red">{userToGive.fullName}</b> với giá{" "}
            <b className="red">{price}</b>
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <img
          className={className}
          alt={itemToGive.name}
          src={`/imgs/items/${itemToGive.image}`}
        ></img>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeConfirmGiveItemAction());
          }}
          color="danger"
        >
          Huỷ
        </Button>
        <Button onClick={give} color="success">
          Xác nhận
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ConfirmGiveModal;
