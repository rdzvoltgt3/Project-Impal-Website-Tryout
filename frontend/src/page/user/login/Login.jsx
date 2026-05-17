import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import api from "../../../lib/axios";
import { useState } from 'react';
import { useLogin } from '../../../api/useLogin';
import { Navbar } from '../../../component/navbar/navbar';

const Login = () => {
    const navigate = useNavigate();

    const [user, setUser] = useState({ email: '', password: '' });

    const [errors, setErrors] = useState({});

    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const { mutate, isPending } = useLogin({
        onSuccess: async (data) => {
            console.log(data);
            navigate('/dashboard');
        },
        onError: (error) => {
            const errorMessage = error.response?.data?.error;
            alert(errorMessage);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!user.email) {
            setErrors({ ...errors, email: "Email wajib diisi !" });
            return;
        }
        if (!user.password) {
            setErrors({ ...errors, password: "Password wajib diisi !" });
            return;
        }

        mutate(user);
    };

    const directToRegister = () => {
        navigate('/register');
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Navbar */}
            <Navbar />

            {/* Main Content */}
            <main className="flex justify-center items-start pt-20 px-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">
                    {/* Card Header */}
                    <div className="bg-[#3b41e3] p-6 text-white">
                        <h2 className="text-xl font-semibold">Buat Akun</h2>
                        <p className="text-sm opacity-90 mt-1">Daftar Gratis, mulai berlatih</p>
                    </div>
                    {/* Form Section */}
                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Full Name Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-800">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    value={user.email}
                                    placeholder="masukan email anda"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 transition"
                                />
                                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    value={user.password}
                                    placeholder="kombinasi huruf, angka, dan karakter khusus"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 transition"
                                />
                                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password}</p>}
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#3b41e3] text-white font-bold py-3 rounded-lg hover:bg-[#2f34b8] transition-colors duration-200 mt-2 shadow-md cursor-pointer"
                            >
                                Masuk
                            </button>

                            {/* Footer Link */}
                            <div className="text-center pt-4">
                                <p className="text-sm text-gray-400">
                                    Belum punya akun?{' '}
                                    <a onClick={directToRegister} href="#" className="text-[#3b41e3] font-medium hover:underline" >
                                        Daftar
                                    </a>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Login;