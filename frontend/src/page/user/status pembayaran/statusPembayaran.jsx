import React from 'react';
import { Navbar } from '../../../component/navbar/navbar';

const StatusPembayaran = () => {
  // Data dummy untuk tabel status pembayaran
  const paymentData = [
    {
      id: 1,
      tryout: 'UTBK 2026 Paket A',
      date: '28 April 2026',
      amount: 'Rp 75.000',
      status: 'Menunggu',
    },
    {
      id: 2,
      tryout: 'UTBK 2026 Paket B',
      date: '15 Maret 2026',
      amount: 'Rp 75.000',
      status: 'Terverifikasi',
    },
    {
      id: 3,
      tryout: 'SNBT 2026 Saintek Intensif',
      date: '10 Februari 2026',
      amount: 'Rp 85.000',
      status: 'Terverifikasi',
    },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans">
      
      {/* Header Section */}
      <header className="bg-[#3240e5] text-white pb-10">
        
        {/* Navbar */}
        <Navbar />

        {/* Sub-header Title */}
        <div className="container mx-auto px-6 mt-4">
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Status Pembayaran</h1>
          <p className="text-sm md:text-base text-blue-100">Verifikasi Status Pembayaran Anda</p>
        </div>
        
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-5xl -mt-6">
        
        {/* Table Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              
              {/* Table Head */}
              <thead>
                <tr className="bg-[#eef2ff]">
                  <th className="py-5 px-6 text-sm font-bold text-[#3240e5] whitespace-nowrap">Tryout</th>
                  <th className="py-5 px-6 text-sm font-bold text-[#3240e5] whitespace-nowrap">Tgl Pembayaran</th>
                  <th className="py-5 px-6 text-sm font-bold text-[#3240e5] whitespace-nowrap">Jumlah</th>
                  <th className="py-5 px-6 text-sm font-bold text-[#3240e5] whitespace-nowrap">Status</th>
                </tr>
              </thead>
              
              {/* Table Body */}
              <tbody className="divide-y divide-gray-100">
                {paymentData.map((row) => (
                  <tr key={row.id} className="hover:bg-gray-50 transition-colors">
                    <td className="py-5 px-6 text-sm font-bold text-gray-900 whitespace-nowrap">
                      {row.tryout}
                    </td>
                    <td className="py-5 px-6 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {row.date}
                    </td>
                    <td className="py-5 px-6 text-sm font-medium text-gray-800 whitespace-nowrap">
                      {row.amount}
                    </td>
                    <td className="py-5 px-6 whitespace-nowrap">
                      <span className={`inline-flex px-3 py-1 text-sm font-semibold rounded-md ${
                        row.status === 'Terverifikasi' 
                          ? 'bg-[#dcfce7] text-[#16a34a]' // Hijau
                          : 'bg-[#ffedd5] text-[#ea580c]' // Oranye
                      }`}>
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
              
            </table>
          </div>
        </div>

        {/* Action Bottom Card */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8">
          <p className="text-gray-800 font-medium mb-5">
            Tryout yang sudah terverifikasi bisa langsung dikerjakan.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Button 1 */}
            <button className="flex items-center justify-center px-6 py-3 bg-[#3a44e5] hover:bg-[#3240e5] text-white rounded-lg font-semibold text-sm transition-colors">
              Mulai UTBK 2026 Paket B
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>

            {/* Button 2 */}
            <button className="flex items-center justify-center px-6 py-3 bg-[#3a44e5] hover:bg-[#3240e5] text-white rounded-lg font-semibold text-sm transition-colors">
              Mulai SNBT 2026 Saintek Intensif
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </button>
          </div>
        </div>

      </main>
    </div>
  );
};

export default StatusPembayaran;