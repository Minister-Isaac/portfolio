import React, { useState } from 'react'
import "./Footer.css"
import { FaEnvelope} from 'react-icons/fa';
import logo from "../../assets/ubakama.jpg"

export const Footer = () => {


  return (
    <div className='footer'>
     <div className="footer-top">
        <div className="footer-top-left">
        <img src={logo} alt="" />
        <p>I am a frontend developer with over 3 years of experience. I have interned at Koolbook international and also worked at two tect start-up companies as their major front end developer</p>
        </div>
        <div className="footer-top-right">
            <div className="footer-email-input">
            <FaEnvelope size={24} /> 
             <input type="email" placeholder='Enter your Email' name='email' />
            </div>
            <button className='footer-subscribe'>Subscribe</button>
        </div>
     </div>
     <hr />
     <div className="footer-bottom">
        <p>Term of Services</p>
        <p>Privacy Policy</p>
        <p>Connect with me</p>
     </div>
    </div>
  )
}
