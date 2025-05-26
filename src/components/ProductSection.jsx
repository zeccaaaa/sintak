import React from "react";

export default function ProductSection() {
  return (
    <section className="py-20 bg-amber-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Produk Unggulan</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Kami menyediakan berbagai jenis kopi premium dari berbagai daerah di Indonesia yang siap diekspor ke seluruh dunia.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/kopi arabika gayo.jpg" alt="Kopi Arabika" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Arabika Gayo</h3>
              <p className="text-gray-600 mb-4">
                Kopi arabika dari dataran tinggi Gayo, Aceh dengan cita rasa fruity dan keasaman yang seimbang.
              </p>
              <button className="text-amber-800 font-medium hover:text-amber-900">
                Selengkapnya →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/kopi robusta lampung.jpg" alt="Kopi Robusta" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Robusta Lampung</h3>
              <p className="text-gray-600 mb-4">
                Kopi robusta kualitas ekspor dari Lampung dengan body tebal dan rasa coklat yang kuat.
              </p>
              <button className="text-amber-800 font-medium hover:text-amber-900">
                Selengkapnya →
              </button>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src="/kopi toraja sapan.jpg" alt="Kopi Specialty" className="w-full h-64 object-cover"/>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-amber-900 mb-2">Toraja Sapan</h3>
              <p className="text-gray-600 mb-4">
                Kopi specialty dari Toraja dengan aroma kompleks dan rasa yang unik.
              </p>
              <button className="text-amber-800 font-medium hover:text-amber-900">
                Selengkapnya →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}