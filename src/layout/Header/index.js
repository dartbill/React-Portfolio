import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavBar } from '../../components';

export const Header = () => {
    return(
        <nav>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.0/css/bootstrap.min.css" 
integrity="sha384-9gVQ4dYFwwWSjIDZnLEWnxCjeSWFphJiwGPXr1jddIhOegiu1FwO5qRGvFXOdJZ4" 
crossOrigin="anonymous"></link>
            <NavBar/>
            {/* <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
            <NavLink to='/news'>News</NavLink>
            <BackButton /> */}
        </nav>
    )
};