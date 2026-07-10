export default function InspirationSection() {
    return (
      <section className="py-24 px-6 md:px-16 bg-neutral-50 text-brand-black">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[#08594A]/70 tracking-[0.2em] text-xs font-bold uppercase mb-3 text-center">
            02. L'ISPIRAZIONE
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-12 text-center max-w-xl mx-auto">
            Dalla natura all'architettura funzionale.
          </h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 text-[#08594A]">La Genesi dell'Idea</h3>
              <p className="font-sans text-lg leading-relaxed opacity-80">
                Spiega qui l'origine dell'idea. Descrivi il momento "Eureka!" o il processo di riflessione che ha portato a proporre un parasole specifico per le panchine esistenti.
              </p>
            </div>
            <div>
              <h3 className="font-heading font-bold text-xl mb-4 text-[#08594A]">Riferimenti e Visioni</h3>
              <p className="font-sans text-lg leading-relaxed opacity-80">
                Parla delle tue ispirazioni visive o concettuali. Che siano le foglie di una pianta, un'antica struttura ombreggiante o un principio di design minimalista, descrivi qui cosa ha guidato la tua estetica.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }