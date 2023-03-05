import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import BookModal from '../BookingModal/BookModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);

    const { data: appointmentOptions = [] } = useQuery({
        queryKey: ['apppointmentOptions'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/apppointmentOptions');
            const data = res.json();
            return data;
        }
    });

    return (
        <section className='my-10'>
            <div className="text-center">
                <p className='text-secondary font-bold mb-1'>Available Services on  <strong>{format(selectedDate, 'PP')}</strong> </p>
                <p>Please Selecte a Services</p>
            </div>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                {
                    appointmentOptions.map(option =>
                        <AppointmentOption
                            appointmentOptions={option}
                            key={option._id}
                            setTreatment={setTreatment}
                        ></AppointmentOption>)
                }
                {treatment && <BookModal
                    selectedDate={selectedDate}
                    treatment={treatment}
                    setTreatment={setTreatment}
                >
                </BookModal>}
            </div>
        </section>
    );
};

export default AvailableAppointment;