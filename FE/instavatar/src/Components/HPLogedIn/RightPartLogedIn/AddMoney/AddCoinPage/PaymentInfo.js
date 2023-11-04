import React from "react";
import "./AddCoinPage.css";
import { Button } from "reactstrap";
import {} from "../../../../../API/UserAPI";
import { useSelector, useDispatch } from "react-redux";
import { updateCoinGoldUserLogedIn } from "../../../../../Redux/Actions/UserActions";
import { addTranAPI } from "../../../../../API/TransactionAPI";
function PaymentInfo(props) {
  let { totalMoney, paymentTitle } = props;
  let money = parseInt(totalMoney);
  let userLogedIn = useSelector((state) => state.userLogedIn);
  let dispatch = useDispatch();
  let count = () => {
    switch (money) {
      case 10000:
        return 100;
      case 20000:
        return 200;
      case 50000:
        return 500;
      case 100000:
        return 1100;
      case 200000:
        return 2200;
      case 500000:
        return 6000;
      default:
        return 0;
    }
  };
  let paying = () => {
    if (paymentTitle.trim() === "") {
      alert("Bạn cần chọn phương thức thanh toán");
    } else {
      dispatch(updateCoinGoldUserLogedIn(userLogedIn.id, count(), 0));
      addTranAPI({
        userId: userLogedIn.id,
        coinOrGold: "C",
        type: "UP",
        content: `Nạp xu - ${paymentTitle}`,
        changedNumber: count(),
        lastBalance: userLogedIn.coin + count(),
      }).then(() => {
        alert(
          "Thanh toán thành công, tài khoản của bạn sẽ được cập nhật trong tối đa 10 phút. Nếu có vấn đề, vui lòng liên hệ với chúng tôi trong mục [Trợ giúp], xin cảm ơn!"
        );
      });
    }
  };

  let items =
    count() !== 0 ? (
      <div className="row">
        <br></br>
        <b>Chi tiết giao dịch</b>
        <br></br>
        <br></br>
        Sản phẩm được chọn:
        <img
          className="miniIcon"
          alt="Coin"
          src="/imgs/icons/coin.png"
        ></img>{" "}
        {count()} Coin<br></br>
        <br></br>
        {`Giá: ${totalMoney}`}
        <br />
        <br />
        {`Phương thức thanh toán: ${paymentTitle}`}
        <br />
        <br />
        <Button onClick={paying} color="danger">
          Thanh toán
        </Button>
      </div>
    ) : null;
  return items;
}

export default PaymentInfo;
