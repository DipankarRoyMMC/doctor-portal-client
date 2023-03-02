import React from 'react';
import marker from '../../../assets/icons/marker.svg';
import clock from '../../../assets/icons/clock.svg';
import phone from '../../../assets/icons/phone.svg'
import InfoCard from './InfoCard';


const InfoCards = () => {
    const cartData = [
        {
            id: 1,
            name: 'Opening Hour',
            description: 'Open our office 9.00 AM and close 5.00PM',
            icon: clock,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        },
        {
            id: 2,
            name: 'Our Location',
            description: 'Open our office 9.00 AM and close 5.00PM',
            icon: marker,
            bgClass: 'bg-accent',
        },
        {
            id: 3,
            name: 'Contact Us',
            description: 'Open our office 9.00 AM and close 5.00PM',
            icon: phone,
            bgClass: 'bg-gradient-to-r from-primary to-secondary'
        }
    ]

    return (
        <div className='mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                cartData.map(card => <InfoCard
                    key={card.id}
                    card={card}
                ></InfoCard>)
            }
        </div>
    );
};

export default InfoCards;