import React from "react";
// import emailjs from 'emailjs-com';
import './Contact.css';
// function sendEmail(e){
//     e.preventDefault();
//     console.log('submited')
//     alert("Thank you for your response")

//     emailjs.sendForm('service_v5j0w57', 'template_jckj8km', e.target, 'user_RQy2NQAr1UeMOoaw4Cpgi')
//       .then((result) => {
//           console.log(result.text);
//       }, (error) => {
//           console.log(error.text);
//       });
//       e.target.reset()
// }
const Contact = () => {
    return (
        <>
            <section className="getintouch">
                <h2>Get in Touch</h2>
                <form  onSubmit={sendEmail} >
                    <label htmlFor="name">Name</label>
                    <input type="text" name="name"/>
                    <label htmlFor="City">City</label>
                    <input type="text" name="city"/>
                    <label htmlFor="email">E-Mail</label>
                    <input type="email" name="email"/>
                    <label>Contact Details</label>
                    <textarea  rows="7" cols="100"  name="message" ></textarea>
                    <button type="submit">Submit</button>
                </form>
            </section>
            
            </>
    );
    }
export default Contact;