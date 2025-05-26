import React from "react";
import Layout from "../components/Layout";

export default function Contact() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-amber-900 text-white">
        <div className="container mx-auto py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Hubungi Kami</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Kami siap membantu Anda dengan pertanyaan, permintaan penawaran, atau informasi lebih lanjut tentang produk kopi kami.
          </p>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12">
            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Kirim Pesan</h2>
              <form className="space-y-6">
                {/* Form inputs */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="name">Nama</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                      placeholder="Nama Lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2" htmlFor="company">Perusahaan</label>
                    <input
                      type="text"
                      id="company"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                      placeholder="Nama Perusahaan"
                    />
                  </div>
                </div>
                
                {/* Additional form fields and button */}
                <button
                  type="submit"
                  className="bg-amber-800 text-white px-8 py-3 rounded-md hover:bg-amber-900 transition"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="text-3xl font-bold text-amber-900 mb-8">Informasi Kontak</h2>
              <p className="text-gray-900 mb-3">info@aromasriwijaya.com</p>
              <p className="text-gray-900 mb-3">+62 711 123456</p>
              <p className="text-gray-900">+62 812 3456 7890</p>
              {/* Contact information */}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}