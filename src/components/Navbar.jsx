import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";
import logo from "../images/logo.svg"
import { Button } from 'react-bootstrap';

const Navbar = () =>
{
    return (
        <>

        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    <img src={logo} className="img-logo" />
                </NavLink>

                <ul className="nav-menu">
                    <li className= "nav-item">
                        Our Services
                    </li>
                    <li className= "nav-item">
                        Why Us
                    </li>
                    <li className= "nav-item">
                        Testimonial
                    </li>
                    <li className= "nav-item">
                        <NavLink to="/Faq" className="nav-links">
                            FAQ
                        </NavLink>
                    </li>
                    <li className ="nav-item">
                        <Button className="btn">Register</Button>
                    </li>
                </ul>

            </div>
        </nav>
        </>
    )
}

export default Navbar;