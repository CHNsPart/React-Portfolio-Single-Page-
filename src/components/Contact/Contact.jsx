import React from 'react'
import emailjs from '@emailjs/browser';
import { useRef, useState } from 'react';
import {themeContext} from "../../Context"
import {useContext} from "react"
import {motion} from "framer-motion"
import "./Contact.css"

const Contact = () => {
        const theme = useContext(themeContext)
        const darkMode = theme.state.darkMode

        const form = useRef();
        const [done, setDone] = useState(false)

        const sendEmail = (e) => {
            e.preventDefault();

            emailjs.sendForm('service_9qg95x9', 'template_9xt939h', form.current, 'l6dMpKedWn5Rbl3uH')
            .then((result) => {
                console.log(result.text);
                setDone(true)
            }, (error) => {
                console.log(error.text);
                setDone(false)
            });
        };

  return (
        <div className="contact-form">
            <div className="w-left">
                <div className="awesome">
                    <span style={{color: darkMode?"white":""}}>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur s-blur1" style={{background: "#ABF1FF94"}}>
                    </div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="user_name" className='user' placeholder=' Name' />
                    <input type="email" name='user_email' className='user' placeholder=' Email' />
                    <textarea name="message" className="user" placeholder=' Message'></textarea>
                    <motion.input
                    whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 0.9 }} 
                    type="submit" value="Send" className='button contact-button' />
                    <span className='status'>{done && "Thankyou for contacting me!"}</span>
                    <div className="blur c-blur" style={{background: "var(--purple)"}}></div>
                </form>
            </div>

        </div>
  )
}

export default Contact