import React from 'react';
// import { NavLink } from 'react-router-dom';
import { NavBar } from '../../components';

import styles from "./style.module.css"

export const Header = () => {
    return(
        <nav className={styles.container} >
            <NavBar/>
        </nav>
    )
};