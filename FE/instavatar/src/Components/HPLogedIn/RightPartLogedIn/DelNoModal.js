import React from "react";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { closeDelNoModal } from "../../../Redux/Actions/ModalActions";
import { deleteNo, setNoDel } from "../../../Redux/Actions/NotificationActions";
function DelNoModal(props) {
  let showDelNo = useSelector((state) => state.showDelNo);
  let noDel = useSelector((state) => state.noDel);
  let dispatch = useDispatch();
  return (
    <Modal isOpen={showDelNo} fade={false}>
      <ModalBody id="mid">Bạn chắc chắn muốn xoá thông báo?</ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeDelNoModal());
          }}
          color="success"
        >
          Huỷ
        </Button>
        <Button
          onClick={() => {
            dispatch(deleteNo(noDel));
            alert("Bạn đã xoá thành công!");
            dispatch(closeDelNoModal());
            dispatch(setNoDel({}));
          }}
          color="danger"
        >
          Xác nhận
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default DelNoModal;
