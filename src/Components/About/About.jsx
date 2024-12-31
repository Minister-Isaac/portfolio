import {React, useState} from 'react';
import "./About.css"
import logo from "../../assets/ubakama.jpg"
export const About = () => {
  return (
    <div id='about' className="about">
      <div className="about-title">
        <h1>About me</h1>
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={logo} alt='' height={650} width={400}/>
        </div>
        <div className="about-right">
          <div className="about-para">
           <p>I am an experienced Frontend developer with over 3 years of professional expertise in the field.Throughout my career,I have had the priviledge of collaborating with prestigious organizations, contributing to their success and growth</p>
           <p>My passion for Frontend development is not only reflected in my exclusive experience but also in the enthusiasm and dedication I bring to each project</p>
          </div>
          <div className="about-skills">
              <div className="about-skill"><p>HTML</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>CSS</p><hr style={{width:"70%"}}/></div>
              <div className="about-skill"><p>JavaScript</p><hr style={{width:"60%"}}/></div>
              <div className="about-skill"><p>React JS</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>Next JS</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>React Native</p><hr style={{width:"50%"}}/></div>
              <div className="about-skill"><p>Node js</p><hr style={{width:"50%"}}/></div>
             </div>
        </div>
      </div>
      <div className="about-achievements">
      <div className="about-achievement">
        <h1>3 +</h1>
        <p>YEARS OF EXPERIENCE</p>
      </div><hr />
      <div className="about-achievement">
        <h1>10 +</h1>
        <p>PROJECTS COMPLETED</p>
      </div><hr />
      <div className="about-achievement">
        <h1>10 +</h1>
        <p>HAPPY CLIENTS</p>
      </div>
     </div>
    </div>
  )
}
