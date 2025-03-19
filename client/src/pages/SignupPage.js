import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { BounceLoader } from 'react-spinners';
import { signup, reset } from '../features/auth/authSlice';
import { FaUserPlus } from 'react-icons/fa';

const SignupPage = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });

    const { firstName, lastName, email, password, confirmPassword } = formData;
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { isLoading, isError, isSuccess, message } = useSelector((state) => state.auth);

    // Memoized dispatch function to prevent infinite loops
    const resetState = useCallback(() => {
        dispatch(reset());
    }, [dispatch]);

    useEffect(() => {
        if (isError) {
            toast.error(message);
        }
        if (isSuccess) {
            toast.success("Signup successful! Please check your email to activate your account.");
            navigate('/login');
        }
        return () => resetState(); // Cleanup effect to reset state
    }, [isError, isSuccess, message, navigate, resetState]);

    const onChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if (password !== confirmPassword) {
            toast.error("Passwords do not match.");
            return;
        }
        dispatch(signup(formData));
    };

    if (isLoading) {
        return <div className='grid h-screen place-items-center'><BounceLoader color='#ff0000' /></div>;
    }

    return (
        <div className='min-h-screen flex items-center justify-center text-white m-6'>
            <div className='flex flex-col-reverse bg-[#FF4949] rounded-2xl max-w-5xl shadow-lg p-5 md:flex-row md:p-10'>
                <div className='flex-col items-center w-full md:w-1/2 md:pr-8'>
                    <h1 className='text-lg mb-2 text-center'>Sign Up</h1>
                    <form onSubmit={onSubmit} className='flex flex-col text-gray-800 mt-4'>
                        <input className='p-3 mb-3 rounded-md' type='text' name='firstName' value={firstName} onChange={onChange} placeholder='First Name' required />
                        <input className='p-3 mb-3 rounded-md' type='text' name='lastName' value={lastName} onChange={onChange} placeholder='Last Name' required />
                        <input className='p-3 mb-3 rounded-md' type='email' name='email' value={email} onChange={onChange} placeholder='Email' required />
                        <input className='p-3 mb-3 rounded-md' type='password' name='password' value={password} onChange={onChange} placeholder='Password' required />
                        <input className='p-3 mb-3 rounded-md' type='password' name='confirmPassword' value={confirmPassword} onChange={onChange} placeholder='Confirm Password' required />
                        <button className='bg-red-800 text-white py-2 rounded-md hover:bg-red-600' type='submit'>Sign Up</button>
                    </form>
                    <p className='mt-4 text-xs text-center'>Already have an account? <a href='/login' className='underline'>Login</a></p>
                </div>
                <div className='m-auto w-full bg-red-800 p-10 mb-5 rounded-2xl md:w-1/2 flex justify-center items-center'>
                    <FaUserPlus size={80} color='white' />
                </div>
            </div>
        </div>
    );
};

export default SignupPage;
