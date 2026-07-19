// app/progetto/components/ConceptPart3.tsx
"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ConceptPart3() {
  const techRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: techRef,
    offset: ["start start", "end end"]
  });

  const scene1Op = useTransform(scrollYProgress, [0, 0.25, 0.33], [1, 1, 0]);
  const scene2Op = useTransform(scrollYProgress, [0.25, 0.33, 0.58, 0.66], [0, 1, 1, 0]);
  const scene3Op = useTransform(scrollYProgress, [0.58, 0.66, 1], [0, 1, 1]);

  return (
    <section ref={techRef} className="relative h-[400vh] bg-black">
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* ========================================================
            SCENA 1: CERNIERE
            ======================================================== */}
        <motion.div 
          style={{ opacity: scene1Op }} 
          className="absolute inset-0 flex flex-col md:flex-row-reverse z-[1] bg-black"
        >
          {/* 
            IMMAGINE (MOBILE FULL-SCREEN -> DESKTOP COLONNA)
            Mobile: 'absolute inset-0 z-0' (Sfondo totale)
            Desktop: 'md:relative md:w-3/5 md:h-full' (Colonna a destra)
          */}
          <div className="absolute inset-0 md:relative md:w-3/5 md:h-full bg-neutral-900 overflow-hidden z-0">
            <Image 
              src="/cerniere.avif" 
              alt="Dettaglio cerniere a frizione" 
              fill 
              quality={100} 
              sizes="(max-width: 768px) 100vw, 60vw" 
              className="object-cover opacity-70 md:opacity-80" 
              priority={true}
            />
            {/* 
              GRADIENTE SALVA-LEGGIBILITÀ:
              Mobile: Scuro in alto (per il testo) e sfuma verso il basso.
              Desktop: Scuro a sinistra per fondersi con la colonna di testo.
            */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent" />
          </div>
          
          {/* 
            TESTO (MOBILE TOP -> DESKTOP CENTRO)
            Mobile: 'min-h-screen justify-start pt-24' (Inizia subito dall'alto)
            Desktop: 'md:min-h-0 md:h-full md:w-2/5 md:justify-center md:pt-0'
          */}
          <div className="relative z-10 w-full min-h-screen md:min-h-0 md:w-2/5 md:h-full flex flex-col justify-start pt-24 md:pt-0 md:justify-center p-6 sm:p-8 md:p-12 lg:p-16 overflow-y-auto">
            <div className="w-full max-w-xl mx-auto md:mx-0">
              <p className="font-mono text-brand-primary md:text-brand-dark text-left tracking-[0.2em] text-xs sm:text-sm font-bold uppercase mb-3 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white text-left mb-6 drop-shadow-xl">
                Cerniere <br className="hidden sm:block"/> a Frizione.
              </h3>
              <p className="font-sans text-xs md:text-base leading-relaxed text-white/90 drop-shadow-lg text-left w-full bg-black/20 md:bg-transparent p-4 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none border border-white/5 md:border-none">
                Per garantire una schermatura solare continua, il sistema sfrutta una cinematica basata su due movimenti. Il primo asse gestisce la regolazione bilaterale dell'inclinazione: la copertura permette un'escursione zenitale da 0° fino a un massimo di 60° per lato. Il meccanismo è affidato a una coppia di cerniere a frizione ad alte prestazioni integrate su ciascun tubolare in alluminio. Ingegnerizzate per assorbire i carichi dinamici, queste cerniere mantengono stabilmente l'angolo impostato in modo autonomo. Questa soluzione tecnica elimina la necessità di fermi o blocchi meccanici tradizionali, azzerando i micro cedimenti e i punti critici maggiormente soggetti a usura o rottura.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            SCENA 2: MANOPOLA
            ======================================================== */}
        <motion.div 
          style={{ opacity: scene2Op }} 
          className="absolute inset-0 flex flex-col md:flex-row z-[2] bg-black"
        >
          <div className="absolute inset-0 md:relative md:w-3/5 md:h-full bg-neutral-900 overflow-hidden z-0">
            <Image 
              src="/manovella.avif" 
              alt="Meccanismo a manopola" 
              fill 
              quality={100}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover opacity-70 md:opacity-80" 
            />
            {/* Su desktop sfuma verso destra (bg-gradient-to-l) perché il testo è a sinistra */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 md:bg-gradient-to-l md:from-black md:via-transparent md:to-transparent" />
          </div>
          
          <div className="relative z-10 w-full min-h-screen md:min-h-0 md:w-2/5 md:h-full flex flex-col justify-start pt-24 md:pt-0 md:justify-center p-6 sm:p-8 md:p-12 lg:p-16 overflow-y-auto">
            <div className="w-full max-w-xl mx-auto md:mx-0">
              <p className="font-mono text-brand-primary md:text-brand-dark text-left tracking-[0.2em] text-xs sm:text-sm font-bold uppercase mb-3 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white text-left mb-6 drop-shadow-xl">
                Sistema a <br className="hidden sm:block"/> Manopola
              </h3>
              <p className="font-sans text-xs md:text-base leading-relaxed text-white/90 drop-shadow-lg text-left w-full bg-black/20 md:bg-transparent p-4 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none border border-white/5 md:border-none">
                Il secondo asse di movimento governa l'inclinazione dell'intera struttura tramite un azionamento a manopola con riduttore di sforzo integrato. Questa soluzione meccanica permette di basculare il modulo per oltre 90° su entrambi i lati, assicurando un tracciamento solare continuo e preciso in qualsiasi fascia oraria e latitudine. Dal punto di vista dell'ergonomia fisica, il rapporto di demoltiplicazione garantisce un'interazione fluida e sicura: l'azionamento risulta accessibile a chiunque, svincolando completamente la movimentazione dal carico strutturale e dalla forza dell'utente.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ========================================================
            SCENA 3: INFOGRAFICA
            ======================================================= */}
        <motion.div 
          style={{ opacity: scene3Op }} 
          className="absolute inset-0 flex flex-col md:flex-row-reverse z-[3] bg-black"
        >
          <div className="absolute inset-0 md:relative md:w-3/5 md:h-full bg-neutral-900 overflow-hidden z-0">
            <Image 
              src="/info.jpg" 
              alt="Cinematica del movimento" 
              fill 
              quality={100}
              sizes="(max-width: 768px) 100vw, 60vw"
              className="object-cover md:object-contain opacity-70 md:opacity-90 md:p-8"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/40 to-black/80 md:bg-gradient-to-r md:from-black md:via-transparent md:to-transparent" />
          </div>
          
          <div className="relative z-10 w-full min-h-screen md:min-h-0 md:w-2/5 md:h-full flex flex-col justify-start pt-24 md:pt-0 md:justify-center p-6 sm:p-8 md:p-12 lg:p-16 overflow-y-auto">
            <div className="w-full max-w-xl mx-auto md:mx-0">
              <p className="font-mono text-brand-primary md:text-brand-dark text-left tracking-[0.2em] text-xs sm:text-sm font-bold uppercase mb-3 drop-shadow-md">
                Movimento
              </p>
              <h3 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-white text-left mb-6 drop-shadow-xl">
                Infografica
              </h3>
              <p className="font-sans text-xs md:text-base leading-relaxed text-white/90 drop-shadow-lg text-left w-full bg-black/20 md:bg-transparent p-4 md:p-0 rounded-xl backdrop-blur-sm md:backdrop-blur-none border border-white/5 md:border-none">
                Sulla superficie del carter a protezione del gruppo ingranaggi è integrata un'infografica progettata per comunicare visivamente la cinematica del sistema. L'interfaccia grafica chiarisce in modo intuitivo i due azionamenti a disposizione dell'utente: l'inclinazione del modulo, controllata dalla manopola posta in posizione strategica per ottimizzare l'ergonomia fisica e la leva, e l'apertura o chiusura della copertura, azionabile in modo rapido e diretto tramite maniglie in tessuto tecnico integrate su entrambi i lati della struttura.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}