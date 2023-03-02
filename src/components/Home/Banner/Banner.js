import React from 'react';
import banner from '../../../assets/images/chair.png'
import bg from '../../../assets/images/bg.png';
import './Banner.css'
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';


const Banner = () => {
    return (
        <div className="hero pt-14" style={{ background: `url(${bg}) ` }} >
            <div className="hero-content flex-col md:flex-row-reverse">
                <img src={banner} className="max-w-lg rounded-lg shadow-2xl w-full" />
                <div className='md:w-1/2'>
                    <h1 className="text-3xl lg:text-7xl">Your New Smile Starts Here</h1>
                    <p className="py-6 text-xl font-thin">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <ButtonPrimary>Started Now</ButtonPrimary>
                </div>
            </div>
        </div>
    );
};

export default Banner;