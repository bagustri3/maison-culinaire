'use client';

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Ibu Sari Wijaya',
      role: 'Pernikahan di Bandung Barat',
      rating: 5,
      text: 'Maison Culinaire membuat acara pernikahan kami sempurna! Makanannya lezat, presentasi elegan, dan pelayanan sangat profesional. Tamu-tamu kami sangat puas!',
      avatar: 'SW'
    },
    {
      name: 'Bapak Dedi Kurniawan',
      role: 'PT Maju Bersama',
      rating: 5,
      text: 'Sudah 2 tahun kami menggunakan jasa catering Maison Culinaire untuk event kantor. Selalu tepat waktu, rasa konsisten, dan harga sangat reasonable. Highly recommended!',
      avatar: 'DK'
    },
    {
      name: 'Ibu Rina Marlina',
      role: 'Catering Harian',
      text: 'Berlangganan catering harian untuk keluarga. Menu bervariasi, sehat, dan yang paling penting anak-anak suka! Terima kasih Maison Culinaire.',
      rating: 5,
      avatar: 'RM'
    },
    {
      name: 'Bapak Agus Santoso',
      role: 'Event Ulang Tahun',
      rating: 5,
      text: 'Perayaan ulang tahun istri saya jadi berkesan berkat catering dari Maison Culinaire. Makanan enak, porsi pas, dan harga sesuai budget. Pasti order lagi!',
      avatar: 'AS'
    },
    {
      name: 'Ibu Lina Permata',
      role: 'Arisan Keluarga',
      rating: 5,
      text: 'Nasi box untuk acara arisan keluarga sangat memuaskan. Packaging rapi, higienis, dan rasanya juara! Semua keluarga memuji. Terima kasih!',
      avatar: 'LP'
    },
    {
      name: 'Bapak Hendra Wijaya',
      role: 'Corporate Event',
      rating: 5,
      text: 'Profesional dan berkualitas! Maison Culinaire selalu jadi pilihan utama untuk event perusahaan kami. Tim yang responsif dan hasil yang memuaskan.',
      avatar: 'HW'
    }
  ];

  return (
    <section id="testimoni" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-amber-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'rgb(0, 38, 20)' }}>
            Testimoni Pelanggan
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Kepuasan pelanggan adalah prioritas utama kami
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-2xl transition cursor-pointer"
            >
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 sm:w-14 sm:h-14 bg-amber-600 rounded-full flex items-center justify-center text-white font-bold text-base sm:text-lg mr-3 sm:mr-4 flex-shrink-0">
                  {testimonial.avatar}
                </div>
                <div className="min-w-0">
                  <h3 className="font-bold text-base sm:text-lg truncate" style={{ color: 'rgb(0, 38, 20)' }}>
                    {testimonial.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 truncate">
                    {testimonial.role}
                  </p>
                </div>
              </div>
              
              <div className="flex mb-3 sm:mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <i key={i} className="ri-star-fill text-amber-500 text-lg sm:text-xl"></i>
                ))}
              </div>

              <p className="text-sm sm:text-base text-gray-700 leading-relaxed italic">
                "{testimonial.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
