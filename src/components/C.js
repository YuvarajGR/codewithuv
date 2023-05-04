import React from 'react'
import Nav from './nav'
import Sidebar from './Sidebar'
import "./C.css";

const C = () => {
  return (
    <div>
      <Nav/>
      <Sidebar/>
      <div className='c-one'>
      <h1>C Overview:</h1>
      <h4>What is C?</h4>
      <li>Since the late 19th century, C has been a popular programming language for general-purpose use</li>
      <li>C language was developed by Dennis M. Ritchie at bell laboratory in early 1970s</li>
      <li>Its applications are very diverse. It ranges from developing operating systems to databases and all.⁣     It is system programming language used to do low level programming (e.g., driver or kernel)</li>
      <li>Even if it’s old, it is still a very popular programming language</li>
      <li>As the whole UNIX operating system was written in C, it has a strong association with the operating system</li>
      <li>C has also been used widely while creating iOS and Android kernels</li>
      <li>MySQL database is written using C.</li>
      <li>Ruby and Pearl are mostly written using C</li>
      <li>Most part of Apache and NGINX is written using C</li>
      <li>Embedded Systems are created using C</li><br/>

      <h4>Why should we learn C/ Features of C?</h4>
      <li>As mentioned above, it is one of the most popular programming languages in the world</li>
      <li>Learning any other popular programming language such as Python or C++ becomes a cakewalk already if you know C.</li>
      <li>C is a flexible language and that gets proven by the fact that it can be used in a variety of applications as well as technologies</li>
      <li>C is very fast when compared to other programming languages be it Java or Python</li>
      <li>C takes only significant CPU time for interpretation. That is why a lot of Python libraries such as NumPy, pandas, Scikit-learn, etc. are built using C</li>
      <li>Being close to Machine language, some of its functions include direct access to machine-level hardware APIs</li>
      <li>It is a structural language (Follows a specific Structure) /Compiled language this point should be added</li>
      <li>It is procedural programming language (POP) Procedurall Programming is the use of code in a step-wise procedure to develop applications.</li><br/>

      <h4>How is it different from C++?</h4>
      <li>The syntax of C++ is almost identical to that of C, as C++ was developed as an extension of C</li>
      <li>In contrast to C, C++ supports classes and objects, while C does not.</li>
      <li>C gives most of the control to the hand of users. Things like memory allocation and manipulation are totally in the hands of the programmer. Being a flexible language, it provides more access to the programmer because of which it is more efficient</li>
      <li>.C is POP(procedure oriented programming) whereas c++ is OOP(Object oriented programming)</li><br/>
      </div>
    </div>
  )
}

export default C
