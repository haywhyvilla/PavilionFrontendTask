import React from "react";
import "./Transaction.css";
import Home from "../Home/Home";
import { AiOutlineEye } from "react-icons/ai";
import Box from "../Home/Box";

const Transactions = () => {
  return (
    <div className="section-trans">
      <Home />
      <div className="transaction-head">
        <div className="view-hide">
          <AiOutlineEye />
          <p>View/Hide Fields</p>
        </div>
        <Box text="Download Report" />
      </div>
    </div>
  );
};

export default Transactions;
