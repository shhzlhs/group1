import React, { useState } from "react";
import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
} from "reactstrap";
import "./MainPageLogedIn.css";
import { useDispatch, useSelector } from "react-redux";
import {
  closeReportModalAction,
  showCreateReportConfirmModalAction,
} from "../../../Redux/Actions/ModalActions";
import {
  setCommentReportAction,
  setPostReportAction,
  setUserReportAction,
} from "../../../Redux/Actions/ReportAction";
import { createReportAPI } from "../../../API/ReportAPI";
function ReportModal(props) {
  let dispatch = useDispatch();
  let [input, setInput] = useState("");
  let showReport = useSelector((state) => state.showReport);
  let comment = useSelector((state) => state.commentReport);
  let user = useSelector((state) => state.userReport);
  let post = useSelector((state) => state.postReport);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let cancel = () => {
    dispatch(closeReportModalAction());
    dispatch(setPostReportAction({}));
    dispatch(setUserReportAction({}));
    dispatch(setCommentReportAction({}));
    setInput("");
  };
  let report = () => {
    if (input.trim() !== "") {
      if (comment && comment.id !== null && comment.id !== undefined) {
        createReportAPI({
          reporterId: userLogedIn.id,
          commentId: comment.id,
          content: input,
        });
      } else if (post && post.id !== null && post.id !== undefined) {
        createReportAPI({
          reporterId: userLogedIn.id,
          postId: post.id,
          content: input,
        });
      } else if (user && (user.id !== null) & (user.id !== undefined)) {
        createReportAPI({
          reporterId: userLogedIn.id,
          reportToId: user.id,
          content: input,
        });
      }
    }
    dispatch(closeReportModalAction());
    dispatch(setPostReportAction({}));
    dispatch(setUserReportAction({}));
    dispatch(setCommentReportAction({}));
    setInput("");
    dispatch(showCreateReportConfirmModalAction());
  };
  return (
    <Modal isOpen={showReport} fade={false}>
      <ModalHeader id="mid">Cho chúng tôi biết vì sao bạn báo cáo</ModalHeader>
      <ModalBody>
        <Input
          placeholder="Ex: Nội dung xấu, độc..."
          id="ReportInput"
          type="text"
          value={input}
          onChange={(event) => {
            setInput(event.target.value);
          }}
        ></Input>
      </ModalBody>
      <ModalFooter>
        <Button onClick={cancel} color="primary">
          Huỷ
        </Button>
        <Button onClick={report} color="danger">
          Báo cáo
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ReportModal;
