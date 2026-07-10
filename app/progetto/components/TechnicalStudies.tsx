export default function TechnicalStudies() {
    return (
      <section className="py-24 px-6 md:px-16 bg-white text-brand-black">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[#08594A]/70 tracking-[0.2em] text-xs font-bold uppercase mb-3 text-center">
            07. STUDI FISICI E TECNICI
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center max-w-xl mx-auto">
            Validazione ingegneristica per un design sicuro.
          </h2>
          <p className="font-sans text-lg leading-relaxed mb-12 opacity-80 text-center max-w-2xl mx-auto">
            Descrivi gli studi tecnici effettuati. Parla delle analisi del vento, dei calcoli strutturali, degli studi sull'ombra o dell'efficienza dei materiali. Spiega come questi studi abbiano convalidato e ottimizzato il design del parasole.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="w-full aspect-video bg-neutral-100 rounded-3xl border border-neutral-200 flex items-center justify-center font-mono text-neutral-400">
              [STUDIO 1 / GRAFICO]
            </div>
            <div className="w-full aspect-video bg-neutral-100 rounded-3xl border border-neutral-200 flex items-center justify-center font-mono text-neutral-400">
              [STUDIO 2 / GRAFICO]
            </div>
          </div>
        </div>
      </section>
    );
  }