import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Transactions from "./Components/Transactions/Transactions";
import RecieptPopup from "./Popups/RecieptPopup";
import FieldPopup from "./Popups/FieldPopup";
import Filter from "./Popups/Filter";

const App = () => {
  const [popupactive, setpopupactive] = useState(false);
  const [FieldPopupactive, setFieldPopupactive] = useState(false);
  return (
    <>
      <Header />
      <Sidebar />
      <Transactions
        setactive={setpopupactive}
        setfieldactive={setFieldPopupactive}
      />
      {popupactive && <RecieptPopup setactive={setpopupactive} />}
      {FieldPopupactive && <FieldPopup setfieldactive={setFieldPopupactive} />}
      <Filter />
    </>
  );
};

export default App;
