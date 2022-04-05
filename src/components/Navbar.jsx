import React from 'react';
import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () =>
{
    return (
        <>

        <nav className="navbar">
            <div className="nav-container">
                <NavLink to="/" className="nav-logo">
                    Ini Logo
                </NavLink>

                <ul className="nav-menu">
                    <li className= "nav-item">
                        <NavLink to="/ourservices" className="nav-links">
                            Our Services
                        </NavLink>
                    </li>
                    <li className= "nav-item">
                        <NavLink to="/whyus" className="nav-links">
                            Why Us
                        </NavLink>
                    </li>
                    <li className= "nav-item">
                        <NavLink to="/testimonial" className="nav-links">
                            Testimonial 
                        </NavLink>
                    </li>
                    <li className= "nav-item">
                        <NavLink to="/Faq" className="nav-links">
                            FAQ
                        </NavLink>
                    </li>
                </ul>

            </div>
        </nav>
        </>
    )
}

export default Navbar;