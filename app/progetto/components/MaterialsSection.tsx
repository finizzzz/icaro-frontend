"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function MaterialsSection() {
  // 1. I "GANCI" (Refs)
  const containerRef = useRef<HTMLElement>(null); // Gancio per la sezione intera
  const videoRef = useRef<HTMLVideoElement>(null); // Gancio ESCLUSIVO per il video

  // 2. IL SENSORE DI SCROLL
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  /* ========================================================================
     3. IL MOTORE DI SCRUBBING VIDEO (Il trucco da Senior)
     Ascoltiamo ogni volta che lo scroll cambia e aggiorniamo il video.
     ======================================================================== */
  useMotionValueEvent(scrollYProgress, "change", (latestScroll) => {
    // Se il video esiste ed è stato caricato...
    if (videoRef.current && videoRef.current.duration) {
      // Calcola il tempo esatto: Percentuale di scroll * Durata totale del video
      const targetTime = latestScroll * videoRef.current.duration;
      // Forza il video a quel preciso secondo
      videoRef.current.currentTime = targetTime;
    }
  });

  /* ========================================================================
     4. TIMELINE DEI TESTI (Sincronizzata con lo scroll come prima)
     ======================================================================== */
  const txt1Op = useTransform(scrollYProgress, [0.00, 0.05, 0.12, 0.15], [0, 1, 1, 0]); // Telo
  const txt2Op = useTransform(scrollYProgress, [0.15, 0.20, 0.27, 0.30], [0, 1, 1, 0]); // Lamiera
  const txt3Op = useTransform(scrollYProgress, [0.30, 0.35, 0.42, 0.45], [0, 1, 1, 0]); // Alluminio
  const txt4Op = useTransform(scrollYProgress, [0.45, 0.50, 0.57, 0.60], [0, 1, 1, 0]); // Inox
  const txt5Op = useTransform(scrollYProgress, [0.60, 0.65, 0.72, 0.75], [0, 1, 1, 0]); // Legno
  const txt6Op = useTransform(scrollYProgress, [0.75, 0.80, 0.95, 1.00], [0, 1, 1, 0]); // Acciaio Zincato

  const txtY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="materiali" className="relative h-[1600vh] bg-black">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* --- IL VIDEO IN SCRUBBING --- */}
        <div className="absolute inset-0 w-full h-full">
          <video 
            ref={videoRef} // Attacchiamo il gancio!
            src="/dettaglio-materiali.mp4" 
            muted 
            playsInline 
            preload="auto" // Diciamo al browser di scaricarlo tutto subito
            className="w-full h-full object-cover" 
            // NOTA BENE: autoPlay e loop sono stati RIMOSSI. Il video è "congelato".
          />
        </div>

        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* --- I TESTI (Struttura Z-Pattern mantenuta) --- */}
        <div className="relative z-20 w-full max-w-6xl px-6 md:px-16 mx-auto h-full flex items-center">
          
          <motion.div style={{ opacity: txt1Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">01. Tensostruttura</p>
            <h3 className="font-heading font-bold text-4xl mb-4 drop-shadow-lg">Tessuto Soltis 92</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Per la copertura, i laterali e le maniglie di regolazione abbiamo adottato un telone in PVC e poliestere spalmato. Per creare l'ombra su misura, la resistenza meccanica è vitale.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt2Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">02. Schermatura</p>
            <h3 className="font-heading font-bold text-4xl mb-4 drop-shadow-lg">Lamiera in Alluminio</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              La foratura passiva permette il deflusso dell'aria calda, garantendo ricircolo e abbattimento termico costante per chi si riposa sulla panchina.
            </p>
          </motion.div>

          {/* ... (Gli altri 4 testi mantengono la stessa identica struttura di prima) ... */}
          
          <motion.div style={{ opacity: txt3Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">03. Struttura Superiore</p>
            <h3 className="font-heading font-bold text-4xl mb-4 drop-shadow-lg">Alluminio Anodizzato</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Corazza invisibile contro l'ossidazione e lo smog urbano per i carter e i tubolari. Mantiene l'infrastruttura pulita.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt4Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">04. Interfaccia</p>
            <h3 className="font-heading font-bold text-4xl mb-4 drop-shadow-lg">Acciaio Inox</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Manopola di regolazione tornita per garantire igiene e immunità alla corrosione causata dall'interazione pubblica.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt5Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">05. Piani di Contatto</p>
            <h3 className="font-heading font-bold text-4xl mb-4 drop-shadow-lg">Legno di Larice</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Fornisce inerzia termica alla seduta. Non scotta sotto il sole, garantendo un feedback tattile accogliente.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt6Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">06. Fondazioni</p>
            <h3 className="font-heading font-bold text-4xl mb-4 drop-shadow-lg">Acciaio Zincato</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Agganci inferiori ingegnerizzati per abbracciare le panchine pubbliche esistenti senza scavi.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}