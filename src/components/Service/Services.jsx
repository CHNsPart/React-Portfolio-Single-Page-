import React from 'react'
import "./Services.css"
import Card from '../Card/Card'
import HeartEmoji from "../../img/heartemoji.png"
import Glasess from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import pdf from "./pdf.pdf"
import {themeContext} from "../../Context"
import {useContext} from "react"
import {motion} from "framer-motion"

const Services = () => {
    const transition = {duration: 2, type: "spring"}
    const theme = useContext(themeContext)
    const darkMode = theme.state.darkMode
  return (
    <div className="services" id='Services'>
        <div className="awesome">
          <span style={{color: darkMode?"white":""}}>My Awesome</span>
          <span>services</span>
          <span>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          <br />
          Lorem ipsum dolor sit amet.
          </span>
          <a id='btn' href={pdf} download>
            <motion.button
            whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9 }}
            className="button s-button">Download CV</motion.button>
          </a>

          <div className="blur  s-blur1" style={{
            background: "#ABF1FF94"
          }}>

          </div>
        </div>

        <div className="cards" style={{left:"14rem"}}>
            
            <motion.div 
              initial={{left: "18rem"}} 
              whileInView={{left: "14rem"}}
              transition={transition}
              id="card-mb"
              style={{left:"14rem"}}

              >
              <Card 
                emoji={HeartEmoji}
                heading={"Design"}
                detail={"Figma, Sketch, Photoshop, Adobe XD, Protopie, Illustrator"}
              />
            </motion.div>
            <motion.div 
              initial={{left: "-8rem"}} 
              whileInView={{top:"12rem", left: "-4rem"}}
              transition={transition}
              id="card-mb"
              style={{left:"-4rem", top:"12rem"}}>
              <Card 
                emoji={Glasess}
                heading={"Developer"}
                detail={"HTML, CSS, Javascript, React"}
                />
            </motion.div>
            <motion.div 
              initial={{top: "22rem"}} 
              whileInView={{top:"19rem", left: "12rem"}}
              transition={transition}
              id="card-mb"
              style={{left:"12rem", top:"19rem"}}>
              <Card 
                emoji={Humble}
                heading={"UI/UX"}
                detail={"Lorem ipsum, dolor sit amet consectetur adipisicing elit"}
                />
            </motion.div>
          <div className="blur s-blur-2" style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  )
}

export default Services