'use client';

export default function ServicesSection() {
  const services = [
    {
      title: 'Catering Pernikahan',
      description: 'Menu prasmanan & box dengan tampilan elegan dan porsi besar untuk hari spesial Anda',
      icon: 'ri-heart-3-line',
      image: 'https://readdy.ai/api/search-image?query=elegant%20wedding%20buffet%20catering%20display%20with%20gourmet%20dishes%20beautifully%20arranged%20food%20presentation%20for%20luxury%20wedding%20reception%20sophisticated%20dining%20setup%20with%20decorative%20elements%20premium%20catering%20service%20for%20special%20celebration&width=600&height=400&seq=service001&orientation=landscape'
    },
    {
      title: 'Catering Kantor & Corporate',
      description: 'Solusi catering untuk rapat, event kantor, training, dan gathering perusahaan',
      icon: 'ri-briefcase-line',
      image: 'https://readdy.ai/api/search-image?query=professional%20corporate%20catering%20setup%20for%20business%20meeting%20modern%20office%20lunch%20buffet%20with%20healthy%20meal%20options%20organized%20food%20service%20for%20company%20event%20clean%20presentation%20for%20corporate%20gathering&width=600&height=400&seq=service002&orientation=landscape'
    },
    {
      title: 'Catering Harian / Rumahan',
      description: 'Layanan langganan makan harian yang sehat, higienis, dan praktis untuk keluarga',
      icon: 'ri-home-heart-line',
      image: 'https://readdy.ai/api/search-image?query=healthy%20daily%20meal%20catering%20service%20nutritious%20home%20cooked%20food%20in%20clean%20containers%20fresh%20ingredients%20prepared%20for%20family%20meals%20hygienic%20food%20packaging%20for%20daily%20subscription&width=600&height=400&seq=service003&orientation=landscape'
    },
    {
      title: 'Catering Acara & Event',
      description: 'Catering untuk ulang tahun, arisan, syukuran, dan acara komunitas lainnya',
      icon: 'ri-calendar-event-line',
      image: 'https://readdy.ai/api/search-image?query=festive%20party%20catering%20buffet%20table%20colorful%20food%20display%20for%20birthday%20celebration%20diverse%20menu%20options%20for%20community%20gathering%20appetizing%20presentation%20for%20special%20event&width=600&height=400&seq=service004&orientation=landscape'
    },
    {
      title: 'Nasi Box & Snack Box',
      description: 'Paket praktis dan higienis untuk berbagai kebutuhan acara Anda',
      icon: 'ri-box-3-line',
      image: 'https://readdy.ai/api/search-image?query=neatly%20packed%20meal%20boxes%20and%20snack%20boxes%20hygienic%20food%20packaging%20for%20catering%20service%20organized%20lunch%20boxes%20with%20complete%20menu%20practical%20takeaway%20food%20containers%20for%20events&width=600&height=400&seq=service005&orientation=landscape'
    },
    {
      title: 'Custom Catering',
      description: 'Menu dapat disesuaikan dengan budget dan permintaan khusus klien',
      icon: 'ri-settings-3-line',
      image: 'https://readdy.ai/api/search-image?query=customized%20catering%20menu%20options%20variety%20of%20gourmet%20dishes%20for%20personalized%20service%20flexible%20food%20choices%20tailored%20to%20client%20preferences%20premium%20ingredients%20for%20bespoke%20catering&width=600&height=400&seq=service006&orientation=landscape'
    }
  ];

  return (
    <section id="layanan" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'rgb(0, 38, 20)' }}>
            Jenis Layanan Catering
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Kami menyediakan berbagai pilihan layanan catering untuk memenuhi kebutuhan acara Anda
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition cursor-pointer group"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img 
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                <div className="absolute bottom-4 left-4 w-12 h-12 sm:w-14 sm:h-14 bg-amber-600 rounded-full flex items-center justify-center">
                  <i className={`${service.icon} text-2xl sm:text-3xl text-white`}></i>
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3" style={{ color: 'rgb(0, 38, 20)' }}>
                  {service.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
