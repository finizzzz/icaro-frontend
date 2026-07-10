"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"; // <-- Aggiunto l'import vitale per le immagini

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  // 1. Inseriti i percorsi esatti dei tuoi file PNG
  const images = [
    "/new-1.png",
    "/new-2.png",
    "/new-3.png",
    "/new-4.png",
    "/new-5.png",
    "/new-6.png"
  ];

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-24 bg-[#08594A] overflow-hidden relative">
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <p className="font-mono text-white/90 tracking-[0.2em] text-xs font-bold uppercase mb-8">
          GALLERY
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-none mb-6 mt-[-10px]">
          Un po' di foto.
        </h2>
      </div>

      <div className="relative flex items-center justify-center h-[500px] pt-12">
        {/* Frecce di navigazione */}
        <button 
          onClick={prev} 
          className="absolute left-10 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all border border-white/20"
        >
          <ChevronLeft size={32} />
        </button>
        <button 
          onClick={next} 
          className="absolute right-10 z-30 p-4 rounded-full bg-white/10 backdrop-blur-md text-white hover:bg-white/20 transition-all border border-white/20"
        >
          <ChevronRight size={32} />
        </button>

        {/* Carosello */}
        <div className="relative w-full flex items-center justify-center">
          {images.map((img, i) => {
            const offset = (i - currentIndex + images.length) % images.length;
            const isCenter = offset === 0;
            const isVisible = offset === 0 || offset === 1 || offset === images.length - 1;

            if (!isVisible) return null;

            return (
              <motion.div
                key={img}
                initial={false}
                animate={{
                  scale: isCenter ? 1.6 : 1.1,
                  opacity: isCenter ? 1 : 0.5,
                  x: offset === 0 ? 0 : offset === 1 ? 550 : -550,
                  zIndex: isCenter ? 10 : 1,
                  filter: isCenter ? "blur(0px)" : "blur(4px)"
                }}
                transition={{ type: "spring", stiffness: 150, damping: 20 }}
                className="absolute w-[500px] h-[350px] bg-black/20 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl"
              >
              {/* 2. Il componente Image potenziato per la massima qualità */}
              <Image
                  src={img}
                  alt={`Render progetto Icaro ${i + 1}`}
                  fill
                  quality={100} /* <-- 1. Disattiva la compressione, massima qualità */
                  sizes="(max-width: 1200px) 100vw, 1200px" /* <-- 2. Forza Next.js a caricare un file grande */
                  className="object-cover"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}