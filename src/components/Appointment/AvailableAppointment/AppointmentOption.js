import React from 'react';

const AppointmentOption = ({ appointmentOptions, setTreatment }) => {
    const { name, slots } = appointmentOptions;
    return (
        <div className="card shadow-xl">
            <div className="card-body items-center text-center">
                <h2 className="card-title font-bold text-secondary">{name}</h2>
                <p>{slots.length > 0 ? slots[0] : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} on available</p>

                <label onClick={() => setTreatment(appointmentOptions)} htmlFor="booking-modal" className="btn border-none bg-gradient-to-r from-primary to-secondary text-white">Booking Appointment</label>
            </div>
        </div >
    );
};

export default AppointmentOption;