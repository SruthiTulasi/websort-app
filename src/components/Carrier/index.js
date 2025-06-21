import React from 'react'
import './index.css'
import Bottom from '../Bottom';
const opportunitiesList=[
{
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2329333359/display_1500/stock-photo-software-coding-hologram-and-woman-on-tablet-thinking-of-data-analytics-digital-technology-and-2329333359.jpg",
    name: "App developer"
},
{
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2384431115/display_1500/stock-vector-web-development-programming-languages-css-html-it-ui-programmer-cartoon-character-developing-2384431115.jpg",
    name: "Web developer"
},
{
    imageUrl:"https://www.shutterstock.com/shutterstock/photos/2475417127/display_1500/stock-photo-mobile-app-user-experience-ux-or-app-ux-2475417127.jpg",
    name: "UI/UX"
},
{
    imageUrl:"https://media.istockphoto.com/id/1334575820/photo/business-woman-using-mobile-smartphone-on-global-network-connection-and-data-customer.jpg?s=1024x1024&w=is&k=20&c=_GyJUvffH1HsA97NN2-2qwgkKM-04sbtA0ep5bjs1Zw=",
    name: "Digital Marketing"
}
];
export default function Carrier() {
    return (
    <div className="carrier-container">
        <div className="bg-con">
        <div className="bg-h">
        <h1 className="heading">Talent wins games but team work and intelligence win championships</h1>
        <p className="paragraph">All websort, we bring digital ideas to life through expert and app development,digital
            marketing and UI/UX design. Based in Bangalore we built responsive websites and mobile apps,
            enhance online visibility with SEO,PPC and social media and design user-friendly interfaces choose 
            websort for innovative, tailored digital solutions.</p>
        </div>
        <div>
        <img src="https://media.istockphoto.com/id/1435661969/photo/close-up-of-children-holding-a-planet-at-the-beach.jpg?s=1024x1024&w=is&k=20&c=yFUId3gMoFOOrXnWNEhn2uDhC4FMTYxHLmh4wzQyDX8=" alt="carrier" className="carrier-image" />
        </div>
        </div>
            <h1 className="heading-opp">Internship opportunities at websort</h1>
            <ul className="unordered-list">
                {opportunitiesList.map(each=>(
                    <li className="list-item">
                        <img src={each.imageUrl} alt={each.name} className="carrier-card"/>
                        <h1>{each.name}</h1>
                    </li>
                ))}
            </ul>
            <div className="card">
            <h1 className="contact-heading">Need Support or want to collaborate?</h1>
            <p className="paragraph">Fill out the form and our team will get back shortly.</p>
            <form className="input-elements">
                <div className='each-element'> 
                <label forHtml="first" className='label-ele'>First Name</label>
                <input type="text" id="first" className="input-ele" placeholder="Eg: ram"/>
                </div>
                <div className='each-element'>
                <label forHtml="second" className='label-ele'>Second Name</label>
                <input type="text" id="second" className="input-ele"  placeholder="Eg: raj"/>
                </div>
                <div className='each-element'>
                <label forHtml="email" className='label-ele'>Email Address</label>
                <input type="text" id="email" className='input-ele'  placeholder="Eg: abc@gmail.com"/>
                </div>
                <div className='each-element'>
                <label forHtml="phone" className='label-ele'>Phone Number</label>
                <input type="text" id="phone" className="input-ele"  placeholder="xxxxxxxxx"/>
                </div>
                <div className='each-element'>
                <label forHtml="company" className='label-ele'>Company</label>
                <input type="text" id="company" className="input-ele"  placeholder="Eg: company name"/>
                </div>
                <div className='each-element'>
                <label forHtml="msg" className='label-ele'>Message</label>
                <input type="text" id="msg" className="input-ele"  placeholder="msg"/>  
                </div>           
            </form>
            <button type="button" className="submit-btn">Submit</button>
            <Bottom />
            </div>
        </div>
    )
}

