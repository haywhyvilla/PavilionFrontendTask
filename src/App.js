import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Transactions from "./Components/Transactions/Transactions";
import RecieptPopup from "./Popups/RecieptPopup";

const App = () => {
  const [popupactive, setpopupactive] = useState(false);
  return (
    <>
      <Header />
      <Sidebar />
      <Transactions />
      <RecieptPopup />
    </>
  );
};

export default App;
