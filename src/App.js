// import logo from './logo.svg';
import './App.css';
import React from 'react';
import About from './Portfolio/About'
import Home from './Portfolio/Home'
import Certificate from './Portfolio/Certificate';
import Experience from './Portfolio/Experience';
import Projects from './Portfolio/Projects'
import Education from './Portfolio/Education'
import Navbar from './Portfolio/Navbar';
import Contact from './Portfolio/Contact'
import { BrowserRouter} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Home/>
      <About/>
      <Education/>
      <Projects/>
      <Experience/>
      <Certificate/>
      <Contact/>
      
    </BrowserRouter>
  );
}

export default App;
