// components/home/HomeVideo.tsx
"use client";

import { useState, useRef } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HomeVideo() {
  const [animationKey, setAnimationKey] = useState(0);
  const previousTimeRef = useRef(0);

  const handleTimeUpdate = (e: any) => {
    const currentTime = e.currentTarget.currentTime;
    if (currentTime < previousTimeRef.current - 0.5) {
      setAnimationKey((prev) => prev + 1); 
    }
    previousTimeRef.current = currentTime;
  };

  return (
    <section className="relative w-full h-[100dvh] bg-black flex items-center justify-center overflow-hidden">
      
      {/* LIVELLO 0: IL VIDEO */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        onTimeUpdate={handleTimeUpdate} 
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-90" 
      >
        <source src="/video-movimento-cut.mp4" type="video/mp4" />
      </video>

      {/* 
        MODIFICA 2: L'OVERLAY GLOBALE
        Manteniamo il velo al 30% per garantire la lettura del titolo centrale.
      */}
      <div className="absolute inset-x-0 bottom-0 h-3/4 bg-gradient-to-t from-black via-black/50 to-transparent z-10" />


      {/* LIVELLO 20: IL TESTO */}
      <motion.div 
        key={animationKey} 
        className="relative z-20 max-w-5xl mx-auto px-6 text-center pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.2, 0.7, 1], ease: "easeInOut" }}
      >
        <h1 className="font-heading font-black text-4xl md:text-5xl text-white drop-shadow-2xl mb-4">
          L'ombra <br className="md:hidden"/> che segue il sole.
        </h1>
      </motion.div>

{/* LIVELLO 30: IL BOTTONE */}
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-30">
  <Link href="/progetto" passHref>
    {/* 
      MODIFICA: Aggiunto hover:scale-[1.05] 
      Il bottone si ingrandirà del 5% mantenendo la transizione fluida.
    */}
    <div className="group h-14 w-[56px] hover:w-[200px] flex items-center rounded-full overflow-hidden relative cursor-pointer bg-white hover:bg-brand-dark shadow-xl transition-all duration-300 hover:scale-[1.05]">
      <div className="w-14 h-14 min-w-[56px] flex items-center justify-center text-brand-dark group-hover:text-white transition-colors duration-300">
        <ArrowRight size={24} />
      </div>
      <div className="flex-1 flex justify-center font-sans font-bold text-xs tracking-widest uppercase text-transparent group-hover:text-white transition-colors duration-300 whitespace-nowrap">
        SCOPRI DI PIÙ
      </div>
    </div>
  </Link>
</div>

    </section>
  );
}