import React, { useState } from "react";
import emailjs from 'react';
import './Contact.css';
import db from '../Data/Data';

function sendEmail(e){


}

const Contact = () => {

    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const submitHandler = (e) => {
        e.preventDefault();
        console.log('Form is Submitted');
        const answer = {
            name: name,
            city: city,
            email: email,
            contact: message
        };
        db.collection('contactDetails').add(answer);
        setName('');
        setMessage('');
        setEmail('');
        setCity('');
        alert('Information is Submitted Successfully');
    };

    return (
        <>
        
            <section className="getintouch">
                
                <h2>Get in Touch</h2>
                <form  onSubmit={sendEmail} onSubmit={submitHandler}>
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        value={name}
                        onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="City">City</label>
                    <input 
                        type="text"
                        value={city}
                        onChange={e => setCity(e.target.value)}
                    />
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <label>Contact Details</label>
                    <textarea  rows="7" cols="100" value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
            
            </>
    );
}
 
export default Contact;