"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [1, 2, 3, 4, 5, 6];

  const next = () => setCurrentIndex((prev) => (prev + 1) % images.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <section id="gallery" className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Aumentato il margine inferiore del blocco titolo da mb-16 a mb-24 */}
      <div className="max-w-6xl mx-auto px-6 mb-24">
        <p className="font-mono text-white/90 tracking-[0.2em] text-xs font-bold uppercase mb-8">
          GALLERY
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-none mb-6 mt-[-10px]">
          Un po' di foto.
        </h2>
      </div>

      {/* Aggiunto un leggero padding superiore (pt-12) al contenitore per distanziare meglio */}
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
                className="absolute w-[500px] h-[350px] bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden shadow-2xl"
              >
                <span className="text-white/20 font-mono text-lg">Render {img}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}