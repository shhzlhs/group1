import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Button } from "reactstrap";
import "./UserItemsTop.css";
import { defaultItem } from "../../../../../Defaults";
import { showDeleteUserItemModal } from "../../../../../Redux/Actions/ModalActions";
function ItemInfo(props) {
  let dispatch = useDispatch();
  let item = useSelector((state) => state.userItemDetail);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let user = useSelector((state) => state.userToShowItems);
  let button =
    userLogedIn &&
    user &&
    userLogedIn.username === user.username &&
    item &&
    item.name !== defaultItem.name ? (
      <Button
        onClick={() => {
          dispatch(showDeleteUserItemModal());
        }}
        color="danger"
      >
        Xoá
      </Button>
    ) : null;
  return (
    <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
      <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <img
          className="ItemDetailImg"
          alt={item.name}
          src={`/imgs/items/${item.image}`}
        ></img>
      </div>

      <div id="left" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        <div className="row">
          <h3>{item.name}</h3>
        </div>

        <div className="row">{button}</div>
      </div>
    </div>
  );
}

export default ItemInfo;
