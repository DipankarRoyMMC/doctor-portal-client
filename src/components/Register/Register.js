import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Register = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const handleRegister = (data) => {
        console.log(data)
        reset();
    }

    return (
        <section>
            <h2 className='text-3xl font-bold text-gray-600 leading-2 text-center mb-3'>Register Here</h2>

            <div className='w-96 p-7 rounded mx-auto flex justify-center drop-shadow-lg shadow-lg'>
                <form onSubmit={handleSubmit(handleRegister)} className='space-y-1 w-full' >
                    <label className='label-text' htmlFor="name">
                        <span className="label-text">Full Name</span>
                    </label>
                    <input {...register("name", { required: "Requird Name Field" })} type="text" className="input input-bordered w-full" />
                    <p className='text-red-600'>{errors.name && errors.name.message}</p>

                    <label className='label-text' htmlFor="email">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Email is Required" })}
                        type="email" className="input input-bordered w-full" />
                    <p className='text-red-600'>{errors.email && errors.email.message}</p>

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: true, minLength: {
                            value: 6,
                            message: "Password min 6 character"
                        },
                        pattern: {
                            value: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/,
                            message: "Password must be strength"
                        }
                    })} type="password" className="input input-bordered w-full" />
                    <p className='text-red-600'>{errors.password && errors.password.message}</p>

                    <label className="label">
                        <span className="label-text-alt">Forgot password?</span>
                    </label>
                    <input type="submit" className='btn w-full' value="Register" />

                    <div>
                        <p className='text-sm my-3'>Already Have an Account? <Link to='/login' className='text-secondary '>Please Login</Link></p>
                        <div className="divider my-3">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </form>
            </div>
        </section >
    );
};

export default Register;