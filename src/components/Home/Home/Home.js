import React from 'react';
import InfoCards from '../InfoCards/InfoCards';
import Banner from '../Banner/Banner';
import Services from '../Services/Services';
import Treatment from '../Treatment/Treatment';
import Testimonial from '../Testimonial/Testimonial';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ConactUs from '../ContactUs/ConactUs';

const Home = () => {
    return (
        <div className='px-5 lg:px-0'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Treatment></Treatment>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ConactUs></ConactUs>
        </div>
    );
};

export default Home;