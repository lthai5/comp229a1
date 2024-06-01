/* 
  File Name: about.jsx
  Student’s Name: Lagrange
  StudentID: 301229509
  Date: 05/20/2024
*/
import React from 'react';
import ProfilePic from '../assets/profilepicture.jpg';
import SampleResume from '../assets/sampleresume.pdf';
 

export default function About(){
    return (
        <>
            {/* Main Content */}
            <h1>Lagrange</h1>
            <img src={ProfilePic} style={{ height: '100px', borderRadius: '50%' }} /> 
            <p>Welcome to my professional space! I'm Lagrange, a full-stack developer specializing in the MERN stack, committed to building dynamic and scalable web applications. My portfolio is crafted with React and Vite for an optimized development experience. It's hosted on GitHub and deployed on Netlify. </p>
            {/* add noopener noref*/}
            <a href={SampleResume} target="_blank" rel="noopener noreferrer">My Resume test</a>
        </>
    )
}

