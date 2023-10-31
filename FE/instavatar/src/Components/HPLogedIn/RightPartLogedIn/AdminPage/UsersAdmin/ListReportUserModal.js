import React from "react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "reactstrap";
import "./UsersAdmin.css";
import { formatRelativeTime, parseDateString } from "../../../../../Funtions";
function ListReportUserModal(props) {
  let { showReports, setShowReports, userToShowReports } = props;
  console.log("rp", userToShowReports.beReports);
  let items = userToShowReports.beReports
    ? userToShowReports.beReports.map((report, index) => {
        console.log("CreatedAt: ", report.createdAt);
        return (
          <div key={index} id="EachReportInfo" className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              <img
                className="EachAvatarReportInfo"
                src={`/imgs/avatars/${report.reporterAvatar}`}
                alt={report.reporterUsername}
              ></img>
            </div>

            <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <b>{report.reporterUsername}</b>
              <br></br>
              <i>{formatRelativeTime(parseDateString(report.createdAt))}</i>
              <br></br>
              <small>
                <i>{`(${report.createdAt})`}</i>
              </small>
            </div>

            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
              <i>
                <b>{report.content}</b>
              </i>
            </div>
          </div>
        );
      })
    : null;
  return (
    <Modal isOpen={showReports} fade={false}>
      <ModalHeader>
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <img
              className="AvatarOfBeReport"
              src={`/imgs/avatars/${userToShowReports.avatar}`}
              alt={userToShowReports.username}
            ></img>
          </div>

          <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
            Danh sách báo cáo tài khoản của{" "}
            <b className="ReportFullName">{userToShowReports.fullName}</b>
          </div>
        </div>
      </ModalHeader>
      <ModalBody>
        <div className="row">{items}</div>
      </ModalBody>
      <ModalFooter>
        <Button
          onClick={() => {
            setShowReports(false);
          }}
          color="success"
        >
          Đóng
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ListReportUserModal;
