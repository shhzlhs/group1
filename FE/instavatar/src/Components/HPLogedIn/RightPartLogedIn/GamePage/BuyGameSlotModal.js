import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useSelector, useDispatch } from "react-redux";
import "./GamePage.css";
import { closeBuyGameSlotModalAction } from "../../../../Redux/Actions/ModalActions";
import { changeSlotByUserAndGameAction } from "../../../../Redux/Actions/GameSlotActions";
import {
  setUserLogedIn,
  updateCoinGoldUserLogedIn,
} from "../../../../Redux/Actions/UserActions";
import { addTranAPI } from "../../../../API/TransactionAPI";
import { getUserByUsernameAPI } from "../../../../API/UserAPI";
function BuyGameSlotModal(props) {
  let dispatch = useDispatch();
  let show = useSelector((state) => state.showBuyGameSlot);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let game = useSelector((state) => state.gameToBuySlot);
  let price = game.slotCoinPrice > 0 ? game.slotCoinPrice : game.slotGoldPrice;
  let [slotToBuy, setSlotToBuy] = useState(1);
  let totalMoney = price * slotToBuy;
  let totalMoneyText =
    game.slotCoinPrice > 0 ? `${totalMoney} xu` : `${totalMoney} lượng`;
  let buySlot = () => {
    if (slotToBuy > 0) {
      if (game.slotCoinPrice > 0) {
        if (totalMoney > userLogedIn.coin) {
          alert("Tài khoản của bạn không đủ, vui lòng nạp tiền!");
        } else {
          dispatch(
            changeSlotByUserAndGameAction(userLogedIn.id, game.id, slotToBuy)
          );
          dispatch(updateCoinGoldUserLogedIn(userLogedIn.id, -totalMoney, 0));
          addTranAPI({
            userId: userLogedIn.id,
            coinOrGold: "C",
            type: "DOWN",
            content: `Mua lượt chơi ${game.name}`,
            changedNumber: totalMoney,
            lastBalance: userLogedIn.coin - totalMoney,
          }).then(() => {
            getUserByUsernameAPI(userLogedIn.username).then((res) => {
              dispatch(setUserLogedIn(res));
              dispatch(closeBuyGameSlotModalAction());
              setSlotToBuy(1);
              alert("Chúc mừng bạn đã mua lượt chơi thành công!");
            });
          });
        }
      } else {
        if (totalMoney > userLogedIn.gold) {
          alert("Tài khoản của bạn không đủ, vui lòng nạp tiền!");
        } else {
          dispatch(
            changeSlotByUserAndGameAction(userLogedIn.id, game.id, slotToBuy)
          );
          dispatch(updateCoinGoldUserLogedIn(userLogedIn.id, 0, -totalMoney));
          addTranAPI({
            userId: userLogedIn.id,
            coinOrGold: "G",
            type: "DOWN",
            content: `Mua lượt chơi ${game.name}`,
            changedNumber: totalMoney,
            lastBalance: userLogedIn.gold - totalMoney,
          }).then(() => {
            getUserByUsernameAPI(userLogedIn.username).then((res) => {
              dispatch(setUserLogedIn(res));
              dispatch(closeBuyGameSlotModalAction());
              setSlotToBuy(1);
              alert("Chúc mừng bạn đã mua lượt chơi thành công!");
            });
          });
        }
      }
    } else {
      alert("Không có gì để mua");
    }
  };
  return (
    <Modal id="BuySlotModal" isOpen={show} fade={false}>
      <ModalHeader>
        Mua lượt chơi <b className="red">{game.name}</b>
      </ModalHeader>
      <ModalBody>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <b>Bạn muốn mua bao nhiêu lượt?</b>
          </div>

          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <Input
              type="number"
              min={0}
              value={slotToBuy}
              onChange={(event) => {
                setSlotToBuy(event.target.value);
              }}
            ></Input>
          </div>

          <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
            Giá: <b className="red">{totalMoneyText}</b>{" "}
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            setSlotToBuy(1);
            dispatch(closeBuyGameSlotModalAction());
          }}
        >
          Huỷ
        </Button>
        <Button onClick={buySlot} color="success">
          Xác nhận
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default BuyGameSlotModal;
