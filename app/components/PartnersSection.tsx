'use client';

export default function PartnersSection() {
  const partners = [
    { name: 'Wedding Organizer Bandung Barat', icon: 'ri-heart-3-line' },
    { name: 'Event Organizer Professional', icon: 'ri-calendar-event-line' },
    { name: 'Vendor Dekorasi Premium', icon: 'ri-paint-brush-line' },
    { name: 'UMKM Kuliner Lokal', icon: 'ri-restaurant-2-line' },
    { name: 'Perusahaan & Instansi', icon: 'ri-building-line' },
    { name: 'Hotel & Venue Partner', icon: 'ri-hotel-line' }
  ];

  return (
    <section className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-gradient-to-b from-white to-amber-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'rgb(0, 38, 20)' }}>
            Partner Catering
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto mb-4 px-4">
            Kami dipercaya dan bekerja sama dengan berbagai partner profesional untuk menjamin kualitas layanan terbaik
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-4 sm:p-6 hover:shadow-xl transition cursor-pointer flex flex-col items-center text-center group"
            >
              <div className="w-12 h-12 sm:w-16 sm:h-16 bg-amber-100 rounded-full flex items-center justify-center mb-3 sm:mb-4 group-hover:bg-amber-600 transition">
                <i className={`${partner.icon} text-2xl sm:text-3xl text-amber-600 group-hover:text-white transition`}></i>
              </div>
              <h3 className="text-xs sm:text-sm font-semibold text-gray-700 leading-tight">
                {partner.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
