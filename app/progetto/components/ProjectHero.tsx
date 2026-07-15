// components/project/ProjectHero.tsx
import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectHero() {
  return (
    /* 
       MODIFICA: H-[100dvh] per occupare tutto lo schermo.
       bg-black + gradiente per un look premium.
    */
    <section className="relative w-full h-[100dvh] bg-black flex flex-col justify-end px-6 md:px-16 pb-24 md:pb-32 overflow-hidden">
      
      {/* 1. NAVIGAZIONE (In alto a sinistra, z-20 per stare sopra tutto) */}
      <div className="absolute top-12 left-6 md:left-16 z-20">
        <Link href="/" className="group inline-flex items-center gap-3 text-white/50 hover:text-white transition-all duration-300 font-mono text-xs tracking-widest uppercase">
          <ArrowLeft size={16} className="group-hover:-translate-x-2 transition-transform" />
          Torna alla Home
        </Link>
      </div>

      {/* 2. OVERLAY PER LEGGIBILITÀ (Gradiente dal basso) */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />

      {/* 3. TESTI (Stile Hero della Home) */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <p className="font-mono text-brand-primary tracking-[0.3em] text-sm font-bold uppercase mb-6">
          Il Progetto
        </p>
        
        <h1 className="font-heading font-black text-6xl md:text-[8rem] lg:text-[9rem] text-white uppercase tracking-tighter leading-[0.85] mb-8">
          Icaro.
        </h1>
        
        <p className="text-justify font-sans text-xl md:text-xl text-white/90 max-w-2xl leading-relaxed">
          Un parasole pubblico innovativo progettato per integrare la sostenibilità e il comfort nelle panchine urbane esistenti.
        </p>
      </div>
      
    </section>
  );
}