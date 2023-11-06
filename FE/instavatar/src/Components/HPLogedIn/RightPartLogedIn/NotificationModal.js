import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./MainPageLogedIn.css";
import {
  closeNosModal,
  showDelNoModal,
} from "../../../Redux/Actions/ModalActions";
import { formatRelativeTime, parseDateString } from "../../../Funtions";
import {
  getNoByUserId,
  setNoDel,
} from "../../../Redux/Actions/NotificationActions";
import { useNavigate } from "react-router-dom";
import { updateToReadCompleteAPI } from "../../../API/NotificationAPI";
import { setUserToShowItemsAction } from "../../../Redux/Actions/UserActions";
function NotificationModal(props) {
  let navigate = useNavigate();
  const reduxStore = useSelector((state) => state);
  const dispatch = useDispatch();
  const showNos = reduxStore.showNos;
  let userLogedIn = reduxStore.userLogedIn;
  useEffect(() => {
    dispatch(getNoByUserId(userLogedIn.id));
  }, []);

  const notifications = reduxStore.notifications;
  if (notifications && notifications.length > 1) {
    notifications.sort((noA, noB) => {
      const dateA = parseDateString(noA.createdAt);
      const dateB = parseDateString(noB.createdAt);
      return dateB - dateA;
    });
  }

  const items = () => {
    if (!notifications || notifications.length === 0) {
      return (
        <div id="mid" className="row">
          Chưa có thông báo nào
        </div>
      );
    }
    return notifications.map((notification, index) => {
      let del =
        notification.isRead === "N" ? (
          <img className="NotRead" alt="point" src="/imgs/icons/Red.png"></img>
        ) : (
          <Button
            onClick={() => {
              dispatch(setNoDel(notification));
              dispatch(showDelNoModal());
            }}
            id="delNoButton"
          >
            Xoá
          </Button>
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
            <Button
              onClick={() => {
                dispatch(closeNosModal());
                updateToReadCompleteAPI(notification.id).then(() => {
                  dispatch(getNoByUserId(userLogedIn.id));
                  if (notification.postId !== 0) {
                    navigate(`/instavatar/logedIn/post/${notification.postId}`);
                  } else {
                    navigate(
                      `/instavatar/logedIn/userItems/${userLogedIn.username}`
                    );
                  }
                });
              }}
              id="Link"
            >
              {notification.content}
            </Button>
            <br />
            <i>{formatRelativeTime(parseDateString(notification.createdAt))}</i>
          </div>

          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <br></br>
            {del}
          </div>
        </div>
      );
    });
  };

  return (
    <Modal isOpen={showNos} fade={false}>
      <ModalHeader id="mid">Danh sách thông báo</ModalHeader>
      <ModalBody className="ModalBody">{items()}</ModalBody>
      <ModalFooter>
        <Button
          color="danger"
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
