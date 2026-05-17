import React from 'react';
import { Navbar } from '../../component/navbar/navbar';

const LandingPage = () => {

  const directToLogin = () => {
    window.location.href = '/login';
  };

  const directToRegister = () => {
    window.location.href = '/register';
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans">
      
      {/* Header & Hero Section */}
      <div className="bg-[#3240e5] text-white">
        
        {/* Navbar */}
        <Navbar />

        {/* Hero Content */}
        <div className="container mx-auto px-6 pt-16 pb-32 flex flex-col items-center text-center">
          
          {/* Badge */}
          <div className="inline-block px-6 py-2 rounded-full border border-white/30 bg-white/5 mb-8 backdrop-blur-sm text-sm font-semibold tracking-wide">
            Platform Tryout Online Terpercaya
          </div>
          
          {/* Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Persiapkan Dirimu <br className="hidden md:block" />
            untuk Ujian Terbaik
          </h1>
          
          {/* Subheading */}
          <p className="text-lg md:text-xl text-blue-100 mb-10 max-w-2xl">
            Latihan soal berkualitas, hasil real-time, dan analisis mendalam.
          </p>
          
          {/* CTA Button */}
          <button onClick={directToLogin} className="flex items-center px-6 py-3 border border-white/40 rounded-lg hover:bg-white/10 transition group font-medium cursor-pointer">
            Mulai Sekarang
            <svg 
              className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>

      {/* Stats Section (Overlapping) */}
      <div className="container mx-auto px-6 -mt-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          
          {/* Stat Card 1 */}
          <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
            <h3 className="text-4xl font-bold text-[#3240e5] mb-2">1.234</h3>
            <p className="text-gray-400 font-medium text-sm">Peserta Aktif</p>
          </div>
          
          {/* Stat Card 2 */}
          <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
            <h3 className="text-4xl font-bold text-[#3240e5] mb-2">3</h3>
            <p className="text-gray-400 font-medium text-sm">Paket Tryout</p>
          </div>
          
          {/* Stat Card 3 */}
          <div className="bg-white rounded-xl shadow-sm p-8 text-center border border-gray-100">
            <h3 className="text-4xl font-bold text-[#3240e5] mb-2">97%</h3>
            <p className="text-gray-400 font-medium text-sm">Kepuasan</p>
          </div>

        </div>
      </div>

      {/* Tryout Tersedia Section */}
      <div className="container mx-auto px-6 py-20 max-w-5xl">
        
        {/* Section Header */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold text-gray-900">Tryout Tersedia</h2>
          <a href="#" className="flex items-center text-[#3240e5] font-medium hover:underline text-sm">
            Lihat Semua
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </a>
        </div>

        {/* Tryout Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Tryout Card 1 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 flex flex-col">
            <div className="bg-[#3a44e5] p-6 text-white">
              <div className="text-xs text-blue-200 mb-2 uppercase tracking-wide">UTBK / SNBT</div>
              <h3 className="text-lg font-bold mb-1">UTBK 2026 Paket A</h3>
              <div className="text-xs text-blue-200">15 Mei 2026</div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 text-sm font-medium">120 Soal</span>
                <span className="text-[#3240e5] font-bold">Rp 75.000</span>
              </div>
              <button onClick={directToRegister} className="w-full py-2.5 mt-auto rounded-lg border border-gray-300 text-gray-800 font-semibold text-sm hover:bg-gray-50 transition cursor-pointer">
                Daftar
              </button>
            </div>
          </div>

          {/* Tryout Card 2 */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-200 flex flex-col">
            <div className="bg-[#3a44e5] p-6 text-white">
              <div className="text-xs text-blue-200 mb-2 uppercase tracking-wide">UTBK / SNBT</div>
              <h3 className="text-lg font-bold mb-1">UTBK 2026 Paket B</h3>
              <div className="text-xs text-blue-200">15 Mei 2026</div>
            </div>
            <div className="p-6 flex flex-col flex-grow bg-white">
              <div className="flex justify-between items-center mb-6">
                <span className="text-gray-600 text-sm font-medium">120 Soal</span>
                <span className="text-[#3240e5] font-bold">Rp 75.000</span>
              </div>
              <button onClick={directToRegister} className="w-full py-2.5 mt-auto rounded-lg border border-gray-300 text-gray-800 font-semibold text-sm hover:bg-gray-50 transition cursor-pointer">
                Daftar
              </button>
            </div>
          </div>

        </div>
      </div>
      
    </div>
  );
};

export default LandingPage;