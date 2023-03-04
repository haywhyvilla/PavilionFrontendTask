import React from "react";
import "./Header.css";
import menu from "../../Images/menu.png";
import profile from "../../Images/Profile.jpg";
import vector from "../../Images/Vector.png";
import { CiSearch } from "react-icons/ci";

const Header = () => {
  return (
    <div className="container-fluid header">
      <div className="pavilion-head">
        <img alt="menu" src={menu} />
        <h2>Pavilion</h2>
        <div className="cta">
          <CiSearch />
          <input type={Text} placeholder="Search" />
        </div>
      </div>
      <div className="pavilion-profile">
        <img alt="notification" src={vector} />
        <img alt="profile" src={profile} />
      </div>
    </div>
  );
};

export default Header;
