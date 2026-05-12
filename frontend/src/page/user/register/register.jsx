import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        // Tambahkan logika pendaftaran Anda di sini
        console.log("Form disubmit!");
        navigate('/home'); // Contoh navigasi setelah submit
    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Navbar */}
            <nav className="bg-[#3b41e3] px-6 py-4 flex items-center justify-between text-white">
                <div className="flex items-center gap-8">
                    <h1 className="text-2xl font-bold tracking-tight">TryoutKu</h1>
                    <div className="hidden md:flex gap-6 text-sm font-medium">
                        <a href="#" className="hover:opacity-80">Beranda</a>
                        <a href="#" className="hover:opacity-80">Status Pembayaran</a>
                        <a href="#" className="hover:opacity-80">Hasil Tryout</a>
                    </div>
                </div>
                <div className="flex gap-3">
                    <button className="px-6 py-2 border border-white/40 rounded-lg text-sm font-semibold hover:bg-white/10 transition">
                        Masuk
                    </button>
                    <button className="px-6 py-2 border border-white/40 rounded-lg text-sm font-semibold hover:bg-white/10 transition">
                        Daftar
                    </button>
                </div>
            </nav>

            {/* Container Kartu */}
            <main className="flex justify-center items-start pt-12 pb-12 px-4">
                <div className="w-full max-w-md bg-white rounded-xl shadow-lg overflow-hidden">

                    {/* Header Biru */}
                    <div className="bg-[#3b41e3] p-6 text-white text-left">
                        <h2 className="text-xl font-semibold">Buat Akun</h2>
                        <p className="text-sm opacity-90 mt-1">Daftar Gratis, mulai berlatih</p>
                    </div>

                    {/* Form Utama */}
                    <div className="p-8">
                        <form onSubmit={handleSubmit} className="space-y-4">

                            {/* Nama Lengkap */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-bold text-gray-800">Nama lengkap</label>
                                <input
                                    type="text"
                                    placeholder="masukan nama anda"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] focus:border-transparent placeholder-gray-300 text-sm transition"
                                />
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-bold text-gray-800">Email</label>
                                <input
                                    type="email"
                                    placeholder="nama@email.com"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] focus:border-transparent placeholder-gray-300 text-sm transition"
                                />
                            </div>

                            {/* Nomor Telepon */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-bold text-gray-800">Nomor telepon</label>
                                <input
                                    type="tel"
                                    placeholder="08xx......"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] focus:border-transparent placeholder-gray-300 text-sm transition"
                                />
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-bold text-gray-800">Password</label>
                                <input
                                    type="password"
                                    placeholder="kombinasi huruf, angka, dan karakter khusus"
                                    className="w-full px-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] focus:border-transparent placeholder-gray-300 text-sm transition"
                                />
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#3b41e3] text-white font-bold py-3 rounded-lg hover:bg-[#2f34b8] transition-colors mt-4 shadow-sm"
                            >
                                Daftar Sekarang
                            </button>

                            {/* Footer Link */}
                            <div className="text-center pt-2">
                                <p className="text-sm text-gray-400">
                                    Sudah punya akun?{' '}
                                    <button
                                        type="button"
                                        onClick={() => navigate('/login')}
                                        className="text-[#3b41e3] font-medium hover:underline focus:outline-none"
                                    >
                                        <Link to="/login">
                                            Masuk
                                        </Link>
                                    </button>
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Register;