import { ExternalLink } from "lucide-react";

export default function InspirationSection() {
  return (
    // 1. CONTENITORE PADRE: Sfondo bianco pulito, flexbox per centrare il contenuto
    <section id="ispirazione" className="py-24 px-6 md:px-16 bg-white text-brand-black flex justify-center">
      
      {/* 2. LIMITATORE DI LARGHEZZA: max-w-3xl (circa 768px) rende la lettura molto riposante */}
      <div className="max-w-3xl text-center flex flex-col items-center">
        
        {/* Intestazione */}
        <p className="font-mono text-[#08594A] tracking-[0.2em] text-sm font-bold uppercase mb-4">
          L'Efficacia dell'Ombra
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-5xl mb-6 text-[#08594A]">
          Lo scudo più antico del mondo.
        </h2>
        
        {/* 3. IL TESTO: Breve, giustificato e centrato sul valore del tuo design */}
        <p className="font-sans text-lg md:text-xl leading-relaxed text-brand-black/80 mb-10 text-justify hyphens-auto w-full">
          L'ombra non si limita a bloccare la luce: abbatte drasticamente la temperatura radiante percepita dal corpo umano, prevenendo colpi di calore. Tuttavia, un'ombra statica è inefficace contro un sole che si muove. La vera utilità nasce dalla possibilità di inclinare la copertura, permettendo di creare l'ombra esatta di cui si ha bisogno in qualsiasi momento della giornata, trasformando una normale panchina in un rifugio termico sicuro e adattabile.
        </p>
        
        {/* 4. IL PULSANTE ESTERNO (Link all'OMS) */}
        <a 
          href="https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health" 
          target="_blank" 
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-3 bg-[#08594A] text-white px-8 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 hover:scale-105 hover:bg-brand-black hover:shadow-xl"
        >
          <span>Report OMS: Calore e Salute</span>
          {/* L'icona si muove in alto a destra quando passi il mouse (grazie alla classe group) */}
          <ExternalLink size={18} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
        </a>
        
      </div>
    </section>
  );
}