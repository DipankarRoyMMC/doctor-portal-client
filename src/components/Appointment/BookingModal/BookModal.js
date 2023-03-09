import { format } from 'date-fns';
import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext)

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const patientName = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;


        const booking = {
            appointmentDate: date,
            treatementName: name,
            patientName: patientName,
            phone,
            email,
            slot
        }


        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Booking Successfully!!!');
                    refetch();
                    setTreatment(null);
                } else {
                    toast.error(data.message)
                }

            })
    }

    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold mb-4 text-secondary ">{name}</h3>
                    <form onSubmit={handleBooking} className='space-y-3'>
                        <input name="date" type="text" value={date} disabled className="input input-bordered w-full" />

                        <select name="slot" className="select select-bordered w-full">
                            {slots.map((slot, i) => <option key={i}>{slot}</option>)}
                        </select>

                        <input defaultValue={user?.displayName} name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" disabled />
                        <input defaultValue={user?.email} name="email" type="email" placeholder="Enter Email" className="input input-bordered w-full" disabled />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn input-bordered w-full" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookModal;