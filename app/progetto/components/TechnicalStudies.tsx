// app/progetto/components/EngineeringSection.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function EngineeringSection() {
  
  // 1. IL DIRETTORE D'ORCHESTRA (Invariato)
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // 2. LA "FISICA" UNIVERSALE DEL TESTO (Invariato)
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // 3. L'EFFETTO "OLOGRAMMA" PER IL BLUEPRINT (Invariato)
  const blueprintReveal: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { 
      opacity: 0.8, 
      scale: 1, 
      transition: { duration: 1.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="ingegneria" className="relative w-full h-[100dvh] overflow-hidden bg-[#F9F9F9]">
      
      {/* IL BACKGROUND ANIMATO (Invariato) */}
      <motion.div 
        variants={blueprintReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute inset-0 z-0 mb-100 md:mb-0"
      >
        <Image 
          src="/quote.png" 
          alt="Blueprint Quote e Ingombri" 
          fill 
          className="object-contain" 
          quality={100} 
          sizes="100vw"
        />
      </motion.div>

      {/* IL CONTENITORE DELLA COREOGRAFIA TESTUALE */}
      <div className="absolute inset-0 z-20 flex flex-col items-end text-left p-6 md:p-16 lg:p-24 w-full pointer-events-none">
        
        {/* 
          IL BLOCCO DI TESTO ALLINEATO IN BASSO
          MODIFICHE APPLICATE:
          1. items-end -> items-start: Allinea perfettamente a sinistra l'occhiello, il titolo e il testo.
          2. Aggiunto md:mr-12 lg:mr-20: Sposta fisicamente l'intera gabbia verso sinistra, allontanandola dal bordo.
        */}
        <motion.div 
          variants={masterContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-auto flex flex-col items-start w-full max-w-2xl pointer-events-auto md:mr-12 lg:mr-30"
        >
          
          <motion.p 
            variants={itemReveal}
            className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-0"
          >
            Quote
          </motion.p>
          
          <motion.h2 
            variants={itemReveal}
            className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark"
          >
            INGOMBRO.
          </motion.h2>
          
          <motion.p 
            variants={itemReveal}
            className="font-sans text-sm md:text-base leading-relaxed text-brand-dark/80 drop-shadow-lg text-left w-full"
          >
            Il footprint compatto (700x2200 mm) si integra all'arredo urbano senza intralciare i pedoni, massimizzando l'ombra con uno sbalzo di 1620 mm. A livello ergonomico, il fulcro cinematico a 1050 mm è biomeccanicamente calcolato per un azionamento fluido del riduttore, sia in piedi che da seduti.
          </motion.p>
          
        </motion.div>
      </div>

    </section>
  );
}