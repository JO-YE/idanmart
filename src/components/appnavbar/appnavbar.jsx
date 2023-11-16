import React from 'react'
import { Link } from 'react-router-dom'
import "./appnavbar.css"


export const Appnavbar = () => {
    return (
        <section>
            <nav  className='navbox'>
                <div className='appnav'>
                    <Link to="/home" className='link'>Home</Link>
                    <Link to="/ourservices" className='link'>Our Services</Link>
                    <Link to="/About" className='link'>About Us</Link>
                    <Link to="/VendorsClique" className='link'>Vendors Clique</Link>
                    <Link to="/contact" className='link'>Contact us</Link>
                </div>
            </nav>
        </section>
    )
}
