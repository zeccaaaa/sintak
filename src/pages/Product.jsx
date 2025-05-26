import React from "react";
import Layout from "../components/Layout";

export default function Product() {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-amber-900 text-white">
        <div className="container mx-auto py-20 px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Produk Kopi Kami</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Temukan berbagai pilihan biji kopi premium dari daerah penghasil kopi terbaik di Indonesia yang siap diekspor ke seluruh dunia.
          </p>
        </div>
      </section>

      {/* Product Categories */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-amber-900 mb-6 text-center">Kategori Produk</h2>
   
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/kopi arabika gayo.jpg" alt="Arabika Gayo" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Arabika</span>
                  <span className="text-gray-500 text-sm">Stok Tersedia</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Arabika Gayo</h3>
                <p className="text-gray-600 mb-4">
                  Kopi arabika dari dataran tinggi Gayo, Aceh dengan cita rasa fruity dan keasaman yang seimbang. Diproses dengan metode semi-washed.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">Rp20.00/kg</span>
                  <button className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition">Detail</button>
                </div>
              </div>
            </div>

            {/* Product 2 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/kopi robusta lampung.jpg" alt="Robusta Lampung" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Robusta</span>
                  <span className="text-gray-500 text-sm">Stok Tersedia</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Robusta Lampung</h3>
                <p className="text-gray-600 mb-4">
                  Kopi robusta kualitas ekspor dari Lampung dengan body tebal dan rasa coklat yang kuat. Cocok untuk espresso blend.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">Rp15.000/kg</span>
                  <button className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition">Detail</button>
                </div>
              </div>
            </div>

            {/* Product 3 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/kopi toraja sapan.jpg" alt="Toraja Sapan" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Specialty</span>
                  <span className="text-gray-500 text-sm">Stok Terbatas</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Toraja Sapan</h3>
                <p className="text-gray-600 mb-4">
                  Kopi specialty dari Toraja dengan aroma kompleks dan rasa yang unik. Diproses dengan metode fully-washed.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">Rp18.000/kg</span>
                  <button className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition">Detail</button>
                </div>
              </div>
            </div>

            {/* Product 4 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/kopi flores bajawa.jpg" alt="Flores Bajawa" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Arabika</span>
                  <span className="text-gray-500 text-sm">Stok Tersedia</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Flores Bajawa</h3>
                <p className="text-gray-600 mb-4">
                  Kopi arabika dari Bajawa, Flores dengan cita rasa spicy dan floral. Diproses dengan metode honey process.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">Rp15.000/kg</span>
                  <button className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition">Detail</button>
                </div>
              </div>
            </div>

            {/* Product 5 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/kopi java organic.jpg" alt="Java Organic" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Organik</span>
                  <span className="text-gray-500 text-sm">Stok Tersedia</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Java Organic</h3>
                <p className="text-gray-600 mb-4">
                  Kopi organik dari Jawa Barat dengan sertifikasi organik internasional. Memiliki rasa manis dengan sentuhan herbal.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">Rp17.000/kg</span>
                  <button className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition">Detail</button>
                </div>
              </div>
            </div>

            {/* Product 6 */}
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <img src="/kopi bali kintamani.jpg" alt="Bali Kintamani" className="w-full h-64 object-cover"/>
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="bg-amber-100 text-amber-800 text-xs font-medium px-3 py-1 rounded-full">Arabika</span>
                  <span className="text-gray-500 text-sm">Stok Terbatas</span>
                </div>
                <h3 className="text-xl font-semibold text-amber-900 mb-2">Bali Kintamani</h3>
                <p className="text-gray-600 mb-4">
                  Kopi arabika dari Kintamani, Bali dengan aroma lembut dan citrus yang segar. Diproses dengan metode wet-hulled.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-bold text-amber-900">Rp20.000/kg</span>
                  <button className="bg-amber-800 text-white px-4 py-2 rounded hover:bg-amber-900 transition">Detail</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wholesale Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-amber-100 rounded-lg p-8 md:p-12 flex flex-col md:flex-row items-center gap-8">
            <div className="w-full md:w-2/3">
              <h2 className="text-3xl font-bold text-amber-900 mb-4">Penawaran Khusus untuk Pemesanan Grosir</h2>
              <p className="text-gray-700 mb-6">
                Kami menawarkan harga khusus untuk pembelian dalam jumlah besar. Dapatkan penawaran terbaik untuk kebutuhan bisnis Anda dengan kualitas premium yang konsisten.
              </p>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 mb-6">
                <li>Minimum pemesanan: 100kg per jenis kopi</li>
                <li>Pengiriman ke seluruh dunia dengan pelayanan ekspor profesional</li>
                <li>Sertifikasi kualitas dan asal kopi</li>
                <li>Konsultasi gratis untuk memilih jenis kopi yang sesuai kebutuhan</li>
              </ul>
              <button className="bg-amber-800 text-white px-6 py-3 rounded font-medium hover:bg-amber-900 transition">
                Hubungi untuk Penawaran
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-amber-900 text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Siap Memesan Kopi Premium Kami?</h2>
          <p className="text-xl text-amber-100 mb-10 max-w-3xl mx-auto">
            Hubungi kami sekarang untuk mendapatkan penawaran terbaik dan konsultasi gratis dari tim ahli kami.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <button className="bg-white text-amber-900 px-8 py-4 rounded-lg font-bold hover:bg-amber-100 transition">
              Request Sample
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-amber-800 transition">
              Hubungi Kami
            </button>
          </div>
        </div>
      </section>
    </Layout>
  );
}