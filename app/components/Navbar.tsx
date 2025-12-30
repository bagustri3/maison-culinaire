"use client";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[rgb(0,38,20)] backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex items-center justify-between">
        <img
          src="https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/38784437fd8a652ef4b28165819546c8.png"
          alt="Maison Culinaire"
          className="h-10 sm:h-12 w-auto"
        />
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          <a
            href="#tentang"
            className="text-sm text-white lg:text-base font-medium hover:text-amber-600 transition cursor-pointer"
          >
            Tentang
          </a>
          <a
            href="#layanan"
            className="text-sm text-white lg:text-base font-medium hover:text-amber-600 transition cursor-pointer"
          >
            Layanan
          </a>
          <a
            href="#galeri"
            className="text-sm text-white lg:text-base font-medium hover:text-amber-600 transition cursor-pointer"
          >
            Galeri
          </a>
          <a
            href="#testimoni"
            className="text-sm text-white lg:text-base font-medium hover:text-amber-600 transition cursor-pointer"
          >
            Testimoni
          </a>
        </div>
        <button
          onClick={() =>
            window.open(
              "https://wa.me/6281217777674?text=Halo%20Maison%20Culinaire,%20saya%20ingin%20konsultasi%20catering%20untuk%20acara%20di%20Bandung%20Barat.",
              "_blank"
            )
          }
          className="bg-amber-600 hover:bg-amber-700 text-white px-4 sm:px-6 py-2 sm:py-2.5 rounded-lg text-sm sm:text-base font-semibold transition whitespace-nowrap cursor-pointer"
        >
          Hubungi Kami
        </button>
      </div>
    </nav>
  );
}
