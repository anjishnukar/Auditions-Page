import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { signup } from '@/services/api';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await signup(formData.username, formData.email, formData.password, formData.confirmPassword);
            toast.success('Signup successful');
            navigate('/login');
        } catch (error) {
            toast.error('Signup failed:', error.message);
        }
    };

    return (
        <div className='flex w-full h-fit min-h-screen bg-gray-900 justify-center items-center font-poppins'>
            <div className='w-fit md:w-1/2 flex items-center justify-center lg:w-1/2 pt-4'>
                <InputFields formData={formData} handleChange={handleChange} handleSubmit={handleSubmit} />
            </div>
            <div className='h-full w-0 md:w-1/2 order-2 flex justify-center items-center '>
                <DotLottieReact
                    src="https://lottie.host/d81dfe3b-0b59-4926-a771-25c715afb0be/uGiWnARoEQ.lottie"
                    loop
                    autoplay
                />
            </div>

        </div>
    );
};


export default Signup;

const InputFields = ({ formData, handleChange, handleSubmit }) => {
    return (
        <form onSubmit={handleSubmit} className="text-gray-300 border-gray-700 border bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100p-1 shadow-lg shadow-black rounded-lg p-6 mb-4 w-full max-w-screen md:w-96 mx-auto">
            <h1 className='text-4xl font-semibold'>Welcome</h1>
            <p className='font-medium text-base text-gray-500 mt-1'>Please enter your details.</p>
            <div className='mt-4'>
                <label className='text-lg font-medium'>Username</label>
                <input
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    className="border-b focus:border-violet-500 p-2 w-full rounded bg-transparent outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 accent-violet-500"
                    placeholder='Enter your username'
                />
            </div>
            <div className='mt-4'>
                <label className='text-lg font-medium'>Email</label>
                <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className="border-b focus:border-violet-500 p-2 w-full rounded bg-transparent outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 accent-violet-500"
                    placeholder='Enter your email'
                />
            </div>
            <div className='mt-4'>
                <label className='text-lg font-medium'>Password</label>
                <input
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className="border-b focus:border-violet-500 p-2 w-full rounded bg-transparent outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 accent-violet-500"
                    placeholder='Enter your password'
                    type='password'
                />
            </div>
            <div className='mt-4'>
                <label className='text-lg font-medium'>Re-enter Password</label>
                <input
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className="border-b focus:border-violet-500 p-2 w-full rounded bg-transparent outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 accent-violet-500"
                    placeholder='Enter your password'
                    type='password'
                />
            </div>
            <div className='mt-4 flex flex-col gap-y-4'>
                <button type='submit' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-2 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign up</button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium  text-sm md:text-base'>Already have an account?</p>
                <Link to={"/login"} className='text-violet-500 text-sm md:text-base font-medium ml-2'>Login</Link>
            </div>
        </form>
    );
}

