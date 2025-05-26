import React from "react";

export default function TestimoniSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Kata Pelanggan Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Dengarkan pengalaman pelanggan yang telah bermitra dengan Aroma Sriwijaya.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/person1.jpeg" alt="Client" className="w-12 h-12 rounded-full mr-4"/>
              <div>
                <h4 className="font-semibold text-amber-900">Hiroshi Tanaka</h4>
                <p className="text-sm text-gray-600">Roastery, Jepang</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Biji kopi dari Aroma Sriwijaya memiliki kualitas yang konsisten dan selalu tiba tepat waktu. Pelayanan yang profesional membuat kami nyaman bermitra."
            </p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/person2.jpeg" alt="Client" className="w-12 h-12 rounded-full mr-4"/>
              <div>
                <h4 className="font-semibold text-amber-900">Emma Wilson</h4>
                <p className="text-sm text-gray-600">Coffee Importer, USA</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Kami sangat menghargai transparansi dan praktik etis yang diterapkan Aroma Sriwijaya. Kualitas kopi mereka luar biasa!"
            </p>
          </div>
          
          <div className="bg-amber-50 p-6 rounded-lg shadow-md">
            <div className="flex items-center mb-4">
              <img src="/person3.jpeg" alt="Client" className="w-12 h-12 rounded-full mr-4"/>
              <div>
                <h4 className="font-semibold text-amber-900">Marco Bianchi</h4>
                <p className="text-sm text-gray-600">Coffee Shop Chain, Italia</p>
              </div>
            </div>
            <p className="text-gray-700 italic">
              "Aroma yang khas dan rasa yang unik dari kopi Indonesia yang dipasok oleh Aroma Sriwijaya membuat pelanggan kami selalu kembali."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}