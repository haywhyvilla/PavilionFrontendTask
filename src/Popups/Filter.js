import React, { useState } from "react";
import "./Filter.css";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const Filter = () => {
  const [expandDate, setExpandDate] = useState(true);
  const [expandPtsp, setExpandPtsp] = useState(true);
  const [expandTerminal, setExpandTerminal] = useState(true);
  const [expandStatus, setExpandStatus] = useState(true);

  const handleExpandDate = () => {
    setExpandDate(!expandDate);
  };

  const handleExpandPtsp = () => {
    setExpandPtsp(!expandPtsp);
  };

  const handleExpandTerminal = () => {
    setExpandTerminal(!expandTerminal);
  };

  const handleExpandStatus = () => {
    setExpandStatus(!expandStatus);
  };
  return (
    <div className="filter-blur">
      <div className="section-filter">
        <div className="filter">
          <h5>Filters</h5>
          <p>Cancel Filter</p>
        </div>
        <div className="cta-filter" onClick={handleExpandDate}>
          {expandDate ? <BsChevronRight /> : <BsChevronDown />}
          <p>Date</p>
        </div>
        <div className="date">
          <div className="year-month-date">
            <input type={Text} placeholder="dd/mm/yy" />
            <p>to</p>
            <input type={Text} placeholder="dd/mm/yy" />
          </div>
        </div>
        <div className="cta-filter" onClick={handleExpandPtsp}>
          {expandPtsp ? <BsChevronRight /> : <BsChevronDown />}
          <p>PTSP</p>
        </div>
        <div className="date">
          <div className="search">
            <input type={Text} placeholder="Search for a Ptsp" />
          </div>
        </div>
        <div className="cta-filter" onClick={handleExpandTerminal}>
          {expandTerminal ? <BsChevronRight /> : <BsChevronDown />}
          <p>Terminal ID</p>
        </div>
        <div className="date">
          <div className="search">
            <input type={Text} placeholder="Enter Terminal ID" />
          </div>
        </div>
        <div className="cta-filter" onClick={handleExpandStatus}>
          {expandStatus ? <BsChevronRight /> : <BsChevronDown />}
          <p>Status</p>
        </div>
        <div className="date"></div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Merchant ID</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Amount</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Merchant Name</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Branch</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Region</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>PAN</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>RRN</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Transaction Type</p>
        </div>
      </div>
    </div>
  );
};

export default Filter;
