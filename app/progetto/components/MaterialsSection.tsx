"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function MaterialsSection() {
  // 1. I "GANCI" (Refs)
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2. IL SENSORE DI SCROLL
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 3. IL MOTORE DI SCRUBBING VIDEO
  useMotionValueEvent(scrollYProgress, "change", (latestScroll) => {
    if (videoRef.current && videoRef.current.duration) {
      const targetTime = latestScroll * videoRef.current.duration;
      videoRef.current.currentTime = targetTime;
    }
  });

  // 4. TIMELINE DEI TESTI
  const txt1Op = useTransform(scrollYProgress, [0.00, 0.05, 0.12, 0.15], [0, 1, 1, 0]); 
  const txt2Op = useTransform(scrollYProgress, [0.15, 0.20, 0.27, 0.30], [0, 1, 1, 0]); 
  const txt3Op = useTransform(scrollYProgress, [0.30, 0.35, 0.42, 0.45], [0, 1, 1, 0]); 
  const txt4Op = useTransform(scrollYProgress, [0.45, 0.50, 0.57, 0.60], [0, 1, 1, 0]); 
  const txt5Op = useTransform(scrollYProgress, [0.60, 0.65, 0.72, 0.75], [0, 1, 1, 0]); 
  const txt6Op = useTransform(scrollYProgress, [0.75, 0.80, 0.95, 1.00], [0, 1, 1, 0]); 

  const txtY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="materiali" className="relative h-[1000vh] bg-black">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* --- IL VIDEO IN SCRUBBING --- */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            ref={videoRef}
            src="/dettaglio-materiali.mp4" 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover" 
          />
        </div>

        {/* --- OVERLAY GRAFICI --- */}
        {/* Overlay base per scurire tutto il video */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* 
          NUOVO GRADIENTE SUPERIORE: 
          Ancorato in alto (top-0), si estende in orizzontale (inset-x-0).
          Altezza h-48 (192px). Sfuma da nero assoluto verso il trasparente.
        */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black to-transparent z-10" />
        
        {/* (Opzionale) Se ti serve anche in basso per la sezione successiva, scommenta qui sotto: */}
        {/* <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent z-10" /> */}

        {/* --- I TESTI (Struttura Z-Pattern mantenuta) --- */}
        <div className="relative z-20 w-full max-w-6xl px-6 md:px-16 mx-auto h-full flex items-center">
          
          <motion.div style={{ opacity: txt1Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">01. Tensostruttura</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-4 drop-shadow-lg">Tessuto Soltis 92</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Per la copertura, i laterali e le maniglie di regolazione abbiamo adottato un telone in PVC e poliestere spalmato. Per creare l'ombra su misura, la resistenza meccanica è vitale.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt2Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">02. Schermatura</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-4 drop-shadow-lg">Lamiera in Alluminio</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              La foratura passiva permette il deflusso dell'aria calda, garantendo ricircolo e abbattimento termico costante per chi si riposa sulla panchina.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt3Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">03. Struttura Superiore</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-4 drop-shadow-lg">Alluminio Anodizzato</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Corazza invisibile contro l'ossidazione e lo smog urbano per i carter e i tubolari. Mantiene l'infrastruttura pulita.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt4Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">04. Interfaccia</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-4 drop-shadow-lg">Acciaio Inox</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Manopola di regolazione tornita per garantire igiene e immunità alla corrosione causata dall'interazione pubblica.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt5Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">05. Piani di Contatto</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-4 drop-shadow-lg">Legno di Larice</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Fornisce inerzia termica alla seduta. Non scotta sotto il sole, garantendo un feedback tattile accogliente.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt6Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-2">06. Fondazioni</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl mb-4 drop-shadow-lg">Acciaio Zincato</h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed drop-shadow-md text-justify hyphens-auto">
              Agganci inferiori ingegnerizzati per abbracciare le panchine pubbliche esistenti senza scavi.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}