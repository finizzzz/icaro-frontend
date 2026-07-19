// components/home/HomeCompetitors.tsx
"use client";

import { XCircle, CheckCircle, BusFront, Sun, Building2, Tent } from "lucide-react"; 
import Image from "next/image";
import { motion, Variants } from "framer-motion"; // Aggiunto import Framer Motion

export default function HomeCompetitors() {
  
  // 1. IL DIRETTORE D'ORCHESTRA STANDARD
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2 // Ritardo a catena per testi, card e scheda finale
      }
    }
  };

  // 2. LA "FISICA" DEL SITO
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  const competitors = [
    {
      title: "Arredo Urbano Standard",
      subtitle: "(Es. Pensiline dei Bus)",
      icon: <BusFront size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/pensilina.avif", 
      flaw: "Effetto serra e totale staticità.",
      description: "Coperture traslucide che intrappolano il calore e non impediscono il passaggio dei raggi solari."
    },
    {
      title: "Parasole da giardino",
      subtitle: "(Es. Extremis Hopper)",
      icon: <Sun size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/extremis.avif", 
      flaw: "Protezione solo zenitale.",
      description: "Costosi e destinati a spazi privati. La tenda orizzontale non protegge quando il sole si abbassa sull'orizzonte."
    },
    {
      title: "Landmark Architettonici",
      subtitle: "(Es. Metropol Parasol)",
      icon: <Building2 size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/metropol.avif",
      flaw: "Invasività e costi insostenibili.",
      description: "Straordinari ma impossibili da replicare in modo capillare per risolvere il problema nelle periferie."
    },
    {
      title: "Strutture Mobili",
      subtitle: "(Es. Mollusc Tent)",
      icon: <Tent size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/mollusco.avif", 
      flaw: "Contesto non urbano.",
      description: "Meccanica interessante ma materiali e concezione non adatti agli abusi dello spazio pubblico."
    }
  ];

  return (
    <section id="competitor" className="py-24 px-6 md:px-16 bg-[#F9F9F9] text-brand-black overflow-hidden">
      
      {/* 
        IL CONTENITORE SUPREMO
        Comanda l'intera sequenza di questa sezione allo scroll.
      */}
      <motion.div 
        variants={masterContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="max-w-6xl mx-auto"
      >
        
        {/* FIGLIO 1: L'Occhiello */}
        <motion.p variants={itemReveal} className="font-mono text-brand-dark text-center tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">
          Analisi di Mercato
        </motion.p>
        
        {/* FIGLIO 2: Il Titolo */}
        <motion.h2 variants={itemReveal} className="font-heading font-bold text-4xl md:text-5xl text-brand-dark text-center mb-8">
          I limiti delle soluzioni attuali.
        </motion.h2>

        {/* GRIGLIA COMPETITOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {competitors.map((item, index) => (
            /* 
               FIGLI 3, 4, 5 e 6: LE CARD
               Trasformiamo il contenitore della card in un motion.div.
               Il ciclo .map assegna in automatico la sequenza di apparizione a ogni card.
            */
            <motion.div 
              key={index} 
              variants={itemReveal}
              className="group bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:bg-[#08594A] overflow-hidden cursor-pointer"
            >
              
              <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm group-hover:bg-white/20 transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-lg leading-tight text-brand-dark group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                <p className="font-mono text-xs text-brand-primary group-hover:text-white/80 transition-colors duration-500 mb-6 mt-1">
                  {item.subtitle}
                </p>
                
                <div className="flex gap-3 items-start mt-auto pt-4 border-t border-brand-primary/70 group-hover:border-white/20 transition-colors duration-500 w-full">
                  <XCircle size={18} className="text-[#08594A] group-hover:text-white flex-shrink-0 mt-0.5 transition-colors duration-500" />
                  <div>
                    <p className="font-sans text-sm font-bold text-brand-dark group-hover:text-white mb-2 transition-colors duration-500">
                      {item.flaw}
                    </p>
                    <p className="font-sans text-xs text-brand-primary group-hover:text-white/90 leading-relaxed text-justify hyphens-auto transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

            </motion.div>
          ))}

        </div>

        {/* 
          FIGLIO 7: SCHEDA EROE (ICARO)
          Appare per ultima, come trionfo finale dopo aver smontato le soluzioni competitor.
        */}
        <motion.div 
          variants={itemReveal}
          className="group bg-[#08594A] hover:bg-black rounded-3xl p-8 md:p-14 shadow-2xl text-white flex flex-col md:flex-row items-center gap-12 justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.05] cursor-pointer ring-1 ring-white/10 hover:ring-[#08594A]/50"
        >
          
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-[#08594A]/50 group-hover:scale-150" />

          <div className="max-w-2xl relative z-10">
            <p className="font-mono text-white group-hover:text-[#08594A] transition-colors duration-500 tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-4 md:mb-4">
              La Soluzione
            </p>
            <h3 className="font-heading font-black text-4xl md:text-5xl text-white mb-8">
              ICARO.
            </h3>
            <p className="font-sans text-sm md:text-base leading-relaxed text-white drop-shadow-lg text-left w-full">
              Non sostituisce l'arredo esistente, ma lo evolve. Un modulo Add-on per panchine pubbliche che permette all'utente di inclinare la copertura, garantendo ombra dinamica a basso costo e zero invasività urbana.
            </p>
          </div>

          <div className="relative z-10 bg-black/20 group-hover:bg-white/10 backdrop-blur-md border border-white/10 text-white p-8 rounded-2xl flex flex-col gap-4 min-w-[280px] shadow-2xl transition-colors duration-500">
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Installazione Add-on</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Copertura Regolabile</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Zero Cantieri</span>
            </div>
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Design per il Pubblico</span>
            </div>
          </div>

        </motion.div>
        
      </motion.div>
    </section>
  );
}