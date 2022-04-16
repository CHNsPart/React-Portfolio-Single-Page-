import React from 'react'
import { Link } from 'react-scroll/modules'
import Toggle from "../Toggle/Toggle"
import "./Navbar.css"

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                Andrew
            </div>
            <Toggle/>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>
                    <Link spy={true} to="Navbar" activeClass="activeClass" smooth={true}>
                        Home
                    </Link>
                    </li>

                    <li>
                    <Link spy={true} to="Services" smooth={true}>
                        Services
                    </Link>
                    </li>

                    <li>
                    <Link spy={true} to="Experience" smooth={true}>
                        Experience
                    </Link>
                    </li>

                    <li>
                    <Link spy={true} to="Portfolio" smooth={true}>
                        Portfolio
                    </Link>
                    </li>

                    <li>
                    <Link spy={true} to="Testimonials" smooth={true}>
                        Testimonials
                    </Link>
                    </li>
                </ul>
            </div>
            <button style={{width:"5rem"}} className="button n-button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar