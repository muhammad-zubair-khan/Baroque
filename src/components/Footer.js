import React from 'react'
import {Link} from 'react-router-dom';
import './Footer.css'

export default function Footer(params) {
    return(
        <>
            <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 col-sm-6">
                        <div className="footer-pad">
                            <h5>About Us</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#">Who Are We</Link></li>
                                <li><Link to="#">Careers</Link></li>
                                <li><Link to="#">Lookbook</Link></li>
                                <li><Link to="#">Our Responsibility</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="footer-pad">
                            <h5>Customer Service</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#">Contact Us</Link></li>
                                <li><Link to="#">Delivery</Link></li>
                                <li><Link to="#">Exchange Policy</Link></li>
                                <li><Link to="#">Privacy Policy</Link></li>
                                <li><Link to="#">Track your Order</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2 col-sm-6">
                        <div className="footer-pad">
                            <h5>Information</h5>
                            <ul className="list-unstyled">
                                <li><Link to="#">Privacy and Policy</Link></li>
                                <li><Link to="#">Terms and Condition</Link></li>
                                <li><Link to="#">Covid 19 updates</Link></li>
                                <li><Link to="#">FAQ's</Link></li>
                                <li>
                                    <Link to="#"></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-2">
                        <h5>We Accept</h5>
                        <ul className="social-network social-circle">
                            <li><img src="visa-new.png" height="42px" alt=""/></li>
                            <li><img src="master-new.png" height="42px" alt=""/></li>
                            <li><img src="ssl-new.png" height="42px" alt=""/></li>
                        </ul>
                    </div>

                    <div className="col-md-2">
                        <h5>Follow Us</h5>
                        <ul className="social-network social-circle">
                            <li><Link to="#"><img src="fb-new.png" height="37px" alt=""/></Link></li>
                            <li><Link to="#"><img src="insta-new.png" height="37px" alt=""/></Link></li>
                            <li><Link to="#"><img src="Snap_logo.png" height="37px" alt=""/></Link></li>
                        </ul>
                    </div>

                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-end">
                        <h5>Subscribe Now</h5>
                    </div>
                    <div className="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 text-end">
                        <input type="text"/><button className="btn-dark"><Link to="#"
                                >SUBSCRIBE</Link></button>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 copy">
                        <p className="text-center">&copy; Copyright 2021 by BAROQUE All
                            rights reserved.</p>
                    </div>
                </div>
            </div>
        </div>
    </footer>
        </>
    )
}