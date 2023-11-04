import React from "react";
import "./TransactionHistory.css";
function TableHeader(props) {
  return (
    <thead id="DarkHead">
      <tr>
        <th>Thời gian</th>
        <th>Tài khoản</th>
        <th>Loại giao dịch</th>
        <th>Nội dung</th>
        <th>Số tiền thay đổi</th>
        <th>Số dư cuối</th>
      </tr>
    </thead>
  );
}

export default TableHeader;
