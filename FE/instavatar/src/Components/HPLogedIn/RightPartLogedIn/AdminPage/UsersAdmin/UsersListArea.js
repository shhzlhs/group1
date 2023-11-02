import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Button } from "reactstrap";
import ListReportUserModal from "./ListReportUserModal";
import { parseDateString } from "../../../../../Funtions";
function UsersListArea(props) {
  let [userToShowReports, setUserToShowReport] = useState({});
  let [showReports, setShowReports] = useState(false);
  let baseUsers = useSelector((state) => state.users);
  let input = useSelector((state) => state.inputForSearchUserAdmin);
  let status = useSelector((state) => state.statusForSearchUser);
  let length = useSelector((state) => state.lengthOfReportsUser);
  if (baseUsers && baseUsers.length > 1) {
    baseUsers.sort((userA, userB) => {
      const dateA = parseDateString(userA.createdAt);
      const dateB = parseDateString(userB.createdAt);
      return dateB - dateA;
    });
  }
  let users = baseUsers
    ? baseUsers.filter(
        (baseUser) =>
          (baseUser.username.includes(input) ||
            baseUser.fullName.includes(input) ||
            baseUser.email.includes(input)) &&
          baseUser.status.includes(status) &&
          baseUser.beReports.length >= length
      )
    : null;
  let items =
    users && users.length > 0 ? (
      users.map((user, index) => {
        let button =
          user.beReports && user.beReports.length > 0 ? (
            <Button
              onClick={() => {
                setUserToShowReport(user);
                setShowReports(true);
              }}
              id="beReport"
            >
              {`Xem danh sách báo cáo (${user.beReports.length})`}
            </Button>
          ) : null;
        let avatar = "/imgs/avatars/" + user.avatar;
        return (
          <div key={index} id="EachUserRow" className="row">
            <div className="col-xs-1 col-sm-1 col-md-1 col-lg-1">
              <img
                className="AvatarRowAdmin"
                src={avatar}
                alt={user.username}
              ></img>
            </div>

            <div id="Left" className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
              <b>{user.username}</b>
              <br></br>
              {user.fullName}
              <br />
              {user.email}
              <br />
              {`${
                user.status === "ACTIVED" ? "Đã kích hoạt" : "Chưa kích hoạt"
              }`}
              <br></br>
              <i>{`Tham gia ngày ${user.createdAt}`}</i>
            </div>

            <div className="col-xs-7 col-sm-7 col-md-7 col-lg-7">
              <br />

              <div className="row">
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <div className="checkbox">
                    <label>
                      <input type="checkbox" value="" />
                    </label>
                  </div>
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Button id="tinyButton">
                    <img
                      className="tinyIcon"
                      alt="Chỉnh sửa"
                      src="/imgs/icons/edit.png"
                    ></img>
                  </Button>
                </div>
                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  <Button id="tinyButton">
                    {" "}
                    <img
                      className="tinyIcon"
                      alt="Chỉnh sửa"
                      src="/imgs/icons/del.png"
                    ></img>
                  </Button>
                </div>

                <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
                  {button}
                </div>
              </div>
            </div>
          </div>
        );
      })
    ) : (
      <div className="row">Không tìm thấy kết quả nào</div>
    );
  return (
    <div className="EachAdmin">
      {items}
      <ListReportUserModal
        showReports={showReports}
        setShowReports={setShowReports}
        userToShowReports={userToShowReports}
      />
    </div>
  );
}

export default UsersListArea;
