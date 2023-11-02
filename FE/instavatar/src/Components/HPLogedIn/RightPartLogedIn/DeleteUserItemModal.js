import React from "react";
import { Button, Modal, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import "./MainPageLogedIn.css";
import { closeDeleteUserItemModal } from "../../../Redux/Actions/ModalActions";
import { deleteUserItemAPI } from "../../../API/UserItemAPI";
import { setUserToShowItemsAction } from "../../../Redux/Actions/UserActions";
import { setUserItemDetail } from "../../../Redux/Actions/UserItemActions";
import { defaultItem } from "../../../Defaults";
function DeleteUserItemModal(props) {
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let dispatch = useDispatch();
  let show = useSelector((state) => state.showDeleteUserItem);
  let item = useSelector((state) => state.userItemDetail);
  let image = item ? "/imgs/items/" + item.image : null;
  let deleteItem = () => {
    deleteUserItemAPI(userLogedIn.id, item.id).then(() => {
      dispatch(setUserToShowItemsAction(userLogedIn.username));
      dispatch(closeDeleteUserItemModal());
      dispatch(setUserItemDetail(defaultItem));
    });
  };
  return (
    <Modal isOpen={show} fade={false}>
      <ModalHeader>
        <img className="ItemDeleteImage" alt={item.name} src={image}></img>Bạn
        chắc chắn muốn bỏ món đồ này chứ?
      </ModalHeader>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeDeleteUserItemModal());
          }}
          color="success"
        >
          Huỷ
        </Button>
        <Button onClick={deleteItem} color="danger">
          Xác nhận
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DeleteUserItemModal;
