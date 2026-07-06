"use client";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";

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
        <a href="/" className="font-heading font-bold text-white text-xl tracking-wide">
          Icaro.
        </a>
        
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 font-sans text-white text-sm font-light tracking-wide">
            <a href="#problema" className="hover:text-white/80 transition-colors">Il Problema</a>
            <a href="#progetto" className="hover:text-white/80 transition-colors">Il Progetto</a>
            <a href="#gallery" className="hover:text-white/80 transition-colors">Galleria</a>
            <a href="#about" className="hover:text-white/80 transition-colors">About Me</a>
          </div>
          
          <a href="#contatti" className="bg-white text-brand-primary px-5 py-2 rounded-full font-sans font-bold text-sm transition-all duration-300 hover:scale-110 hover:shadow-md">
            Contattaci
          </a>
        </div>
      </div>
    </motion.nav>
  );
}