// app/progetto/components/ConceptPart1.tsx
"use client";

import { motion, Variants } from "framer-motion"; 

export default function ConceptPart1() {
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, x: -40 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    /* 
      MODIFICA 1: IL FULL SCREEN
      Sostituito h-[80vh] con h-[100dvh]. 
      Ora il video coprirà tutto lo schermo, adattandosi dinamicamente anche ai browser mobile.
    */
    <section className="relative h-[100dvh] w-full bg-black overflow-hidden">

      {/* 1. VIDEO IN BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover opacity-80"
        >
          <source src="/video-movimento-progetto.mp4" type="video/mp4" />
        </video>
      </div>

      {/* 2. OVERLAY PER LEGGIBILITÀ */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      {/* 3. TESTO IN SOVRAIMPRESSIONE */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        /* 
          MODIFICA 2: FIX SINTASSI
          Hai scritto "md: pb-24". Tailwind non legge gli spazi dopo i due punti.
          L'ho corretto impostando un padding di base "px-6" (laterale) e "pb-24" (sotto).
        */
        className="absolute inset-0 z-20 flex flex-col items-start justify-end px-6 pb-24 w-full"
      >
        <motion.h1 
          variants={itemVariants}
          className="font-heading font-black text-6xl md:text-[7rem] lg:text-[9rem] text-white px-40 mb-4 text-left"
        >
          CONCEPT.
        </motion.h1>
        
        <motion.p 
          variants={itemVariants}
          className="font-sans text-xl md:text-2xl text-white/90 max-w-2xl leading-relaxed text-left"
        >
          {/* Aggiungi qui il tuo testo quando vorrai */}
        </motion.p>
      </motion.div>
      
    </section>
  );
}