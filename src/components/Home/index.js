import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const Home =()=>(
    <div className="home-heading">
    <h1 className="heading">
      Digitalizing Ideas with clean code and modern Deign At web sort,
      we turn digital visions in to reality with expert web and app development,
      UI/UX design and digital marketing. Based on Bangalore we craft responsive websites,
      innovate mobile apps, and drive results through SEO, PPE and social media strategies.
    </h1>
    <div className="buttons-container">
      <Link to="/contact">
      <button type="button" className="btn-item">
        Contact Us
      </button> 
      </Link>
      <Link to="/knowmore">
      <button type="button" className="btn-item">Know More</button>
    </Link>
    </div>
  </div>
);
export default Home
