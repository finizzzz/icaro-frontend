"use client";
import { XCircle, CheckCircle, BusFront, Umbrella, Building2, Tent } from "lucide-react";
import Image from "next/image"; // IMPORTANTE: Ricordati di importare Image!

export default function CompetitorSection() {
  
  /* 
    1. IL "CERVELLO" AGGIORNATO
    Abbiamo aggiunto la voce "image" a ogni competitor.
  */
  const competitors = [
    {
      title: "Arredo Urbano Standard",
      subtitle: "(Es. Pensiline dei Bus)",
      icon: <BusFront size={20} className="text-neutral-400" />,
      image: "/competitor-bus.jpg", // Sostituisci con il nome del tuo file
      flaw: "Effetto serra e totale staticità.",
      description: "Coperture traslucide che intrappolano il calore. Non si adattano all'inclinazione solare mattutina o serale."
    },
    {
      title: "Design di Lusso",
      subtitle: "(Es. Extremis Hopper)",
      icon: <Umbrella size={20} className="text-neutral-400" />,
      image: "/competitor-hopper.jpg", // Sostituisci con l'immagine di Extremis
      flaw: "Protezione solo zenitale.",
      description: "Costosi e destinati a spazi privati. La tenda orizzontale non protegge quando il sole si abbassa sull'orizzonte."
    },
    {
      title: "Landmark Architettonici",
      subtitle: "(Es. Metropol Parasol)",
      icon: <Building2 size={20} className="text-neutral-400" />,
      image: "/competitor-metropol.jpg", // Sostituisci con la foto di Siviglia
      flaw: "Invasività e costi insostenibili.",
      description: "Straordinari ma impossibili da replicare in modo capillare per risolvere il problema nelle periferie."
    },
    {
      title: "Strutture Mobili",
      subtitle: "(Es. Mollusc Tent)",
      icon: <Tent size={20} className="text-neutral-400" />,
      image: "/competitor-tent.jpg", // Sostituisci con la foto della tenda
      flaw: "Contesto non urbano.",
      description: "Meccanica interessante ma materiali e concezione (campeggio) non adatti agli abusi dello spazio pubblico."
    }
  ];

  return (
    <section id="competitor" className="py-24 px-6 md:px-16 bg-[#F9F9F9] text-brand-black">
      <div className="max-w-6xl mx-auto">
        
        <p className="font-mono text-[#08594A] tracking-[0.2em] text-sm font-bold uppercase mb-4 text-center">
          03. ANALISI DI MERCATO
        </p>
        <h2 className="font-heading font-bold text-4xl md:text-5xl mb-16 text-center text-[#08594A]">
          I limiti delle soluzioni attuali.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          
          {competitors.map((item, index) => (
            // Overflow-hidden serve a non far "sbordare" la foto fuori dagli angoli arrotondati della scheda
            <div key={index} className="bg-white rounded-3xl shadow-sm border border-neutral-200 flex flex-col transition-all hover:shadow-md overflow-hidden group">
              
              {/* 2. IL BLOCCO FOTO */}
              {/* h-48 dà un'altezza fissa. grayscale spegne i colori. group-hover:grayscale-0 li riaccende se passi col mouse! */}
              <div className="relative w-full h-48 bg-neutral-100">
                <Image 
                  src={item.image} 
                  alt={item.title} 
                  fill 
                  className="object-cover grayscale opacity-70 transition-all duration-500 group-hover:grayscale-0 group-hover:opacity-100" 
                  unoptimized
                />
                {/* L'icona piccola in sovrimpressione sulla foto */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-2 rounded-full shadow-sm">
                  {item.icon}
                </div>
              </div>

              {/* 3. IL BLOCCO TESTO */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-heading font-bold text-lg leading-tight">{item.title}</h3>
                <p className="font-mono text-xs text-neutral-400 mb-6">{item.subtitle}</p>
                
                <div className="flex gap-2 items-start mt-auto pt-4 border-t border-neutral-100 w-full">
                  <XCircle size={18} className="text-red-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-sans text-sm font-bold text-red-500 mb-1">{item.flaw}</p>
                    <p className="font-sans text-xs text-neutral-500 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

        {/* 4. LA SCHEDA "EROE" DI ICARO (Larga tutta la griglia) */}
        <div className="bg-[#08594A] rounded-3xl p-8 md:p-12 shadow-xl text-white flex flex-col md:flex-row items-center gap-8 justify-between relative overflow-hidden">
          
          {/* Decorazione di sfondo (cerchio) */}
          <div className="absolute -right-20 -top-20 w-64 h-64 bg-white/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-2xl relative z-10">
            <h3 className="font-heading font-bold text-3xl md:text-4xl mb-4">
              Icaro cambia le regole.
            </h3>
            <p className="font-sans text-lg text-white/90 leading-relaxed mb-6">
              Non sostituisce l'arredo esistente, ma lo evolve. Un modulo <strong className="text-white">Add-on per panchine pubbliche</strong> che permette all'utente di inclinare la copertura, garantendo ombra dinamica a basso costo e zero invasività urbana.
            </p>
          </div>

          <div className="relative z-10 bg-white text-[#08594A] p-6 rounded-2xl flex flex-col gap-3 min-w-[250px] shadow-2xl">
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-[#08594A]" />
              <span className="font-sans text-sm font-bold">Installazione Add-on</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-[#08594A]" />
              <span className="font-sans text-sm font-bold">Copertura Regolabile</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-[#08594A]" />
              <span className="font-sans text-sm font-bold">Costi Scalabili</span>
            </div>
            <div className="flex items-center gap-3">
              <CheckCircle size={20} className="text-[#08594A]" />
              <span className="font-sans text-sm font-bold">Design per il Pubblico</span>
            </div>
          </div>

        </div>
        
      </div>
    </section>
  );
}