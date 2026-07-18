// app/about-me/components/AboutInfo.tsx
"use client";
import Image from "next/image";
import { Mail, Phone } from "lucide-react";
import { motion, Variants } from "framer-motion";

export default function AboutInfo() {
  
  // 1. IL DIRETTORE D'ORCHESTRA GLOBALE
  const masterContainer: Variants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15 // Leggermente più veloce (0.15s) perché ci sono molti blocchi piccoli
      }
    }
  };

  // 2. LA "FISICA" DEL SITO
  const itemReveal: Variants = {
    hidden: { opacity: 0, y: 40 }, // Movimento leggermente ridotto (40px) per adattarsi alla griglia densa
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    /* 
      IL CONTENITORE PADRE
      Innesca la coreografia quando la sezione entra nella viewport.
    */
    <motion.section 
      variants={masterContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="w-full max-w-7xl mx-auto px-6 py-24 flex flex-col"
    >
      
      {/* FIGLIO 1: Intestazione della sezione */}
      <motion.div variants={itemReveal} className="flex justify-between items-center mb-8">
        <span className="font-mono text-brand-primary tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-6">
          Overview Personale
        </span>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* --- COLONNA 1: IDENTITÀ & HOBBY (3 Colonne) --- */}
        <div className="lg:col-span-3 flex flex-col gap-6">
          {/* FIGLIO 2: Card Identità */}
          <motion.div variants={itemReveal} className="bg-neutral-900/50 border border-white/10 rounded-3xl p-6 flex flex-col gap-6 h-full">
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden shadow-lg">
              <Image src="/me.jpg" alt="Ritratto" fill className="object-cover" />
            </div>
            
            <div className="space-y-8 font-mono text-xs text-neutral-400 flex-1">
              <div>
                <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Status</p>
                <p className="text-white text-sm">Studente, 21 Anni</p>
              </div>
              <div>
                <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Nazionalità</p>
                <p className="text-white text-sm">Italiana</p>
              </div>
              <div>
                <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Lingue</p>
                <p className="text-white text-sm">Italiano (Madre) • Inglese (B2)</p>
              </div>
              <div>
                <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Istruzione</p>
                <p className="text-brand-primary text-sm leading-tight">
                  Design del Prodotto Industriale<br/>
                  Università degli Studi<br />di Ferrara - UNIFE
                </p>
                <p className="text-neutral-500 text-xs italic mt-1">2024 - Oggi</p>
              </div>
              <div>
                <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Hobby</p>
                <p className="text-white text-sm leading-relaxed">Calisthenics, Arrampicata, Trekking, Basket, Leggere</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* --- COLONNA 2: IL MANIFESTO (5 Colonne) --- */}
        {/* FIGLIO 3: Card Manifesto */}
        <motion.div variants={itemReveal} className="lg:col-span-5 bg-neutral-900/50 border border-white/10 rounded-3xl p-8 flex flex-col justify-center">
          <h2 className="font-heading font-black text-6xl lg:text-7xl uppercase tracking-tighter leading-none mb-8 text-white transition-all duration-300 hover:scale-105 hover:drop-shadow-[0_0_25px_rgba(255,255,255,0.4)] cursor-default">
            CIAO!
          </h2>
          
          <div className="font-sans text-neutral-300 text-base leading-relaxed text-justify space-y-8">
            <p>
              Ho 21 anni, studio Design del Prodotto Industriale a Ferrara e aspiro a diventare un designer del prodotto e dei servizi. Sono un ragazzo entusiasta ed energico mosso da una grande curiosità che mi spinge sempre a mettermi alla prova nella vita con nuove sfide da superare.
            </p>
            
            <div className="font-sans text-neutral-300 text-base leading-relaxed text-justify space-y-8">
              <p className="text-neutral-300 font-medium">
                Considero il design una disciplina di metodo, non un'illuminazione improvvisa: per questo fondo ogni progetto sulla ricerca. Sostituisco l'intuizione casuale con un processo iterativo rigoroso: dall'analisi del problema e dell'utente per poi passare allo studio dell'ergonomia, delle proprietà intrinseche dei materiali e dei processi manifatturieri, fino alla prototipazione.
              </p>
            </div>

            <p>
              Il mio obiettivo è governare le variabili di progetto per consegnare soluzioni concrete e altamente funzionali.
            </p>
          </div>
        </motion.div>

        {/* --- COLONNA 3: SKILLS, SOFTWARE & CONTATTI (4 Colonne) --- */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          
          {/* FIGLIO 4: Cella Skills */}
          <motion.div variants={itemReveal} className="bg-neutral-900/50 border border-white/10 rounded-3xl p-6">
            <h3 className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Hard & Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {['Modellazione 3D', 'Fotogrammetria', 'Ricerca', 'Design Centrato sull\'Utente', 'Conceptual Sketching', 'Scienza dei Materiali', 'Rendering', 'Prototipazione Rapida', 'Stampa 3D', 'Ergonomia', 'Processi Produttivi'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-brand-primary/20 text-brand-primary border border-brand-primary/30 rounded-full text-[10px] uppercase font-mono tracking-wider">{skill}</span>
              ))}
              {['Pensiero Creativo', 'Problem Solving', 'Lavoro di Squadra', 'Precisione', 'Dedizione', 'Curiosità', 'Determinazione', 'Costanza', 'Metodologia', 'Voglia di Fare', 'Diplomazia', 'Decisione', 'Meticolosità'].map(skill => (
                <span key={skill} className="px-3 py-1 bg-white/5 text-neutral-300 border border-white/10 rounded-full text-[10px] uppercase font-mono tracking-wider">{skill}</span>
              ))}
            </div>
          </motion.div>

          {/* FIGLIO 5: Cella Software */}
          <motion.div variants={itemReveal} className="bg-neutral-900/50 border border-white/10 rounded-3xl p-6">
            <h3 className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Toolstack</h3>
            <div className="flex flex-wrap gap-2">
              {['Fusion360', 'AutoCAD', 'Blender', 'Illustrator', 'Photoshop', 'Indesign', 'Twinmotion', 'Metashape', 'Figma', 'Siemens Jack'].map(tool => (
                <span key={tool} className="text-xs font-bold text-white bg-white/10 px-3 py-1.5 rounded-md border border-white/20 shadow-sm">{tool}</span>
              ))}
            </div>
          </motion.div>

          {/* FIGLIO 6: Cella Contatti */}
          <motion.div variants={itemReveal} className="bg-neutral-900/50 border border-white/10 rounded-3xl p-6 flex flex-col justify-center transition-all duration-300 hover:scale-[1.02] hover:bg-brand-dark group cursor-pointer shadow-lg grow">
            <h3 className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold transition-colors group-hover:text-white/80">
              Mettiamoci in contatto
            </h3>
            <div className="flex flex-col gap-4">
              <a href="mailto:filippo.cola@edu.unife.it" className="flex items-center gap-3 text-neutral-300 transition-colors font-medium text-sm group-hover:text-white">
                <Mail size={18} className="text-brand-primary group-hover:text-white transition-colors" /> 
                filippo.cola@edu.unife.it
              </a>
              <a href="tel:+393923408485" className="flex items-center gap-3 text-neutral-300 transition-colors font-medium text-sm group-hover:text-white">
                <Phone size={18} className="text-brand-primary group-hover:text-white transition-colors" /> 
                (+39) 392 340 8485
              </a>
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}