import React from 'react'
import './Profile.css'
import pic from '../../assets/pic.jpg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

function Profile() {
    return (
        <div id='home' className="profile">
            <img src={pic} alt="" />
            <h1><span>Hi, I'am Surabhi Surendran </span> </h1>
            <p>I am a frontend developer </p>
            <div className="profile-btns">
            <AnchorLink className='anchor-link' offset={50} href='#contact'>  <div className="profile-connect">Connect with me</div></AnchorLink>
                <div className="Profile-resume">My Resume</div>
            </div>
        </div>
    )
}

export default Profile