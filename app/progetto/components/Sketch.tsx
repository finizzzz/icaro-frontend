// app/progetto/components/Sketch.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function Sketch() {
  
  // 1. IL DIRETTORE D'ORCHESTRA GLOBALE
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Ritardo di 0.2s tra un elemento e l'altro
      }
    }
  };

  // 2. LA "FISICA" DEL SITO
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const ideationFiles = [
    { 
      src: "/sk1.avif", 
      alt: "Schizzo di studio 1", 
      gridClass: "md:col-span-4 md:row-span-2", 
      imageClass: "object-contain object-center" 
    },
    { 
      src: "/sk2.avif", 
      alt: "Schizzo di studio 2", 
      gridClass: "md:col-span-3 md:row-span-2", 
      imageClass: "object-contain object-center" 
    },
    { 
      src: "/sk3.avif", 
      alt: "Schizzo di dettaglio 3", 
      gridClass: "md:col-span-5 md:row-span-2", 
      imageClass: "object-contain object-center" 
    }
  ];

  return (
    /* 
       IL CONTENITORE PADRE
       Gestisce l'innesco. Tutto ciò che è al suo interno e ha varianti
       si animerà in sequenza automatica.
    */
    <motion.section 
      variants={masterContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="relative w-full bg-white pt-24 pb-[16dvh] overflow-hidden flex flex-col items-center"
    >
      
      {/* TITOLOGRAFIA LIGHT MODE */}
      <div className="w-full px-6 md:px-16 lg:px-24 mb-12 md:mb-16 z-10 relative">
        <div className="max-w-4xl">
          
          {/* FIGLIO 1: Entra subito */}
          <motion.p 
            variants={itemReveal}
            className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10"
          >
            Concept
          </motion.p>

          {/* FIGLIO 2: Entra a 0.2s */}
          <motion.h2 
            variants={itemReveal}
            className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark"
          >
            SKETCH <br />
          </motion.h2>
        </div>
      </div>

      {/* 
        LA TELA FULL-BLEED
        Nota: Il div genitore della griglia NON ha più animazioni.
        Lascia semplicemente passare i comandi dal motion.section ai suoi figli.
      */}
      <div className="w-full h-[84dvh] grid grid-cols-1 md:grid-cols-12 md:grid-rows-2 gap-0">
        
        {ideationFiles.map((file, index) => (
          /* 
             FIGLI 3, 4, 5: GLI SCHIZZI
             Animati in sequenza dal map. Saliranno dal basso scivolando dolcemente.
          */
          <motion.div
            key={index}
            variants={itemReveal}
            className={`relative w-full h-full group overflow-hidden bg-white ${file.gridClass}`}
          >
            <Image 
              src={file.src} 
              alt={file.alt} 
              fill 
              quality={100}
              className={`transition-transform duration-1000 group-hover:scale-[1.03] ${file.imageClass}`} 
            />
          </motion.div>
        ))}
        
      </div>

    </motion.section>
  );
}