import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter } from "reactstrap";
import { closeCreateReportConfirmModalAction } from "../../../Redux/Actions/ModalActions";
function CreateReportConfirmModal(props) {
  let dispatch = useDispatch();
  let showCreateReportConfirm = useSelector(
    (state) => state.showCreateReportConfirm
  );
  return (
    <Modal isOpen={showCreateReportConfirm} fade={false}>
      <ModalBody>
        Cảm ơn bạn đã báo cáo! Chúng tôi sẽ xem xét và có biện pháp xử lý trong
        thời gian sớm nhất!
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeCreateReportConfirmModalAction());
          }}
          color="success"
        >
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default CreateReportConfirmModal;
