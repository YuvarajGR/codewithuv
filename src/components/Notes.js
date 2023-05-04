import React from 'react'
import Nav from './nav'
import "./Notes.css";
import Card from "./card-note.json";
import Footer from './Footer';

const Notes = () => {
  return (
    <div>
      <Nav/>
      <h1 className='n-n'>Download Notes by CodeWithUv</h1>
      <div className='note-one'>
        {Card.map((e,index)=>{
          return(
            <div key={index}>
            <div className='note-two'>
              <img src={e.img} alt="" />
              <h5 className='title'>{e.title}</h5>
              <p className='title1'>{e.title1}</p>
              <button>PDF Notes</button>
              </div>
              </div>
          )

        })};
      </div>
      <Footer/>
    </div>
  );
};

export default Notes
