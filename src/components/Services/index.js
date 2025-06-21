import React from 'react'
import './index.css'
import Bottom from '../Bottom'
const projectsList=[
{
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2329333359/display_1500/stock-photo-software-coding-hologram-and-woman-on-tablet-thinking-of-data-analytics-digital-technology-and-2329333359.jpg",
    name: "App developer",
    content:"Developed a cross-platform mobile app using flutter for android and ios. The app allows to browse services make bookings, and receive real-time updates.Designed with a clean UI and smooth navigation to ensure a seamless user experience"
},
{
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2384431115/display_1500/stock-vector-web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-2384431115.jpg",
    name: "Web developer",
    content:"Developed a cross-platform mobile app using flutter for android and ios. The app allows to browse services make bookings, and receive real-time updates.Designed with a clean UI and smooth navigation to ensure a seamless user experience"
},
{
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2475417127/display_1500/stock-photo-mobile-app-user-experience-ux-or-app-ux-2475417127.jpg",
    name: "UI/UX",
    content:"Developed a cross-platform mobile app using flutter for android and ios. The app allows to browse services make bookings, and receive real-time updates.Designed with a clean UI and smooth navigation to ensure a seamless user experience"
},
{
    imageUrl:"https://media.istockphoto.com/id/1334575820/photo/business-woman-using-mobile-smartphone-on-global-network-connection-and-data-customer.jpg?s=1024x1024&w=is&k=20&c=_GyJUvffH1HsA97NN2-2qwgkKM-04sbtA0ep5bjs1Zw=",
    name: "Digital Marketing",
    content:"Developed a cross-platform mobile app using flutter for android and ios. The app allows to browse services make bookings, and receive real-time updates.Designed with a clean UI and smooth navigation to ensure a seamless user experience"
}
]
export default function Services() {
  return (
    <div className="services-background">
      <h1 className="services-heading">Our Services</h1>
      <ul className="services-unordered-list">
        {projectsList.map(each=>(
          <li className="p-list">
            <div>
            <img src={each.imageUrl} alt={each.name} className="project-image"/>
            </div>
            <div className='content-item'>
            <h1 className="content-heading">{each.name}</h1>
            <p className='content-para'>{each.content}</p>
            </div>
          </li>
        ))}
      </ul>
      <Bottom />
    </div>
  )
}

