// components/Gallery.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. DATA ARRAY ESPANSO: Aggiunte le foto 11 e 12 per scalare il portfolio
  const images = [
    "/g1.avif", "/new-2.avif", "/g3.avif", "/new-4.avif", "/g5.avif",
    "/g6.avif", "/g7.avif", "/g8.avif", "/g9.avif", "/cerniere.avif",
    "/manovella.avif", "/g12.avif"
  ];

  // 2. LOGICA D'INDICE AUTOMATICA: Usa images.length dinamico. 
  // Quando currentIndex arriva a 11 (la dodicesima foto), (11 + 1) % 12 restituisce 0, ripartendo da capo.
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    const timer = setInterval(next, 4000);
    return () => clearInterval(timer);
  }, [currentIndex]); // Il timer si resetta pulito ad ogni cambio immagine o interazione dell'utente

  return (
    <section id="gallery" className="relative h-[100dvh] w-full bg-black overflow-hidden flex flex-col justify-between">
      
      {/* BACKGROUND SCORREVOLE CON DISSOLVENZA INCROCIATA (Livello 0) */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              // Il rendering dell'alt text si aggiorna dinamicamente in base all'indice umano (+1)
              alt={`Icaro render ${currentIndex + 1}`}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradiente di contrasto per la UI (Livello 10) */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
      </div>

      {/* HEADER DELLA GALLERIA (Livello 20) */}
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 pt-32 md:pt-120 px-6 md:px-30 pointer-events-none"
      >
        <p className="font-mono text-white tracking-[0.3em] text-xs md:text-sm font-bold uppercase drop-shadow-md">
          Galleria
        </p>
      </motion.header>

      {/* BARRA DI NAVIGAZIONE MINIMALE A 12 SEGMENTI (Livello 20) */}
      <div className="relative z-20 w-full px-6 md:px-16 pb-12">
        {/* flex e gap-2 distribuiscono i 12 bottoni in modo matematicamente uniforme */}
        <div className="flex gap-2 items-center w-full max-w-4xl mx-auto h-12 group">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="flex-1 h-full flex items-center justify-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            >
              <span 
                className={`w-full transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? "bg-brand-primary h-2 shadow-[0_0_10px_rgba(8,89,74,0.8)]" 
                    : "bg-white/50 h-[2px] group-hover:h-2" 
                }`}
              />
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}