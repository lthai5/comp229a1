/* 
  File Name: contact.jsx
  Student’s Name: Lagrange
  StudentID: 301229509
  Date: 05/20/2024
*/
import React from 'react';


export default function Contact(){
    return (
        <>
            {/* Main Content */}
            <h1>Contact page</h1>
            <div>
                <p>Name: Lagrange</p>
                <p>Email: lthai5@my.centennialcollege.ca</p>
            </div>
            {/* Form */}
            <form >
                <input type="text" name="firstName" placeholder="First Name" />
                <input type="text" name="lastName" placeholder="Last Name"  />
                <input type="text" name="contactNumber" placeholder="Contact Number" />
                <input type="email" name="email" placeholder="Email Address"  />
                <textarea name="message" placeholder="Your Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </>
    )
}

