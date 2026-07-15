// components/project/InspirationSection.tsx
"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function InspirationSection() {
  
  // 1. DEFINIZIONE DELLE ANIMAZIONI (Mutuate da HomeQualities)
  const textReveal: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    show: { opacity: 0.6, scale: 1, transition: { duration: 1.5, ease: "easeOut" } } 
  };

  return (
    <section id="ispirazione" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24">
        
        {/* HEADER DI SEZIONE */}
        <header className="mb-20 md:mb-32">
          <p className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10">
            L'OMBRA
          </p>
        </header>

        {/* BLOCCO UNICO: TESTO E IMMAGINE SOVRAPPOSTI */}
        <div className="relative min-h-[70vh] flex items-center px-6 md:px-16 lg:px-24 mb-16">
          
          {/* L'IMMAGINE IN BACKGROUND (Spinta a destra) */}
          <motion.div 
            variants={imageReveal} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            /* Posizionamento asimmetrico: esce leggermente a destra */
            className="absolute right-[-10%] md:right-[5%] top-[-10%] md:top-[0%] w-[90%] md:w-[50%] aspect-[4/5] md:aspect-square grayscale z-0 pointer-events-none overflow-hidden shadow-2xl"
          >
            <Image 
              src="/masharabiya.jpg" 
              alt="L'ombra ancestrale: esempio di Masharabiya" 
              fill 
              className="object-cover object-left" 
            />
          </motion.div>

          {/* IL TESTO IN FOREGROUND (Allineato a sinistra, sopra l'immagine) */}
          <motion.div 
            variants={textReveal} 
            initial="hidden" 
            whileInView="show" 
            viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3"
          >
            
            {/* Titolo Monumentale */}
            <h3 className="font-heading font-black uppercase text-6xl md:text-[7rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              L'OMBRA <br /> ANCESTRALE
            </h3>
            
            {/* Paragrafo, rimosso text-justify per text-left */}
            <p className="text-justify font-sans text-brand-dark/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Per secoli, l'ombra non è stata solo assenza di luce, ma un vero e proprio strumento architettonico di difesa. 
              Il controllo dell'ombra abbatte la temperatura radiante, creando microclimi vivibili. Il progetto Icaro recupera 
              questa saggezza millenaria, evolvendola in un sistema dinamico.
            </p>


          </motion.div>
        </div>

      </div>
    </section>
  );
}