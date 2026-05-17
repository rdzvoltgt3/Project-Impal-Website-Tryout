import React from 'react';
import { Navbar } from '../../component/navbar/navbar';

const HasilTryout = () => {
  // Data dummy untuk riwayat hasil tryout
  const tryoutResults = [
    {
      id: 1,
      title: 'UTBK 2026 Paket A',
      date: '20 Apr 2026',
      questions: '120 soal',
      score: 82,
      rank: 3,
    },
    {
      id: 2,
      title: 'SNBT Saintek Intensif',
      date: '10 Apr 2026',
      questions: '100 soal',
      score: 76,
      rank: 7,
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
          <h1 className="text-2xl md:text-3xl font-bold mb-1">Hasil Tryout Saya</h1>
          <p className="text-sm md:text-base text-blue-100">Riwayat Tryout Yang Telah Dikerjakan</p>
        </div>

      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 py-8 max-w-5xl -mt-4">

        <div className="flex flex-col space-y-4 md:space-y-6">
          {tryoutResults.map((result) => (
            <div
              key={result.id}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 md:p-8 flex justify-between items-center hover:shadow-md transition-shadow"
            >

              {/* Left Side: Tryout Info */}
              <div>
                <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">
                  {result.title}
                </h3>
                <p className="text-sm text-gray-400 font-medium">
                  {result.date} · {result.questions}
                </p>
              </div>

              {/* Right Side: Score & Rank */}
              <div className="text-right">
                <div className="text-4xl md:text-5xl font-bold text-[#3240e5] leading-none mb-1">
                  {result.score}
                </div>
                <div className="text-sm font-medium text-[#3240e5]">
                  Ranking #{result.rank}
                </div>
              </div>

            </div>
          ))}
        </div>

      </main>
    </div>
  );
};

export default HasilTryout;