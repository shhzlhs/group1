import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./MainPageLogedIn.css";
import { closeNosModal } from "../../../Redux/Actions/ModalActions";
import { formatRelativeTime, parseDateString } from "../../../Funtions";
import { getNoByUserId } from "../../../Redux/Actions/NotificationActions";

function NotificationModal(props) {
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const showNos = reduxStore.showNos;
  let userLogedIn = reduxStore.userLogedIn;
  useEffect(() => {
    dispatch(getNoByUserId(userLogedIn.id));
  }, []);

  const notifications = reduxStore.notifications;

  const items = () => {
    if (!notifications || notifications.length === 0) {
      return "Chưa có thông báo nào";
    }
    return notifications.map((notification, index) => {
      let del =
        notification.isRead === "N" ? (
          <img className="NotRead" alt="point" src="/imgs/icons/Red.png"></img>
        ) : (
          <Button>Xoá</Button>
        );
      let id = notification.isRead === "N" ? "N" : "Y";
      return (
        <div id={id} key={index} className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <img
              className="FollowAvatar"
              alt={notification.creatorUsername}
              src={`/imgs/avatars/${notification.creatorAvatar}`}
            />
          </div>

          <div className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
            {notification.content}
            <br />
            <i>{formatRelativeTime(parseDateString(notification.createdAt))}</i>
          </div>

          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">{del}</div>
        </div>
      );
    });
  };

  return (
    <Modal isOpen={showNos} fade={false}>
      <ModalHeader>
        <div className="col-xs-5 col-sm-5 col-md-5 col-lg-5" />
        Danh sách thông báo
      </ModalHeader>
      <ModalBody className="ModalBody">{items()}</ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            dispatch(closeNosModal());
          }}
        >
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default NotificationModal;
