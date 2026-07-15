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
              <p className="font-mono text-[#08594A] tracking-[0.2em] text-xs font-bold uppercase mb-4">
                01. Resistenza passiva
              </p>
              <h3 className="font-heading font-black uppercase text-4xl md:text-5xl tracking-tighter mb-6 text-white leading-[0.9]">
                Cerniere <br/> a Frizione.
              </h3>
              <p className="text-justify font-sans text-lg text-white/70 leading-relaxed">
                Il cuore cinematico del sistema. Ingegnerizzate per sostenere carichi dinamici senza cedimenti, queste cerniere mantengono la posizione della copertura in modo autonomo, eliminando la necessità di blocchi meccanici soggetti a rottura.
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
              <p className="font-mono text-[#08594A] tracking-[0.2em] text-xs font-bold uppercase mb-4">
                02. Trasmissione
              </p>
              <h3 className="font-heading font-black uppercase text-4xl md:text-5xl tracking-tighter mb-6 text-white leading-[0.9]">
                Controllo <br/> Ergonomico.
              </h3>
              <p className="font-sans text-lg text-white/70 text-justify leading-relaxed">
                La gestione dell'inclinazione è demandata a un sistema a manopola con riduttore di sforzo integrato. La demoltiplicazione garantisce che l'interazione sia fluida, sicura e accessibile a qualsiasi utente, a prescindere dalla forza fisica.
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
              src="/risorsa.png" 
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
              <p className="font-mono text-[#08594A] tracking-[0.2em] text-xs font-bold uppercase mb-4">
                03. Cinematica
              </p>
              <h3 className="font-heading font-black uppercase text-4xl md:text-5xl tracking-tighter mb-6 text-white leading-[0.9]">
                Geometria <br/> Adattiva.
              </h3>
              <p className="font-sans text-lg text-white/70 text-justify leading-relaxed">
                Il bilanciamento dei pesi è calcolato millimetricamente. Il movimento rotatorio segue una traiettoria progettata per massimizzare la proiezione d'ombra, mantenendo il baricentro dell'infrastruttura all'interno dei margini di sicurezza assoluta.
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}