// components/project/InspirationSection.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function InspirationSection() {
  
  // 1. IL DIRETTORE D'ORCHESTRA (Il nostro standard di progetto)
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Ritardo a catena per TUTTI i figli
      }
    }
  };

  // 2. FISICA DEI TESTI (Allineata al resto del sito: y: 50, duration: 1)
  const textReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // 3. FISICA DELL'IMMAGINE (Più lenta e atmosferica)
  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 1.05 },
    show: { 
      opacity: 0.4, 
      scale: 1, 
      transition: { duration: 1.5, ease: "easeOut" } 
    } 
  };

  return (
    <section id="ispirazione" className="py-32 bg-white overflow-hidden relative">
      
      {/* 
        IL CONTENITORE SUPREMO
        Innesca lo stagger per tutta la sezione in un solo colpo.
      */}
      <motion.div 
        variants={masterContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24"
      >
        
        {/* FIGLIO 1: HEADER DI SEZIONE */}
        <motion.header variants={textReveal} className="mb-16 md:mb-24">
          <p className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10">
            L'OMBRA
          </p>
        </motion.header>

        {/* BLOCCO UNICO: TESTO E IMMAGINE SOVRAPPOSTI */}
        <div className="relative min-h-[70vh] flex items-center mb-16">
          
          {/* 
            FIGLIO 2: L'IMMAGINE IN BACKGROUND 
            Riceve automaticamente "show" 0.2s dopo l'header, usando però la sua fisica (imageReveal)
          */}
          <motion.div 
            variants={imageReveal} 
            className="absolute right-[10%] md:right-[5%] lg:right-[5%] top-[-30%] md:top-[-10%] w-[90%] md:w-[50%] aspect-[4/5] md:aspect-square grayscale z-0 pointer-events-none overflow-hidden shadow-2xl"
          >
            <Image 
              src="/masharabiya.avif" 
              alt="L'ombra ancestrale: esempio di Masharabiya" 
              fill 
              className="object-cover object-left" 
            />
          </motion.div>

          {/* CONTENITORE TESTI FOREGROUND */}
          <div className="relative z-10 md:left-24 w-full md:w-2/3">
            
            {/* FIGLIO 3: Titolo Monumentale (Entra 0.4s dopo l'inizio) */}
            <motion.h3 
              variants={textReveal} 
              className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-0 mb-8 text-brand-dark"
            >
              UNA SCELTA EFFICACE E <br /> SOSTENIBILE
            </motion.h3>
            
            {/* FIGLIO 4: Paragrafo (Entra 0.6s dopo l'inizio) */}
            <motion.p 
              variants={textReveal} 
              className="font-sans text-sm md:text-base leading-relaxed text-brand-dark drop-shadow-lg text-left max-w-2xl lg:max-w-l"
            >
              Le antiche civiltà avevano già codificato ciò che i dati odierni confermano: l'ombra è la 'tecnologia' di raffrescamento passivo più antica e a impatto zero di cui disponiamo. <br />È su questo ritorno alle origini che si fonda il nostro progetto. Durante i picchi termici estivi, ripararsi dalla radiazione diretta offre un vantaggio drastico: l'ombra abbatte la temperatura percepita fino a 15°C e impedisce alle superfici urbane di immagazzinare calore, spezzando <br /> di fatto il ciclo delle Isole di Calore.
            </motion.p>

          </div>
        </div>

      </motion.div>
    </section>
  );
}