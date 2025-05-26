import React from "react";
import Layout from "../components/Layout";

export default function About() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-amber-900 text-white">
        <div className="container mx-auto py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Tentang Aroma Sriwijaya</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Membawa keajaiban kopi Indonesia ke pasar global dengan kualitas tanpa kompromi dan keberlanjutan sebagai fondasi.
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="w-full md:w-1/2">
              <img src="/kopi.jpg" alt="Sejarah Aroma Sriwijaya" className="rounded-lg shadow-xl"/>
            </div>
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-900 mb-6">Cerita Kami</h2>
              <p className="text-gray-700 mb-6">
                Aroma Sriwijaya didirikan pada tahun 2015 oleh sekelompok pecinta kopi yang percaya bahwa kopi Indonesia layak mendapatkan pengakuan global.
              </p>
              <p className="text-gray-700 mb-6">
                Selama bertahun-tahun, kami telah menjalin kemitraan dengan ratusan petani kopi dari berbagai daerah di Indonesia seperti Toraja, Flores, Bali, dan Jawa.
              </p>
              <p className="text-gray-700">
                Bisnis yang bergerak dalam pengolahan dan ekspor biji kopi arabika dan robusta pilihan dari
                berbagai daerah di Indonesia. Mereka bekerja sama langsung dengan petani lokal untuk
                menjaga kualitas dan otentisitas dari kopi yang mereka ekspor
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Additional about page sections would go here */}
    </Layout>
  );
}