import React from 'react';
import WebDev from '../assets/webdev.jpg';
import MobDev from '../assets/mobdev.jpg';
import AiDev from '../assets/aidev.webp';


export default function Services(){
    return (
        <>
            <h1>Services Offered</h1>
            <div>
                <img src={WebDev} style={{ width: '50%', height: '50%' }} />
                <h2>Web Development</h2>
                <p>Creating responsive and modern websites with the latest front-end technologies.</p>
            </div>
            <div>
                <img src={MobDev} style={{ width: '50%', height: '50%' }} />
                <h2>Mobile App Development</h2>
                <p>Designing and developing user-friendly mobile applications for iOS and Android platforms.</p>
            </div>
            <div>
                <img src={AiDev}  style={{ width: '50%', height: '50%' }} />
                <h2>AI Development</h2>
                <p>Offering software solutions in AI using ML, Gmaul and LLM</p>
            </div>
        </>
    )

}

