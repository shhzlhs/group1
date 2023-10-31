import React from "react";
import { Link } from "react-router-dom";

function AdminPageForWrongRole(props) {
  return (
    <div id="Wrong" className="row">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        Bạn không có quyền truy cập trang này, vui lòng liên hệ với quản trị
        viên<br></br>
        <Link to={"/instavatar/logedIn/main"}>Quay lại trang chủ</Link>
      </div>
    </div>
  );
}

export default AdminPageForWrongRole;
