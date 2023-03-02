import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Login = () => {
    const { register, handleSubmit } = useForm();
    const handleLogin = (data) => {
        console.log(data);

    }


    return (
        <section>
            <h2 className='text-3xl font-bold text-gray-600 leading-2 text-center mb-3'>Login Here</h2>

            <div className='w-96 p-7 border rounded mx-auto flex justify-center text-center drop-shadow-lg'>
                <form className='space-y-1 w-full' onSubmit={handleSubmit(handleLogin)}>
                    <label className="label">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email")} name='email' type="email" className="input input-bordered w-full" />

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password")} name='password' type="password" className="input input-bordered w-full" />
                    <label className="label">
                        <span className="label-text-alt">Forgot password?</span>
                    </label>
                    <input type="submit" className='btn w-full' value="Login" />
                    <div>
                        <p className='text-sm my-3'>New to Doctor portal? <Link to='/register' className='text-secondary '>Create new account</Link></p>
                        <div className="divider my-3">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </form>

            </div>
        </section>
    );
};

export default Login;