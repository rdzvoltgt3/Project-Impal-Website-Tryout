import React from 'react';
import { Navbar } from '../../../component/navbar/navbar';

const DetailHasilTryout = () => {
  // Data dummy untuk rincian nilai
  const rincianData = [
    { label: 'Jawaban benar', value: '82 soal', valueColor: 'text-green-500' },
    { label: 'Jawaban salah', value: '18 soal', valueColor: 'text-red-500' },
    { label: 'Total soal', value: '100 soal', valueColor: 'text-gray-800' },
    { label: 'Waktu selesai', value: '68 menit', valueColor: 'text-gray-800' },
    { label: 'Tanggal selesai', value: '20 Apr 2026', valueColor: 'text-gray-800' },
  ];

  // Data dummy untuk leaderboard
  const leaderboardData = [
    { rank: 1, initial: 'AF', name: 'Ahmad F.', score: 94, isCurrentUser: false },
    { rank: 2, initial: 'BS', name: 'Budi S.', score: 88, isCurrentUser: false },
    { rank: 3, initial: 'Ku', name: 'Kamu', score: 82, isCurrentUser: true },
    { rank: 4, initial: 'DN', name: 'Dewi N.', score: 78, isCurrentUser: false },
    { rank: 5, initial: 'SR', name: 'Siti R.', score: 74, isCurrentUser: false },
  ];

  return (
    <div className="min-h-screen bg-[#f3f4f6] font-sans">

      {/* Header & Hero Section */}
      <header className="bg-[#3240e5] text-white">

        {/* Navbar */}
        <Navbar />

        {/* Hero Score Center */}
        <div className="container mx-auto px-6 py-10 flex flex-col items-center text-center">
          <p className="text-sm text-blue-100 mb-2 font-medium">
            UTBK 2026 Paket B · 20 Apr 2026
          </p>
          <h1 className="text-7xl font-bold mb-1">
            82
          </h1>
          <p className="text-sm text-blue-100 mb-6">
            dari 100 poin
          </p>
          <div className="bg-white text-[#3240e5] px-5 py-1.5 rounded-full text-sm font-bold shadow-sm">
            Ranking #3
          </div>
        </div>

      </header>

      {/* Main Content: Rincian & Leaderboard */}
      <main className="container mx-auto px-6 py-10 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* Kolom Kiri: Rincian Nilai */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Rincian Nilai</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <ul className="divide-y divide-gray-100">
                {rincianData.map((item, index) => (
                  <li key={index} className="flex justify-between items-center px-6 py-4">
                    <span className="text-sm text-gray-600 font-medium">{item.label}</span>
                    <span className={`text-sm font-semibold ${item.valueColor}`}>
                      {item.value}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Kolom Kanan: Leaderboard */}
          <div>
            <h2 className="text-lg font-bold text-gray-900 mb-4">Leaderboard</h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200">
              <ul className="divide-y divide-gray-100">
                {leaderboardData.map((user, index) => (
                  <li key={index} className="flex items-center px-6 py-4">

                    {/* Rank Number */}
                    <span className="w-6 text-sm font-bold text-gray-900">
                      {user.rank}
                    </span>

                    {/* Avatar */}
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold ml-4 mr-4
                      ${user.isCurrentUser
                        ? 'bg-[#3240e5] text-white'
                        : 'bg-blue-100 text-[#3240e5]'
                      }`}
                    >
                      {user.initial}
                    </div>

                    {/* Name */}
                    <span className="text-sm text-gray-800 font-medium flex-grow">
                      {user.name}
                    </span>

                    {/* Score */}
                    <span className="text-sm font-bold text-[#3240e5]">
                      {user.score}
                    </span>

                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </main>

    </div>
  );
};

export default DetailHasilTryout;