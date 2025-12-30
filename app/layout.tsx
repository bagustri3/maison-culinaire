import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title:
    "Catering Bandung Barat Murah & Exclusive | Maison Culinaire - Katering Pernikahan, Event, Harian Terbaik",
  description:
    "Catering Bandung Barat murah berkualitas premium mulai 25rb/porsi. Katering exclusive untuk pernikahan, event kantor, harian, nasi box. Bahan segar, rasa lezat, harga terjangkau. Melayani Cimahi, Padalarang, Ngamprah, Batujajar. Pesan sekarang!",
  keywords:
    "catering bandung barat murah, katering bandung barat exclusive, catering pernikahan bandung barat murah, catering event bandung barat, nasi box bandung barat murah, catering harian bandung barat, katering kantor bandung barat, catering prasmanan bandung barat, catering murah berkualitas bandung barat, jasa catering bandung barat, catering cimahi murah, catering padalarang, catering ngamprah, catering batujajar, catering bandung barat terpercaya, menu catering bandung barat, harga catering bandung barat, paket catering murah bandung barat, catering exclusive bandung barat, catering premium bandung barat murah",
  authors: [{ name: "Maison Culinaire" }],
  openGraph: {
    title: "Catering Bandung Barat Murah & Exclusive | Maison Culinaire",
    description:
      "Solusi catering murah berkualitas premium di Bandung Barat mulai 25rb/porsi. Melayani pernikahan, event, corporate, harian. Bahan segar, rasa lezat, harga terjangkau.",
    type: "website",
    locale: "id_ID",
    siteName: "Maison Culinaire - Catering Bandung Barat",
    images: [
      {
        url: "https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/38784437fd8a652ef4b28165819546c8.png",
        width: 1200,
        height: 630,
        alt: "Catering Bandung Barat Murah & Exclusive - Maison Culinaire",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Catering Bandung Barat Murah & Exclusive | Maison Culinaire",
    description:
      "Catering murah berkualitas premium di Bandung Barat mulai 25rb/porsi. Pernikahan, event, corporate, harian.",
    images: [
      "https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/38784437fd8a652ef4b28165819546c8.png",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://example.com";

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "FoodEstablishment",
    name: "Maison Culinaire - Catering Bandung Barat Murah & Exclusive",
    description:
      "Layanan catering murah berkualitas premium di Bandung Barat untuk pernikahan, corporate, event, dan harian. Harga terjangkau mulai 25rb/porsi dengan bahan segar dan rasa lezat.",
    url: siteUrl,
    logo: "https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/38784437fd8a652ef4b28165819546c8.png",
    image:
      "https://static.readdy.ai/image/76c4eea5daeee001f01703b57fdded2a/38784437fd8a652ef4b28165819546c8.png",
    telephone: "+6282118708018",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Bandung Barat",
      addressLocality: "Bandung Barat",
      addressRegion: "Jawa Barat",
      postalCode: "40553",
      addressCountry: "ID",
    },
    areaServed: [
      {
        "@type": "City",
        name: "Bandung Barat",
      },
      {
        "@type": "City",
        name: "Cimahi",
      },
      {
        "@type": "City",
        name: "Padalarang",
      },
      {
        "@type": "City",
        name: "Ngamprah",
      },
      {
        "@type": "City",
        name: "Batujajar",
      },
    ],
    servesCuisine: ["Indonesian", "Western", "Asian", "Fusion"],
    priceRange: "Rp 25.000 - Rp 150.000",
    paymentAccepted: ["Cash", "Bank Transfer", "E-Wallet"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "150",
      bestRating: "5",
      worstRating: "1",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Layanan Catering",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Catering Pernikahan Bandung Barat Murah",
            description:
              "Paket catering pernikahan exclusive dengan menu prasmanan dan nasi box, harga terjangkau mulai 35rb/porsi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Catering Kantor & Corporate Murah",
            description:
              "Catering untuk rapat, meeting, training, dan gathering perusahaan dengan harga hemat mulai 25rb/porsi",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Catering Harian Bandung Barat",
            description:
              "Langganan catering harian sehat dan higienis dengan harga spesial untuk pelanggan setia",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Nasi Box Bandung Barat Murah",
            description:
              "Nasi box praktis untuk berbagai acara, harga mulai 20rb/box dengan menu bervariasi",
          },
        },
      ],
    },
  };

  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Maison Culinaire - Catering Bandung Barat Murah & Exclusive",
    description:
      "Jasa catering murah berkualitas premium untuk berbagai acara di Bandung Barat. Melayani area Cimahi, Padalarang, Ngamprah, Batujajar dengan harga terjangkau mulai 25rb/porsi.",
    url: siteUrl,
    telephone: "+6282118708018",
    email: "info@maisonculinaire.com",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Bandung Barat",
      addressRegion: "Jawa Barat",
      postalCode: "40553",
      addressCountry: "ID",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: "-6.8402",
      longitude: "107.4991",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday",
        ],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: [
      "https://www.instagram.com/maisonculinaire",
      "https://www.facebook.com/maisonculinaire",
    ],
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa harga catering murah di Bandung Barat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Harga catering murah di Maison Culinaire Bandung Barat mulai dari Rp 25.000/porsi untuk paket harian dan corporate, Rp 35.000/porsi untuk paket pernikahan, dan Rp 20.000/box untuk nasi box. Harga sudah termasuk bahan berkualitas premium dan pelayanan profesional.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah catering murah di Bandung Barat tetap berkualitas?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, Maison Culinaire menyediakan catering murah namun tetap exclusive dan berkualitas premium. Kami menggunakan bahan segar pilihan, dimasak oleh chef berpengalaman, dengan standar kebersihan tinggi. Harga terjangkau karena kami langsung dari produsen tanpa perantara.",
        },
      },
      {
        "@type": "Question",
        name: "Area mana saja yang dilayani untuk catering Bandung Barat?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami melayani seluruh area Bandung Barat termasuk Cimahi, Padalarang, Ngamprah, Batujajar, Lembang, Cisarua, dan sekitarnya. Pengiriman tepat waktu dengan armada lengkap.",
        },
      },
      {
        "@type": "Question",
        name: "Minimal order catering di Bandung Barat berapa porsi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Minimal order untuk catering pernikahan dan event 50 porsi, catering corporate 30 porsi, catering harian 20 porsi, dan nasi box 25 box. Untuk kebutuhan khusus bisa dikonsultasikan terlebih dahulu.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah bisa custom menu catering sesuai budget?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Tentu bisa! Maison Culinaire menyediakan layanan custom menu catering yang bisa disesuaikan dengan budget dan selera Anda. Konsultasikan kebutuhan Anda dengan tim kami untuk mendapatkan paket terbaik.",
        },
      },
    ],
  };

  return (
    <html lang="id-ID" className="scroll-smooth">
      <head>
        <link rel="canonical" href={siteUrl} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bandung Barat" />
        <meta name="geo.position" content="-6.8402;107.4991" />
        <meta name="ICBM" content="-6.8402, 107.4991" />
        <title>
          Maison Culinaire - Catering Bandung Barat Murah & Exclusive
        </title>
        <Script
          id="organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
          strategy="beforeInteractive"
        />
        <Script
          id="local-business-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
          strategy="beforeInteractive"
        />
        <Script
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          strategy="beforeInteractive"
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
