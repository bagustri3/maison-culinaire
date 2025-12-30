'use client';

export default function AdvantagesSection() {
  const advantages = [
    {
      icon: 'ri-leaf-line',
      title: 'Bahan Segar & Berkualitas',
      description: 'Kami hanya menggunakan bahan-bahan pilihan terbaik dan segar setiap hari'
    },
    {
      icon: 'ri-restaurant-2-line',
      title: 'Rasa Konsisten & Lezat',
      description: 'Cita rasa yang terjaga dengan resep yang telah teruji dan disukai pelanggan'
    },
    {
      icon: 'ri-team-line',
      title: 'Tim Berpengalaman',
      description: 'Didukung oleh chef dan tim profesional dengan pengalaman puluhan tahun'
    },
    {
      icon: 'ri-time-line',
      title: 'Tepat Waktu',
      description: 'Komitmen pengiriman dan penyajian tepat waktu sesuai jadwal acara Anda'
    },
    {
      icon: 'ri-price-tag-3-line',
      title: 'Harga Transparan',
      description: 'Tidak ada biaya tersembunyi, semua harga jelas dan sesuai kesepakatan'
    },
    {
      icon: 'ri-shield-check-line',
      title: 'Higienis & Aman',
      description: 'Standar kebersihan tinggi dan sertifikasi keamanan pangan terjamin'
    }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6" style={{ backgroundColor: 'rgb(0, 38, 20)' }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Keunggulan Kami
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-300 max-w-3xl mx-auto px-4">
            Mengapa memilih Maison Culinaire sebagai partner catering Anda
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {advantages.map((advantage, index) => (
            <div 
              key={index}
              className="rounded-xl p-6 sm:p-8 hover:bg-opacity-80 transition cursor-pointer group"
              style={{ backgroundColor: 'rgba(0, 50, 26, 0.8)' }}
            >
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-amber-600 rounded-full flex items-center justify-center mb-4 sm:mb-6 group-hover:scale-110 transition">
                <i className={`${advantage.icon} text-2xl sm:text-3xl text-white`}></i>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-3">
                {advantage.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-300 leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
