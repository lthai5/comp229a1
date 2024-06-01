/* 
  File Name: MainRouter.jsx
  Student’s Name: Lagrange
  StudentID: 301229509
  Date: 05/20/2024
*/
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './components/home.jsx'
import About from './components/about.jsx'
import Projects from './components/projects.jsx'
import Services from './components/services.jsx'
import Contacts from './components/contact.jsx'
import Layout from './components/layout.jsx'

const MainRouter = () => {
    return <div>
        <Layout></Layout>
            <Routes>
                <Route path="" element={<Home />} />
                <Route path="/about" element={<About/>} />
                <Route path="/projects" element={<Projects/>} />
                <Route path="/services" element={<Services/>} />
                <Route path="/contact" element={<Contacts/>} />
            </Routes>
    </div>
}
export default MainRouter

