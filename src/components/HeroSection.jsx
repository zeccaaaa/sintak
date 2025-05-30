import React from "react";

export default function HeroSection() {
  return (
    <section className="bg-amber-50">
      <div className="container mx-auto flex flex-col md:flex-row min-h-screen items-center py-12">
        <div className="w-full md:w-1/2 px-6 md:pr-12">
          <h1 className="text-4xl md:text-5xl font-bold text-amber-900 mb-6">Kopi Premium Indonesia untuk Pasar Global</h1>
          <p className="text-lg mb-8 text-gray-700">
            Aroma Sriwijaya menyediakan biji kopi arabika dan robusta terbaik langsung dari petani lokal Indonesia untuk memenuhi kebutuhan pasar internasional.
          </p>
          <div className="flex space-x-4">
            <button className="bg-amber-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-amber-900 transition">
              Produk Kami
            </button>
            <button className="border-2 border-amber-800 text-amber-800 px-6 py-3 rounded-lg font-medium hover:bg-amber-100 transition">
              Hubungi Kami
            </button>
          </div>
        </div>
        <div className="w-full md:w-1/2 px-5 mt-12 md:mt-0">
          <img 
            src="/LOVE MORE COFEE.jpg"
            alt="Biji Kopi Premium Indonesia" 
            className="rounded-lg shadow-xl"
          />
        </div>
      </div>
    </section>
  );
}