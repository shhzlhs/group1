import React from "react";
import TableHeader from "./TableHeader";
import { Table } from "reactstrap";
import "./TransactionHistory.css";
import TableBody from "./TableBody";
function TransTable(props) {
  return (
    <div id="Table" className="row">
      <Table>
        <TableHeader />
        <TableBody />
      </Table>
    </div>
  );
}

export default TransTable;
