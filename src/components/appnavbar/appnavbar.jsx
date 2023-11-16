import React from 'react'
import { Link } from 'react-router-dom'
import "./appnavbar.css"


export const Appnavbar = () => {
    return (
        <section>
            <nav  className='navbox'>
                <div className='appnav'>
                    <Link to="/home" className='link'>home</Link>
                    <Link to="/ourservices" className='link'>ourservices</Link>
                    <Link to="/About" className='link'>About</Link>
                    <Link to="/VendorsClique" className='link'>VendorsClique</Link>
                    <Link to="/contact" className='link'>Contact us</Link>
                </div>
            </nav>
        </section>
    )
}
