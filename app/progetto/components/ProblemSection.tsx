export default function ProblemSection() {
    return (
      <section className="py-24 px-6 md:px-16 bg-white text-brand-black">
        <div className="max-w-4xl mx-auto grid md:grid-cols-[1fr,1.5fr] gap-12 items-center">
          <div className="w-full aspect-square bg-neutral-100 rounded-3xl border border-neutral-200 flex items-center justify-center font-mono text-neutral-400">
            [IMMAGINE/GRAFICO SUL PROBLEMA]
          </div>
          <div>
            <p className="font-mono text-[#08594A]/70 tracking-[0.2em] text-xs font-bold uppercase mb-3">
              01. IL PROBLEMA
            </p>
            <h2 className="font-heading font-bold text-3xl md:text-4xl mb-6 leading-tight">
              L'urgenza dell'ombra nelle città surriscaldate.
            </h2>
            <p className="font-sans text-lg leading-relaxed mb-6 opacity-80">
              Aggiungi qui il testo descrittivo del problema. Spiega come l'esposizione al sole renda inutilizzabili le panchine pubbliche durante le ore più calde, limitando la fruizione degli spazi urbani e aumentando il disagio termico per i cittadini.
            </p>
            <div className="flex gap-3">
              <span className="bg-neutral-100 text-[#08594A] font-mono text-xs font-bold px-4 py-2 rounded-full">#UrbanHeatIsland</span>
              <span className="bg-neutral-100 text-[#08594A] font-mono text-xs font-bold px-4 py-2 rounded-full">#MancanzaOmbra</span>
            </div>
          </div>
        </div>
      </section>
    );
  }