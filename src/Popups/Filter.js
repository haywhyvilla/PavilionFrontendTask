import React, { useState } from "react";
import "./Filter.css";
import { BsChevronRight, BsChevronDown } from "react-icons/bs";

const Filter = ({ setFilterPopupactive }) => {
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
    <>
      <div className="myfilter-blur"> </div>
      <div className="section-filter">
        <div className="filter">
          <h5>Filters</h5>
          <p onClick={() => setFilterPopupactive()}>Cancel Filter</p>
        </div>
        <div className="cta-filter" onClick={handleExpandDate}>
          {expandDate ? <BsChevronRight /> : <BsChevronDown />}
          <p>Date</p>
        </div>
        <div className={expandDate ? "close" : ""}>
          <div className="date">
            <div className="year-month-date">
              <input type={Text} placeholder="dd/mm/yy" />
              <p>to</p>
              <input type={Text} placeholder="dd/mm/yy" />
            </div>
          </div>
        </div>
        <div className="cta-filter" onClick={handleExpandPtsp}>
          {expandPtsp ? <BsChevronRight /> : <BsChevronDown />}
          <p>PTSP</p>
        </div>
        <div className={expandPtsp ? "close" : ""}>
          <div className="date">
            <div className="search">
              <input type={Text} placeholder="Search for a Ptsp" />
            </div>
          </div>
        </div>
        <div className="cta-filter" onClick={handleExpandTerminal}>
          {expandTerminal ? <BsChevronRight /> : <BsChevronDown />}
          <p>Terminal ID</p>
        </div>
        <div className={expandTerminal ? "close" : ""}>
          <div className="date">
            <div className="search">
              <input type={Text} placeholder="Enter Terminal ID" />
            </div>
          </div>
        </div>
        <div className="cta-filter" onClick={handleExpandStatus}>
          {expandStatus ? <BsChevronRight /> : <BsChevronDown />}
          <p>Status</p>
        </div>
        <div className={expandStatus ? "close" : ""}>
          <div className="date">
            <div className="button">
              <div className="status">
                <button>Failed</button>
                <input type="checkbox" />
              </div>
              <div className="approve">
                <button>Approved</button>
                <input type="checkbox" />
              </div>
            </div>
          </div>
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
    </>
  );
};

export default Filter;
