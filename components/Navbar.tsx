"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import Link from "next/link"; // <-- 1. Aggiunto l'import vitale di Next.js

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const { scrollY } = useScroll();

  // Monitoriamo lo scroll: appare solo quando scendiamo sotto i 100px
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
      <div className="flex items-center justify-between px-6 py-3 bg-brand-primary/70 backdrop-blur-md border border-white/30 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.05] hover:bg-brand-dark">
        <Link href="/" className="font-heading font-bold text-white text-xl tracking-wide">
          Icaro.
        </Link>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 font-sans text-white text-sm font-light tracking-wide">
            {/* 2. Aggiunto lo slash per forzare la ricerca nella Home Page */}
            <Link href="/#problema" className="hover:text-white/80 transition-colors">Il Problema</Link>
            
            {/* 3. Rimanda alla nuova pagina Progetto (parte in automatico dall'alto) */}
            <Link href="/progetto" className="hover:text-white/80 transition-colors">Il Progetto</Link>
            
            {/* 4. Aggiunto lo slash per forzare la ricerca nella Home Page */}
            <Link href="/#gallery" className="hover:text-white/80 transition-colors">Galleria</Link>
            
            {/* 5. Rimanda alla pagina About (uso /chi-sono basandomi sui tuoi screen precedenti) */}
            <Link href="/chi-sono" className="hover:text-white/80 transition-colors">About Me</Link>
          </div>
          
          {/* Il footer è condiviso in tutte le pagine, quindi basta #footer per scendere in fondo a prescindere da dove ci si trovi */}
          <Link href="#footer" className="bg-white text-brand-primary px-5 py-2 rounded-full font-sans font-bold text-sm transition-all duration-300 hover:scale-110 hover:shadow-md hover:bg-brand-primary hover:text-white">
            Contattaci
          </Link>
        </div>
      </div>
    </motion.nav>
  );
}