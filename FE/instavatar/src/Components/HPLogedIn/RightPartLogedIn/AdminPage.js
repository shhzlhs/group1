import React from "react";
import "./MainPageLogedIn.css";
import AdminInfo from "./AdminPage/AdminInfo";
import AdminMenu from "./AdminPage/AdminMenu";
function AdminPage(props) {
  return (
    <div className="MainPageLogedIn">
      <div className="row">
        <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

        <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
          <AdminInfo />
          <AdminMenu />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
