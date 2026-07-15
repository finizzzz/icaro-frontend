// components/home/HomeVariants.tsx
"use client";

import Image from "next/image";
import { Check, Puzzle, Map } from "lucide-react"; 
import { motion, Variants } from "framer-motion";

export default function HomeVariants() {
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    /* 
      MODIFICA: 
      Rimosso 'py-24'. 
      Aggiunto 'pt-24' (mantiene l'aria sopra).
      Aggiunto 'pb-12' (dimezza lo spazio bianco sotto le card).
    */
    <section id="varianti" className="pt-24 pb-40 px-6 md:px-16 bg-[#F9F9F9] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-4">
            Due soluzioni, una visione.
          </h2>
          <p className="font-sans text-brand-dark/60 text-xl md:text-xl mx-auto">
            Icaro è un'infrastruttura democratica, progettata per adattarsi organicamente alle diverse esigenze urbane.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-10">
          
          {/* ==========================================
              CARD 1: ADD-ON
              ========================================== */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            className="group rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-brand-dark hover:scale-[1.05] hover:z-10 transition-all duration-500 flex flex-col overflow-hidden cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="/add-on-new.png" 
                alt="Versione Add-on" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 group-hover:bg-brand-primary/20 rounded-full text-brand-primary transition-colors duration-500">
                  <Puzzle size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark group-hover:text-white transition-colors duration-500">
                  Versione Add-on
                </h3>
              </div>

              <p className="text-justify font-sans text-brand-dark/80 group-hover:text-white/80 text-sm leading-relaxed mb-6 transition-colors duration-500">
                Si installa sopra alle sedute urbane preesistenti. Ideale per il retrofitting intelligente, restituisce ai cittadini spazi altrimenti inutilizzabili conferendone una nuova vita.
              </p>
              
              <ul className="mt-auto space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Tempi di installazione rapidi e zero demolizioni.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Riutilizzo delle strutture già esistenti a costo contenuto.</span>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* ==========================================
              CARD 2: STAND-ALONE
              ========================================== */}
          <motion.div 
            variants={cardVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.2 }}
            className="group rounded-3xl bg-white border border-gray-100 shadow-sm hover:shadow-2xl hover:bg-brand-dark hover:scale-[1.05] hover:z-10 transition-all duration-500 flex flex-col overflow-hidden cursor-pointer"
          >
            <div className="aspect-video relative overflow-hidden">
              <Image 
                src="/alone-new.png" 
                alt="Versione Autonoma" 
                fill 
                className="object-cover transition-transform duration-700 group-hover:scale-105" 
              />
            </div>
            
            <div className="p-8 flex flex-col flex-grow">
              <div className="flex items-center gap-3 mb-3">
                <div className="p-2 bg-brand-primary/10 group-hover:bg-brand-primary/20 rounded-full text-brand-primary transition-colors duration-500">
                  <Map size={24} />
                </div>
                <h3 className="font-heading font-bold text-2xl text-brand-dark group-hover:text-white transition-colors duration-500">
                  Versione Autonoma
                </h3>
              </div>

              <p className="text-justify font-sans text-brand-dark/80 group-hover:text-white/80 text-sm leading-relaxed mb-6 transition-colors duration-500">
                Concepita per l'installazione ex-novo. Porta comfort climatico e sedute ergonomiche in piazze e parchi sprovvisti di arredo.
              </p>
              
              <ul className="mt-auto space-y-3">
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Sistema modulare con sedute a incastro con possibilità di personalizzazione.</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check size={18} className="text-brand-primary mt-[2px] shrink-0" />
                  <span className="font-sans text-sm text-brand-dark font-medium group-hover:text-white transition-colors duration-500">Creazione di zone d'ombra in zone non fornite.</span>
                </li>
              </ul>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}