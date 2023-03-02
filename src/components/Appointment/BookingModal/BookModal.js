import { format } from 'date-fns';
import React from 'react';

const BookModal = ({ treatment, setTreatment, selectedDate }) => {
    const { name, slots } = treatment;
    const date = format(selectedDate, 'PP');

    const handleBooking = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const phone = form.phone.value;
        const email = form.email.value;
        const slot = form.slot.value;


        const booking = {
            appointmentDate: date,
            treatement: treatment,
            patient: name,
            phone,
            email,
            slot
        }

        console.log(booking)

        setTreatment(null);

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

                        <input name="name" type="text" placeholder="Full Name" className="input input-bordered w-full" />
                        <input name="phone" type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <input name="email" type="email" placeholder="Enter Email" className="input input-bordered w-full" />
                        <input type="submit" value="Submit" className="btn input-bordered w-full" />
                    </form>
                </div>

            </div>
        </div>
    );
};

export default BookModal;