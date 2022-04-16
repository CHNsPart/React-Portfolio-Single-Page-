import React from 'react'
import "./Footer.css"
import Wave from "../../img/wave.png"
import Facebook from "@iconscout/react-unicons/icons/uil-facebook"
import GitHub from "@iconscout/react-unicons/icons/uil-github"

const Footer = () => {
  return (
    <div className="footer">
        <img src={Wave} style={{width:"100%"}} alt="footer wave" />
        <div className="f-content">
            <span>anitaislam97@gmail.com</span>
            <div className="f-icons">
                <Facebook color="white" size="3rem"/>
                <GitHub color="white" size="3rem"/>
            </div>
        </div>
    </div>
  )
}

export default Footer