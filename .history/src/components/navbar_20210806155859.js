import React from 'react'
import './navbar.css';

const Navbar = () => {

    const clickHandler = () => {

        const Prev = document.querySelector('.prev');
        const Nav = document.querySelector('.prev');
        const LogoImg = document.querySelector('.logo-img');

        Nav.classList.toggle('nav-bar');
        Prev.classList.toggle('edit');

    };

    return (
        <div class="main">
        
            <div class="logo">
                <ul class="prev edit">
                    <li><a href="#">Sir Johnson Socks</a></li>
                    <li><a href="#" class="xi-a">Home</a></li>
                    <li><a href="#">Products</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Contact Us</a></li>
                </ul>
                <div class="lines" onClick={clickHandler}>
                    <div class="line"></div>
                    <div class="line"></div>
                    <div class="line"></div>
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
