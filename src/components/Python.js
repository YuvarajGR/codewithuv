import React from "react";
import Nav from "./nav";
import Sidebar from "./Sidebar";
import "./Python.css";

const Python = () => {
  return (
    <div>
      <Nav />
      <Sidebar />
      <div className="python-one">
        <h1>Python Overview</h1>
        <h4>What is Python</h4>
        <li>
          Python is a dynamically typed, General Purpose Programming Language
          that supports an object-oriented programming approach as well as a
        </li>
        <li>
          Python is also an interpreted and high-level programming language.
        </li>
        <li>It was created by Guido Van Rossum in 1989.</li>
        <br />

        <h4>What is Python used for</h4>
        <li>
          Python is used in Data Visualization to create plots and graphical
          representations.
        </li>
        <li>
          Python helps in Data Analytics to analyze and understand raw data for
          insights and trends.
        </li>
        <li>
          It is used in AI and Machine Learning to simulate human behavior and
          to learn from past data without hard coding.
        </li>
        <li>It is used to create web applications.</li>
        <li>It can be used to handle databases.</li>
        <li>
          It is used in business and accounting to perform complex mathematical
          operations along with quantitative and qualitative analysis.
        </li>
        <br />

        <h2>Python Data Types & Operators:</h2>

        <h4>Data Types</h4>
        <p>
          Data type specifies the type of value a variable requires to do
          various operations without causing an error. By default, python
          provides the following built-in data types:
        </p>
        <h5>Numeric data: int, float, complex</h5>
        <p>
          int: 3, -8, 0<br/>
           float: 7.349, -9.0, 0.0000001<br/>
            complex: 6 + 2i <br/>
            more on
          numeric data types in the number chapter.
        </p>
        <h5>Text data: str</h5>
        <p>str: “Hello World!!!”, “Python Programming”</p>
        <h5>Boolean data:</h5>
        <p>Boolean data consists of values True or False.</p>
        <h5>Sequenced data: list, tuple, range</h5>
        <p>list: A list is an ordered collection of data with elements separated by a comma and enclosed within square brackets. Lists are mutable and can be modified after creation.</p><br/>
      
      
      
      
      
      </div>
    </div>
  );
};

export default Python;
