import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import "./style.css"

export const PortfolioCard = () => {

    return (
        <>  
        <p>Hello from module</p>
                    <div >
                <div >
                    {/* <img src="./imgs/smalltalk.png" class="card-img" alt="A screengrab of my website smallTalk"> */}
                    <div >
                      <h5 ><a href="https://smalltalkapp.netlify.app/" >SmallTalk</a></h5>
                      <p id = "projectCard" >A simple anon journal site made in a team. I was involved in both the front-end and back-end of this project</p>
                      <p id = "projectCard" >This project uses JavaScript and HTML/CSS as the main languages (I should add icons instead)</p>
                      <a href="https://github.com/dartbill/smallTalk_Client" >A link to the code</a>
                    </div>
                </div>
            </div>
        </>
        
        
    )
}
