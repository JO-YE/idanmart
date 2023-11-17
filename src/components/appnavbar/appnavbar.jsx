import React from 'react'
import { Link } from 'react-router-dom'
import "./appnavbar.css"


export const Appnavbar = () => {
    return (
        <section>
            <nav  className='navbox'>
                <div className='appnav'>
                    <Link to="/About" className='link'>Home</Link>
                    <Link to="/ourservices" className='link'>Our Services</Link>
                    <Link to="/About" className='link'>About Us</Link>
                    <Link to="/Vendor/dashboard" className='link'>Dashboard</Link>
                    <Link to="/contact" className='link'>Contact us</Link>
                </div>
            </nav>
        </section>
    )
}
