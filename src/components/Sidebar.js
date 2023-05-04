import { style } from "@mui/system";
import React from "react";
import { Link,NavLink } from "react-router-dom";
import "./allcourse.css";

const Sidebar = () => {
  const navLinkStyles =({isActive})=>{
    return{
      color: isActive ? "blueviolet":"normal",
      fontWeight: isActive ? "bold":"normal",
      textDecoration:"none",
    };
  };
  return (
    <div className="sidemain">
      <div className="sidebar">
        <div className="side1">
        <li  className="listItem">
            <NavLink style={navLinkStyles}  to="/html">HTML </NavLink >
          </li>
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/Css">CSS</NavLink>
          </li>
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/Js">JS</NavLink>
          </li>
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/c">C</NavLink>
          </li>
         
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/Java">JAVA</NavLink>
          </li>
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/Python">PYTHON</NavLink>
          </li>
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/Php">PHP</NavLink>
          </li>
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/react">REACT JS</NavLink>
          </li>
         
        </div>
        

        <div className="side2"></div>
      </div>
    </div>
  );
};

export default Sidebar;
