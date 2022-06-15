import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavBar } from '../../components';

import "./style.css"

export const Header = () => {
    return(
        <nav className="container">

            <NavBar/>
            {/* <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/news'>News</NavLink>
            <BackButton /> */}
        </nav>
    )
};