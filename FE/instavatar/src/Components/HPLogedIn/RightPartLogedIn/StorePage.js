import React, { useEffect } from "react";
import "./MainPageLogedIn.css";
import StoreInfoBar from "./StorePage/StoreInfoBar";
import StoreFilterBar from "./StorePage/StoreFilterBar";
import { useDispatch, useSelector } from "react-redux";
import {
  getAllItemsAction,
  setCoinGoldStoreToFilterAction,
  setItemTypeToFilterAction,
} from "../../../Redux/Actions/StoreActions";
import ItemsList from "./StorePage/ItemsList";
import {
  setUserLogedIn,
  setUserToShowItemsAction,
} from "../../../Redux/Actions/UserActions";
import { getUserByUsernameAPI } from "../../../API/UserAPI";
function StorePage(props) {
  let dispatch = useDispatch();
  let userLogedIn = useSelector((state) => state.userLogedIn);
  useEffect(() => {
    getUserByUsernameAPI(userLogedIn.username).then((res) => {
      dispatch(setUserLogedIn(res));
    });
    dispatch(setUserToShowItemsAction(userLogedIn.username));
    dispatch(getAllItemsAction());
    dispatch(setCoinGoldStoreToFilterAction(""));
    dispatch(setItemTypeToFilterAction(""));
  }, []);
  return (
    <div className="MainPageLogedIn">
      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2"></div>

      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <StoreInfoBar />
        <StoreFilterBar />
        <ItemsList />
      </div>
    </div>
  );
}

export default StorePage;
