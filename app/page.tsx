"use client";

import { MapPin } from "lucide-react";
import { translations, Lang } from "./i18n";
import { useState } from "react";
import Image from "next/image";

export default function Home() {
  const [lang, setLang] = useState<Lang>("it");
  const t = translations[lang];

  return (
    <main className="relative min-h-screen">
      {/* Fullscreen background image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/cosenza.jpg"
          alt={t.title}
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay on top of the image */}
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Centered content */}
      <div className="relative flex flex-col items-center justify-center h-screen text-center">
        {/* Title */}
        <h1 className="text-white text-4xl md:text-6xl font-bold drop-shadow-lg">
          {t.title}
        </h1>

        {/* Location badge with link to Google Maps */}
        <a
          href="https://www.google.com/maps/place/Cosenza/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/20 text-white px-4 py-1 rounded-full text-sm font-medium mt-4 hover:bg-white/30 transition"
          style={{
            fontFamily: 'montserrat',
          }}
        >
          <MapPin size={16} />
          <span>{t.location}</span>
        </a>
      </div>

      {/* Bottom bar with photo credit (left) and site credit (right) */}
      <div style={{fontFamily: "montserrat"}} className="absolute bottom-4 w-full flex justify-between px-6 text-white text-sm font-light">
        <span>{t.photoCredit}</span>
        <a
          href="https://mattleuterio.dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          {t.siteCredit}
        </a>
      </div>

      {/* Language switcher with flags */}
      <div className="absolute top-6 right-6 flex gap-2">
        <div
          className={`w-6 h-3 rounded-xs overflow-hidden cursor-pointer ${lang === "it" ? "opacity-100" : "opacity-50"} hover:opacity-100 transition`}
          onClick={() => setLang("it")}
        >
          <Image src="/flag-it.webp" alt="Italiano" width={24} height={24} />
        </div>
        <div
          className={`w-6 h-3 rounded-xs overflow-hidden cursor-pointer ${lang === "en" ? "opacity-100" : "opacity-50"} hover:opacity-100 transition`}
          onClick={() => setLang("en")}
        >
          <Image src="/flag-en.webp" alt="English" width={24} height={24} />
        </div>
      </div>
    </main>
  );
}
