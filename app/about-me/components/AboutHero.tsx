// components/about-me/AboutHero.tsx
"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function AboutHero() {
  
  // 1. IL DIRETTORE D'ORCHESTRA (Per l'ingresso OnLoad)
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 2. LA "FISICA" DEL SITO (Costante universale)
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    /* 
       IL CONTENITORE PADRE
       Usiamo `animate="show"` per innescare tutto appena la pagina viene montata.
    */
    <motion.section 
      variants={masterContainer}
      initial="hidden"
      animate="show"
      className="relative w-full h-[100dvh] bg-black flex flex-col justify-end px-6 md:px-16 pb-24 md:pb-32 overflow-hidden"
    >
      
      {/* OVERLAY PER LEGGIBILITÀ (Aggiunto pointer-events-none per sicurezza sui click) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10 pointer-events-none" />

      {/* 1. NAVIGAZIONE (In alto a sinistra) */}
      <motion.div variants={itemReveal} className="absolute top-12 left-6 md:left-16 z-20">
        <Link href="/" className="group inline-flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300 font-mono text-xs tracking-widest uppercase">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Torna alla Home
        </Link>
      </motion.div>

      {/* 3. TESTI */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        
        <motion.p 
          variants={itemReveal}
          className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10"
        >
          About Me
        </motion.p>
        
        <motion.h1 
          variants={itemReveal}
          className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-white"
        >
          Filippo.
        </motion.h1>
        
        <motion.p 
          variants={itemReveal}
          className="font-sans text-sm md:text-2xl leading-relaxed text-white/80 drop-shadow-lg text-left w-full"
        >
          Studente di Design del Prodotto
        </motion.p>
        
      </div>
      
    </motion.section>
  );
}