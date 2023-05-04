import React from 'react'
import Nav from './nav'
import Sidebar from './Sidebar'
import "./React.css";

const React2 = () => {
  return (
    <div>
      <Nav/>
      <Sidebar/>
      <div className='react-one'>
      <h1>What is ReactJS?</h1>
      <p>ReactJS is a JavaScript library used to build User Interfaces(UI). It significantly decreases the code with it's components, states i.e. hooks, etc. </p>
      <h4>Creating react app</h4>
      <p>Open your terminal in the directory you would like to create your application. Run this command to create a React application named my-react-app</p>
      <img src={"https://static.javatpoint.com/tutorial/reactjs/images/react-create-react-app3.png"} alt="" /><br/>
      <h4>Hello World</h4>
      <p>In this we are just putting tag in a div with id 'root'. That's it! In div with id 'root' everything will be rendered. We can also change it from 'root' to something else, as we are just getting an element and putting HTML in it. </p>
      <img src={"https://learn.microsoft.com/en-us/windows/images/react-hello-world.png"} alt="" /><br/>
      <h3>React Setup:</h3>
      <h4>Creating our first react app</h4>
      <p>Open your terminal in the directory you would like to create your application. Run this command to create a React application named my-react-app:</p>
      <img src={"https://miro.medium.com/max/1400/1*oAhURfTTKLjC54PwJlVkZg.png"} alt="" />
      
      </div>
    </div>
  )
}

export default React2
