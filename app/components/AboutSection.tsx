'use client';

export default function AboutSection() {
  return (
    <section id="tentang" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'rgb(0, 38, 20)' }}>
            Tentang Kami
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl overflow-hidden shadow-2xl">
            <img 
              src="https://readdy.ai/api/search-image?query=professional%20chef%20team%20preparing%20gourmet%20catering%20dishes%20in%20modern%20commercial%20kitchen%20culinary%20experts%20cooking%20with%20fresh%20ingredients%20clean%20hygienic%20food%20preparation%20environment%20skilled%20cooks%20working%20together%20for%20catering%20service%20high%20quality%20kitchen%20operations&width=800&height=600&seq=about001&orientation=landscape"
              alt="Maison Culinaire Team"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="space-y-4 sm:space-y-6">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              <span className="font-bold text-xl sm:text-2xl" style={{ color: 'rgb(0, 38, 20)' }}>Maison Culinaire</span> adalah penyedia layanan catering profesional yang berlokasi di Bandung Barat. Kami berkomitmen menghadirkan pengalaman kuliner terbaik untuk setiap acara Anda.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Dengan fokus pada <span className="font-semibold text-amber-700">kualitas bahan baku</span>, <span className="font-semibold text-amber-700">cita rasa autentik</span>, <span className="font-semibold text-amber-700">kebersihan maksimal</span>, dan <span className="font-semibold text-amber-700">pelayanan prima</span>, kami telah dipercaya melayani berbagai acara mulai dari pernikahan, corporate event, hingga kebutuhan catering harian.
            </p>
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
              Tim chef berpengalaman kami siap menyajikan menu yang dapat disesuaikan dengan kebutuhan dan budget Anda, baik untuk acara kecil maupun besar dengan ratusan tamu.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6 pt-4 sm:pt-6">
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">50+</div>
                <div className="text-xs sm:text-sm text-gray-600">Acara Sukses</div>
              </div>
              <div className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">3+</div>
                <div className="text-xs sm:text-sm text-gray-600">Tahun Pengalaman</div>
              </div>
              <div className="text-center col-span-2 sm:col-span-1">
                <div className="text-3xl sm:text-4xl font-bold text-amber-600 mb-1 sm:mb-2">100+</div>
                <div className="text-xs sm:text-sm text-gray-600">Klien Puas</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
