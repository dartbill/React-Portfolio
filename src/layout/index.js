import React from 'react';
import { Header } from './Header';
// import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const Layout = ({ about, contact, portfolio }) => (
    <>
        <Header
            about={about}
            contact={contact}
            portfolio={portfolio} />
        <Outlet />

    </>
)