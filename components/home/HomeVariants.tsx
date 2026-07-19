// components/home/HomeVariants.tsx
"use client";

import Image from "next/image";
import { Check, Puzzle, Map } from "lucide-react"; 
import { motion, Variants } from "framer-motion";

export default function HomeVariants() {
  
  // 1. IL DIRETTORE D'ORCHESTRA GLOBALE
  // Gestisce l'ingresso di OGNI elemento della sezione (testi e card)
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Ogni elemento parte 0.2s dopo il precedente
      }
    }
  };

  // 2. LA "FISICA" CONDIVISA (Copiata da HomeProblem)
  // Durata 1 secondo, partenza da y: 50, curva Bézier super fluida
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section id="varianti" className="pt-24 pb-40 px-6 md:px-16 bg-[#F9F9F9] overflow-hidden">
      
      {/* 
        IL CONTENITORE MASTER 
        Qui mettiamo initial, whileInView e viewport. 
        Tutti i motion.div interni erediteranno l'animazione automaticamente.
      */}
      <motion.div 
        variants={masterContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        
        {/* ZONA TESTO */}
        <div className="text-center mb-16">
          {/* FIGLIO 1: Entra subito */}
          <motion.h2 
            variants={itemReveal}
            className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-8"
          >
            Due soluzioni, una visione.
          </motion.h2>

          {/* FIGLIO 2: Entra a 0.2s */}
          <motion.p 
            variants={itemReveal}
            className="font-sans text-sm md:text-base leading-relaxed text-brand-dark/80 drop-shadow-lg text-center w-full"
          >
            Icaro è un'infrastruttura democratica, progettata per adattarsi organicamente alle diverse esigenze urbane.
          </motion.p>
        </div>

        {/* ZONA CARD */}
        <div className="grid md:grid-cols-2 gap-10">
          
          {/* ==========================================
              FIGLIO 3: CARD ADD-ON (Entra a 0.4s)
              ========================================== */}
          <motion.div 
            variants={itemReveal}
            className="group rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-brand-dark hover:scale-[1.05] hover:z-10 transition-all duration-500 flex flex-col overflow-hidden cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="/add-on-new.avif" 
                alt="Versione Add-on" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 group-hover:bg-brand-primary/20 rounded-full text-brand-primary transition-colors duration-500">
                  <Puzzle size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark group-hover:text-white transition-colors duration-500">
                  Versione Add-on
                </h3>
              </div>

              <p className="text-left font-sans text-brand-dark/80 group-hover:text-white/80 text-sm leading-relaxed mb-6 transition-colors duration-500">
                Si installa sopra alle sedute urbane preesistenti. Ideale per il retrofitting intelligente, restituisce ai cittadini spazi altrimenti inutilizzabili conferendone una nuova vita.
              </p>
              
              <ul className="mt-auto space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Tempi di installazione rapidi e zero demolizioni.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Riutilizzo delle strutture già esistenti a costo contenuto.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ==========================================
              FIGLIO 4: CARD STAND-ALONE (Entra a 0.6s)
              ========================================== */}
          <motion.div 
            variants={itemReveal}
            className="group rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-brand-dark hover:scale-[1.05] hover:z-10 transition-all duration-500 flex flex-col overflow-hidden cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="/alone-new.avif" 
                alt="Versione Autonoma" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 group-hover:bg-brand-primary/20 rounded-full text-brand-primary transition-colors duration-500">
                  <Map size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark group-hover:text-white transition-colors duration-500">
                  Versione Autonoma
                </h3>
              </div>

              <p className="text-left font-sans text-brand-dark/80 group-hover:text-white/80 text-sm leading-relaxed mb-6 transition-colors duration-500">
                Concepita per l'installazione ex-novo. Porta comfort climatico e sedute ergonomiche in piazze e parchi sprovvisti di arredo.
              </p>
              
              <ul className="mt-auto space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Sistema modulare con sedute a incastro con possibilità di personalizzazione.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Creazione di zone d'ombra in zone non fornite.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
}