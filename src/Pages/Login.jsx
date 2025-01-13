import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { login } from '@/services/api';
import { jwtDecode } from 'jwt-decode';

const Login = () => {
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            setIsLoading(true);
            const data = await login(username, password);
            localStorage.setItem('accessToken', data.access);
            localStorage.setItem('refreshToken', data.refresh);
            toast.success(`User ${username} logged in successful`);
            if (jwtDecode(data.access).is_club_member) {
                navigate('/admin');
            } else {
                navigate('/quiz');
            }
        } catch (error) {
            toast.error("Invalid username or password");
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className='flex w-full h-fit min-h-screen bg-gray-900 justify-center items-center'>
            <div className='w-fit md:w-1/2 flex items-center justify-center lg:w-1/2'>
                <InputFields setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin} isLoading={isLoading} />
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


export default Login;

const InputFields = ({ setUsername, setPassword, handleLogin, isLoading = false }) => {
    return (
        <div className="text-gray-300 border-gray-700 border bg-gray-800/50 bg-clip-padding backdrop-filter backdrop-blur-sm border-gray-100p-1 shadow-lg shadow-black rounded-lg p-6 mb-4 w-full max-w-screen md:w-96 mx-auto">
            <h1 className='text-5xl font-semibold'>Welcome</h1>
            <p className='font-medium text-lg text-gray-500 mt-4'>Please enter your details.</p>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Username</label>
                <input
                    className="border-b focus:border-violet-500 p-2 w-full rounded bg-transparent outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 accent-violet-500"
                    placeholder='Enter your username'
                    onChange={(e) => setUsername(e.target.value)}
                />
            </div>
            <div className='mt-8'>
                <label className='text-lg font-medium'>Password</label>
                <input
                    className="border-b focus:border-violet-500 p-2 w-full rounded bg-transparent outline-none bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10 border-gray-100p-1 accent-violet-500"
                    placeholder='Enter your password'
                    type='password'
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='mt-8 flex flex-col gap-y-4'>
                <button className='active:scale-[.98] active:duration-75 hover:scale-[1.01] ease-in-out transition-all py-3 rounded-xl bg-violet-500 text-white text-lg font-bold' onClick={handleLogin} >
                    {isLoading ? (
                        <div className="flex justify-center items-center space-x-2">
                            <div className="border-t-4 border-b-4 border-transparent border-l-4 border-l-white w-6 h-6 rounded-full animate-spin mx-4"></div>
                        </div>
                        ) : "Sign in"}
                </button>
            </div>
            <div className='mt-8 flex justify-center items-center'>
                <p className='font-medium  text-sm md:text-base'>Don't have an account?</p>
                <Link className='text-violet-500 text-sm md:text-base font-medium ml-2' to={"/signup"}>Sign up</Link>
            </div>
        </div>
    );
}

