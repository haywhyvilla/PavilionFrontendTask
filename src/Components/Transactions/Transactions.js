import React from "react";
import "./Transaction.css";
import Home from "../Home/Home";
import { AiOutlineEye } from "react-icons/ai";
import Box2 from "./Box2";
import DisplayTable from "../../DisplayTable/DisplayTable";

const Transactions = () => {
  return (
    <div className="section-trans">
      <Home />
      <div className="trans-head">
        <div className="transaction-head">
          <div className="view-hide">
            <AiOutlineEye />
            <p>View/Hide Fields</p>
          </div>
          <Box2 text="Download Report" />
        </div>
        <DisplayTable />
      </div>
    </div>
  );
};

export default Transactions;
