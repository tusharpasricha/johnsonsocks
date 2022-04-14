import React, { useEffect, useState } from "react";
import './Template.css';
import { SliderData } from '../Data/SliderData';

const Template = () => {

    const [current, setCurrent] = useState(0);
    const length = SliderData.length - 1;

    useEffect(() => {

        console.log('i m in');

        const timet =  setTimeout(() => {
            setCurrent(current === length - 1 ? 0 : current + 1);
        }, 2000);

        return () => clearInterval(timet);

    }, [current]);

    return (
        <div className="template">
            {SliderData.map((slide, index) => {
                return (
                    <div className={`container ${(current === index) ? 'active' : ''}`} key={index} >
                        {current === index && <img src={slide.image} />}
                    </div>
                );
            })}
        </div>
    );
}
 
export default Template;