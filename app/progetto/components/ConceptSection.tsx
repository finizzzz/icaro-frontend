"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function ConceptSection() {
  const techRef = useRef<HTMLElement>(null);

  const { scrollYProgress: techProgress } = useScroll({
    target: techRef,
    offset: ["start start", "end end"]
  });

  /* ========================================================================
     LA NUOVA MATEMATICA DELLE SCENE (Crossfade perfetto)
     Invece di sfumare testi e foto separatamente, sfumiamo l'intera scena!
     ======================================================================== */
  
  // SCENA 1: Visibile dall'inizio, inizia a svanire al 25%, scompare al 35%
  const scene1Op = useTransform(techProgress, [0, 0.25, 0.35], [1, 1, 0]);
  
  // SCENA 2: Appare tra 25-35%, resta fissa, svanisce tra 60-70%
  const scene2Op = useTransform(techProgress, [0.25, 0.35, 0.60, 0.70], [0, 1, 1, 0]);
  
  // SCENA 3: Appare tra 60-70%, resta visibile fino alla fine
  const scene3Op = useTransform(techProgress, [0.60, 0.70, 0.95, 1], [0, 1, 1, 1]);

  // Il leggero movimento del testo in verticale rimane
  const txtY = useTransform(techProgress, [0, 1], [30, -30]);

  return (
    <section id="concept" className="pt-32 bg-white text-brand-black">
      
      {/* --- PARTE 1: VIDEO E VARIANTI (Rimane invariata) --- */}
      <div className="max-w-7xl mx-auto px-6 md:px-16 mb-32">
        <div className="text-center mb-16">
          <p className="font-mono text-[#08594A] tracking-[0.2em] text-sm font-bold uppercase mb-4">04. IL CONCEPT</p>
          <h2 className="font-heading font-bold text-4xl md:text-6xl text-[#08594A]">La forma segue l'ombra.</h2>
        </div>
        <div className="relative w-full aspect-video md:aspect-[21/9] bg-neutral-900 rounded-3xl overflow-hidden shadow-2xl mb-24 group">
          <video src="/video-meccanica.mp4" autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover opacity-80" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8 md:p-12 pointer-events-none">
            <h3 className="font-heading font-bold text-3xl md:text-5xl text-white mb-4 drop-shadow-lg">Libertà di interazione.</h3>
            <p className="font-sans text-lg md:text-xl text-white/90 max-w-2xl drop-shadow-md">
              Un parasole installabile direttamente sulle panchine pubbliche esistenti. Il giunto meccanico permette di inclinare la copertura per creare esattamente l'ombra che serve, assecondando il sole.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          <div className="flex flex-col">
            <div className="relative w-full aspect-square bg-[#F9F9F9] rounded-3xl overflow-hidden shadow-lg mb-8">
              <Image src="/variante-addon.jpg" alt="Versione Add-on" fill className="object-cover" unoptimized />
            </div>
            <h4 className="font-heading font-bold text-2xl text-[#08594A] mb-3">Versione Add-on</h4>
            <p className="font-sans text-brand-black/80 text-justify hyphens-auto leading-relaxed">Il modulo principale sfrutta la zavorra strutturale delle sedute già presenti nel tessuto urbano. Nessuno scavo, minimo impatto cantieristico.</p>
          </div>
          <div className="flex flex-col">
            <div className="relative w-full aspect-square bg-[#F9F9F9] rounded-3xl overflow-hidden shadow-lg mb-8">
              <Image src="/variante-standalone.jpg" alt="Versione Standalone" fill className="object-cover" unoptimized />
            </div>
            <h4 className="font-heading font-bold text-2xl text-[#08594A] mb-3">Versione Standalone</h4>
            <p className="font-sans text-brand-black/80 text-justify hyphens-auto leading-relaxed">Configurazione autonoma ancorabile a terra. Ideale per piazze o dehors sprovvisti di sedute adeguate, con la stessa tecnologia orientabile.</p>
          </div>
        </div>
      </div>

      {/* --- PARTE 2: INGEGNERIZZAZIONE A Z-PATTERN --- */}
      <section ref={techRef} className="relative h-[400vh] bg-[#F4F4F4]">
        
        {/* Il contenitore si incolla allo schermo (Sticky) */}
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          
          {/* ========================================================
              SCENA 1: FOTO A DESTRA, TESTO A SINISTRA
              ======================================================== */}
          {/* flex-row-reverse è la magia che inverte le due metà! */}
          <motion.div style={{ opacity: scene1Op }} className="absolute inset-0 flex flex-col md:flex-row-reverse z-[1]">
            
            {/* Foto (Si posiziona a destra grazie al reverse) */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full bg-neutral-200">
              <Image src="/tech-carichi.jpg" alt="Studio dei carichi" fill className="object-cover rounded-none" unoptimized priority />
            </div>
            
            {/* Testo (Si posiziona a sinistra) */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center p-8 md:p-16">
              <motion.div style={{ y: txtY }} className="max-w-lg">
                <p className="font-mono text-[#08594A] tracking-[0.2em] text-xs font-bold uppercase mb-4">Analisi Strutturale</p>
                <h3 className="font-heading font-bold text-4xl mb-6 text-brand-black">Gestione di 20 kg in movimento.</h3>
                <p className="font-sans text-lg text-brand-black/80 text-justify hyphens-auto leading-relaxed">
                  Una copertura tessile di queste dimensioni raggiunge un peso operativo di circa 20 kg. Trattandosi di un'infrastruttura pubblica installata su panchine preesistenti, il sistema scarica la massa in modo sicuro senza compromettere la stabilità originaria.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================================
              SCENA 2: FOTO A SINISTRA, TESTO A DESTRA
              ======================================================== */}
          {/* NOTA IL bg-[#F4F4F4]: Serve per "coprire" la Scena 1 che sta sotto */}
          <motion.div style={{ opacity: scene2Op }} className="absolute inset-0 flex flex-col md:flex-row z-[2] bg-[#F4F4F4]">
            
            {/* Foto (Normale, a sinistra) */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full bg-neutral-200">
              <Image src="/tech-cerniera.jpg" alt="Cerniera a frizione" fill className="object-cover rounded-none" unoptimized priority />
            </div>
            
            {/* Testo (Normale, a destra) */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center p-8 md:p-16">
              <motion.div style={{ y: txtY }} className="max-w-lg">
                <p className="font-mono text-[#08594A] tracking-[0.2em] text-xs font-bold uppercase mb-4">Meccanica di Precisione</p>
                <h3 className="font-heading font-bold text-4xl mb-6 text-brand-black">Cerniere a frizione.</h3>
                <p className="font-sans text-lg text-brand-black/80 text-justify hyphens-auto leading-relaxed">
                  Le cerniere a frizione tarata permettono di inclinare la copertura mantenendo la posizione in modo autonomo. Resistono al vento ed eliminano la necessità di leve o blocchi soggetti all'usura dello spazio pubblico.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* ========================================================
              SCENA 3: FOTO A DESTRA, TESTO A SINISTRA
              ======================================================== */}
          <motion.div style={{ opacity: scene3Op }} className="absolute inset-0 flex flex-col md:flex-row-reverse z-[3] bg-[#F4F4F4]">
            
            {/* Foto (Di nuovo a destra) */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full bg-neutral-200">
              <Image src="/tech-manovella.jpg" alt="Sistema a manovella" fill className="object-cover rounded-none" unoptimized priority />
            </div>
            
            {/* Testo (Di nuovo a sinistra) */}
            <div className="relative w-full md:w-1/2 h-[50vh] md:h-full flex items-center justify-center p-8 md:p-16">
              <motion.div style={{ y: txtY }} className="max-w-lg">
                <p className="font-mono text-[#08594A] tracking-[0.2em] text-xs font-bold uppercase mb-4">Interfaccia Utente</p>
                <h3 className="font-heading font-bold text-4xl mb-6 text-brand-black">Demoltiplicazione dello sforzo.</h3>
                <p className="font-sans text-lg text-brand-black/80 text-justify hyphens-auto leading-relaxed">
                  Per permettere a chiunque di sollevare e inclinare una struttura di 20 kg in totale sicurezza, abbiamo integrato una manovella con ingranaggi. L'interazione risulta fluida e intuitiva per tutti i cittadini.
                </p>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </section>

    </section>
  );
}