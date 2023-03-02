import React from 'react';
import footerBg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className='py-12 mt-10 bg-left bg-cover bg-no-repeat' style={{ backgroundImage: `url(${footerBg})` }}>
            <div className='mx-auto px-4 md:px-0 footer '>
                <div>
                    <span className="footer-title">SERVICES</span>
                    <a href="#" className="link link-hover"> Emergency Checkup</a>
                    <a href="#" className="link link-hover">Monthly Checkup</a>
                    <a href="#" className="link link-hover">Weekly Checkup</a>
                    <a href="#" className="link link-hover">Deep Checkup</a>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <a href="#" className="link link-hover">Fluoride Treatment</a>
                    <a href="#" className="link link-hover">Cavity Filling</a>
                    <a href="#" className="link link-hover">Teath Whitening</a>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    <a href="#" className="link link-hover">New York - 101010 Hudson</a>
                </div>
            </div>
            <div className='py-3'>
                <p className='text-center text-slate-600'>&copy; Copyright 2023</p>
            </div>

        </footer>
    );
};

export default Footer;