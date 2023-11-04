import React from "react";
import SearchTran from "./SearchTran";
import FundFilter from "./FundFilter";
import TypeFilter from "./TypeFilter";
import MinDate from "./MinDate";
import MaxDate from "./MaxDate";

function FilterBar(props) {
  return (
    <div className="row">
      <SearchTran />
      <FundFilter />
      <TypeFilter />
      <MinDate />
      <MaxDate />
    </div>
  );
}

export default FilterBar;
