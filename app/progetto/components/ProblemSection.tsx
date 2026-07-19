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
     Regola: [inizio_comparsa, fine_comparsa, inizio_scomparsa, fine_scomparsa]
     ======================================================================== */

  // SCENA 1: (Da 0 a 25% dello scroll)
  // L'immagine 1 è la base, non ha bisogno di opacità animata.
  const txt1Opacity = useTransform(scrollYProgress, [0, 0.05, 0.20, 0.25], [0, 1, 1, 0]);
  
  // SCENA 2: (Da 25% a 60% dello scroll) - ALLINEAMENTO PERFETTO
  const img2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.60], [0, 1, 1, 1]); // Copre tutto per sempre
  const txt2Opacity = useTransform(scrollYProgress, [0.25, 0.35, 0.55, 0.60], [0, 1, 1, 0]); // Entra insieme alla foto 2
  
  // SCENA 3: (Da 60% alla fine) - ALLINEAMENTO PERFETTO
  const img3Opacity = useTransform(scrollYProgress, [0.60, 0.70, 1, 1], [0, 1, 1, 1]); // Copre tutto per sempre
  const txt3Opacity = useTransform(scrollYProgress, [0.60, 0.70, 0.95, 1], [0, 1, 1, 1]); // Entra insieme alla foto 3

  /* ========================================================================
     2. MOTORE DI MOVIMENTO (Zoom, Spostamento e Parallasse)
     ======================================================================== */
  // Zoom fluido: da scala 1 (100%) a 1.15 (115%) lungo tutto lo scroll
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.10]);
  
  // Spostamento verticale: le immagini scendono leggermente (da 0% a 5% della loro altezza)
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "0%"]);

  // Testi che fluttuano
  const txtY = useTransform(scrollYProgress, [0, 1], [40, -40]); 

  return (
    <section ref={containerRef} id="problema" className="relative h-[600vh] bg-black text-white">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden">
        
        {/* --- LIVELLO 1: LE FOTO (ORA SI MUOVONO!) --- */}
        {/* Aggiunto style={{ scale: imgScale, y: imgY }} a tutte le immagini */}
        
        <motion.div style={{ scale: imgScale, y: imgY }} className="absolute inset-0 z-[1]">
          <Image src="/panchina-assolata-1-new.avif" alt="Panchina al sole" fill className="object-cover" unoptimized priority />
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
          
          {/* TESTO 1: A DESTRA */}
          <motion.div 
            style={{ opacity: txt1Opacity, y: txtY }} 
            className="absolute inset-y-0 right-6 md:right-74 flex flex-col justify-center w-full max-w-xl"
          >
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">IL FENOMENO</p>
            {/* Titolo color primario con forte ombra bianca */}
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">
              L'Isola di Calore.
            </h2>
            {/* Paragrafo giustificato */}
            <p className="font-sans text-sm md:text-base leading-relaxed text-white drop-shadow-lg text-left w-full">
              Oggi giorno il fenomeno dell'isola di calore urbana (UHI) è sempre più persistente e intenso nelle nostre città. Il riscaldamentoo climmatico, l'uso massiccio di asfalto e di laterizi, la presenza di pochi alberi e la morfologia <br /> urbana che riduce la circolazione del vento tra le vie sono tutti elementi che contribuiscono all'aumento delle temperature nel tessuto urbano.
            </p>
          </motion.div>

          {/* TESTO 2: A SINISTRA */}
          <motion.div 
            style={{ opacity: txt2Opacity, y: txtY }} 
            className="absolute inset-y-0 left-6 md:left-74 flex flex-col justify-center w-full max-w-xl"
          >
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">IMPATTO SOCIALE</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">
              Categorie a rischio.
            </h2>
            <p className="font-sans text-sm md:text-base leading-relaxed text-white drop-shadow-lg text-left w-full">
              Questo caldo sempre più intenso oltre a svuotare le città durante il periodo estivo è estremamente pericoloso per la salute. A soffrirne di più sono in primis gli anziani, che spesso per protteggersi sono costretti all'isolamento sociale in casa, ma anche i lavoratori all'aperto, le donne incinte, i bambini piccoli, malati cronici e chi vive nelle periferie urbane.
            </p>
          </motion.div>

          {/* TESTO 3: IN ALTO AL CENTRO */}
          {/* Nota: per il testo centrale, ho mantenuto items-center sul contenitore padre per centrarlo nello schermo, ma il testo interno è giustificato */}
          <motion.div 
            style={{ opacity: txt3Opacity, y: txtY }} 
            className="absolute top-24 md:top-40 left-1/2 -translate-x-1/2 flex flex-col items-center w-full max-w-3xl px-6"
          >
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">LA NECESSITÀ</p>
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">
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