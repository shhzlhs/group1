import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  closeDelConModal,
  showDelConConfirmModal,
} from "../../../Redux/Actions/ModalActions";
import {
  delelteConversation,
  updateToDelByUser,
} from "../../../Redux/Actions/ConversationAction";
function DelConModal(props) {
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let conToDel = useSelector((state) => state.conversationToDel);
  let showDelCon = useSelector((state) => state.showDelCon);
  let fullName =
    userLogedIn && conToDel && conToDel.user1Username === userLogedIn.username
      ? conToDel.user2FullName
      : userLogedIn &&
        conToDel &&
        conToDel.user1Username !== userLogedIn.username
      ? conToDel.user1FullName
      : null;
  let clickDel = () => {
    if (conToDel.user1Username === userLogedIn.username) {
      if (conToDel.del2 === "Y") {
        dispatch(delelteConversation(conToDel));
      } else {
        dispatch(updateToDelByUser(userLogedIn.id, conToDel));
      }
      dispatch(showDelConConfirmModal());
    } else {
      if (conToDel.del1 === "Y") {
        dispatch(delelteConversation(conToDel));
      } else {
        dispatch(updateToDelByUser(userLogedIn.id, conToDel));
      }
      dispatch(showDelConConfirmModal());
    }
  };
  return (
    <Modal isOpen={showDelCon} fade={false}>
      <ModalHeader>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5"></div>
        Xoá cuộc trò chuyện
      </ModalHeader>
      <ModalBody>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3"></div>
        {`Xác nhận xoá toàn bộ tin nhắn với ${fullName}`}
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeDelConModal());
          }}
          color="primary"
        >
          Huỷ
        </Button>
        <Button onClick={clickDel} color="danger">
          Xác nhận
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DelConModal;
