import React from 'react'
import './About.css'
import pic from '../../assets/pic.jpg'

function About() {
    return (
        <div id='about' className='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            <div className="about-sctn">
                <div className="about-left">
                    <img src={pic} alt="" />
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I am a motivated frontend developer, always eager to take on new challenges. With a passion for learning 
                            I am dedicated to delivering high-quality results.With a positive attitude and a growth mindset,
                            I am ready to make a meaningful contribution and achieve great things.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}} /></div>
                        <div className="about-skill"><p>Javascript</p><hr style={{width:"50%"}} /></div>
                        <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}} /></div>
                        <div className="about-skill"><p>Node Js</p><hr style={{width:"30%"}} /></div>
                    </div>
                </div>
            </div>
            </div>
    )
}

export default About