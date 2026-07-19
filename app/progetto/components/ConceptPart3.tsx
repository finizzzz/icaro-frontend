// app/progetto/components/ConceptPart3.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function ConceptPart3() {
  // MOTORE DI SCROLLING (Invariato)
  const techRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: techRef,
    offset: ["start start", "end end"]
  });

  // MAPPATURA OPACITÀ SCENE (Invariata)
  const scene1Op = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const scene2Op = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const scene3Op = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

  const txtY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={techRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ========================================================
            SCENA 1: CERNIERE (FOTO A DESTRA, TESTO A SINISTRA)
            ======================================================== */}
        <motion.div 
          style={{ opacity: scene1Op }} 
          className="absolute inset-0 flex flex-col md:flex-row-reverse z-[1] bg-black"
        >
          {/* 
            MODIFICA MACRO: Il box immagine passa da w-2/3 (66%) a w-3/5 (60%)
          */}
          <div className="relative w-full md:w-3/5 h-[50vh] md:h-full bg-neutral-900 overflow-hidden">
            <Image 
              src="/cerniere.avif" 
              alt="Dettaglio cerniere a frizione" 
              fill 
              quality={100} 
              sizes="(max-width: 768px) 100vw, 60vw" 
              className="object-cover opacity-80" 
              priority={true}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
          </div>
          
          {/* 
            MODIFICA MACRO: Il box testo passa da w-1/3 (33%) a w-2/5 (40%)
          */}
          <div className="relative w-full md:w-2/5 h-[50vh] md:h-full flex items-center p-8 md:p-12 lg:p-16">
            {/* MODIFICA MICRO: Allarghiamo la gabbia interna da max-w-lg a max-w-xl */}
            <div className="w-full max-w-xl">
              <p className="font-mono text-brand-dark text-left tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-white text-left mb-8">
                Cerniere <br/> a Frizione.
              </h3>
              {/* 
                MODIFICA TIPOGRAFICA: text-lg md:text-xl -> text-sm md:text-base 
                Il font diventa più piccolo e l'interlinea proporzionata.
              */}
              <p className="font-sans text-sm md:text-base leading-relaxed text-white/80 drop-shadow-lg text-left w-full">
                Per garantire una schermatura solare continua, il sistema sfrutta una cinematica basata su due movimenti. Il primo asse gestisce la regolazione bilaterale dell'inclinazione: la copertura permette un'escursione zenitale da 0° fino a un massimo di 60° per lato. Il meccanismo è affidato a una coppia di cerniere a frizione ad alte prestazioni integrate su ciascun tubolare in alluminio. Ingegnerizzate per assorbire i carichi dinamici, queste cerniere mantengono stabilmente l'angolo impostato in modo autonomo. Questa soluzione tecnica elimina la necessità di fermi o blocchi meccanici tradizionali, azzerando i micro cedimenti e i punti critici maggiormente soggetti a usura o rottura.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            SCENA 2: MANOPOLA (FOTO A SINISTRA, TESTO A DESTRA)
            ======================================================== */}
        <motion.div 
          style={{ opacity: scene2Op }} 
          className="absolute inset-0 flex flex-col md:flex-row z-[2] bg-black"
        >
          {/* MODIFICA MACRO: Immagine al 60% */}
          <div className="relative w-full md:w-3/5 h-[50vh] md:h-full bg-neutral-900 overflow-hidden">
            <Image 
              src="/manovella.avif" 
              alt="Meccanismo a manopola" 
              fill 
              quality={100}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent hidden md:block" />
          </div>
          
          {/* MODIFICA MACRO: Testo al 40% */}
          <div className="relative w-full md:w-2/5 h-[50vh] md:h-full flex items-center p-8 md:p-12 lg:p-16">
            {/* MODIFICA MICRO: max-w-xl */}
            <div className="w-full max-w-xl">
              <p className="font-mono text-brand-dark text-left tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-white text-left mb-8">
                Sistema a <br/> Manopola
              </h3>
              {/* MODIFICA TIPOGRAFICA: text-sm md:text-base */}
              <p className="font-sans text-sm md:text-base leading-relaxed text-white/80 drop-shadow-lg text-left w-full">
                Il secondo asse di movimento governa l'inclinazione dell'intera struttura tramite un azionamento a manopola con riduttore di sforzo integrato. Questa soluzione meccanica permette di basculare il modulo per oltre 90° su entrambi i lati, assicurando un tracciamento solare continuo e preciso in qualsiasi fascia oraria e latitudine. Dal punto di vista dell'ergonomia fisica, il rapporto di demoltiplicazione garantisce un'interazione fluida e sicura: l'azionamento risulta accessibile a chiunque, svincolando completamente la movimentazione dal carico strutturale e dalla forza dell'utente.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            SCENA 3: INFOGRAFICA (FOTO A DESTRA, TESTO A SINISTRA)
            ======================================================= */}
        <motion.div 
          style={{ opacity: scene3Op }} 
          className="absolute inset-0 flex flex-col md:flex-row-reverse z-[3] bg-black"
        >
          {/* MODIFICA MACRO: Immagine al 60% */}
          <div className="relative w-full md:w-3/5 h-[50vh] md:h-full bg-neutral-900 overflow-hidden">
            <Image 
              src="/info.jpg" 
              alt="Cinematica del movimento" 
              fill 
              quality={100}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-contain md:object-cover opacity-90 p-8 md:p-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
          </div>
          
          {/* MODIFICA MACRO: Testo al 40% */}
          <div className="relative w-full md:w-2/5 h-[50vh] md:h-full flex items-center p-8 md:p-12 lg:p-16">
            {/* MODIFICA MICRO: max-w-xl */}
            <div className="w-full max-w-xl">
              <p className="font-mono text-brand-dark text-left tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-white text-left mb-8">
                Infografica <br/> 
              </h3>
              {/* MODIFICA TIPOGRAFICA: text-sm md:text-base */}
              <p className="font-sans text-sm md:text-base leading-relaxed text-white/80 drop-shadow-lg text-left w-full">
                Sulla superficie del carter a protezione del gruppo ingranaggi è integrata un'infografica progettata per comunicare visivamente la cinematica del sistema. L'interfaccia grafica chiarisce in modo intuitivo i due azionamenti a disposizione dell'utente: l'inclinazione del modulo, controllata dalla manopola posta in posizione strategica per ottimizzare l'ergonomia fisica e la leva, e l'apertura o chiusura della copertura, azionabile in modo rapido e directo tramite maniglie in tessuto tecnico integrate su entrambi i lati della struttura.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}