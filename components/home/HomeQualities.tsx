"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

export default function HomeQualities() {
  
  const textReveal: Variants = {
    hidden: { opacity: 0, y: 80 },
    show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] } }
  };

  const imageReveal: Variants = {
    hidden: { opacity: 0, scale: 1.1 },
    show: { opacity: 0.6, scale: 1, transition: { duration: 1.5, ease: "easeOut" } } 
  };

  return (
    <section id="progetto" className="py-32 bg-white overflow-hidden relative">
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24">
        
        {/* =========================================================
            HEADER DI SEZIONE: IL PROGETTO
            Replicato dallo stile "Emergenza Climatica"
            ========================================================= */}
        <header className="mb-20 md:mb-32">
          <p className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10">
            Il progetto
          </p>
        </header>

        {/* BLOCCO 01 */}
        <div className="relative min-h-[70vh] flex items-center px-6 md:px-16 lg:px-24 mb-32">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute right-[-10%] md:right-[15%] top-[-10%] w-[80%] md:w-[45%] aspect-square grayscale z-0 pointer-events-none"
          >
            <Image src="/add-on-new.png" alt="Render Add-on" fill className="object-cover" />
          </motion.div>

          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">01.</span>
            <h3 className="font-heading font-black uppercase text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              ADD-ON <br /> UNIVERSALE
            </h3>
            <p className="text-justify font-sans text-brand-dark/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
  Progettato per integrarsi perfettamente sulle infrastrutture esistenti. 
  Trasforma le normali panchine pubbliche in micro-oasi climatiche senza 
  la necessità di smantellare l'arredo urbano attuale.
</p>
          </motion.div>
        </div>

        {/* BLOCCO 02 */}
        <div className="relative min-h-[70vh] flex items-center justify-end px-6 md:px-16 lg:px-24 mb-32">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute left-[-10%] md:left-[15%] top-[20%] w-[90%] md:w-[50%] aspect-video grayscale z-0 pointer-events-none"
          >
            <Image src="/new-3.png" alt="Analisi Materiali" fill className="object-cover" />
          </motion.div>
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3 flex flex-col items-end text-right"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">02.</span>
            <h3 className="font-heading font-black uppercase text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              STUDIO DEI <br /> MATERIALI
            </h3>
            <p className="text-justify font-sans text-brand-dark/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Ogni componente è ingegnerizzato per garantire zero manutenzione nel tempo e altissime prestazioni termiche. Le superfici respingono l'irraggiamento resistendo in modo assoluto all'usura.
            </p>
          </motion.div>
        </div>

        {/* BLOCCO 03 */}
        <div className="relative min-h-[70vh] flex items-center px-6 md:px-16 lg:px-24 mb-32">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute right-[-10%] md:right-[10%] top-[-30%] w-[80%] md:w-[70%] aspect-square grayscale z-0 pointer-events-none"
          >
            <Image src="/new-4.png" alt="Installazione" fill className="object-contain object-center" />
          </motion.div>
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">03.</span>
            <h3 className="font-heading font-black uppercase text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              CANTIERE <br /> INVISIBILE
            </h3>
            <p className="text-justify font-sans text-brand-dark/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Il design modulare permette un sistema di montaggio estremamente semplificato. Minimizza i tempi di intervento riducendo a zero i disagi per la viabilità cittadina.
            </p>
          </motion.div>
        </div>

        {/* BLOCCO 04 */}
        <div className="relative min-h-[70vh] flex items-center justify-end px-6 md:px-16 lg:px-24 mb-16">
          <motion.div 
            variants={imageReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="absolute left-[-10%] md:left-[30%] top-[5%] w-[90%] md:w-[35%] aspect-square grayscale z-0 pointer-events-none"
          >
            <Image src="/new-2.png" alt="Ombra Perenne" fill className="object-cover object-center" />
          </motion.div>
          <motion.div 
            variants={textReveal} initial="hidden" whileInView="show" viewport={{ once: true, margin: "-100px" }}
            className="relative z-10 w-full md:w-2/3 flex flex-col items-end text-right"
          >
            <span className="font-mono text-xl md:text-2xl text-brand-dark/50">04.</span>
            <h3 className="font-heading font-black uppercase text-6xl md:text-[7rem] lg:text-[9rem] leading-[0.85] tracking-tighter mt-4 mb-8 text-brand-dark">
              OMBRA <br /> COSTANTE
            </h3>
            <p className="text-justify font-sans text-brand-dark/80 text-lg md:text-xl max-w-xl leading-relaxed mb-10">
              Inseguendo la traiettoria solare tramite un sistema di inclinazione manuale intuitivo, l'architettura garantisce una zona d'ombra confortevole in ogni istante della giornata.
            </p>
          </motion.div>
        </div>

      </div>
    </section>
  );
}