import React from 'react';
import { useQuery } from 'react-query';

const ManageDoctor = () => {
    const { data: doctors, isLoading } = useQuery({
        queryKey: ['doctors'],
        queryFn: async () => {
            try {
                const res = await fetch(`http://localhost:5000/doctors`, {
                    headers: {
                        authorization: `bearer ${localStorage.getItem('accessToken')}`
                    }
                })
                const result = res.json();
                return result;
            }
            catch (error) {

            }
        }
    });
    if (isLoading) {
        return <div>Loading..</div>
    }

    return (
        <div>
            <h1 className='text-3xl font-thin mb-4'>Manage Doctors {doctors?.length}</h1>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Specialty</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            doctors.map((doctor, i) => <tr key={doctor._id}>
                                <th>{i + 1}</th>
                                <td>
                                    <div className="avatar">
                                        <div className="w-24 rounded-full">
                                            <img src={doctor.image} alt="Avatar" />
                                        </div>
                                    </div>
                                </td>
                                <td>{doctor.name}</td>
                                <td>{doctor.email}</td>
                                <td>{doctor.specialty}</td>
                                <td><button className='btn btn-error btn-xs'>Delete</button></td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div >
    );
};

export default ManageDoctor;