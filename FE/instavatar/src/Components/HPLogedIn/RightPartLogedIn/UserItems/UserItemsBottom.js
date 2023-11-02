import React from "react";
import { useSelector, useDispatch } from "react-redux";
import "./UserItemsBottom.css";
import { Button } from "reactstrap";
import { setUserItemDetail } from "../../../../Redux/Actions/UserItemActions";
function UserItemsBottom(props) {
  let dispatch = useDispatch();
  let user = useSelector((state) => state.userToShowItems);
  let items = user ? user.items : null;
  let itemsList =
    items && items.length > 0 ? (
      items.map((item, index) => {
        return (
          <div key={index} className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
            <Button
              onClick={() => {
                dispatch(setUserItemDetail(item));
              }}
              id="EachUserItemButton"
            >
              {" "}
              <img
                src={`/imgs/items/${item.image}`}
                className="EachUserItemImg"
                alt={item.name}
              ></img>
            </Button>
          </div>
        );
      })
    ) : (
      <div className="row">Chưa có món đồ nào</div>
    );

  return (
    <div id="UserItemsBottom" className="row">
      {itemsList}
    </div>
  );
}

export default UserItemsBottom;
