import React from 'react'
import './Footer.css';
import Facebook from'../Assets/Footer/facebook.png';
import Instagram from'../Assets/Footer/instagram.png';
import Linkedin from'../Assets/Footer/linkedin.png';
import Tiktok from'../Assets/Footer/tiktok.png';
import Twitter from'../Assets/Footer/twitter.png';


export const Footer = () => {
  return (
    <div className='footer-body'>
        <div className='footer-up'>
            <div className='footer-column'>
                <ul>
                    <li><h4>Privacy & Terms</h4></li>
                    <li></li>
                    <li>Terms & Conditions</li>
                    <li>Promotion Terms & Conditions</li>
                    <li>Privacy Notice</li>
                    <li>Update Cookie Preferences</li>
                </ul>
            </div>

            <div className='footer-column' id='footer-discover'>
                <ul>
                    <li><h4>Discover</h4></li>
                    <li></li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>FAQ</li>
                </ul>
            </div>
            <div className='footer-column'>
                <ul>
                    <li><h4>Are you on the list?</h4></li>
                    <li></li>
                    <li><p>{'We’re not like other newsletters, these are emails you can’t wait to open. Get everything you need to know about earth. delivered straight to your inbox.'}</p></li>
                    <li>
                        <div>
                            <input type="email" placeholder="Enter email address"  className='footer-input'/> 
                            <button className="submit-btn">
                            <p>→</p>
                            </button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
        
        <div className='footer-down'>
            <div className='footer-socials'>
                <div><h2>JOIN THE COMMUNITY</h2></div>
                <div className='social-icons'>
                    <img src={Facebook} alt=''></img>
                    <img src={Instagram} alt=''></img>
                    <img src={Linkedin} alt=''></img>
                    <img src={Tiktok} alt=''></img>
                    <img src={Twitter} alt=''></img>
                </div>
                <div><p>Copyright &copy; 2023 earth. skincare</p></div>
                <div><p>All rights reserved. Website Designed & Developed by Amani Rizam</p></div>
            </div>

        </div>

    </div>
  )
}
export default Footer;
