// app/progetto/components/EngineeringSection.tsx
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";

export default function EngineeringSection() {
  
  // 1. IL DIRETTORE D'ORCHESTRA
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  // 2. LA "FISICA" UNIVERSALE DEL TESTO
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // 3. L'EFFETTO "OLOGRAMMA" PER IL BLUEPRINT
  // L'immagine entra sfumando morbidamente e si ingrandisce di un impercettibile 2%
  const blueprintReveal: Variants = {
    hidden: { opacity: 0, scale: 0.98 },
    show: { 
      opacity: 0.8, // Mantiene l'opacità originale che avevi impostato
      scale: 1, 
      transition: { duration: 1.5, ease: "easeOut" } 
    }
  };

  return (
    <section id="ingegneria" className="relative w-full h-[100dvh] overflow-hidden bg-[#F9F9F9]">
      
      {/* 
        IL BACKGROUND ANIMATO
        Appare con la sua variante specifica non appena la sezione entra a schermo
      */}
      <motion.div 
        variants={blueprintReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="absolute inset-0 z-0"
      >
        <Image 
          src="/QUOTE.PNG" 
          alt="Blueprint Quote e Ingombri" 
          fill 
          className="object-contain" 
          quality={100} 
          sizes="100vw"
        />
      </motion.div>

      {/* IL CONTENITORE DELLA COREOGRAFIA TESTUALE */}
      <div className="absolute inset-0 z-20 flex flex-col items-end text-right p-6 md:p-16 lg:p-24 w-full pointer-events-none">
        
        {/* 
          IL BLOCCO DI TESTO ALLINEATO IN BASSO
          mt-auto: Il vero "game changer". Assorbe tutto lo spazio vuoto superiore.
          pointer-events-auto: Riattiva la possibilità di selezionare il testo.
        */}
        <motion.div 
          variants={masterContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="mt-auto flex flex-col items-end w-full max-w-2xl pointer-events-auto"
        >
          
          <motion.p 
            variants={itemReveal}
            className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6"
          >
            Quote
          </motion.p>
          
          <motion.h2 
            variants={itemReveal}
            className="font-heading font-black uppercase text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark"
          >
            INGOMBRO.
          </motion.h2>
          
          {/* 
            IL TESTO CONDENSATO: 
            Dritto al punto, risalta le specifiche tecniche e l'analisi ergonomica.
            Allineato a destra (text-right) per "chiudere" visivamente la pagina contro il bordo.
          */}
          <motion.p 
            variants={itemReveal}
            className="text-right font-sans text-brand-dark/80 text-lg md:text-xl leading-relaxed mb-4 md:mb-10"
          >
            Il footprint compatto (700x2200 mm) si integra all'arredo urbano senza intralciare i pedoni, massimizzando l'ombra con uno sbalzo di 1620 mm. A livello ergonomico, il fulcro cinematico a 1050 mm è biomeccanicamente calcolato per un azionamento fluido del riduttore, sia in piedi che da seduti.
          </motion.p>
          
        </motion.div>
      </div>

    </section>
  );
}