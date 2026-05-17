import React from 'react';
import { Navbar } from '../../../component/navbar/navbar';

const Dashboard = () => {
  const tryoutPackages = [
    {
      type: 'UTBK / SNBT',
      title: 'UTBK 2026 Paket A',
      date: '15 Mei 2025',
      details: '120 soal · 90 menit',
      description: 'Saintek & Soshum terintegrasi',
      price: 'Rp 75.000'
    },
    {
      type: 'UTBK / SNBT',
      title: 'UTBK 2026 Paket B',
      date: '22 Mei 2025',
      details: '120 soal · 90 menit',
      description: 'Saintek & Soshum terintegrasi',
      price: 'Rp 75.000'
    },
    {
      type: 'SNBT',
      title: 'SBNT 2026 Paket Intensif',
      date: '28 Mei 2025',
      details: '100 soal · 75 menit',
      description: 'Fokus Matematika, Fisika, Kimia, Biologi',
      price: 'Rp 85.000'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-100 font-sans">
      {/* Header Section */}
      <header className="bg-[#3240e5] text-white">
        {/* Navbar */}
        <Navbar />

        {/* Sub-header Title */}
        <div className="container mx-auto px-6 py-8">
          <p className="text-sm text-blue-200 mb-1">Halo, Budi!</p>
          <h1 className="text-3xl md:text-4xl font-bold">Pilih Paket Tryout</h1>
        </div>

      </header>

      {/* Main Content: List Paket Tryout */}
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <div className="flex flex-col space-y-6">

          {tryoutPackages.map((pkg, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden flex flex-col md:flex-row"
            >

              {/* Left Side: Blue Information Card */}
              <div className="bg-[#3a44e5] text-white p-6 md:w-64 flex-shrink-0 flex flex-col justify-center">
                <span className="text-xs text-blue-200 mb-1 uppercase tracking-wider font-medium">
                  {pkg.type}
                </span>
                <h3 className="text-xl font-bold mb-1">
                  {pkg.title}
                </h3>
                <span className="text-sm text-blue-200">
                  {pkg.date}
                </span>
              </div>

              {/* Right Side: Details & Action */}
              <div className="p-6 flex-grow flex flex-col justify-between">

                {/* Detail Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start mb-6">
                  <div className="mb-4 sm:mb-0">
                    <p className="text-sm font-medium text-gray-800">
                      {pkg.details}
                    </p>
                    <p className="text-sm text-gray-500 mt-1">
                      {pkg.description}
                    </p>
                  </div>
                  <div className="text-lg font-bold text-[#3240e5]">
                    {pkg.price}
                  </div>
                </div>

                {/* Button Action */}
                <button className="w-full py-2.5 rounded-lg border border-gray-300 text-gray-800 font-semibold text-sm hover:bg-gray-50 hover:border-gray-400 transition-colors">
                  Lihat Detail
                </button>

              </div>
            </div>
          ))}

        </div>
      </main>

    </div>
  );
};

export default Dashboard;