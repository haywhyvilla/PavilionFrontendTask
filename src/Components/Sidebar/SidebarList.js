import React, { useState } from "react";
import "./SidebarList.css";
import {
  MdOutlineDashboard,
  MdHealthAndSafety,
  MdPointOfSale,
} from "react-icons/md";
import {
  BsChevronUp,
  BsChevronDown,
  BsFillFileEarmarkTextFill,
} from "react-icons/bs";
import { GrAtm } from "react-icons/gr";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { TbGraph, TbMessageDots } from "react-icons/tb";
import { IoMdSettings } from "react-icons/io";
import { AiOutlineReconciliation } from "react-icons/ai";
import { ImHammer2 } from "react-icons/im";

const SidebarList = () => {
  const [expandTransactions, setExpandTransaction] = useState(true);

  const handleExpandClick = () => {
    setExpandTransaction(!expandTransactions);
  };
  return (
    <React.Fragment>
      <div className="navbar-items">
        <ul>
          <li className="color-dark">POS Monitoring</li>
          <li className="nav-item">
            <MdOutlineDashboard />
            Dashboard
          </li>
          <li className="nav-item" onClick={handleExpandClick}>
            <GrAtm />
            Transactions
            {expandTransactions ? <BsChevronUp /> : <BsChevronDown />}
            <div>
              <ul className={expandTransactions ? "" : "close"}>
                <li className="inner-nav-item">Summary</li>
                <li className="inner-nav-item">Transactions Report</li>
              </ul>
            </div>
          </li>
          <li className="nav-item">
            <MdHealthAndSafety />
            Terminal Health
            <BsChevronDown />
          </li>
          <li className="nav-item">
            <FaMoneyCheckAlt />
            Settlement
            <BsChevronDown />
          </li>
          <li className="nav-item">
            <TbGraph />
            Performance
            <BsChevronDown />
          </li>

          <li className="nav-item">
            <BsFillFileEarmarkTextFill />
            Bank Statement
          </li>
          <li className="nav-item">
            <MdPointOfSale />
            My Terminals
          </li>
          <li className="nav-item">
            <IoMdSettings />
            Settings
            <BsChevronDown />
          </li>
          <li className="nav-item">
            <TbMessageDots />
            Message Center
          </li>
          <li className="nav-item">
            <AiOutlineReconciliation />
            Reconciliation
          </li>
          <li className="nav-item">
            <ImHammer2 />
            Dispute Management
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SidebarList;
