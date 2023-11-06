import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import {
  getAllItemsAction,
  setItemToBuyAction,
} from "../../../../../Redux/Actions/StoreActions";
import {
  closeGiveInMessageAction,
  showConfirmGiveItemAction,
} from "../../../../../Redux/Actions/ModalActions";
import "./MessagesArea.css";
function GiveItemModal(props) {
  let dispatch = useDispatch();
  let show = useSelector((state) => state.showGiveInMessage);
  let userToGive = useSelector((state) => state.userToGive);
  let [input, setInput] = useState("");
  useEffect(() => {
    dispatch(getAllItemsAction());
  }, []);
  let baseItems = useSelector((state) => state.items);
  let items =
    baseItems && baseItems.length > 0
      ? baseItems.filter((it) => it.name.includes(input))
      : null;
  let showItems =
    items && items.length > 0 ? (
      items.map((item, index) => {
        let price =
          item.coinCost > 0 ? `${item.coinCost} Xu` : `${item.goldCost} Lượng`;
        let id = item.coinCost > 0 ? "coinColor" : "goldColor";
        let give = () => {
          let ownItems =
            userToGive.items && userToGive.items.length > 0
              ? userToGive.items
              : null;

          let ownItem =
            ownItems && ownItems.length > 0
              ? ownItems.find((it) => it.name === item.name)
              : null;

          if (ownItem) {
            alert(`${userToGive.fullName} đã sở hữu món đồ này rồi`);
          } else {
            dispatch(setItemToBuyAction(item));
            dispatch(showConfirmGiveItemAction());
          }
        };
        return (
          <div key={index} className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <div className="row">
              <Button onClick={give} id="noneButton">
                <img
                  alt={item.name}
                  src={`/imgs/items/${item.image}`}
                  className="ItemImg"
                ></img>
              </Button>
            </div>

            <div id="mid" className="row">
              <b id={id}>{price}</b>
            </div>
          </div>
        );
      })
    ) : (
      <div id="mid" className="row">
        Không tìm thấy kết quả
      </div>
    );

  return (
    <Modal id="mid" isOpen={show} fade={false}>
      <ModalHeader>
        Tặng quà cho <b className="red">{userToGive.fullName}</b>
      </ModalHeader>
      <ModalBody id="ModalBody">
        <div id="MarginTop" className="row">
          <Input
            type="text"
            value={input}
            placeholder="Bạn muốn tặng gì?"
            onChange={(event) => {
              setInput(event.target.value);
            }}
          ></Input>
        </div>

        <div className="row">{showItems}</div>
      </ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            dispatch(closeGiveInMessageAction());
          }}
        >
          Huỷ
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default GiveItemModal;
