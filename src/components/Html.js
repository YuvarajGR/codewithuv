import React from "react";
import Nav from "./nav";
import Sidebar from "./Sidebar";
import "./Html.css";
const Html = () => {
  return (
    <div>
      <Nav />
      <div className="html-one">
        <div style={{ width: "13%" }}>
          <Sidebar />
        </div>
        <div className="html-two">
          <h1>HTML Introduction</h1>
          <h2>What is HTML?</h2>

          <li>HTML is an initialism for "HyperText Markup Language"</li>
          <li>It is the language of the web.</li>
          <li>It is used to create websites</li>
          <li>
            It is used to define a page layout, meaning it is a barebone page
            structure
          </li>
          <li>
            HTML is used for making pages of the website also called webpages
            that we see on the internet
          </li>
          <li>
            There are so many versions of HTML but HTML5 is the latest version
          </li>
          <li>This set of tags is written in HTML Document</li>
          <li>It consists of a set of tags</li>

          <div className="htnl-three">
            <h1>Features of HTML</h1>
            <li>It is platform-independent</li>
            <li>Images, videos, and audio can be added to a web page</li>
            <li>Hypertext can be added to the text</li>
            <li>It is a markup language</li>
            <li>It is interpreted language</li>
            <li>
              It can be integrated with other languages like CSS, JavaScript etc
            </li>
            
           <div className="html-four">
            <h1>Why the word HyperText & Markup Language</h1>
            <p>The word hypertext markup language comprises the words “hypertext” and “markup language”. The term "hypertext" refers to the linking of text with other documents and “markup language” refers to a language that uses a set of tags.
              So,
              Note:- Tags refers to some meaningful texts enclosed in angle braces . For eg. . Each tag has a different meaning and importance in building an HTML page which can affect the web page in its own ways</p>
              <h1>A beautiful analogy to understand HTML:</h1>
              <p>Here in the explanation for the above analogy, the car skeleton refers to HTML with the page body. When that skeleton is painted it the car gets CSS and after all that car is provided with some functionalities like engine, etc (which refers to JavaScript), the car gets life and can run. Similarly, when we develop our websites we need HTML for the structure and if we want our website to look good and prettier we need CSS and if we want to add functionalities to our webpage we need JavaScript</p>
              <h1>History of HTML:</h1>
              <li>In 1989, Tim Berners Lee established www and created HTML in 1991</li>
              <li>From 1995 to 1997, he started working on versions of HTML.</li>
              <li>In 1999, a committee was organized that made HTML4.0 a standard.</li>
              <li>HTML4.0 is used by many, even today. However, the stable version of HTML is 5.0 also known as HTML5</li>
              
           </div>
            
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Html;
