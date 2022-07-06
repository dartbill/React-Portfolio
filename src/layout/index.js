import React from 'react';
import { Header } from './Header';
// import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';

export const Layout = ({ home, about, contact, portfolio }) => (
    <>
        <Header
            home={home}
            about={about}
            contact={contact}
            portfolio={portfolio} />
        <Outlet />

    </>
)