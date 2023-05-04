import React from "react";
import "./allcourse.css";
import { Link,NavLink } from "react-router-dom";
import Home from "./Home";
import img from "./yuvi.JPG";
const Nav = () => {
  const navLinkStyles =({isActive})=>{
    return{
      color: isActive ? "blueviolet":"normal",
    };
  };
  return (
    <div className="navbar">
      <div className="text">
      {/* <img src={img} alt="" /> */}
     
      <li >
          <NavLink style={navLinkStyles} className="text1" to="/home"> <h3>#CodeWithUv</h3></NavLink>
        </li>
       
        <li >
          <NavLink style={navLinkStyles} className="text1" to="/home">Home</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} className="text1" to="/nav">All Course</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} className="text1" to="/notes">Notes</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} className="text1" to="/tutorials">Tutorials</NavLink>
        </li>
        <li>
          <NavLink style={navLinkStyles} className="text1" to="/contact">Contact Us</NavLink>
        </li>

        <li>
          <NavLink style={navLinkStyles} className="text1" to="/">Logout</NavLink>
        </li>
  
      </div>
    </div>
  );
};

export default Nav;
