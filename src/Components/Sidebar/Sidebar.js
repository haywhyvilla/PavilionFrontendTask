import React from "react";
import "./Sidebar.css";
import SidebarList from "./SidebarList";

const Sidebar = () => {
  return (
    <div className="container-fluid sidebar-section">
      <div className="sidebar">
        <SidebarList />
      </div>
    </div>
  );
};

export default Sidebar;
