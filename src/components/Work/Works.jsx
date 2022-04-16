import React from 'react'
import "./Works.css"
import upwork from "../../img/Upwork.png"
import fiverr from "../../img/fiverr.png"
import amazon from "../../img/amazon.png"
import shopify from "../../img/Shopify.png"
import facebook from "../../img/Facebook.png"
import {themeContext} from "../../Context"
import {useContext} from "react"
import {motion} from "framer-motion"


const Works = () => {
    const transition = {duration: 3.5, type: "spring"}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
    return (
        <div className="works">
            {/* left side */}
            <div className="awesome">
                <span style={{color: darkMode?"white":""}}>Works for all these</span>
                <span>Brands & Clients</span>
                <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                <br />
                Lorem ipsum dolor sit amet adipisicing.
                <br />
                Lorem ipsum dolor sit amet.
                <br />
                Lorem ipsum sit amet.
                </span>
                <motion.button 
                whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
                className="button s-button">
                    Hire me
                </motion.button>

                <div className="blur  s-blur1" style={{
                    background: "#ABF1FF94"
                }}>
                </div>
            </div>
            {/* right side */}
            <div className="w-right">
                <motion.div 
                    initial={{rotate: 45}} 
                    whileInView={{rotate: 0}}
                    viewport={{margin: "-40px"}}
                    transition={transition}

                        className="w-mainCircle">
                        <div className="w-secCircle">
                            <img src={upwork} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={fiverr} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={amazon} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={shopify} alt="" />
                        </div>
                        <div className="w-secCircle">
                            <img src={facebook} alt="" />
                        </div>
                </motion.div>
                <div className="w-backCircle blueCircle"></div>
                <div className="w-backCircle yellowCircle"></div>
            </div>
        </div>
    )
}


export default Works