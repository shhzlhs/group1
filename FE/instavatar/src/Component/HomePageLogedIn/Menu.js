import React from "react";
import Logo from "./Logo";

function Menu(props) {
  return (
    <div id="menu" className="col-xs-2 col-sm-2 col-md-2 col-lg-2">
      <div className="row">
        <Logo />
      </div>

      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Home.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Home</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Search.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Tìm kiếm</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Message.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Tin nhắn</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Notification.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Thông báo</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Game.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Games</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Store.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Cửa hàng</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Items.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Kho đồ</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Admin.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>ADMIN</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-4 col-sm-4 col-md-4 col-lg-4">
          <img className="Icon" src="/imgs/icons/Setting.png" />
        </div>

        <div id="menu-text" className="col-xs-8 col-sm-8 col-md-8 col-lg-8">
          <h4>Cài đặt</h4>
        </div>
      </div>
    </div>
  );
}

export default Menu;
