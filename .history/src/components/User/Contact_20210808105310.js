import React, { useState } from "react";
import emailjs from 'emailjs-com';
import './Contact.css';
import{ init } from 'emailjs-com';
init("user_RQy2NQAr1UeMOoaw4Cpgi");

// import db from '../Data/Data';

function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_sc1ss19', e.target, 'user_RQy2NQAr1UeMOoaw4Cpgi')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
}

// const Contact = () => {

//     const [name, setName] = useState('');
//     const [city, setCity] = useState('');
//     const [email, setEmail] = useState('');
//     const [message, setMessage] = useState('');

//     const submitHandler = (e) => {
//         e.preventDefault();
//         console.log('Form is Submitted');
//         const answer = {
//             name: name,
//             city: city,
//             email: email,
//             contact: message
//         };
//         db.collection('contactDetails').add(answer);
//         setName('');
//         setMessage('');
//         setEmail('');
//         setCity('');
//         alert('Information is Submitted Successfully');
//     };
const Contact = () => {
    return (
        <>
        
            <section className="getintouch">
                
                <h2>Get in Touch</h2>
                <form  onSubmit={sendEmail} >
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        // value={name}
                        name="name"
                        // onChange={e => setName(e.target.value)}
                    />
                    <label htmlFor="City">City</label>
                    <input 
                        type="text"
                        // value={city}
                        name="city"
                        // onChange={e => setCity(e.target.value)}
                    />
                    <label htmlFor="email">E-Mail</label>
                    <input
                        type="email"
                        // value={email}
                        name="email"
                        // onChange={e => setEmail(e.target.value)}
                    />
                    <label>Contact Details</label>
                    <textarea  rows="7" cols="100" ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
            
            </>
    );
    }
export default Contact;