import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



export const ShortAboutMe = () => {

    return (
<>
<div >
        <h2 id="subTitle" >A little bit about me</h2>

        <div >
          <div >
              <p id = "aboutme" >Outside of work I am an avid gym-goer and have completed two tough mudders, I love to read and anything to do with photography and drawing as well as just relaxing, watching my favourite series’ with my cats. I love to travel, my favourite place I have been so far has been Venice with Greece being a close second if only because of the weather!</p>
              <p>Skills at a glance
                Command Line Interface
        
                Git/GitHub
                
                HTML/CSS 
                
                JavaScript
                
                C/C++
                
                Bootstrap
                
                Houdini
                
                Maya </p>
                {/* <a  href="./about.html">A little bit more?</a> */}
          </div>
          <div >
              <p>  this is where an img of me needs to go </p>
                   
          </div>
              </div>
              

    </div>
</>
    )
}
