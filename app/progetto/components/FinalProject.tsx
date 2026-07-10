export default function FinalProject() {
    return (
      <section className="py-24 px-6 md:px-16 bg-neutral-50 text-brand-black">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[#08594A]/70 tracking-[0.2em] text-xs font-bold uppercase mb-3 text-center">
            08. IL PROGETTO FINALE
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center max-w-xl mx-auto">
            Icaro: La soluzione pronta per la città.
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-16 opacity-80 text-center max-w-2xl mx-auto">
            Aggiungi qui una descrizione conclusiva del progetto finale. Sottolinea i risultati ottenuti, i benefici attesi e la visione futura del progetto. Mostra i tuoi render finali e ravvicinati per dare un'idea concreta di Icaro in azione.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="w-full aspect-video bg-neutral-100 rounded-3xl border border-neutral-200 flex items-center justify-center font-mono text-neutral-400">
              [RENDER FINALE 1]
            </div>
            <div className="w-full aspect-video bg-neutral-100 rounded-3xl border border-neutral-200 flex items-center justify-center font-mono text-neutral-400">
              [RENDER FINALE 2]
            </div>
          </div>
          <div className="w-full aspect-[2/1] bg-neutral-100 rounded-3xl border border-neutral-200 flex items-center justify-center font-mono text-neutral-400">
            [RENDER FINALE 3 / PANORAMICO]
          </div>
        </div>
      </section>
    );
  }