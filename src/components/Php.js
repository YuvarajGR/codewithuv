import React from 'react'
import Nav from './nav'
import Sidebar from './Sidebar'
import "./Php.css";

const Php = () => {
  return (
    <div>
      <Nav/>
      <Sidebar/>
      <div className='php-one'>
        <h1>PHP Overview</h1>
        <p>PHP is a server-side scripting language, which is used to manage dynamic web pages, databases and build websites with features like session tracking and e-commerce. On a day of 1995, Rasmus Lerdorf unleashed the first version of “Hypertext Preprocessor” also known as the PHP language. It is also integrated with several popular databases like MySQL, PostgreSQL, Microsoft SQL Server, Oracle etc.</p>
        <h4>Uses of PHP</h4>
        <p>PHP can perform several system functions like opening files, CRUD operations on data stores, general-purpose scripting, etc. Besides system operations, there are also other uses like</p>
        <ol type="A">
          <li>Handling Forms: PHP can handle form operations. It can gather data, save data to a file and send data through emails.</li>
          <li>Database Operations: PHP can also create, read, update and delete elements in your database.</li>
          <li>Encryption: It can perform advanced encryption and encrypt data for you.</li>
          <li>Dynamic Page Content: It can generate dynamic page content.</li>
        </ol>
        <h4>Basic Syntax PHP</h4>
        <p>A PHP script can be written anywhere inside the HTML document. A PHP script starts with ?php tag and ends with ?. We can write our logic inside this tag and it will be executed accordingly.</p>
        <h4>Displaying output in php</h4>
        <p>In php,Output is displayed on the browser using echo as follows:</p>
        <h4>Hello World</h4>
        <img src={""} alt="" />
        <p>A basic PHP Hello World program looks something like this. We will use a built-in PHP function “echo” to output the text “Hello World!” on our webpage.</p>
        <img src={"https://preview.redd.it/78qu8e9g1jt31.png?width=553&format=png&auto=webp&s=5228e37bd73992938dd047b1e3fe3db21d529b4a"} alt="" />
      </div>
    </div>
  )
}

export default Php
