import React from "react";
import Nav from "./nav";
import Cardd from "./cardd1.json";
import "./Tutorials.css";
import { Link } from "react-router-dom";
import Html from "./Html";
import Footer from "./Footer";

const Tutorials = () => {
  return (
    <div>
      <Nav />
      <h1 className="t-t"> All Tutorials</h1>
      <div className="card-one">
        {Cardd.map((e, index) => {
          return (
            <div key={index}>
              <div className="card-two">
                <img className="img" src={e.img} alt="" /><br/>
                <h5 className="title">{e.title}</h5>
                <button>
                  {" "}
                  <Link
                    style={{ color: "white", textDecoration: "none" }}
                    to={e.btn}
                  >
                    Start Learning
                  </Link>
                </button>
              </div>
              
            </div>
          );
        })}
        ;
      </div>
      <Footer/>
    </div>
  );
};

export default Tutorials;
