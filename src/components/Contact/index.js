import Bottom from '../Bottom'
import './index.css'
export default function Contact() {
    return (
    <div className="bg-color">
        <div className="contact-image">
        <div className="heading-container">
        <h1 className="contact-heading">Contact Us</h1>
        <p className="contact-paragraph">Have a question, idea or project in mind? we're here to 
            help get in touch with us today need support or want to collaborate.
        </p>
        </div>
        <div className="card-background">
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
            <div className="address-card">
                <p className="para">Based in Bangalore|
                    <br />
                    contact@websort.com<br/>
                    +91XXXXXXXXX
                </p>
            </div>
            <Bottom />
        </div>  
        </div>
        </div>

    </div>
)
}
