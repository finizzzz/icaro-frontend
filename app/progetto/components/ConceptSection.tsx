import Image from "next/image";

export default function ConceptSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#08594A]/5 text-brand-black">
      <div className="max-w-4xl mx-auto">
        <p className="font-mono text-[#08594A]/70 tracking-[0.2em] text-xs font-bold uppercase mb-3 text-center">
          04. IL CONCEPT
        </p>
        <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center max-w-xl mx-auto">
          Icaro: L'ombra modulare e democratica.
        </h2>
        
        <div className="grid md:grid-cols-[1fr,1fr] gap-12 items-center mb-16">
          <div className="w-full aspect-square bg-neutral-100 rounded-3xl border border-neutral-200 flex items-center justify-center font-mono text-neutral-400">
            [IMMAGINE CONCEPT GENERALE]
          </div>
          <div>
            <h3 className="font-heading font-bold text-2xl mb-5 text-[#08594A]">L'idea Centrale</h3>
            <p className="font-sans text-lg leading-relaxed opacity-80">
              Aggiungi qui il testo descrittivo del concept. Spiega l'essenza del progetto: un sistema parasole "Add-on" progettato per adattarsi organicamente alle diverse esigenze e morfologie urbane, democratizzando l'accesso all'ombra nelle città.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
            <h4 className="font-heading font-bold text-xl mb-4 text-[#08594A]">Versione Add-on</h4>
            <p className="font-sans text-lg leading-relaxed opacity-80">
              Descrivi la versione Add-on. Spiega come si aggancia alle panchine esistenti, la sua modularità e i vantaggi in termini di costi e installazione.
            </p>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-neutral-100">
            <h4 className="font-heading font-bold text-xl mb-4 text-[#08594A]">Versione Autonoma</h4>
            <p className="font-sans text-lg leading-relaxed opacity-80">
              Descrivi la versione Autonoma (se prevista). Spiega le sue caratteristiche e i contesti di utilizzo (es. piazze, parchi senza panchine).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}