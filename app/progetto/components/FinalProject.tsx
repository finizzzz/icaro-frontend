"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function FinalProject() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Il parallasse rimane: muove l'immagine in modo fluido
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["-20%", "20%"]);

  return (
    /* 
      1. IL CONTENITORE PADRE
      overflow-hidden è vitale qui: taglia via tutto ciò che esce dallo schermo. 
      Senza questo, il testo gigante creerebbe lo scroll orizzontale!
    */
    <section ref={sectionRef} id="final-render" className="relative h-screen w-full overflow-hidden bg-black">
      
      {/* 2. L'IMMAGINE DI BACKGROUND (Render) */}
      <motion.div 
        style={{ y: backgroundY }}
        className="absolute inset-0 w-full h-full scale-125 z-[1]"
      >
        <Image 
          src="/contestualizzazione.png" // Assicurati che il nome sia corretto
          alt="Parasole pubblico installato su panchina" 
          fill 
          className="object-cover opacity-80" // opacity-80 incupisce leggermente la foto
          unoptimized 
        />
      </motion.div>

      {/* 3. IL TESTO "BLEEDING" GIGANTE IN ALTO */}
      {/* 
        absolute top-12: Lo fissa in alto.
        left-1/2 -translate-x-1/2: È la formula matematica per centrare perfettamente un oggetto in modo assoluto. 
      */}
      <div className="absolute top-0 md:top-0 left-1/2 -translate-x-1/2 z-0 pointer-events-none flex justify-center w-full">
        
        {/* 
          text-[15vw]: Il font è grande il 15% della larghezza totale dello schermo.
          whitespace-nowrap: Vieta di andare a capo.
        */}
        <h2 className="font-heading font-black uppercase text-[12vw] md:text-[10vw] leading-none text-white whitespace-nowrap drop-shadow-1xl tracking-tighter">
          ICAROICAROICAROICAROICARO
        </h2>
        
      </div>

    </section>
  );
}