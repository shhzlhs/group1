import React from "react";
import { Input } from "reactstrap";

function ChooseMoney(props) {
  let { setTotalMoney, totalMoney } = props;

  return (
    <div className="row">
      <Input
        value={totalMoney}
        onChange={(event) => {
          setTotalMoney(event.target.value);
        }}
        type="select"
      >
        <option value="">Chọn mệnh giá</option>
        <option value="10000">10.000 VNĐ - Coin + 100</option>
        <option value="20000">20.000 VNĐ - Coin + 200</option>
        <option value="50000">50.000 VNĐ - Coin + 500</option>
        <option value="100000">100.000 VNĐ - Coin + 1.100</option>
        <option value="200000">200.000 VNĐ - Coin + 2.200</option>
        <option value="500000">500.000 VNĐ - Coin + 6.000</option>
      </Input>
    </div>
  );
}

export default ChooseMoney;
