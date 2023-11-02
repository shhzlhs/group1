import React from "react";
import { Button, Input } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { setInputToSearchUserAction } from "../../../../Redux/Actions/UserActions";
import "./SearchPage.css";
function InputBar(props) {
  let input = useSelector((state) => state.inputForSearchUserInSearchPage);
  let dispatch = useDispatch();
  return (
    <div className="row">
      <div className="col-xs-10 col-sm-10 col-md-10 col-lg-10">
        <Input
          type="text"
          placeholder="Tìm kiếm user..."
          value={input}
          onChange={(event) => {
            dispatch(setInputToSearchUserAction(event.target.value));
          }}
        ></Input>
      </div>

      <div className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
        <Button
          onClick={() => {
            dispatch(setInputToSearchUserAction(""));
          }}
          id="CloseButton"
        >
          <img
            className="CloseImgButton"
            alt="close"
            src="/imgs/icons/Close.png"
          ></img>
        </Button>
      </div>
    </div>
  );
}

export default InputBar;
