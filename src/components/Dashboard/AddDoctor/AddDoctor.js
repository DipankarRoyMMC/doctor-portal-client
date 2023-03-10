import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import Loading from '../../Shared/Loading/Loading';

const AddDoctor = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const navigate = useNavigate();

    const imageHostKey = process.env.REACT_APP_imagebb_Key;

    const handleAddDoctor = (data) => {
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgData => {
                if (imgData.success) {
                    console.log(imgData.data.url);
                    const doctor = {
                        name: data.name,
                        email: data.email,
                        specialty: data.specialty,
                        image: imgData.data.url
                    }
                    fetch(`http://localhost:5000/doctors`, {
                        method: 'POST',
                        headers: {
                            'content-type': 'application/json',
                            authorization: `bearer ${localStorage.getItem('accessToken')}`
                        },
                        body: JSON.stringify(doctor)
                    })
                        .then(res => res.json())
                        .then(result => {
                            console.log(result);
                            toast.success(`${data.name} is added successfully!`);
                            navigate('/dashboard/managedoctor')

                        })
                }
            })

    }

    const { data: specialties, isLoading } = useQuery({
        queryKeyr: ['specialty'],
        queryFn: async () => {
            const res = await fetch('http://localhost:5000/appointmentSpecialty');
            const data = res.json();
            return data;
        }
    });
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='text-3xl mb-4'>Add a Doctor</h2>
            <div className='w-96 p-7 rounded flex drop-shadow-lg shadow-lg border'>
                <form onSubmit={handleSubmit(handleAddDoctor)} className='w-full' >
                    <label className='label-text' htmlFor="name">
                        <span className="label-text mb-3">Full Name</span>
                    </label>
                    <input {...register("name", { required: "Requird Name Field" })} type="text" className="input input-bordered w-full" />
                    <p className='text-red-600'>{errors.name && errors.name.message}</p>

                    <label className='label-text' htmlFor="email">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email is Required" })} type="email" className="input input-bordered w-full" />
                    <p className='text-red-600'>{errors.email && errors.email.message}</p>
                    <div className='my-4'>
                        <label className='label-text' htmlFor="email">
                            <span className="label-text">Select Specialty</span>
                        </label>
                        <select {...register('specialty')} className="select select-bordered w-full max-w-xs">
                            {
                                specialties.map(specialty => <option key={specialty._id} value={specialty.name}>{specialty.name}</option>)
                            }
                        </select>
                    </div>

                    <div className='my-5'>
                        <input type="file"  {...register("image", { required: "Image is Required" })} className="input p-2 input-bordered w-full" />
                    </div>

                    <input type="submit" className='btn w-full' value="Add Doctor" />
                </form>
            </div >
        </div >
    );
};

export default AddDoctor;