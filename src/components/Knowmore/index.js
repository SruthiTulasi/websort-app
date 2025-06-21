import React from 'react'
import Project from '../Project'
import './index.css'
const listItem=[
    {
        content:"AI and IoT driven products"
    },
    {
        content:"Creating a tech community hub for developers and entrepreneurs"
    },
    {
        content:"Expanding globally with scalable SaaS tools"
    }
]
export default function Knowmore() {
return (
    <div className="more-background-image">
        <h1 className="more-heading">Fueling the Future with Innovation</h1>
        <ul className="unordered-list-items">
            {listItem.map(each=>(
                <li className='list-card'>
                    <p className="con">{each.content}</p>
                </li>
            ))}
        </ul>
        <h1 className="more-heading">See our work in web design and development</h1>
        <img src="https://media.istockphoto.com/id/1456192902/photo/close-up-photo-of-woman-hands-typing-business-report-on-a-laptop-keyboard-in-the-cafe.jpg?s=1024x1024&w=is&k=20&c=UZhhfQH1N9kFTnaM6NXN6Qx5z4xoIfpDJ7DvDBG2FOw=" alt="laptop-image" className="laptop-image" />
        <p className="more-para">We specialize in building responsive user friendly websites tailored to client needs. Take a look of our recent projects to see how design and functionality come together</p>
        <button type="button" className="more-button">Know more</button>
        <div className="more-card">
            <img src="https://www.shutterstock.com/shutterstock/photos/2536939495/display_1500/stock-photo-creative-light-bulb-explodes-with-colorful-dry-paint-sparks-and-splashes-on-a-black-background-2536939495.jpg" alt="bulb-image" className="bulb-image" />
            <p className="bulb-para">At websort we did'nt just build digital products we build carriers.By joining our team you become part of a creative and collaborative environment.</p>
        </div>
        <h1>One of our proudest achievements </h1>
        <Project />
    </div>
)
}
