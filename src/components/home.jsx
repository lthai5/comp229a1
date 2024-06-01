import React from 'react';
import { Link } from 'react-router-dom';

export default function Home(){
    return (
        <>
            <div>
                <h1>Welcome to my portfolio for Comp229 </h1>
                <p>Here I make my portfolio with React on Vite publishing it on Github then deploying it on netlify</p>
                <p><strong>Mission Statement:</strong> To make full stack application with MERN</p>
                <Link to="/about">About me</Link>
            </div>
        </>
    )
}

