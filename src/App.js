import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Nav from "./components/nav";
import Allcourse from "./components/All course";
import Notes from "./components/Notes";
import Login from "./components/Login";
import Html from "./components/Html";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import { Card } from "@mui/material";
import Maincard from "./components/Maincard";
import Css from "./components/Css";
import Js from "./components/Js";
import C from "./components/C";
import Java from "./components/Java";
import Python from "./components/Python";
import Php from "./components/Php";
import React from "./components/React";
import React2 from "./components/React";
import Tutorials from "./components/Tutorials";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />}></Route>

          <Route path="/home" element={<Home />}></Route>
          <Route path="/nav" element={<Allcourse />}></Route>
          <Route path="/notes" element={<Notes />}></Route>
          <Route path="/nav" element={<Nav />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/sidebar" element={<Sidebar />}></Route>
          <Route path="/footer" element={<Footer />}></Route>
          <Route path="/card" element={<Maincard />}></Route>
          <Route path="/html" element={<Html />}></Route>
          <Route path="/css" element={<Css />}></Route>
          <Route path="/js" element={<Js />}></Route>
          <Route path="/c" element={<C />}></Route>
          <Route path="/java" element={<Java />}></Route>
          <Route path="/python" element={<Python />}></Route>
          <Route path="/php" element={<Php />}></Route>
          <Route path="/react" element={<React2 />}></Route>
          <Route path="/tutorials" element={<Tutorials />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
