'use client';

export default function GallerySection() {
  const galleryImages = [
    {
      url: 'https://readdy.ai/api/search-image?query=elegant%20gourmet%20appetizer%20platter%20with%20artistic%20presentation%20premium%20catering%20food%20styling%20sophisticated%20starter%20dishes%20for%20luxury%20event%20high%20end%20culinary%20creation&width=600&height=400&seq=gallery001&orientation=landscape',
      title: 'Appetizer Premium'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=beautifully%20plated%20main%20course%20dish%20restaurant%20quality%20presentation%20tender%20meat%20with%20garnish%20elegant%20dinner%20plate%20for%20special%20occasion&width=600&height=400&seq=gallery002&orientation=landscape',
      title: 'Main Course Signature'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=exquisite%20dessert%20display%20with%20decorative%20elements%20sweet%20treats%20arrangement%20for%20catering%20service%20colorful%20pastries%20and%20cakes%20elegant%20dessert%20presentation&width=600&height=400&seq=gallery003&orientation=landscape',
      title: 'Dessert Collection'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=grand%20buffet%20table%20setup%20with%20multiple%20dishes%20abundant%20food%20display%20for%20large%20event%20variety%20of%20cuisines%20beautifully%20arranged%20professional%20catering%20service&width=600&height=400&seq=gallery004&orientation=landscape',
      title: 'Buffet Setup'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=traditional%20Indonesian%20cuisine%20beautifully%20presented%20authentic%20local%20dishes%20with%20modern%20plating%20nusantara%20food%20for%20catering%20service%20cultural%20culinary%20heritage&width=600&height=400&seq=gallery005&orientation=landscape',
      title: 'Menu Nusantara'
    },
    {
      url: 'https://readdy.ai/api/search-image?query=international%20fusion%20cuisine%20gourmet%20dishes%20western%20and%20asian%20food%20combination%20creative%20culinary%20presentation%20for%20upscale%20catering&width=600&height=400&seq=gallery006&orientation=landscape',
      title: 'International Menu'
    }
  ];

  return (
    <section id="galeri" className="py-16 sm:py-20 lg:py-24 px-4 sm:px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4" style={{ color: 'rgb(0, 38, 20)' }}>
            Galeri Makanan
          </h2>
          <div className="w-20 h-1 bg-amber-600 mx-auto mb-4 sm:mb-6"></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Lihat koleksi hidangan lezat yang telah kami sajikan untuk berbagai acara
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              className="relative group overflow-hidden rounded-xl shadow-lg cursor-pointer h-64 sm:h-72 lg:h-80"
            >
              <img 
                src={image.url}
                alt={image.title}
                className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {image.title}
                  </h3>
                  <div className="w-12 h-1 bg-amber-600"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
