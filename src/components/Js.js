import React from "react";
import Nav from "./nav";
import Sidebar from "./Sidebar";
import "./Js.css";

const Js = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="js-one">
        <h1>JS Introduction:</h1><br/>
        <h4>What is Programming?.</h4>
        <p>
          It is a way to talk to computers. A language like Hindi, English, or
          Bengali can be used to talk to a human but for computers, we need
          straightforward instructions. Programming is the act of constructing a
          program, a set of precise instructions telling a computer what to do.
          Programming is the process of designing, writing, testing, debugging,
          and maintaining the source code of computer programs. It involves the
          use of programming languages and various tools to create software
          programs that can be run on a computer or other devices.
        </p><br/>
        <h4>What is ECMAScript?.</h4>
        <li>ECMAScript is a standard on which JavaScript is based</li>
        <li>It was created to ensure that different documents on JavaScript are talking about the same language</li><br/>
        <h4>ECMAScript Versions:</h4>
        <p>Beginning in 1997, JavaScript has evolved into many versions</p>
        <li>ECMAScript1 or ES1 was first released in 1997.</li>
        <li>ECMAScript 2015 also known as ES6 was released in 2015 and a major revision to JavaScript was made</li>
        <li>The latest version of JavaScript will be ECMaScript2022 (ES13) in 2022</li>
        <li>ECMAScript1 or ES1 was first released in 1997. </li><br/>
        <h4>What is JavaScript?</h4>
        <li>JavaScript is a lightweight, OOP language</li>
        <li>It is a scripting language for web pages.</li>
        <li>It is used to add interactivity and dynamic effects to web pages.</li>
        <li>“.js” is the extension</li>
        <li>Nowadays used in server-side development</li>
        <li>JS Frontend Frameworks: React, Angular, Vue</li>
        <li>JS Backend Frameworks: Express, Node</li>
        <p>In this tutorial, we will learn JavaScript in depth</p>
        <img src={"https://static.packt-cdn.com/products/9781783286034/graphics/6034OS_02_03.jpg"} alt="" />

      </div>
    </div>
  );
};

export default Js;
