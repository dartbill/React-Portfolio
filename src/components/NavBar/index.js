import React from 'react';
// import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import './style.css'


export const NavBar = () => {

    return (
        <nav className='Navcontainer'>
        {/* <a href='//getfutureproof.co.uk/' target="_blank" rel="noopener noreferrer"> futureproof </a> */}
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
        <NavLink to='/portfolio'>Portfolio</NavLink>
        {/* <BackButton /> */}
    </nav>  
    )
}
