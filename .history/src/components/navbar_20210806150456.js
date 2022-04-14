import React from 'react'

const Navbar = () => {
    return (
        <div className="navbar">
            <ul className= "options">
                <li>Sir Johnson Socks</li>
                <li>Home</li>
                <div className="dropdown">
                    <button className="dropbtn">Product
                    
                    </button>
                    <div className="dropdown-content">
                    <a href="#">Link 1</a>
                    <a href="#">Link 2</a>
                    <a href="#">Link 3</a>
                    </div>
                 </div>
                <li>About us</li>
                <li>Contact us</li>
            </ul>

        </div>
    )
}

export default Navbar
