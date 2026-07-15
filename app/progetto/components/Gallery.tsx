// components/Gallery.tsx
"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // 1. Array espanso a 10 immagini. Assicurati di avere questi file in /public
  const images = [
    "/new-1.png", "/new-2.png", "/new-3.png", "/new-4.png", "/new-5.png",
    "/new-6.png", "/new-7.png", "/new-8.png", "/new-9.png", "/new-10.png"
  ];

  // Funzione per andare avanti
  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);

  // 2. AUTOPLAY: Il cuore pulsante della galleria moderna
  // Questo useEffect lancia la funzione 'next' ogni 4000 millisecondi (4 secondi)
  useEffect(() => {
    const timer = setInterval(next, 4000);
    // Cleanup: quando il componente viene distrutto o si aggiorna, puliamo il timer
    return () => clearInterval(timer);
  }, [currentIndex]); // Si resetta ogni volta che cambia la foto

  return (
    /* Contenitore Full-Screen */
    <section id="gallery" className="relative h-[100dvh] w-full bg-black overflow-hidden flex flex-col justify-between">
      
      {/* 
        3. IMMAGINE DI BACKGROUND (CROSSFADE)
        AnimatePresence gestisce le animazioni degli elementi che "spariscono" dal DOM.
      */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex} // Cambiare key forza React a ricreare l'elemento, scatenando l'animazione
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 h-full w-full"
          >
            <Image
              src={images[currentIndex]}
              alt={`Icaro render ${currentIndex + 1}`}
              fill
              quality={100}
              sizes="100vw"
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
        
        {/* Gradiente nero per garantire sempre la leggibilità del testo e della barra */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-transparent to-black/80 z-10" />
      </div>

      {/* 
        4. TESTO AD ALTO IMPATTO (Posizionato in alto a sinistra)
      */}
      <div className="relative z-20 px-6 md:px-16 pt-24 md:pt-32 pointer-events-none">
        <p className="font-mono text-brand-primary tracking-[0.3em] text-sm font-bold uppercase mb-4 drop-shadow-md">
          07. Gallery
        </p>
        <h2 className="font-heading font-black text-5xl md:text-7xl lg:text-8xl text-white leading-[0.85] tracking-tighter drop-shadow-xl">
          VISIONE <br /> TOTALE.
        </h2>
      </div>

      {/* 
        5. LA BARRA DI NAVIGAZIONE MINIMALE (In basso)
      */}
      <div className="relative z-20 w-full px-6 md:px-16 pb-12">
        <div className="flex gap-2 items-center w-full max-w-4xl mx-auto h-12 group">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              // L'hitbox: h-full assicura che il bottone sia alto 48px (facile da cliccare)
              // ma la linea visiva dentro (lo span) cambia altezza con l'hover.
              className="flex-1 h-full flex items-center justify-center cursor-pointer opacity-50 hover:opacity-100 transition-opacity"
            >
              <span 
                className={`w-full transition-all duration-300 rounded-full ${
                  currentIndex === index 
                    ? "bg-brand-primary h-2 shadow-[0_0_10px_rgba(8,89,74,0.8)]" // Linea attiva (Verde brand, spessa)
                    : "bg-white/50 h-[2px] group-hover:h-2" // Linea inattiva (sottile, si ingrandisce se il mouse entra nell'area)
                }`}
              />
            </button>
          ))}
        </div>
      </div>

    </section>
  );
}