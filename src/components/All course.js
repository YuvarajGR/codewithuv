import React from "react";
import Nav from "./nav";
import "./allcourse.css";
import { Link,NavLink } from "react-router-dom";
const Allcourse = () => {
  const navLinkStyles =({isActive})=>{
    return{
      color: isActive ? "blueviolet":"normal",
      fontWeight: isActive ? "bold":"normal",
    };
  };
  return (
    <> 
    <Nav />
    <div className="sidemain">
      <div className="sidebar">
        <div className="side1">
          <li className="listItem">
            <NavLink style={navLinkStyles}  to="/html">HTML</NavLink>
          </li>
          <li className="listItem">
            <NavLink style={navLinkStyles} to="/Css">CSS</NavLink>
          </li>
          <li className="listItem">
            <Link to="/Js">JS</Link>
          </li>
          <li className="listItem">
            <Link to="/c">C</Link>
          </li>
          
          <li className="listItem">
            <Link to="/Java">JAVA</Link>
          </li>
          <li className="listItem">
            <Link to="/Python">PYTHON</Link>
          </li>
          <li className="listItem">
            <Link to="/Php">PHP</Link>
          </li>
          <li className="listItem">
            <Link to="/Php">REACT JS</Link>
          </li>
         
      
          
        </div>

        <div className="side2"></div>
      </div>
    </div>
    </>

  );
};

export default Allcourse;
