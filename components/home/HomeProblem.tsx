"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function HomeProblem() {
  
  const textVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: "easeOut", delay: 0.2 } }
  };

  return (
    // MODIFICA: pt-32 crea la "fascia nera" separatrice prima dell'inizio del contenuto
    <section id="problema" className="pt-70 pb-50 md:pt-40 md:pb-40 bg-black relative overflow-hidden">
      
      {/* 
        MODIFICA STRUTTURALE: L'immagine è ora fuori dal container max-w.
        Grazie a md:absolute right-0 top-0, "buca" il layout e tocca il margine destro.
      */}
      <motion.div 
        variants={imageVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        className="md:absolute right-0 top-40 w-full md:w-[60%] lg:w-[50%] h-[40vh] md:h-full z-0 overflow-hidden"
      >
        <Image 
          src="/termica.avif" 
          alt="Foto termica Isola di Calore"
          fill
          className="object-cover"
          priority={true}
        />
        {/* Il gradiente ora deve estendersi per sfumare l'immagine verso il nero della sezione */}
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent"></div>
      </motion.div>

      {/* CONTENITORE DEL TESTO */}
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24 relative z-10">
        <div className="w-full md:w-[75%] lg:w-[65%] flex flex-col justify-center">
          
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
          >
            <p className="font-mono text-red-500 tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10">
              Emergenza Climatica
            </p>
            <h2 className="font-heading font-black uppercase text-5xl md:text-[6rem] lg:text-[8rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-white">
              CALDO <br /> SEMPRE PIÙ <br /> INTENSO
            </h2>
          </motion.div>

          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl"
          >
            <p className="font-sans text-sm md:text-base leading-relaxed text-white/80 drop-shadow-lg text-left w-full mb-20">
              Le recenti ondate di calore trasformano le città in trappole termiche. Questo "lockdown climatico" colpisce duramente le popolazioni vulnerabili. Icaro interviene in questi vuoti, istituendo zone di decompressione termica.
            </p>
            
            <a 
              href="https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-4 bg-white text-[#050505] px-8 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-red-500 hover:text-white hover:shadow-[0_0_30px_rgba(239,68,68,0.4)]"
            >
              <span>Report OMS: Calore e Salute</span>
              <ExternalLink size={18} className="transition-transform duration-300 group-hover:-translate-y-0 group-hover:translate-x-1 group-hover:scale-110" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}