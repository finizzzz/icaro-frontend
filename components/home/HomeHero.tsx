// components/home/HomeHero.tsx
"use client";

import { motion, Variants } from "framer-motion"; 
import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function HomeHero() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
        delayChildren: 0.3,   
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 }, // Entrata laterale fluida (da sinistra)
    show: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative h-screen w-full bg-black overflow-hidden">

      {/* 1. IL VIDEO IN BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/video-cutted.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. OVERLAY GRAFICO */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      {/* 3. CONTENITORE DEL TESTO (La Regia) */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        // In un flex-col, items-start assicura che TUTTI i blocchi dentro siano bloccati sul margine sinistro.
        className="absolute inset-0 z-20 flex flex-col items-start justify-end px-6 md:px-16 pb-24 md:pb-32 max-w-7xl mx-auto"
      >

        
        {/* Titolo Gigante */}
        <motion.h1 
          variants={itemVariants}
          className="font-heading font-black text-5xl md:text-[6rem] lg:text-[8rem] text-white mb-6 text-left"
        >
          ICARO.
        </motion.h1>
        
        {/* =================================================================
            MODIFICA 2: IL SOTTOTITOLO
            - Rimosso "text-justify hyphens-auto".
            - Inserito "text-left" per allineare tutto a bandiera a sinistra.
            ================================================================= */}
        <motion.p 
          variants={itemVariants}
          className="font-sans text-sm md:text-base leading-relaxed text-white/80 drop-shadow-lg text-left w-full mb-20"
        >
         Dove il sole non arriva.
         Per una città più inclusiva.
        </motion.p>

        {/* =================================================================
            MODIFICA 3: IL BOTTONE
            - Aggiunto "hover:scale-110" per farlo ingrandire del 10%
            ================================================================= */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 items-start">
          <Link 
            href="/progetto" 
            className="group flex items-center gap-4 bg-white text-brand-black px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:bg-[#08594A] hover:text-white hover:scale-105"
          >
            <span>Scopri il sistema</span>
            <ArrowDown size={18} className="group-hover:translate-y-1 transition-transform group-hover:scale-105" />
          </Link>
        </motion.div>
        
      </motion.div>
    </section>
  );
}