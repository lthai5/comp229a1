import React from 'react';
import {Link} from 'react-router-dom';
import Logo from '../assets/logo.jpg';


export default function Layout(){
    return (
        <>
            <h1>My Portfolio Assignment 1</h1>
            <img src={Logo} alt="logo" style={{ height: '70px' }} />
            <nav>
                <Link to="/">Home</Link> | <Link to="/about">About</Link> | <Link to="/services">Services</Link> | <Link to="/projects">Projects</Link> | <Link to="/contact">Contact</Link>
            </nav>
            <hr />
        </>
    )
}