import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Tentang Aroma Sriwijaya</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami adalah eksportir kopi premium yang bermitra langsung dengan petani lokal untuk menjaga kualitas dan keaslian kopi Indonesia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <div className="text-amber-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Sumber Terbaik</h3>
            <p className="text-gray-600">
              Kami mendapatkan kopi dari daerah-daerah penghasil kopi terbaik di Indonesia, termasuk Aceh, Toraja, dan Flores.
            </p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <div className="text-amber-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Kualitas Premium</h3>
            <p className="text-gray-600">
              Setiap biji kopi melewati proses seleksi ketat untuk memastikan hanya biji terbaik yang sampai ke pelanggan kami.
            </p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <div className="text-amber-800 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-amber-900 mb-2">Ekspor Global</h3>
            <p className="text-gray-600">
              Kami melayani permintaan dari berbagai negara di dunia dengan jaminan pengiriman aman dan tepat waktu.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}