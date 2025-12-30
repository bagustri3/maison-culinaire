'use client';

export default function CTASection() {
  const whatsappUrl = "https://wa.me/6281217777674?text=Halo%20Maison%20Culinaire,%20saya%20ingin%20konsultasi%20catering%20untuk%20acara%20di%20Bandung%20Barat.";

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: 'rgb(0, 38, 20)' }}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
          Siap Menyajikan Hidangan Terbaik untuk Acara Anda
        </h2>
        <p className="text-base sm:text-lg lg:text-xl text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto px-4">
          Hubungi kami sekarang untuk konsultasi menu dan penawaran terbaik
        </p>
        <button
          onClick={() => window.open(whatsappUrl, "_blank")}
          className="bg-green-500 hover:bg-green-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition inline-flex items-center gap-2 sm:gap-3 whitespace-nowrap cursor-pointer mx-auto"
        >
          <i className="ri-whatsapp-line text-2xl sm:text-3xl"></i>
          Hubungi Kami via WhatsApp
        </button>
      </div>
    </section>
  );
}
