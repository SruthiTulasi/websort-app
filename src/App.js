import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Project from './components/Project'
import Carrier from './components/Carrier'
import Contact from './components/Contact'
import Knowmore from './components/Knowmore'
const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services/>} />
        <Route path="/project" element={<Project/>}/>
        <Route path="/carrier" element={<Carrier/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/knowmore" element={<Knowmore/>}/>
      </Routes>
    </Router>
  );
};

export default App;
