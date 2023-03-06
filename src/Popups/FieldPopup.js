import React from "react";
import "./FieldPopup.css";

const FieldPopup = ({ setfieldactive }) => {
  return (
    <>
      <div className="receipt-blur"></div>
      <div className="section-field">
        <div className="field">
          <h5>Fields</h5>
          <p onClick={() => setfieldactive(false)}>Done</p>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="Date" />
          <label for="Date">Date</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="PTSP" />
          <label for="PTSP">PTSP</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="TerminalID" />
          <label for="TerminalID">Terminal ID</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="MerchantName" />
          <label for="MerchantName">Merchant Name</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="MerchantID" />
          <label for="MerchantID">Merchant ID</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="Amount" />
          <label for="Amount">Amount</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="Status" />
          <label for="Status">Status</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="Branch" />
          <label for="Branch">Branch</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="Region" />
          <label for="Region">Region</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="PAN" />
          <label for="PAN">PAN</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="RRN" />
          <label for="RRN">RRN</label>
        </div>
        <div className="cta-check">
          <input type="checkbox" id="TransactionType" />
          <label for="TransactionType">Transaction Type</label>
        </div>
      </div>
    </>
  );
};

export default FieldPopup;
