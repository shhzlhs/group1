import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  closeListToGive,
  showConfirmGiveItemAction,
} from "../../../../../../Redux/Actions/ModalActions";
import "./Give.css";
import { setUserToGiveItemAction } from "../../../../../../Redux/Actions/StoreActions";
function ListFollowingsToGiveItems(props) {
  let dispatch = useDispatch();
  let show = useSelector((state) => state.showListToGive);
  let itemToGive = useSelector((state) => state.itemToBuy);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let baseFollowings =
    userLogedIn.followings && userLogedIn.followings.length > 0
      ? userLogedIn.followings
      : [];
  let [input, setInput] = useState("");
  let followings = baseFollowings
    ? baseFollowings.filter(
        (follow) =>
          follow.username.includes(input) || follow.fullName.includes(input)
      )
    : null;
  let items =
    followings && followings.length > 0 ? (
      followings.map((following, index) => {
        let ownItems =
          following.items && following.items.length > 0
            ? following.items
            : null;
        let ownItem = ownItems
          ? ownItems.find((it) => it.name === itemToGive.name)
          : null;

        return (
          <div key={index} className="row">
            <Button
              onClick={() => {
                if (ownItem) {
                  alert(`${following.fullName} đã sở hữu món đồ này rồi`);
                } else {
                  dispatch(setUserToGiveItemAction(following));
                  dispatch(closeListToGive());
                  dispatch(showConfirmGiveItemAction());
                }
              }}
              id="GiveChoice"
            >
              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <img
                    className="AvatarToGive"
                    alt={following.username}
                    src={`/imgs/avatars/${following.avatar}`}
                  />
                </div>
                <div
                  id="Left"
                  className="col-xs-10 col-sm-10 col-md-10 col-lg-10"
                >
                  <b>{following.username}</b>
                  <br />
                  {following.fullName}
                </div>
              </div>
            </Button>
          </div>
        );
      })
    ) : (
      <div className="row">Không tìm thấy kết quả</div>
    );

  return (
    <Modal id="Modal" isOpen={show} fade={false}>
      <ModalHeader>
        <Input
          value={input}
          type="text"
          onChange={(event) => setInput(event.target.value)}
          placeholder="Bạn muốn tặng cho ai?"
        ></Input>
      </ModalHeader>
      <ModalBody id="SearchModal">{items}</ModalBody>
      <ModalFooter>
        <Button
          color="danger"
          onClick={() => {
            dispatch(closeListToGive());
          }}
        >
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ListFollowingsToGiveItems;
