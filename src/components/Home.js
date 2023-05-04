import React from "react";
import { Link } from "react-router-dom";
import Nav from "./nav";
import "./Home.css";
import Contact from "./Contact";
import Login from "./Login";
import Footer from "./Footer";
import Maincard from "./Maincard";

const Home = () => {
  return (
    <div>
      <div className="home-nav"> 
        <Nav />
      </div>
      <div className="con">
        <div className="container">
          <div className="Home-content">
            <h1>Wellcome to CodeWithUv</h1>
            <h2>Learn Programs..!</h2>
            <p>
              Confused on which course to take? I have got you covered. Browse
              courses and find out the best course for you. Its free! Code With
              Harry is my attempt to teach basics and those coding techniques to
              people in short time which took me ages to learn.I have got you
              covered. Browse courses and find out the best course for you. Its
              free! Code With Harry is my attempt to teach basics and those
              coding techniques to people in short time which took me ages to
              learn.
            </p>
          </div>
          {/* <div className="Home-button">
            <button>Free Course</button>
            <button>Explore Blog</button>
          </div> */}
        </div>
        <img
          src="https://cdn.educba.com/academy/wp-content/uploads/2019/05/What-is-Coding.jpg"
          alt=""
        />
      </div>
      <div className="home-text">

      <h1>Recommended Courses</h1>
      </div>
        <Maincard/><br/>
        <Footer/>
      <br />
    </div>
  );
};

export default Home;
