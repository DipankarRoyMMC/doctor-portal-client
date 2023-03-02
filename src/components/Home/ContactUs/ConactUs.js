import React from 'react';
import contactBg from '../../../assets/images/appointment.png'
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';


const ConactUs = () => {
    return (
        <section style={{ background: `url(${contactBg})` }}>
            <div className='max-w-md mx-auto p-10' >
                <div className='text-center mb-8'>
                    <h5 className='text-primary font-md font-bold'>Contact Us</h5>
                    <h1 className='text-3xl font-normal text-white '>Stay Conected With Us</h1>

                </div>
                <form action="#" className='space-y-4'>
                    <input type="text" placeholder="Enter your email" className="input w-full block" />
                    <input type="text" placeholder="Subject" className="input w-full block" />
                    <textarea className="textarea w-full h-24" placeholder="Enter your message"></textarea>
                    <ButtonPrimary>Get Submit</ButtonPrimary>
                </form>
            </div>
        </section>
    );
};

export default ConactUs;