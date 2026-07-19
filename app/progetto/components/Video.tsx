// app/progetto/components/Video.tsx
"use client";

import { motion, Variants } from "framer-motion"; 
import { Zap } from "lucide-react"; 

export default function Video() {
  
  // Regia delle animazioni: il contenitore fa partire i figli uno dopo l'altro (stagger)
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,   
      },
    },
  };

  // Movimento dei singoli elementi: dal basso (y: 30) verso la loro posizione naturale (y: 0)
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    },
  };

  return (
    <section className="relative h-[80vh] md:h-screen w-full bg-black overflow-hidden">

      {/* ==========================================
          LIVELLO 0: VIDEO BACKGROUND
          ========================================== */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay       
          loop           
          muted          
          playsInline    
          className="w-full h-full object-cover opacity-70" 
          preload="auto"
        >
          {/* Il file deve risiedere in /public/video-movimento-progetto.mp4 */}
          <source src="/video-movimento-progetto.mp4" type="video/mp4" />
          Il tuo browser non supporta i video HTML5.
        </video>
      </div>

      {/* ==========================================
          LIVELLO 1: OVERLAY GRADIENTE
          ========================================== */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />

      {/* ==========================================
          LIVELLO 2: CONTENITORE TESTI ANIMATI
          ========================================== */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="absolute inset-0 z-20 flex flex-col items-start justify-end px-6 md:px-16 pb-24 md:pb-32 max-w-7xl mx-auto text-white"
      >
        
        {/* Etichetta Tecnica */}
        <motion.div 
            variants={itemVariants}
            className="flex items-center gap-2 bg-[#08594A]/80 backdrop-blur-sm px-4 py-2 rounded-full mb-6 border border-white/10"
        >
            <Zap size={16} className="text-white" />
            <span className="font-mono text-xs font-bold tracking-widest uppercase">Sistema Dinamico</span>
        </motion.div>

        {/* Titolo Monumentale */}
        <motion.h1 
          variants={itemVariants}
          className="font-heading font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter leading-[0.9] mb-4 text-left max-w-4xl"
        >
          IL MOVIMENTO <br /> DIVENTA FORMA.
        </motion.h1>
        
        {/* Sottotitolo Descrittivo */}
        <motion.p 
          variants={itemVariants}
          className="font-sans text-lg md:text-xl text-white/90 max-w-2xl leading-relaxed mb-0 text-left"
        >
          Uno studio avanzato sulla cinematica del sistema Icaro. Osserva come la struttura interagisce organicamente con l'ambiente circostante, adattandosi e reagendo alle forze esterne in tempo reale.
        </motion.p>
        
      </motion.div>
    </section>
  );
}