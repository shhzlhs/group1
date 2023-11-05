import React from "react";
import { useSelector } from "react-redux";
import { formatDate, parseDateString } from "../../../../Funtions";
import "./TransactionHistory.css";
function TableBody(props) {
  let input = useSelector((state) => state.inputForSearchTransaction);
  let coinOrGold = useSelector((state) => state.coinOrGold);
  let type = useSelector((state) => state.tranType);
  let minDate = useSelector((state) => state.minDate);
  let maxDate = useSelector((state) => state.maxDate);
  const nextDay = new Date(maxDate);
  nextDay.setDate(nextDay.getDate() + 1);
  let baseTransactions = useSelector((state) => state.transactions);
  let transactions =
    baseTransactions && baseTransactions.length > 0
      ? baseTransactions.filter(
          (tran) =>
            tran.content.includes(input) &&
            tran.coinOrGold.includes(coinOrGold) &&
            tran.type.includes(type) &&
            parseDateString(tran.createdAt) >=
              parseDateString(formatDate(minDate)) &&
            parseDateString(tran.createdAt) <=
              parseDateString(formatDate(nextDay))
        )
      : null;
  if (transactions && transactions.length > 1) {
    transactions.sort((tranA, tranB) => {
      const dateA = parseDateString(tranA.createdAt);
      const dateB = parseDateString(tranB.createdAt);
      return dateB - dateA;
    });
  }
  let items =
    transactions &&
    transactions.map((tran, index) => {
      let fund = tran.coinOrGold === "C" ? "Xu" : "Lượng";
      let tranType = tran.type === "UP" ? "Tăng" : "Giảm";
      let changedNumber =
        tran.type === "UP"
          ? `+ ${tran.changedNumber}`
          : `- ${tran.changedNumber}`;
      let changedColor = tran.type === "UP" ? "green" : "red";
      let trId = tran.coinOrGold === "C" ? "coinId" : "goldId";
      return (
        <tr id={trId} key={index}>
          <td>{tran.createdAt}</td>
          <td>{fund}</td>
          <td>{tranType}</td>
          <td>{tran.content}</td>
          <td id={changedColor}>{changedNumber}</td>
          <td>{tran.lastBalance}</td>
        </tr>
      );
    });
  return <tbody>{items}</tbody>;
}

export default TableBody;
