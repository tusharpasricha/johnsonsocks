import React from 'react'
import './navbar.css';

const Navbar = () => {
    return (
        <div class="main">
        <div>
            <div class="logo">
                <ul class="prev">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" class="xi-a">Class XI</a></li>
                        <ul>
                            <li>Chemistry</li>
                            <li>Physics</li>
                        </ul>
                    <li><a href="#">Class XII</a></li>
                    <li><a href="#">Alpha Series</a></li>
                </ul>
                <div class="lines">
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
