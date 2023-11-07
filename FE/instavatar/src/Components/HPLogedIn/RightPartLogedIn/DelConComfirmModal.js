import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import {
  closeDelConConfirmModal,
  closeDelConModal,
} from "../../../Redux/Actions/ModalActions";
import { setCoversationDetail } from "../../../Redux/Actions/ConversationAction";
function DelConComfirmModal(props) {
  let dispatch = useDispatch();
  let showDelConConfirm = useSelector((state) => state.showDelConConfirm);
  let onClose = () => {
    dispatch(setCoversationDetail({}));
    dispatch(closeDelConModal());
    dispatch(closeDelConConfirmModal());
  };
  return (
    <Modal isOpen={showDelConConfirm} fade={false}>
      <ModalBody id="mid">Xoá thành công</ModalBody>
      <ModalFooter>
        <Button onClick={onClose} color="success">
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DelConComfirmModal;
