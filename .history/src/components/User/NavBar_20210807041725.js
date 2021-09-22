import React, { useRef, useState } from "react";
import './Navbar.css';
import { Link } from "react-router-dom";

const NavBar = () => {

    const [isClicked, setIsClicked] = useState(false);
    const navRef = useRef();
    const titleRef = useRef();

    const clickHandler = () => {

        if(isClicked){
            setIsClicked(false);
            navRef.current.style.flexDirection = 'row';
            titleRef.current.style.display = 'initial';
        } else {
            setIsClicked(true);
            navRef.current.style.flexDirection = 'column';
            titleRef.current.style.display = 'none';

        }

        

    };

    return (
        <div className="navbar">
            <ul className={`mainnav ${isClicked === false ? 'none' : ''}`} ref={navRef}>
                <li><Link to="/" style={{color: '#000', fontFamily: 'Style Script', fontSize: '27px'}}>Sir Johnson Socks</Link></li>
                <li><Link to="/products">Products</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/contact">Contact Us</Link></li>
            </ul>
            
            <div className={`signup`}>
                <button className={`${isClicked === false ? '' : 'none'}`}>Login</button>
            </div>
            <div className={`responsive none`} ref={titleRef}>Sir Johnson Socks</div>
            <div className="lines" onClick={clickHandler}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>
        </div>
    );
}
 
export default NavBar;