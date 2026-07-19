// app/progetto/components/HomeQualities.tsx
"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function HomeQualities() {
  
  const textReveal: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    show: { opacity: 0.6, scale: 1, transition: { duration: 1.5, ease: "easeOut" } } 
  };

  return (
    <section id="progetto" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24">
        
        {/* HEADER DI SEZIONE: IL PROGETTO */}
        <header className="mb-20 md:mb-32">
          <p className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10">
            Il progetto
          </p>
        </header>

        {/* BLOCCO 01 (Testo a Sinistra - Invariato) */}
        <div className="relative min-h-[70vh] flex items-center px-6 md:px-16 lg:px-24 mb-32">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute right-[-10%] md:right-[15%] top-[-10%] w-[80%] md:w-[45%] aspect-square grayscale z-0 pointer-events-none"
          >
            <Image src="/add-on-new.png" alt="Render Add-on" fill className="object-cover" />
          </motion.div>

          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">01.</span>
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              ADD-ON <br /> UNIVERSALE
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-brand-dark/80 drop-shadow-lg text-left max-w-2xl">
              Progettato per integrarsi perfettamente sulle infrastrutture esistenti. 
              Trasforma le normali panchine pubbliche in micro-oasi climatiche senza 
              la necessità di smantellare l'arredo urbano attuale.
            </p>
          </motion.div>
        </div>

        {/* BLOCCO 02 (SPOSTATO A DESTRA, MA TESTO ALLINEATO A SINISTRA) */}
        {/* Il padre mantiene 'justify-end' per spingere l'intera scatola sulla destra */}
        <div className="relative min-h-[70vh] flex items-center justify-end px-6 md:px-16 lg:px-24 mb-32">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute left-[-10%] md:left-[15%] top-[20%] w-[90%] md:w-[50%] aspect-video grayscale z-0 pointer-events-none"
          >
            <Image src="/new-3.png" alt="Analisi Materiali" fill className="object-cover" />
          </motion.div>
          
          {/* 
            MODIFICA FONDAMENTALE: 
            Cambiato 'items-end text-right' in 'items-start text-left'
            Gli elementi ora si ancorano a sinistra all'interno della gabbia w-2/3 che sta a destra dello schermo.
          */}
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3 flex flex-col items-start text-left md:left-84"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">02.</span>
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              STUDIO DEI <br /> MATERIALI
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-brand-dark/80 drop-shadow-lg text-left max-w-2xl">
              Ogni componente è ingegnerizzato per garantire zero manutenzione nel tempo e altissime prestazioni termiche. Le superfici respingono l'irraggiamento resistendo in modo assoluto all'usura.
            </p>
          </motion.div>
        </div>

        {/* BLOCCO 03 (Testo a Sinistra - Invariato) */}
        <div className="relative min-h-[70vh] flex items-center px-6 md:px-16 lg:px-24 mb-32">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute right-[-10%] md:right-[10%] top-[-30%] w-[80%] md:w-[70%] aspect-square grayscale z-0 pointer-events-none"
          >
            <Image src="/new-4.png" alt="Installazione" fill className="object-contain object-center" />
          </motion.div>
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">03.</span>
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              CANTIERE <br /> INVISIBILE
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-brand-dark/80 drop-shadow-lg text-left max-w-2xl">
              Il design modulare permette un systema di montaggio estremamente semplificato. <br />Minimizza i tempi di intervento riducendo a zero i disagi per la viabilità cittadina.
            </p>
          </motion.div>
        </div>

        {/* BLOCCO 04 (SPOSTATO A DESTRA, MA TESTO ALLINEATO A SINISTRA) */}
        {/* Il padre mantiene 'justify-end' per la stabilità asimmetrica dello schermo */}
        <div className="relative min-h-[70vh] flex items-center justify-end px-6 md:px-16 lg:px-24 mb-16">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute left-[-10%] md:left-[30%] top-[5%] w-[90%] md:w-[35%] aspect-square grayscale z-0 pointer-events-none"
          >
            <Image src="/new-2.png" alt="Ombra Perenne" fill className="object-cover object-center" />
          </motion.div>
          
          {/* 
            MODIFICA FONDAMENTALE: 
            Cambiato 'items-end text-left' in 'items-start text-left'
            Garantisce che il titolo enorme si allinei perfettamente a sinistra insieme a numero e paragrafo.
          */}
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3 flex flex-col items-start text-left md:left-84"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">04.</span>
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              OMBRA <br /> COSTANTE
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-brand-dark/80 drop-shadow-lg text-left max-w-2xl">
              Inseguendo la traiettoria solare tramite un sistema di inclinazione manuale intuitivo, l'architettura garantisce una zona d'ombra confortevole in ogni istante della giornata.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}