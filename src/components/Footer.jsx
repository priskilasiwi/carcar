import React from "react";
import { Container } from 'react-bootstrap'
import "./Footer.css"

const Footer = () => {
    return (
        <>
            <Container className = "contact">
                <Container fluid>
                    <div className="row">
                        <div className="col-lg-3">
                            <p className="subheading ">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</p>
                            <p className="subheading ">binarcarrental@gmail.com</p>
                            <p className="subheading ">081-233-334-808</p>
                        </div>
                        <div className="col-lg-3">
                            <p className="subheading ms-5">Our Services</p>
                            <p className="subheading ms-5">Why Us</p>
                            <p className="subheading ms-5">Testimonial</p>
                            <p className="subheading ms-5">FAQ</p>
                        </div>
                        <div className="col-lg-3">
                            <p className="subheading">Connect With Us</p>
                            <div className="img-fluid">
                                <img src="./images/icon_facebook.svg" className="position-relative me-2" />
                                <img src="./images/icon_instagram.svg" className="position-relative me-2" />
                                <img src="./images/icon_twitter.svg" className="position-relative me-2" />
                                <img src="./images/icon_mail.svg" className="position-relative me-2" />
                                <img src="./images/icon_twitch.svg" className="position-relative me-2" />
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <p className="subheading">Copyright Binar 2022</p>
                            <img className ="logo" src="./images/logo.svg" width="100px" alt="logo" />
                        </div>
                    </div>
                </Container>
            </Container>

        </>
    )
}

export default Footer;