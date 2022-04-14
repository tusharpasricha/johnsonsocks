import React from 'react'
import './navbar.css';

const Navbar = () => {

    const clickHandler = () => {

        const Prev = document.querySelector('.prev');
        const Nav = document.querySelector('.prev');
        const LogoImg = document.querySelector('.logo-img');

        Nav.classList.toggle('nav-bar');
        Prev.classList.remove('edit');

    };

    return (
        <div class="main">
        
            <div class="logo">
                <ul class="prev">
                    <li><a href="#">Home</a></li>
                    <li><a href="#" class="xi-a">Class XI</a></li>
                    <li><a href="#">Class XII</a></li>
                    <li><a href="#">Alpha Series</a></li>
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
