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
  const [FilterPopupactive, setFilterPopupactive] = useState(false);
  return (
    <>
      <Header />
      <Sidebar />
      <Transactions
        setactive={setpopupactive}
        setfieldactive={setFieldPopupactive}
        setFilterPopupactive={setFilterPopupactive}
      />
      {popupactive && <RecieptPopup setactive={setpopupactive} />}
      {FieldPopupactive && <FieldPopup setfieldactive={setFieldPopupactive} />}
      {FilterPopupactive && (
        <Filter setFilterPopupactive={setFilterPopupactive} />
      )}
    </>
  );
};

export default App;
