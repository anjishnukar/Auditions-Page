import React, { useState } from 'react';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { signup } from '@/services/api';
import { useNavigate } from 'react-router-dom';
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
        <div className='flex w-full h-fit min-h-screen bg-gray-900 justify-center items-center'>
            <div className='w-fit md:w-1/2 flex items-center justify-center lg:w-1/2'>
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
        <form onSubmit={handleSubmit} className='text-white bg-gray-300 px-10 py-5 rounded-3xl border-2 border-gray-200 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1'>
            <h1 className='text-5xl font-semibold'>Welcome</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details.</p>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Username</label>
                <input
                    name='username'
                    value={formData.username}
                    onChange={handleChange}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your username'
                />
            </div>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Email</label>
                <input
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your email'
                />
            </div>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Password</label>
                <input
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your password'
                    type='password'
                />
            </div>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Re-enter Password</label>
                <input
                    name='confirmPassword'
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    className='w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                    placeholder='Enter your password'
                    type='password'
                />
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button type='submit' className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold'>Sign up</button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium  text-sm md:text-base'>Already have an account?</p>
                <button className='text-violet-500 text-sm md:text-base font-medium ml-2'>Login</button>
            </div>
        </form>
    );
}

