// components/home/HomeAbout.tsx
"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

export default function HomeAbout() {
  
  // 1. IL DIRETTORE D'ORCHESTRA (Stesso identico ritmo delle altre sezioni)
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  // 2. LA "FISICA" DEL TUO SITO (Costante universale del progetto)
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="about" className="bg-black pt-32 md:pt-40 w-full relative flex flex-col overflow-hidden">
      
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24 mb-24">
        
        {/* 
          IL CONTENITORE PADRE
          Innesca l'animazione quando la sezione entra nello schermo (-100px di margine).
        */}
        <motion.div 
          variants={masterContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="max-w-4xl"
        >
          
          {/* FIGLIO 1: L'Occhiello */}
          <motion.p 
            variants={itemReveal}
            className="font-mono text-brand-primary tracking-[0.3em] text-sm font-bold uppercase mb-6 md:mb-10"
          >
            Chi Sono
          </motion.p>

          {/* FIGLIO 2: Il Titolo Gigante */}
          <motion.h2 
            variants={itemReveal}
            className="font-heading font-black uppercase text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-white"
          >
            ABOUT <br /> ME.
          </motion.h2>
          
          {/* FIGLIO 3: La Descrizione */}
          <motion.p 
            variants={itemReveal}
            className="text-justify font-sans text-white/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10"
          >
           Sono uno studente al secondo anno del corso di Design del Prodotto Industriale all'Università degli Studi di Ferrara. <br /> Se il progetto ti è piaciuto ti invito a dare un'occhiata alla sezione about me per metterci in contatto!
          </motion.p>
          
          {/* 
            FIGLIO 4: Il Bottone
            Nota ingegneristica: Invece di forzare <motion.Link>, usiamo un <motion.div> 
            impostato su 'inline-block' per avvolgere il Link di Next.js. È la pratica più sicura.
          */}
          <motion.div variants={itemReveal} className="inline-block">
            <Link 
              href="/about-me" 
              className="group inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:bg-brand-dark hover:text-white hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Scopri il mio percorso
            </Link>
          </motion.div>

        </motion.div>
      </div>

    </section>
  );
}