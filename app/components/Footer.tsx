"use client";

import Link from "next/link";

export default function Footer() {
  const whatsappUrl =
    "https://wa.me/6281217777674?text=Halo%20Maison%20Culinaire,%20saya%20ingin%20konsultasi%20catering%20untuk%20acara.";

  return (
    <footer
      style={{ backgroundColor: "rgb(0, 38, 20)" }}
      className="text-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="flex flex-col items-center justify-center my-11 w-full">
          <img
            src="/logo.png"
            alt="Maison Culinaire"
            className="h-64 w-auto mb-3 sm:mb-4"
          />
          <p className="text-sm sm:text-base text-gray-400 leading-relaxed">
            Catering premium di Bandung Barat untuk acara keluarga, perusahaan,
            dan event spesial Anda.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 lg:gap-12 mb-8 sm:mb-12">
          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-400">
              Layanan
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#layanan"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Catering Pernikahan
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Catering Corporate
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Catering Harian
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Nasi Box & Snack Box
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-400">
              Navigasi
            </h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#tentang"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Tentang Kami
                </a>
              </li>
              <li>
                <a
                  href="#layanan"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Layanan
                </a>
              </li>
              <li>
                <a
                  href="#galeri"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Galeri
                </a>
              </li>
              <li>
                <a
                  href="#testimoni"
                  className="text-sm sm:text-base text-gray-400 hover:text-amber-400 transition cursor-pointer"
                >
                  Testimoni
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg sm:text-xl font-bold mb-3 sm:mb-4 text-amber-400">
              Kontak
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <i className="ri-map-pin-line text-amber-400 text-lg sm:text-xl mt-1 flex-shrink-0"></i>
                <div className="flex flex-col gap-1">
                  <span className="text-sm sm:text-base text-gray-400">
                    Kotabaru Parahyangan
                  </span>
                  <span className="text-sm sm:text-base text-gray-400">
                    Bandung Barat, Jawa Barat, Indonesia
                  </span>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <i className="ri-phone-line text-amber-400 text-lg sm:text-xl flex-shrink-0"></i>
                <span className="text-sm sm:text-base text-gray-400">
                  +62 812-1777-7674
                </span>
              </li>
            </ul>
            <button
              onClick={() => window.open(whatsappUrl, "_blank")}
              className="mt-4 sm:mt-6 bg-green-500 hover:bg-green-600 text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition inline-flex items-center gap-2 whitespace-nowrap cursor-pointer"
            >
              <i className="ri-whatsapp-line text-lg sm:text-xl"></i>
              WhatsApp
            </button>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs sm:text-sm text-gray-400 text-center sm:text-left">
              © {new Date().getFullYear()} Maison Culinaire. All rights
              reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
