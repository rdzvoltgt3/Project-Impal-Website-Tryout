import React from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import api from "../../../lib/axios";

const Login = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        navigate('/dashboard');
    };
    
    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Navbar */}
            <nav className="bg-[#3b41e3] px-6 py-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-bold tracking-tight">TryoutKu</h1>
                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:text-gray-200 transition">Beranda</a>
                        <a href="#" className="hover:text-gray-200 transition">Status Pembayaran</a>
                        <a href="#" className="hover:text-gray-200 transition">Hasil Tryout</a>
                    </div>
                </div>
                <div className="flex gap-4">
                    <button className="px-6 py-2 border border-white/40 rounded-lg hover:bg-white/10 transition text-sm font-semibold">
                        Masuk
                    </button>
                    <button className="px-6 py-2 border border-white/40 rounded-lg hover:bg-white/10 transition text-sm font-semibold">
                        Daftar
                    </button>
                </div>
            </nav>

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
                                    Nama lengkap
                                </label>
                                <input
                                    type="text"
                                    placeholder="masukan nama anda"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 transition"
                                />
                            </div>

                            {/* Password Input */}
                            <div className="space-y-2">
                                <label className="block text-sm font-bold text-gray-800">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    placeholder="kombinasi huruf, angka, dan karakter khusus"
                                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-300 transition"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full bg-[#3b41e3] text-white font-bold py-3 rounded-lg hover:bg-[#2f34b8] transition-colors duration-200 mt-2 shadow-md"
                            >
                                Masuk
                            </button>

                            {/* Footer Link */}
                            <div className="text-center pt-4">
                                <p className="text-sm text-gray-400">
                                    Belum punya akun?{' '}
                                    <a href="#" className="text-[#3b41e3] font-medium hover:underline">
                                        <Link to="/register">
                                            Daftar disini
                                        </Link>
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