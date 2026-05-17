import React from 'react';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useRegister } from '../../../api/useRegister';
import { Navbar } from '../../../component/navbar/navbar';

const Register = () => {
    const navigate = useNavigate();

    // State untuk data user
    const [user, setUser] = useState({
        name: '',
        email: '',
        phone: '',
        password: ''
    });

    const [errors, setErrors] = useState({});

    // Handler untuk perubahan input
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });

        if (errors[name]) {
            setErrors({ ...errors, [name]: null });
        }
    };

    const { mutate, isPending } = useRegister({
        onSuccess: async (data) => {
            console.log("Form disubmit!", user);
            navigate('/login');
        },
        onError: (error) => {
            const errorMessage = error.response.data.message;
            console.log(errorMessage);
            alert(errorMessage);
        }
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        let tempErrors = {};
        if (!user.name) tempErrors.name = "Nama lengkap wajib diisi";
        if (user.name.length < 3) tempErrors.name = "Nama lengkap minimal 3 karakter";
        if (!user.email) tempErrors.email = "Email wajib diisi";
        if (!user.phone) tempErrors.phone = "Nomor telepon wajib diisi";
        if (user.phone.length < 10) tempErrors.phone = "Nomor telepon minimal 10 angka";
        if (user.phone.length > 15) tempErrors.phone = "Nomor telepon maksimal 15 angka";
        if (user.phone[0] !== '0') tempErrors.phone = "Nomor telepon harus dimulai dengan angka 0";
        if (!/^\d+$/.test(user.phone)) tempErrors.phone = "Nomor telepon harus berupa angka";
        if (!user.password) tempErrors.password = "Password wajib diisi";
        if (user.password.length < 8) tempErrors.password = "Password minimal 8 karakter";

        if (Object.keys(tempErrors).length > 0) {
            setErrors(tempErrors);
            return;
        }

        mutate(user);

    };

    return (
        <div className="min-h-screen bg-gray-100 font-sans">
            {/* Navbar */}
            <Navbar />

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
                                    name="name"
                                    type="text"
                                    value={user.name}
                                    onChange={handleChange}
                                    placeholder="masukan nama anda"
                                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] text-sm transition ${errors.name ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.name && <p className="text-xs text-red-500">{errors.name}</p>}
                            </div>

                            {/* Email */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-bold text-gray-800">Email</label>
                                <input
                                    name="email"
                                    type="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    placeholder="nama@email.com"
                                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] text-sm transition ${errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.email && <p className="text-xs text-red-500">{errors.email}</p>}
                            </div>

                            {/* Nomor Telepon */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-bold text-gray-800">Nomor telepon</label>
                                <input
                                    name="phone"
                                    type="text"
                                    value={user.phone}
                                    onChange={handleChange}
                                    placeholder="08xx......"
                                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] text-sm transition ${errors.phone ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.phone && <p className="text-xs text-red-500">{errors.phone}</p>}
                            </div>

                            {/* Password */}
                            <div className="space-y-1.5">
                                <label className="block text-sm font-bold text-gray-800">Password</label>
                                <input
                                    name="password"
                                    type="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    placeholder="kombinasi huruf, angka, dan karakter"
                                    className={`w-full px-4 py-2.5 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3b41e3] text-sm transition ${errors.password ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                />
                                {errors.password && <p className="text-xs text-red-500">{errors.password}</p>}
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-[#3b41e3] text-white font-bold py-3 rounded-lg hover:bg-[#2f34b8] transition-colors mt-4 shadow-sm cursor-pointer"
                            >
                                Daftar Sekarang
                            </button>

                            {/* Footer Link */}
                            <div className="text-center pt-2">
                                <p className="text-sm text-gray-400">
                                    Sudah punya akun?{' '}
                                    <Link to="/login" className="text-[#3b41e3] font-medium hover:underline">
                                        Masuk
                                    </Link>
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