import React from 'react'
import "./Contact.css"
import call_icon from "../../assets/call_icon.svg"
import location_icon from "../../assets/location_icon.svg"
import mail_icon from "../../assets/mail_icon.svg"

function Contact() {
    
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5b6a9208-fb73-4e31-859b-8a756d912854");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message)
    }
  };


    return (
        <div id='contact' className='contact'>
            <div className="contact-title">
                <h1>Get in touch</h1>
                <img src="" alt="" />
            </div>
            <div className="contact-section">
                <div className="contact-left">
                    <h1>Let's talk</h1>
                    <p>I'm currently avaliable to take on new projects, so feel free to send me a message about anything that you want me to work on. You can contact anytime.</p>
                    <div className="contact-detailes">
                    <div className="contact-detaile">
                        <img src={mail_icon} alt="" /><p>surabhisurendran415@gmail.com</p>
                    </div>
                    <div className="contact-detaile">
                        <img src={call_icon} alt="" /><p>+91 9605357095</p>
                    </div>
                    <div className="contact-detaile">
                        <img src={location_icon} alt="" /><p>Kochi,Kerala</p>
                    </div>
                </div>
                </div>
              
                <form onSubmit={onSubmit} className="contact-right">
                    <label htmlFor="">Your name</label>
                    <input type="text" placeholder='Enter your name' />
                    <label htmlFor="">Your Email</label>
                    <input type="text" placeholder='Enter your Email' />
                    <label htmlFor="">Your message</label>
                    <textarea name='message' row="8" placeholder='Enter your message' />
                    <button type='submit' className='contact-submit'>Submit now</button>
                </form>
            </div>
        </div>
    )
}

export default Contact