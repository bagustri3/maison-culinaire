'use client';

export default function HeroSection() {
  const whatsappUrl = "https://wa.me/6281217777674?text=Halo%20Maison%20Culinaire,%20saya%20ingin%20konsultasi%20catering%20untuk%20acara%20di%20Bandung%20Barat.";

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20 sm:pt-24">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://readdy.ai/api/search-image?query=elegant%20premium%20catering%20buffet%20table%20setup%20with%20gourmet%20dishes%20beautifully%20arranged%20food%20presentation%20for%20luxury%20event%20sophisticated%20dining%20atmosphere%20with%20warm%20ambient%20lighting%20professional%20catering%20service%20display%20high%20end%20culinary%20experience%20with%20decorative%20elements%20modern%20restaurant%20quality%20food%20styling&width=1920&height=1080&seq=hero001&orientation=landscape)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full">
        <div className="text-center text-white">
          <div className="inline-block bg-amber-600/90 text-white px-4 sm:px-6 py-2 rounded-full text-sm sm:text-base font-semibold mb-4 sm:mb-6">
            Catering Murah Berkualitas Premium ⭐ Mulai 25rb/Porsi
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 leading-tight px-2">
            Catering Bandung Barat Murah & Exclusive
          </h1>
          <div className="w-20 sm:w-24 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl mb-3 sm:mb-4 text-gray-200 max-w-4xl mx-auto leading-relaxed px-4">
            Solusi Katering Berkualitas Premium dengan Harga Terjangkau
          </p>
          <p className="text-base sm:text-lg md:text-xl mb-6 sm:mb-8 text-gray-300 max-w-3xl mx-auto px-4">
            Melayani Pernikahan, Corporate, Event & Harian di Bandung Barat, Cimahi, Padalarang, Ngamprah, Batujajar
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 mb-6">
            <button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="w-full sm:w-auto bg-amber-600 hover:bg-amber-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-xl sm:text-2xl"></i>
              Pesan Sekarang
            </button>
            <button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="w-full sm:w-auto bg-white hover:bg-gray-100 px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold transition inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
              style={{ color: 'rgb(0, 38, 20)' }}
            >
              <i className="ri-chat-3-line text-xl sm:text-2xl"></i>
              Konsultasi Menu
            </button>
          </div>
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-sm sm:text-base text-gray-200 px-4">
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-green-400 text-lg sm:text-xl"></i>
              <span>Bahan Segar Premium</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-green-400 text-lg sm:text-xl"></i>
              <span>Harga Transparan</span>
            </div>
            <div className="flex items-center gap-2">
              <i className="ri-checkbox-circle-fill text-green-400 text-lg sm:text-xl"></i>
              <span>Gratis Konsultasi</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={() => window.open(whatsappUrl, "_blank")}
        className="fixed bottom-6 right-4 sm:right-6 z-50 bg-green-500 hover:bg-green-600 text-white w-14 h-14 sm:w-16 sm:h-16 rounded-full shadow-2xl flex items-center justify-center transition cursor-pointer group"
      >
        <i className="ri-whatsapp-fill text-3xl sm:text-4xl group-hover:scale-110 transition"></i>
      </button>
    </section>
  );
}
