// app/progetto/components/TechnicalStudies.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function TechnicalStudies() {
  const [currentIndex, setCurrentIndex] = useState(0);

  /* 
    L'ARRAY DICHIARATIVO PURO (Solo Quote):
    Rimossi i render come richiesto. Sequenza da 1 a 12.
  */
  const images = [
    "/q1.avif",
    "/q2.avif",
    "/q3.avif",
    "/q4.avif",
    "/q5.avif",
    "/q6.avif",
    "/q7.avif",
    "/q8.avif",
    "/q9.avif",
    "/q10.avif",
    "/q11.avif",
    "/q12.avif"
  ];

  // LOGICA D'INDICE AUTOMATICA
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  useEffect(() => {
    // Timer a 5 secondi (ottimale per lettura quote)
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [currentIndex]); 

  return (
    // Sfondo chiaro, altezza 100% della viewport
    <section id="ingegneria" className="relative h-[100dvh] w-full bg-[#F9F9F9] overflow-hidden flex flex-col justify-between">
      
      {/* HEADER DELLA GALLERIA (Livello 20) */}
      <motion.header 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-20 pt-32 md:pt-50 px-6 md:px-30 pointer-events-none"
      >
        <p className="font-mono text-brand-dark tracking-[0.3em] text-xs md:text-sm font-bold uppercase drop-shadow-md">
          Disegni Quotati
        </p>
      </motion.header>

      {/* 
        BACKGROUND SCORREVOLE 
        MODIFICHE APPLICATE:
        1. Aggiunti pt-40 pb-24: Tengono l'immagine lontana dal titolo in alto e dai trattini in basso.
        2. px-4 md:px-16: Impediscono all'immagine di toccare i bordi laterali dello schermo.
      */}
      <div className="absolute inset-0 z-0 flex items-center justify-center pt-40 pb-24 px-4 md:px-16">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Specifica tecnica Icaro - Tavola ${currentIndex + 1}`}
              fill
              quality={100}
              sizes="100vw"
              // FONDAMENTALE: object-contain garantisce che il disegno non venga mai tagliato
              className="object-contain"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BARRA DI NAVIGAZIONE A 12 SEGMENTI */}
      <div className="relative z-20 w-full px-6 md:px-16 pb-8 md:pb-12">
        <div className="flex gap-2 items-center w-full max-w-5xl mx-auto h-12 group">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className="flex-1 h-full flex items-center justify-center cursor-pointer opacity-30 hover:opacity-100 transition-opacity"
            >
              <span 
                className={`w-full transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? "bg-brand-dark h-2 md:h-[6px]" 
                    : "bg-brand-dark/40 h-[2px] group-hover:h-[4px]" 
                }`}
              />
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}