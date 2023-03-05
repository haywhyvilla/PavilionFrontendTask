import React from "react";
import "./Transaction.css";
import Home from "../Home/Home";
import { AiOutlineEye } from "react-icons/ai";
import Box2 from "./Box2";
import DisplayTable from "../../DisplayTable/DisplayTable";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

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
        <div className="centre">
          <div className="flex">
            <BsChevronLeft size={30} />
            <h5>1</h5>
            <h5>2</h5>
            <h5>3</h5>
            <h2>............</h2>
            <h5>30</h5>
            <BsChevronRight size={28} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Transactions;
