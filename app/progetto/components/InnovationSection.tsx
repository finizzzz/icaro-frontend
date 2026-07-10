export default function InnovationSection() {
    const innovations = [
      { title: "Modularità", description: "Descrivi l'innovazione della modularità..." },
      { title: "Sostenibilità", description: "Descrivi l'innovazione della sostenibilità..." },
      { title: "Facilità Installazione", description: "Descrivi l'innovazione dell'installazione..." },
      { title: "Adattabilità", description: "Descrivi l'innovazione dell'adattabilità..." }
    ];
  
    return (
      <section className="py-24 px-6 md:px-16 bg-white text-brand-black">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[#08594A]/70 tracking-[0.2em] text-xs font-bold uppercase mb-3 text-center">
            05. ASPETTI INNOVATIVI
          </p>
          <h2 className="font-heading font-bold text-3xl md:text-4xl mb-16 text-center max-w-xl mx-auto">
            Perché Icaro ridefinisce l'arredo urbano.
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {innovations.map((item, index) => (
              <div key={index} className="flex gap-6 items-start">
                <span className="flex-shrink-0 w-12 h-12 rounded-full bg-[#08594A]/10 text-[#08594A] font-mono text-xl font-bold flex items-center justify-center">
                  {index + 1}
                </span>
                <div>
                  <h4 className="font-heading font-bold text-lg mb-2">{item.title}</h4>
                  <p className="font-sans text-lg opacity-80">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }