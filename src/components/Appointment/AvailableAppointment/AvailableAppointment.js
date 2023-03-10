import { format } from 'date-fns';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import Loading from '../../Shared/Loading/Loading';
import BookModal from '../BookingModal/BookModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['apppointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`http://localhost:5000/apppointmentOptions?date=${date}`);
            const data = res.json();
            return data;
        }
    });
    if (isLoading) {
        <Loading></Loading>
    }

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
                    refetch={refetch}
                >
                </BookModal>}
            </div>
        </section>
    );
};

export default AvailableAppointment;