import React from 'react';
import doctor from '../../../assets/images/doctor.png';
import ButtonPrimary from '../../ButtonPrimary/ButtonPrimary';
import appointmentBg from '../../../assets/images/appointment.png';


const MakeAppointment = () => {
    return (
        <section>
            <div className="hero p-4 lg:p-0" style={{ background: `url(${appointmentBg})` }}>
                <div className="hero-content flex-col lg:flex-row">
                    <img src={doctor} className="-mt-40 w-1/2 hidden lg:block" />
                    <div className='text-white lg:w-1/2'>
                        <h4 className='text-xl font-bold text-secondary mb-3'>Appoitment</h4>
                        <h1 className="text-4xl font-semibold leading-none">Make an appointment Today</h1>
                        <p className="py-5 text-base">Appointment
                            Make an appointment Today
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page
                            GET STARTED</p>
                        <ButtonPrimary>Get Starting Now</ButtonPrimary>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default MakeAppointment;