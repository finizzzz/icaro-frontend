export default function MaterialsSection() {
    return (
      <section className="py-24 px-6 md:px-16 bg-neutral-900 text-white rounded-[3rem]">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-3 text-center">
            06. I MATERIALI USATI
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center max-w-xl mx-auto">
            Scelte sostenibili per un futuro urbano durevole.
          </h2>
          <div className="grid md:grid-cols-[1.5fr,1fr] gap-12 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6 text-[#08594A]">Estetica e Funzione</h3>
              <p className="font-sans text-lg leading-relaxed mb-6 text-white/80">
                Descrivi i materiali scelti. Spiega perché hai selezionato specifici metalli, tessuti o materiali compositi (es. resistenza agli agenti atmosferici, riciclabilità, estetica). Sottolinea come i materiali riflettano la sostenibilità e la visione del progetto.
              </p>
            </div>
            <div className="w-full aspect-square bg-white/5 rounded-3xl border border-white/10 flex items-center justify-center font-mono text-white/30">
              [MOCKUP MATERIALI / LEGGENDA]
            </div>
          </div>
        </div>
      </section>
    );
  }