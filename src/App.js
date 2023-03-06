import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Transactions from "./Components/Transactions/Transactions";
import RecieptPopup from "./Popups/RecieptPopup";
import FieldPopup from "./Popups/FieldPopup";

const App = () => {
  const [popupactive, setpopupactive] = useState(false);
  return (
    <>
      <Header />
      <Sidebar />
      <Transactions setactive={setpopupactive} />
      {popupactive && <RecieptPopup setactive={setpopupactive} />}
      <FieldPopup />
    </>
  );
};

export default App;
