import React from "react";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Transactions from "./Components/Transactions/Transactions";

const App = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Transactions />
    </>
  );
};

export default App;
