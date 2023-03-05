import React from "react";
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
import { TbGraph } from "react-icons/tb";

const SidebarList = () => {
  return (
    <React.Fragment>
      <div className="navbar-items">
        <ul>
          <li className="nav-item">POS Monitoring</li>
          <li>
            <MdOutlineDashboard />
            Dashboard
          </li>
          <li>
            <GrAtm />
            Transactions
            <BsChevronDown />
          </li>
          <li>
            <MdHealthAndSafety />
            Terminal Health
            <BsChevronDown />
          </li>
          <li>
            <FaMoneyCheckAlt />
            Settlement
            <BsChevronDown />
          </li>
          <li>
            <TbGraph />
            Performance
            <BsChevronDown />
          </li>

          <li>
            <BsFillFileEarmarkTextFill />
            Bank Statement
          </li>
          <li>
            <MdPointOfSale />
            My Terminals
          </li>
          <li>
            <MdOutlineDashboard />
            Dashboard
          </li>
          <li>
            <MdOutlineDashboard />
            Dashboard
          </li>
          <li>
            <MdOutlineDashboard />
            Dashboard
          </li>
          <li>
            <MdOutlineDashboard />
            Dashboard
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default SidebarList;
