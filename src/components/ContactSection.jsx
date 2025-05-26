import React from "react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-amber-100">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-amber-900 mb-4">Hubungi Kami</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Tertarik dengan produk kami? Jangan ragu untuk menghubungi tim kami untuk informasi lebih lanjut dan penawaran.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md max-w-4xl mx-auto">
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
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
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                placeholder="email@perusahaan.com"
              />
            </div>
            
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Pesan</label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-amber-500"
                placeholder="Ceritakan kebutuhan Anda..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="bg-amber-800 text-white px-6 py-3 rounded-md hover:bg-amber-900 transition w-full md:w-auto"
            >
              Kirim Pesan
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}