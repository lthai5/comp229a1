/* 
  File Name: projects.jsx
  Student’s Name: Lagrange
  StudentID: 301229509
  Date: 05/20/2024
*/
import React from 'react';
import ProjectAI from '../assets/projectai.jpg';
import ProjectDA from '../assets/projectdataanalyst.jpg';
import ProjectSD from '../assets/projectsoftdev.jpg';

export default function Projects(){
    return (
        <>
            {/* Main Content */}
            <h1>Projects</h1>
            <div>
                <img src={ProjectAI} style={{ width: '50%', height: '50%' }} />
                <h2>AI Personal Assistant Development</h2>
                <p>My role: Lead Developer</p>
                <p>Outcome: Developed a successful web application that increased user engagement by 30%.</p>
            </div>
            <div>
                <img src={ProjectDA} style={{ width: '50%', height: '50%' }} />
                <h2>Data Analysis for Retail Insights</h2>
                <p>My role: Frontend Engineer</p>
                <p>Outcome: Implemented a responsive design that improved mobile accessibility.</p>
            </div>
            <div>
                <img src={ProjectSD} style={{ width: '50%', height: '50%' }} />
                <h2>Software Solution for Online Education</h2>
                <p>My role: Backend Developer</p>
                <p>Outcome: Optimized database queries, reducing load times by 50%.</p>
            </div>
        </>
    )
}

