import React from "react";
import "./RecieptPopup.css";
import cancel from "../Images/cancel.png";
import Box3 from "./Box3";
import Box4 from "./Box4";

const RecieptPopup = () => {
  return (
    <div className="section-receipt">
      <div className="centre">
        <div className="receipt">
          <div className="heading">
            <h2>Transaction Receipt</h2>
            <img alt="cancel" src={cancel} />
          </div>
          <h2 className="pavilion">Pavilion</h2>
          <p>... Bank’s copy ...</p>
          <div className="details">
            <h5>MERCHANT NAME:</h5>
            <p>ABDUL COSMETICS</p>
          </div>
          <div className="details">
            <h5>LOCATION:</h5>
            <p>FIRST MONNIE POS, 45 OGOJA ROAD, EBONYI STATE</p>
          </div>
          <div className="details">
            <h5>TERMINAL ID:</h5>
            <p>2013460897</p>
          </div>
          <h2 className="pavilion purchase">Purchase</h2>
          <div className="details">
            <h5>STAN:</h5>
            <p>000006</p>
          </div>
          <div className="details">
            <h5>DATE/TIME:</h5>
            <p>2023-01-30 / 15:23:16+0200</p>
          </div>
          <div className="details">
            <h5>AMOUNT:</h5>
            <p>NGN 900.00</p>
          </div>
          <div className="details">
            <h5>PAN:</h5>
            <p>653457****7856</p>
          </div>
          <div className="details">
            <h5>CARD TYPE:</h5>
            <p>MASTER CARD</p>
          </div>
          <div className="details">
            <h5>EXPIRY DATE:</h5>
            <p>25/06</p>
          </div>
          <div className="details">
            <h5>AUTHORIZATION CODE:</h5>
            <p>000000 ONLINE CVM</p>
          </div>
          <h2 className="approved purchase">TRANSACTION APPROVED</h2>
          <div className="details">
            <h5>RESPONSE CODE:</h5>
            <p>00</p>
          </div>
          <div className="details">
            <h5>AID:</h5>
            <p>A0000000054010</p>
          </div>
          <div className="details">
            <h5>RRN:</h5>
            <p>143378964567</p>
          </div>
          <div className="details">
            <p>Intellifinipay</p>
          </div>
          <div className="details">
            <h5>PTSP:</h5>
            <p>INTELLIFIN</p>
          </div>
          <h5 className="thanks">Thank You For Using Pavilion!</h5>
          <div className="button-down">
            <Box3 text="Close" />
            <Box4 text="Download" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecieptPopup;
