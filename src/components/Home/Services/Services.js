import React from 'react';
import fluoride from '../../../assets/images/fluoride.png';
import cavity from '../../../assets/images/cavity.png';
import whitening from '../../../assets/images/whitening.png'
import Service from './Service';

const Services = () => {
    const servicesData = [
        {
            id: '1',
            name: 'Fluoride Treatment',
            description: 'Fluorid teatment is for teeth. It is best treatment for You',
            icon: fluoride
        },
        {
            id: '2',
            name: 'Cavity Treatment',
            description: 'Cavity teatment is for teeth. It is best treatment for You',
            icon: cavity
        },
        {
            id: '3',
            name: 'Whitening Treatment',
            description: 'Whitening teatment is for teeth. It is best treatment for You',
            icon: whitening
        }
    ]

    return (
        <>
            <div className='max-w-md mx-auto text-center my-10'>
                <span className='text-primary text-lg font-bold uppercase'>SERVICES</span>
                <h1 className='text-3xl font-normal'>Services We Provide</h1>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
                {
                    servicesData.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </>
    );
};

export default Services;