import React, { useState } from "react";
import "./maincard.css";
import Card from "./card.json";

const Maincard = () => {
  const[watch,setWatch]=useState("");
  const click=()=>{
    setWatch ("https://youtu.be/7wnove7K-ZQ")
  }
  return (
    <div className="maincard-one">
      {Card.map((e, index) => {
        return (
          <div key={index}>
            <div className="card">
            <iframe width="884" height="438" src={e.img} title="Introduction to Programming &amp; Python | Python Tutorial - Day #1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
              <div className="card-body">
                <h5 className="card-title">{e.title}</h5>
                <p className="card-text">{e.text}</p>
              <button>
              <a href="https://youtu.be/7wnove7K-ZQ">Start Watching</a> 
             </button>
               
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Maincard;
