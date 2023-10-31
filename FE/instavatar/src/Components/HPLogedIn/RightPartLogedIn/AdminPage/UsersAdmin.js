import React, { useEffect } from "react";
import FilterBar from "./UsersAdmin/FilterBar";
import InfoCorner from "./InfoCorner";
import "./Admin.css";
import { useSelector, useDispatch } from "react-redux";
import AdminPageForWrongRole from "./AdminPageForWrongRole";
import UsersListArea from "./UsersAdmin/UsersListArea";
import { getAllUsers } from "../../../../Redux/Actions/UserActions";
function UsersAdmin(props) {
  let dispatchRedux = useDispatch();
  useEffect(() => {
    dispatchRedux(getAllUsers());
  }, []);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let userAdmin =
    userLogedIn && userLogedIn.role === "ADMIN" ? (
      <div className="EachAdminPage">
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

          <div
            id="EachAdminPage"
            className="col-xs-10 col-sm-10 col-md-10 col-lg-10"
          >
            <div className="row">
              <FilterBar />
              <InfoCorner />
              <UsersListArea />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <AdminPageForWrongRole />
    );
  return userAdmin;
}

export default UsersAdmin;
