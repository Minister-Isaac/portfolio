import React from 'react';
import "./Hero.css"
import logo from "../../assets/ubakama.jpg"

const Hero = () => {
  return (
    <div id='home' className='hero'>
      <img src={logo} alt="" />
      <h1><span>I am Egbumokei Isaac,</span> a frontend developer based in Nigeria.</h1>
      <p>I am a frontend developer from lagos, Nigeria with over 3 years of experience. I am opened to work anywhere</p>
      <div className='hero-action'>
        <div className='hero-connect'><a className='anchor-link' href='#contact'>Connect with me</a> </div>
        <div className='hero-resume'>My resume</div>
      </div>
    </div>
  )
}

export default Hero