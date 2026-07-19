// app/progetto/components/ProblemSection.tsx
"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ProblemSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  /* ========================================================================
     1. TIMELINE ALLINEATA (Testi e Immagini usano gli stessi tempi!)
     ======================================================================== */
  const txt1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.20, 0.25], [0, 1, 1, 0]);
  const img2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.60], [0, 1, 1, 1]); 
  const txt2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.60], [0, 1, 1, 0]); 
  const img3Opacity = useTransform(scrollYProgress, [0.60, 0.70, 1, 1], [0, 1, 1, 1]); 
  const txt3Opacity = useTransform(scrollYProgress, [0.60, 0.70, 0.95, 1], [0, 1, 1, 1]); 

  /* ========================================================================
     2. MOTORE DI MOVIMENTO (Zoom, Spostamento e Parallasse)
     ======================================================================== */
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.10]);
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);
  const txtY = useTransform(scrollYProgress, [0, 1], [40, -40]); 

  return (
    <section ref={containerRef} id="problema" className="relative h-[600vh] bg-black text-white">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* --- LIVELLO 1: LE FOTO --- */}
        <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0 z-[1]">
          <Image src="/panchina-assolata-1-new.avif" alt="Panchina al sole" fill className="object-cover" priority={true} />
        </motion.div>
        
        <motion.div style={{ opacity: img2Opacity, scale: imgScale, y: imgY }} className="absolute inset-0 z-[2]">
          <Image src="/panchina-assolata-2-new.avif" alt="Disagio termico" fill className="object-cover" unoptimized priority />
        </motion.div>
        
        <motion.div style={{ opacity: img3Opacity, scale: imgScale, y: imgY }} className="absolute inset-0 z-[3]">
          <Image src="/panchina-assolata-3-new.avif" alt="Infrastruttura ombra" fill className="object-cover" unoptimized priority />
        </motion.div>

        {/* --- LIVELLO 2: OVERLAY SCURO --- */}
        <div className="absolute inset-0 bg-black/40 z-[10]" />

        {/* --- LIVELLO 3: I TESTI FLUTTUANTI --- */}
        <div className="absolute inset-0 z-[20] pointer-events-none">
          
          {/* 
            TESTO 1: A DESTRA 
            Mobile: Margini fluidi (left-6 right-6).
            Tablet: Occupa metà schermo (md:w-1/2) e si aggancia a destra.
            Desktop: Rientra del 15% (lg:right-[15%]) per un look editoriale.
          */}
          <motion.div 
            style={{ opacity: txt1Opacity, y: txtY }} 
            className="absolute inset-y-0 left-6 right-6 md:left-auto md:right-12 lg:right-[15%] flex flex-col justify-center w-auto md:w-1/2 lg:w-[40%] max-w-xl"
          >
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">IL FENOMENO</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8 break-words">
              L'Isola di Calore.
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-white drop-shadow-lg text-left w-full">
              Oggigiorno il fenomeno dell'isola di calore urbana (UHI) è sempre più persistente e intenso nelle nostre città. Il riscaldamento climatico, l'uso massiccio di asfalto e di laterizi, la presenza di pochi alberi e la morfologia urbana che riduce la circolazione del vento tra le vie sono tutti elementi che contribuiscono all'aumento delle temperature nel tessuto urbano.
            </p>
          </motion.div>

          {/* 
            TESTO 2: A SINISTRA 
            Logica speculare al Testo 1. Si aggancia a sinistra su schermi ampi.
          */}
          <motion.div 
            style={{ opacity: txt2Opacity, y: txtY }} 
            className="absolute inset-y-0 left-6 right-6 md:right-auto md:left-12 lg:left-[15%] flex flex-col justify-center w-auto md:w-1/2 lg:w-[40%] max-w-xl"
          >
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">IMPATTO SOCIALE</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8 break-words">
              Categorie a rischio.
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-white drop-shadow-lg text-left w-full">
              Questo caldo sempre più intenso oltre a svuotare le città durante il periodo estivo è estremamente pericoloso per la salute. A soffrirne di più sono in primis gli anziani, che spesso per proteggersi sono costretti all'isolamento sociale in casa, ma anche i lavoratori all'aperto, le donne incinte, i bambini piccoli, malati cronici e chi vive nelle periferie urbane.
            </p>
          </motion.div>

          {/* 
            TESTO 3: IN ALTO AL CENTRO 
            Mobile: top-24 e margini laterali flessibili (left-6 right-6).
            Tablet/Desktop: top-40, posizionamento baricentrico puro (left-1/2 -translate-x-1/2).
          */}
          <motion.div 
            style={{ opacity: txt3Opacity, y: txtY }} 
            className="absolute top-24 left-6 right-6 md:top-40 md:left-1/2 md:-translate-x-1/2 md:right-auto flex flex-col items-center w-auto md:w-full max-w-3xl md:px-6"
          >
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">LA NECESSITÀ</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8 break-words text-center">
              La Situazione Attuale.  
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-white drop-shadow-lg text-center w-full">
              Oggi le città sono impreparate a gestire questo problema, risultando di fatto inospitali. La mancanza di infrastrutture dedicate non fa che esacerbare un fenomeno destinato a peggiorare penalizzando severamente la quotidianità di chi vive l'ambiente urbano, svuotando progressivamente il tessuto urbano durante il periodo estivo.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}