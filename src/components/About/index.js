import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

const About=()=>{
    return(
    <div className="home-heading">
    <h1 className="heading">
    Digitalizing Ideas with clean code and modern Deign At web sort,
    we turn digital visions in to reality with expert web and app development,
    UI/UX design and digital marketing. Based on Bangalore we craft responsive websites,
    innovate mobile apps, and drive results through SEO, PPE and social media strategies.
    </h1>
    <div className="buttons-container">
        <Link to="/contact"><button type="button" className="btn-item">
        Contact Us
        </button> </Link>
        <Link to="/knowmore"><button type="button" className="btn-item">
        Know More
        </button> </Link>
        
        </div>
    <div className="about-container">
        <div className="heading-container">
            <h1>About Us</h1>
            <h1>Where Innovation Meets Execution</h1>
        </div>
        <div>
            <p className="paragraph">
                Web sort builds websites, apps and digital marketing solutions to help 
                you grow online. Based in Bangalore, we focus on smart design, strong tech, and 
                real results. We specialize in web development UI/UX design and digital marketing 
                delivering responsive websites, high performance android/ios apps, and visually engaging 
                interfaces. Our digital marketing expertise spans SEO,PPC,social media marketing and
                content creation, helping business grow and connect with their ideal audience.
            </p>
            <Link to="/knowmore">
                <button type="button" className="btn-element">Know More</button>
                </Link>
        </div>
    </div>
    </div>    
);
}

export default About