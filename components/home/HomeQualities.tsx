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
    // overflow-hidden qui sul padre principale salva la vita contro qualsiasi sbavatura laterale
    <section id="progetto" className="py-20 md:py-32 bg-white overflow-hidden relative">
      
      {/* GABBIA GLOBALE: Padding standardizzati. Niente px-30. */}
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24">
        
        {/* HEADER DI SEZIONE */}
        <header className="mb-20 md:mb-32">
          <p className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10">
            Il progetto
          </p>
        </header>

        {/* =========================================================
            BLOCCO 01 (TESTO A SINISTRA)
            ========================================================= */}
        <div className="relative min-h-[70vh] flex items-center justify-start mb-24 md:mb-32">
          
          {/* IMMAGINE: Su mobile abbassiamo l'opacità globale a 0.3 (opacity-30) per non disturbare il testo. 
              Su desktop torna visibile (lg:opacity-100) perché il testo ha spazio per stare di lato. */}
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute right-[10%] md:right-[10%] top-[-20%] md:top-[-0%] lg:top-[-20%] w-[90%] md:w-[70%] lg:w-[50%] aspect-square grayscale z-0 pointer-events-none opacity-30 lg:opacity-100"
          >
            <Image src="/add-on-new.avif" alt="Render Add-on" fill className="object-cover" />
          </motion.div>

          {/* TESTO: Allargato a w-full su mobile e md:w-3/4 su desktop per ospitare i font enormi */}
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-3/4"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">01.</span>
            {/* break-words: Se la parola è enorme, il browser la spezza per salvare la UI */}
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark break-words">
              una nuova vita <br /> alle PANCHINE
            </h3>
            <p className="font-sans text-sm md:text-xl leading-relaxed text-brand-dark/80 drop-shadow-md text-left max-w-2xl">
              Progettato per integrarsi perfettamente sulle infrastrutture esistenti. Trasforma le normali panchine pubbliche in micro-oasi climatiche senza la necessità di smantellare l'arredo urbano attuale.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            BLOCCO 02 (TESTO A DESTRA, ALLINEATO SINISTRA)
            ========================================================= */}
        {/* Il padre ha justify-end: butta tutto il contenuto a destra */}
        <div className="relative min-h-[70vh] flex items-center justify-end mb-24 md:mb-32">
          
          {/* Immagine ancorata a sinistra */}
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute left-0 top-[0%] lg:top-[10%] w-[100%] md:w-[90%] lg:w-[60%] aspect-video grayscale z-0 pointer-events-none opacity-30 lg:opacity-100"
          >
            <Image src="/new-3.avif" alt="Analisi Materiali" fill className="object-cover" />
          </motion.div>
          
          {/* Rimosso md:left-84 (che generava overflow). Usiamo flex flex-col items-start per allineare a sinistra */}
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-3/4 lg:w-2/3 flex flex-col items-start text-left"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">02.</span>
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark break-words">
              ricerca sui <br /> MATERIALI
            </h3>
            <p className="font-sans text-sm md:text-xl leading-relaxed text-brand-dark/80 drop-shadow-md text-left max-w-2xl">
              Ogni componente è ingegnerizzato per garantire zero manutenzione nel tempo e altissime prestazioni termiche. Le superfici respingono l'irraggiamento resistendo in modo assoluto all'usura.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            BLOCCO 03 (TESTO A SINISTRA)
            ========================================================= */}
        <div className="relative min-h-[70vh] flex items-center justify-start mb-24 md:mb-32">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute right-0 md:right-[30%] lg:right-[0%] top-[-10%] md:top-[-50%] lg:top-[-25%] w-[100%] md:w-[80%] lg:w-[70%] aspect-square grayscale z-0 pointer-events-none opacity-30 lg:opacity-100"
          >
            <Image src="/new-4.avif" alt="Installazione" fill className="object-contain object-center" />
          </motion.div>
          
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-3/4"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">03.</span>
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark break-words">
              zero <br /> cantieri
            </h3>
            <p className="font-sans text-sm md:text-xl leading-relaxed text-brand-dark/80 drop-shadow-md text-left max-w-2xl">
              Il design modulare permette un sistema di montaggio estremamente semplificato. Minimizza i tempi di intervento riducendo a zero i disagi per la viabilità cittadina.
            </p>
          </motion.div>
        </div>

        {/* =========================================================
            BLOCCO 04 (TESTO A DESTRA, ALLINEATO SINISTRA)
            ========================================================= */}
        <div className="relative min-h-[70vh] flex items-center justify-end mb-16">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute left-0 top-[-20%] lg:top-[-5%] w-[90%] md:w-[60%] lg:w-[60%] aspect-square grayscale z-0 pointer-events-none opacity-30 lg:opacity-100"
          >
            <Image src="/new-2.avif" alt="Ombra Perenne" fill className="object-cover object-center" />
          </motion.div>
          
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-3/4 lg:w-2/3 flex flex-col items-start text-left"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">04.</span>
            <h3 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark break-words">
              OMBRA <br /> COSTANTE
            </h3>
            <p className="font-sans text-sm md:text-xl leading-relaxed text-brand-dark/80 drop-shadow-md text-left max-w-2xl ">
              Inseguendo la traiettoria solare tramite un sistema di inclinazione manuale intuitivo, l'architettura garantisce una zona d'ombra confortevole in ogni istante della giornata.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}