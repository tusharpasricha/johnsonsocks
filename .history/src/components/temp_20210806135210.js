import React from 'react';
import './temp.css';

const Temp = () => {

    function myFunction() {
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
          x.className += "responsive";
        } else {
          x.className = "topnav";
        }
      }

    return (
        <div className="topnav" id="myTopnav">
            <a href="#home" className="active">Home</a>
            <div className="dropdown">
                <button className="dropbtn">Product
                {/* <i className="fa fa-caret-down"></i> */}
                </button>
                <div className="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
            <a href="#contact">Contact</a>
            
            <a href="#about">About</a>
            <a href="javascript:void(0);" className="icon" onclick={myFunction}>&#9776;</a>
        </div>
    )
}

export default Temp;
