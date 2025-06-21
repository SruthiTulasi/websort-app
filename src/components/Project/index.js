import React from 'react'
import Bottom from '../Bottom'
import './index.css'
const projectsList=[
  {
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2501255581/display_1500/stock-photo-project-managers-work-new-idea-mobile-app-developer-innovative-startup-project-2501255581.jpg",
    name:"App Development"
  },
  {
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2488695785/display_1500/stock-photo-api-application-programming-interface-concept-a-programmer-types-on-a-laptop-interacting-with-2488695785.jpg",
    name:"Web Development"
  },
  {
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2461145877/display_1500/stock-photo-ux-ui-mobile-app-user-interface-designs-digital-software-mobile-app-development-concept-2461145877.jpg",
    name:"UX/UI Design"
  },
  {
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2511675757/display_1500/stock-photo-online-sales-concept-of-digital-marketing-ad-product-ads-promotion-of-products-or-services-2511675757.jpg",
    name:"Digital Marketing"
  }
]
export default function Project() {
  return (
    <div className="project-container">
      <h1 className="project-heading">Our Project</h1>
      <ul className="project-unordered-list">
        {projectsList.map(each=>(
            <li className="list-items">
              <img src={each.imageUrl} alt={each.name} className="image"/>
              <h1 className="image-heading">{each.name}</h1>
            </li>
        ))}
      </ul>
      <Bottom />
    </div>
  )
}

