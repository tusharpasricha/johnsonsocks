import React from 'react';
import './temp.css';

const Temp = () => {

    function myFunction(e) {
        console.log(e.target);
        if (e.target.className === "topnav") {
            e.target.className += " responsive";
        } else {
            e.target.className = "topnav";
        }
      }

    return (
        <div class="topnav" id="myTopnav">
            <a href="#home" class="active">Home</a>
            <div class="dropdown">
                <button class="dropbtn">Product
                <i class="fa fa-caret-down"></i>
                </button>
                <div class="dropdown-content">
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
                </div>
            </div>
            <a href="#contact">Contact</a>
            
            <a href="#about">About</a>
            <a href="javascript:void(0);" class="icon" onclick="myFunction()">&#9776;</a>
        </div>
    )
}

export default Temp;
