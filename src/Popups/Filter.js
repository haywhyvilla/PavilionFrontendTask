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
        <div className="cta-filter">
          <BsChevronRight />
          <p>Date</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>PTSP</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Terminal ID</p>
        </div>
        <div className="cta-filter">
          <BsChevronRight />
          <p>Merchant Name</p>
        </div>
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
          <p>Status</p>
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
