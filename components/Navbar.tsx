"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; 

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsVisible(latest > 100);
  });

  return (
    <motion.nav 
      animate={{ 
        opacity: isVisible ? 1 : 0, 
        y: isVisible ? 0 : -20,
        pointerEvents: isVisible ? "auto" : "none" 
      }}
      transition={{ duration: 0.4 }}
      className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl"
    >
      <div className="flex items-center justify-between px-6 py-3 bg-brand-primary/80 backdrop-blur-md border-brand-white/50 rounded-full shadow-2xl transition-all duration-300 hover:scale-[1.05] hover:bg-neutral-900 hover:border-brand-black/90">
        
        {/* 
          MODIFICA TITOLO: 
          Aggiunta la classe 'normal-case' per forzare l'esclusione del maiuscolo. 
          Se desideri rimuovere del tutto le maiuscole (icaro.), utilizza 'lowercase'.
        */}
        <Link href="/" className="font-heading font-bold text-white text-xl tracking-wide normal-case">
          ICARO.
        </Link>
        
        <div className="flex items-center gap-6">
          
          {/* 
            ANALISI GIUSTIFICAZIONE: 
            I link interni sono parole singole disposte orizzontalmente tramite Flexbox. 
            Aggiungere 'text-justify' qui non modificherebbe minimamente l'interfaccia.
          */}
          <div className="hidden md:flex items-center gap-6 font-sans text-white text-sm font-light tracking-wide">
            <Link href="/#problema" className="hover:text-white transition-colors">Il Problema</Link>
            <Link href="/progetto" className="hover:text-white transition-colors">Il Progetto</Link>
            <Link href="/progetto/#gallery" className="hover:text-white transition-colors">Galleria</Link>
            <Link href="/about-me" className="hover:text-white transition-colors">About Me</Link>
          </div>
          
          <Link href="#footer" className="bg-white text-neutral-900 px-5 py-2 rounded-full font-sans font-bold text-sm transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-white">
            Contattami
          </Link>

        </div>
      </div>
    </motion.nav>
  );
}