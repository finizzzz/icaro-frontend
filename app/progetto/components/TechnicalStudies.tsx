// app/progetto/components/EngineeringSection.tsx
"use client";

import Image from "next/image";

export default function EngineeringSection() {
  return (
    /* 
      1. IL CONTENITORE FULL-SCREEN
      h-[100dvh] occupa tutta l'altezza del monitor.
      Nessun padding laterale, l'immagine deve toccare i bordi.
    */
    <section id="ingegneria" className="relative w-full h-[100dvh] overflow-hidden">
      
      {/* 2. L'IMMAGINE A TUTTA PAGINA */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/QUOTE.PNG" // Assicurati che l'immagine sia ad alta risoluzione
          alt="Blueprint Quote e Ingombri" 
          fill 
          className="object-contain opacity-80" // object-cover riempie tutto senza distorcere
          quality={100} 
          sizes="100vw"
        />
      </div>

{/* 
  MODIFICA: 
  Rimosso 'justify-end' dal padre.
  Aggiunto 'mt-auto' al div che contiene il testo. 
  Questo spinge il contenuto verso il basso, ma ci lascia il controllo dell'allineamento.
*/}
<div className="absolute inset-0 z-20 flex flex-col items-end text-right p-6 md:p-50 mb-0 w-full">
  
  {/* Questo div contiene il testo e viene spinto in basso da mt-auto */}
  <div className="mt-70 flex flex-col items-end">
    
    <p className="font-mono text-brand-primary tracking-[0.3em] text-sm font-bold uppercase mb-6 drop-shadow-md">
      Quote
    </p>
    
    <h2 className="font-heading font-black text-6xl md:text-[7rem] lg:text-[8rem] text-brand-dark leading-[0.85] mb-6 tracking-tighter drop-shadow-sm">
      INGOMBRO <br /> MAX.
    </h2>
    
    <p className="font-sans text-lg md:text-xl text-brand-primary font-medium leading-relaxed mb-10 max-w-2xl text-right hyphens-auto">
      Le dimensioni del modulo di ancoraggio sono state calcolate per adattarsi al 90% delle sedute urbane standard senza sporgere. Il raggio di inclinazione della copertura garantisce l'ombra senza invadere le corsie pedonali adiacenti.
    </p>
    
  </div>

</div>

    </section>
  );
}