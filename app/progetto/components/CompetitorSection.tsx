// components/home/HomeCompetitors.tsx
"use client";

// 1. Inserito 'Sun' al posto di 'Umbrella'
import { XCircle, CheckCircle, BusFront, Sun, Building2, Tent } from "lucide-react"; 
import Image from "next/image";

export default function HomeCompetitors() {
  
  const competitors = [
    {
      title: "Arredo Urbano Standard",
      subtitle: "(Es. Pensiline dei Bus)",
      icon: <BusFront size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/pensilina.jpg", 
      flaw: "Effetto serra e totale staticità.",
      description: "Coperture traslucide che intrappolano il calore e non impediscono il passaggio dei raggi solari."
    },
    {
      title: "Parasole da giardino",
      subtitle: "(Es. Extremis Hopper)",
      // 2. Usiamo il Sole come richiesto
      icon: <Sun size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/extremis.jpg", 
      flaw: "Protezione solo zenitale.",
      description: "Costosi e destinati a spazi privati. La tenda orizzontale non protegge quando il sole si abbassa sull'orizzonte."
    },
    {
      title: "Landmark Architettonici",
      subtitle: "(Es. Metropol Parasol)",
      icon: <Building2 size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/metropol.jpg",
      flaw: "Invasività e costi insostenibili.",
      description: "Straordinari ma impossibili da replicare in modo capillare per risolvere il problema nelle periferie."
    },
    {
      title: "Strutture Mobili",
      subtitle: "(Es. Mollusc Tent)",
      icon: <Tent size={20} className="text-neutral-400 group-hover:text-white transition-colors duration-500" />,
      image: "/mollusco.jpg", 
      flaw: "Contesto non urbano.",
      description: "Meccanica interessante ma materiali e concezione non adatti agli abusi dello spazio pubblico."
    }
  ];

  return (
    <section id="competitor" className="py-24 px-6 md:px-16 bg-[#F9F9F9] text-brand-black overflow-hidden">
      <div className="max-w-6xl mx-auto">
        
        <p className="text-center font-mono text-[#08594A] tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-6">
          Analisi di Mercato
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-14 text-center">
          I limiti delle soluzioni attuali.
        </h2>

        {/* GRIGLIA COMPETITOR */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          
          {competitors.map((item, index) => (
            /* 
               IL CONTENITORE PRINCIPALE (LA MAGIA È QUI):
               - group: Permette di controllare i figli al passaggio del mouse.
               - hover:scale-[1.05]: Ingrandisce la card del 5%.
               - hover:bg-[#08594A]: Cambia lo sfondo in verde.
            */
            <div 
              key={index} 
              className="group bg-white rounded-3xl shadow-sm border border-gray-100 flex flex-col transition-all duration-500 hover:shadow-2xl hover:scale-[1.05] hover:bg-[#08594A]  overflow-hidden cursor-pointer"
            >
              
              {/* ZONA IMMAGINE */}
              <div className="relative w-full h-48 bg-neutral-100 overflow-hidden">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover grayscale opacity-60 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110" 
                  unoptimized
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm group-hover:bg-white/20 transition-colors duration-500">
                  {item.icon}
                </div>
              </div>

              {/* ZONA TESTO */}
              <div className="p-6 flex flex-col flex-grow">
                {/* TITOLI SCURI -> BIANCHI */}
                <h3 className="font-heading font-bold text-lg leading-tight text-brand-dark group-hover:text-white transition-colors duration-500">
                  {item.title}
                </h3>
                {/* SOTTOTITOLI VERDI -> BIANCHI */}
                <p className="font-mono text-xs text-brand-primary group-hover:text-white/80 transition-colors duration-500 mb-6 mt-1">
                  {item.subtitle}
                </p>
                
                {/* LINEA SEPARATRICE */}
                <div className="flex gap-3 items-start mt-auto pt-4 border-t border-brand-primary/70 group-hover:border-white/20 transition-colors duration-500 w-full">
                  <XCircle size={18} className="text-[#08594A] group-hover:text-white flex-shrink-0 mt-0.5 transition-colors duration-500" />
                  <div>
                    {/* DIFETTO VERDE -> BIANCO */}
                    <p className="font-sans text-sm font-bold text-brand-dark group-hover:text-white mb-2 transition-colors duration-500">
                      {item.flaw}
                    </p>
                    {/* DESCRIZIONE VERDE -> BIANCO (GIUSTIFICATA, SENZA SILLABAZIONE) */}
                    <p className="font-sans text-xs text-brand-primary group-hover:text-white/90 leading-relaxed text-justify hyphens-auto transition-colors duration-500">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

{/* 
          SCHEDA EROE: ICARO 
          Ridisegnata per l'inversione cromatica selettiva.
          Base: Sfondo Verde (#08594A). Hover: Sfondo Nero.
        */}
        <div className="group bg-[#08594A] hover:bg-black rounded-3xl p-8 md:p-14 shadow-2xl text-white flex flex-col md:flex-row items-center gap-12 justify-between relative overflow-hidden transition-all duration-500 hover:scale-[1.05] cursor-pointer ring-1 ring-white/10 hover:ring-[#08594A]/50">
          
          {/* Decorazione di sfondo animata */}
          <div className="absolute -right-20 -top-20 w-80 h-80 bg-white/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-[#08594A]/50 group-hover:scale-150" />

          <div className="max-w-2xl relative z-10">
            {/* 
              TITOLETTO: Bianco di base -> Verde all'hover 
            */}
            <p className="font-mono text-white group-hover:text-[#08594A] transition-colors duration-500 tracking-[0.3em] text-xs md:text-sm font-bold uppercase mb-6 md:mb-10">
              La Soluzione
            </p>
            
            {/* 
              TITOLO PRINCIPALE: SEMPRE BIANCO.
              DEBUG: Rimosso 'font-white' (non esiste in Tailwind), rimosso 'text-brand-white' (sostituito con text-white puro), rimosso 'hover' a vuoto alla fine.
            */}
            <h3 className="font-heading font-black text-4xl md:text-5xl text-white mb-4">
              ICARO.
            </h3>
            
            {/* 
              PARAGRAFO PRINCIPALE: SEMPRE BIANCO.
            */}
            <p className="text-justify font-sans text-lg md:text-xl text-white/80 leading-relaxed mb-6">
              Non sostituisce l'arredo esistente, ma lo evolve. Un modulo <strong className="text-white">Add-on per panchine pubbliche</strong> che permette all'utente di inclinare la copertura, garantendo ombra dinamica a basso costo e zero invasività urbana.
            </p>
          </div>

          {/* 
            BALOON DELLE CARATTERISTICHE (Box Piccolo)
          */}
          <div className="relative z-10 bg-black/20 group-hover:bg-white/10 backdrop-blur-md border border-white/10 text-white p-8 rounded-2xl flex flex-col gap-4 min-w-[280px] shadow-2xl transition-colors duration-500">
            
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              {/* MODIFICA: Aggiunto group-hover:text-[#08594A] e transition-colors allo span */}
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Installazione Add-on</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              {/* MODIFICA: Aggiunto group-hover:text-[#08594A] e transition-colors allo span */}
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Copertura Regolabile</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              {/* MODIFICA: Aggiunto group-hover:text-[#08594A] e transition-colors allo span */}
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Zero Cantieri</span>
            </div>
            
            <div className="flex items-center gap-4">
              <CheckCircle size={24} className="text-white group-hover:text-[#08594A] transition-colors duration-500" />
              {/* MODIFICA: Aggiunto group-hover:text-[#08594A] e transition-colors allo span */}
              <span className="font-sans text-sm md:text-base font-bold transition-colors duration-500 group-hover:text-white">Design per il Pubblico</span>
            </div>
            
          </div>

        </div>
        
      </div>
    </section>
  );
}