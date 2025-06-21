import React from 'react'
import {Link} from 'react-router-dom'
import './index.css'

export default function Header() {
  return (
    <div className="main-container">
    <div className="logo-container">
    <img src="https://media.licdn.com/dms/image/v2/D560BAQEwlxv7F6oXVw/company-logo_200_200/company-logo_200_200/0/1721394853879/web_sort_logo?e=1755734400&v=beta&t=_tMSViSRyxba0sKRKZ2Pe9djPaH16PXWjBID-4xJc3Q" alt="log-image" className="logo-img"/>
    <div className="heading-container">
        <h1 className="heading">WebSort
          <br />
        <span className="paragraph">Your Vision Our Web</span></h1>
    </div>
    </div>
    <ul className="unordered-list-items">
          <Link to="/"><li className="list-item">Home</li></Link>
          <Link to="/about"><li className="list-item">About</li></Link>
          <Link to="/carrier"><li className="list-item">Carrier</li></Link>
          <Link to="/project"><li className="list-item">Project</li></Link>
          <Link to="/services"><li className="list-item">Services</li></Link>
          <Link to="/contact"><li className="list-item">Contact</li></Link>
    </ul>
    </div>
  )
}

