import React from "react";
import Nav from "./nav";
import Sidebar from "./Sidebar";
import "./Java.css";

const Java = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="java-one">
        <h1>Java Overview.</h1>
        <p>
          Java is an open-source, class-based, high-level, object-oriented
          programming language. Java is platform independent as the java
          programs are compiled into byte code that are platform independent.
        </p>
        <br />
        <h4>History:</h4>
        <p>
          Java programming language was created by James Gosling in 1995. The
          original idea was to design a language for the television industry.
          Gosling worked along with his team also called the Green Team and the
          project they worked on was called Greentalk. This project was later
          named as OAK. The name OAK has its roots to the oak tree that stood
          outside Gosling’s office. This name had to be dropped later as it was
          already a trademark by Oak Technologies
        </p>
        <h6>So how was the name Java suggested?</h6>
        <p>
          Since the language could no longer be named OAK, Gosling and his team
          had to come up with new name. The team considered various names like
          DNA, RUBY, JAVA, jolt, dynamic, revolutionary, SILK. But the name had
          to unique and quite easy to say. The name JAVA occurred in gosling’s
          mind while having a cup of coffee at his office
        </p>
        <h4>Types of Java applications:</h4><br/>
        <h5>A. Web Application:</h5>
        <p>Web applications are the applications that run on web browser using servlet, JSP, struts technologies. These technologies create java web applications and deploy them on server.</p>
        <h5>B. Mobile Application:</h5>
        <p>These are mobile applications created using java</p>
        <h5>C. Standalone Application:</h5>
        <p>Standalone applications are executed by themselves without the need of other programs and files. Example of such an application is antivirus.</p>
        <h5>D. Enterprise Application:</h5>
        <p>Some applications are designed for corporate organizations with the intent to control major process in real time. Such applications are called enterprise applications.</p>
        <h4>Features</h4>
        <img src={"https://cwh-full-next-space.fra1.digitaloceanspaces.com/tutorial/java/features-of-java.png"} alt="" />
        <li>Object Oriented: In object oriented programming everything is an object rather that function and logic.</li>
        <li>Simple: Java is simple to understand, easy to learn and implement.</li>
        <li>Secured: It is possible to design secured software systems using Java.</li>
        <li>Platform Independent: Java is write once and run anywhere language, meaning once the code is written, it can be executed on any software and hardware systems</li>
        <li>Portable: Java is not necessarily fixated to a single hardware machine. Once created, java code can be used on any platform</li>
        <li>Architecture Neutral: Java is architecture neutral meaning the size of primitive type is fixed and does not vary depending upon the type of architecture.</li>
        <li>Robust: Java emphasizes a lot on error handling, type checking, memory management, etc. This makes it a robust language.</li>
        <li>Interpreted: Java converts high-level program statement into Assembly Level Language, thus making it interpreted.</li>
     
      </div>
    </div>
  );
};

export default Java;
