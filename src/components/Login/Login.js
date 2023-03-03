import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthProvider';

const Login = () => {
    const { register, formState: { errors }, handleSubmit, reset } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";


    const handleLogin = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(error => {
                setLoginError(error.message)
            })

        reset();
    }

    return (
        <section>
            <h2 className='text-3xl font-bold text-gray-600 leading-2 text-center mb-3'>Login Here</h2>

            <div className='w-96 p-7 rounded mx-auto flex justify-center drop-shadow-lg shadow-lg'>
                <form className='space-y-1 w-full' onSubmit={handleSubmit(handleLogin)}>
                    <label className='label-text' htmlFor="email">
                        <span className="label-text">Email</span>
                    </label>
                    <input {...register("email", { required: "Required this field" })}
                        type="email" className="input input-bordered w-full" />
                    <p className='text-red-600'>{errors.email && errors.email.message}</p>

                    <label className="label">
                        <span className="label-text">Password</span>
                    </label>
                    <input {...register("password", {
                        required: true, minLength: {
                            value: 6, message: "Password min 6 character"
                        }
                    })} type="password" className="input input-bordered w-full" />
                    <p className='text-red-600'>{errors.password && errors.password.message}</p>

                    <label className="label">
                        <span className="label-text-alt">Forgot password?</span>
                    </label>
                    <input type="submit" className='btn w-full' value="Login" />
                    {loginError && <p className='text-red-600'>{loginError}</p>}

                    <div>
                        <p className='text-sm my-3'>New to Doctor portal? <Link to='/register' className='text-secondary '>Create new account</Link></p>
                        <div className="divider my-3">OR</div>
                        <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
                    </div>
                </form>
            </div>
        </section >
    );
};

export default Login;