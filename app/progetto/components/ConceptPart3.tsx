// app/progetto/components/ConceptPart3.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ConceptPart3() {
  // MOTORE DI SCROLLING
  const techRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: techRef,
    offset: ["start start", "end end"]
  });

  // MAPPATURA OPACITÀ SCENE
  const scene1Op = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const scene2Op = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const scene3Op = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

  return (
    <section ref={techRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ========================================================
            SCENA 1: CERNIERE (FOTO A DESTRA)
            ======================================================== */}
        <motion.div 
          style={{ opacity: scene1Op }} 
          className="absolute inset-0 flex flex-col md:flex-row-reverse z-[1] bg-black"
        >
          {/* BOX IMMAGINE (4/6 dello schermo) */}
          <div className="relative w-full md:w-2/3 h-[50vh] md:h-full bg-neutral-900 overflow-hidden">
            <Image 
              src="/cerniere.PNG" 
              alt="Dettaglio cerniere a frizione" 
              fill 
              quality={100} // Disattiva compressione standard
              sizes="(max-width: 768px) 100vw, 66vw" // Evita upscaling
              className="object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
          </div>
          
          {/* BOX TESTO (2/6 dello schermo) */}
          <div className="relative w-full md:w-1/3 h-[50vh] md:h-full flex items-center p-8 md:p-12 lg:p-16">
            <div className="max-w-lg">
              <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">
                Cerniere <br/> a Frizione.
              </h3>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
              Per garantire una schermatura solare continua, il sistema sfrutta una cinematica basata su due movimenti. Il primo asse gestisce la regolazione bilaterale dell'inclinazione: la copertura permette un'escursione zenitale da 0° fino a un massimo di 60° per lato. Il meccanismo è affidato a una coppia di cerniere a frizione ad alte prestazioni integrate su ciascun tubolare in alluminio. Ingegnerizzate per assorbire i carichi dinamici, queste cerniere mantengono stabilmente l'angolo impostato in modo autonomo. Questa soluzione tecnica elimina la necessità di fermi o blocchi meccanici tradizionali, azzerando i micro-cedimenti e i punti critici maggiormente soggetti a usura o rottura.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            SCENA 2: MANOPOLA (FOTO A SINISTRA)
            ======================================================== */}
        <motion.div 
          style={{ opacity: scene2Op }} 
          className="absolute inset-0 flex flex-col md:flex-row z-[2] bg-black"
        >
          {/* BOX IMMAGINE (4/6 dello schermo) */}
          <div className="relative w-full md:w-2/3 h-[50vh] md:h-full bg-neutral-900 overflow-hidden">
            <Image 
              src="/manovella.png" 
              alt="Meccanismo a manopola" 
              fill 
              quality={100}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-l from-black via-transparent to-transparent hidden md:block" />
          </div>
          
          {/* BOX TESTO (2/6 dello schermo) */}
          <div className="relative w-full md:w-1/3 h-[50vh] md:h-full flex items-center p-8 md:p-12 lg:p-16">
            <div className="max-w-lg">
              <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">
                Sistema a <br/> Manopola
              </h3>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
              Il secondo asse di movimento governa l'inclinazione dell'intera struttura tramite un azionamento a manopola con riduttore di sforzo integrato. Questa soluzione meccanica permette di basculare il modulo per oltre 90° su entrambi i lati, assicurando un tracciamento solare continuo e preciso in qualsiasi fascia oraria e latitudine. Dal punto di vista dell'ergonomia fisica, il rapporto di demoltiplicazione garantisce un'interazione fluida e sicura: l'azionamento risulta accessibile a chiunque, svincolando completamente la movimentazione dal carico strutturale e dalla forza dell'utente.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            SCENA 3: INFOGRAFICA (FOTO A DESTRA)
            ======================================================== */}
        <motion.div 
          style={{ opacity: scene3Op }} 
          className="absolute inset-0 flex flex-col md:flex-row-reverse z-[3] bg-black"
        >
          {/* BOX IMMAGINE (4/6 dello schermo) */}
          <div className="relative w-full md:w-2/3 h-[50vh] md:h-full bg-neutral-900 overflow-hidden">
            <Image 
              src="/info.png" 
              alt="Cinematica del movimento" 
              fill 
              quality={100}
              sizes="(max-width: 768px) 100vw, 66vw"
              className="object-contain md:object-cover opacity-90 p-8 md:p-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent hidden md:block" />
          </div>
          
          {/* BOX TESTO (2/6 dello schermo) */}
          <div className="relative w-full md:w-1/3 h-[50vh] md:h-full flex items-center p-8 md:p-12 lg:p-16">
            <div className="max-w-lg">
              <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">
                Infografica <br/> 
              </h3>
              <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
              Sulla superficie del carter a protezione del gruppo ingranaggi è integrata un'infografica progettata per comunicare visivamente la cinematica del sistema. L'interfaccia grafica chiarisce in modo intuitivo i due azionamenti a disposizione dell'utente: l'inclinazione del modulo, controllata dalla manopola posta in posizione strategica per ottimizzare l'ergonomia fisica e la leva, e l'apertura o chiusura della copertura, azionabile in modo rapido e diretto tramite maniglie in tessuto tecnico integrate su entrambi i lati della struttura.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}