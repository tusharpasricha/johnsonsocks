import React, { useRef, useState } from "react";
import './Card.css';
import logo from './img2.jpg';

const Card = (props) => {

    const cardRef = useRef();
    const titleRef = useRef();

    const [isViewed, setIsViewed] = useState(false);

    const clickHandler = () => {

        setIsViewed(true);

    };

    const lessHandler = () => {

        setIsViewed(false);

    };

    return (
        // <div className="cardContainer">
            <div className="singleContainer">
                <div className="card" ref={cardRef}>
                    <div className="sneaker">
                        <div className="circle"></div>
                        <img src={props.image} className="imga" alt="Socks" />
                    </div>
                    <div className="description">
                        <h2 className="title" ref={titleRef}>{props.title}</h2>
                        <h3 className="desc">{props.desc}</h3>
                        <div className="size">
                            
                        </div>
                    </div>
                    {!isViewed && <button className="purchase" onClick={clickHandler}>More Info</button>}
                    {isViewed && <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit vel architecto libero porro dignissimos reprehenderit dolor nam esse sed aut.</h4>}
                    {isViewed && <button className="less" onClick={lessHandler}>View Less</button>}
                </div>
            </div>
        // </div>
    );
}
 
export default Card;