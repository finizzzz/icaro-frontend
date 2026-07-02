import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 bg-white overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-primary/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center gap-8">
          <p className="font-mono text-brand-primary tracking-[0.2em] text-sm uppercase font-bold">
            01. L'Ombra Intelligente
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-brand-black leading-tight">
            Ripensare lo spazio <br />
            <span className="text-brand-primary">urbano</span> esistente.
          </h1>
          <p className="font-sans text-brand-black/70 text-lg md:text-xl max-w-2xl">
            Il primo parasole pubblico add-on progettato per integrarsi perfettamente con le panchine già installate. Nessun cantiere, massimo comfort.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mt-4">
            <Link href="#progetto" className="bg-brand-primary text-white px-8 py-4 rounded-full font-sans font-semibold hover:bg-brand-dark transition-all">
              Scopri Icaro
            </Link>
            <Link href="#contatti" className="border border-brand-primary text-brand-primary px-8 py-4 rounded-full font-sans font-semibold hover:bg-brand-primary/5 transition-all">
              Contattaci
            </Link>
          </div>
        </div>
      </section>

      {/* 2. PROBLEMATICA */}
      <section id="problema" className="py-24 px-6 bg-brand-sand/10">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="font-heading font-bold text-4xl text-brand-black mb-6">L'Isola di calore è un problema reale.</h2>
            <p className="font-sans text-brand-black/80 mb-6 leading-relaxed">
              Le nostre città stanno diventando roventi. Le superfici in cemento e asfalto assorbono calore, rendendo l'arredo urbano inutilizzabile durante le ore diurne. Rimuovere le panchine esistenti per installarne di nuove e coperte ha costi economici ed ecologici insostenibili.
            </p>
            <p className="font-mono text-brand-primary text-sm font-bold">
              &gt; La soluzione di Icaro interviene senza distruggere.
            </p>
          </div>
          <div className="aspect-square bg-white rounded-3xl border border-brand-grey/20 flex items-center justify-center shadow-sm">
            <span className="font-mono text-brand-grey text-sm">Foto termica / Ambiente urbano</span>
          </div>
        </div>
      </section>

      {/* 3. PROGETTO */}
      <section id="progetto" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-brand-black mb-4">Perché ICARO è diverso.</h2>
            <p className="font-sans text-brand-black/70 max-w-2xl mx-auto">
              Non è solo un parasole, è un sistema ingegnerizzato per l'efficienza urbana.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 rounded-3xl bg-gray-50 border border-brand-grey/10 hover:border-brand-primary/50 transition-colors">
              <div className="text-brand-primary font-mono mb-4 text-2xl font-bold">01.</div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-3">Add-on Universale</h3>
              <p className="font-sans text-brand-black/70 text-sm">Si aggancia alle sedute esistenti grazie a un sistema di morsetti modulari. Zero scavi, zero opere murarie.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-brand-grey/10 hover:border-brand-primary/50 transition-colors">
              <div className="text-brand-primary font-mono mb-4 text-2xl font-bold">02.</div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-3">Manutenzione Zero</h3>
              <p className="font-sans text-brand-black/70 text-sm">Realizzato in acciaio zincato e tessuti tecnici resistenti a raggi UV e atti vandalici. Pensato per durare.</p>
            </div>
            <div className="p-8 rounded-3xl bg-gray-50 border border-brand-grey/10 hover:border-brand-primary/50 transition-colors">
              <div className="text-brand-primary font-mono mb-4 text-2xl font-bold">03.</div>
              <h3 className="font-heading font-bold text-xl text-brand-black mb-3">Rispetto Estetico</h3>
              <p className="font-sans text-brand-black/70 text-sm">Un design minimale che non aggredisce il panorama urbano, ma lo valorizza con forme pulite e leggere.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3.5 VARIANTI DI PROGETTO */}
      <section id="varianti" className="py-24 px-6 bg-white border-t border-brand-grey/10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-brand-black mb-4">Due soluzioni, una visione.</h2>
            <p className="font-sans text-brand-black/70 max-w-2xl mx-auto">Icaro è progettato per adattarsi alle diverse esigenze urbane.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-10">
            {/* CARD 1 */}
            <div className="group rounded-3xl bg-gray-50 border border-brand-grey/20 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-brand-sand/20 flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-brand-grey text-sm">Render Variante Add-on</span>
              </div>
              <div className="p-10">
                <div className="text-brand-primary font-mono mb-2 text-sm font-bold uppercase tracking-widest">Modulo Universale</div>
                <h3 className="font-heading font-bold text-3xl text-brand-black mb-4">Versione Add-on</h3>
                <p className="font-sans text-brand-black/70 leading-relaxed mb-6">La nostra soluzione di punta. Un sistema di aggancio ingegnerizzato per essere installato direttamente sulle panchine urbane preesistenti.</p>
                <ul className="font-sans text-sm text-brand-black/80 space-y-3">
                  <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">✓</span> Aggancio a morsetto brevettato</li>
                  <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">✓</span> Installazione rapida</li>
                  <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">✓</span> Conservazione arredo originale</li>
                </ul>
              </div>
            </div>
            {/* CARD 2 */}
            <div className="group rounded-3xl bg-gray-50 border border-brand-grey/20 overflow-hidden hover:shadow-xl transition-all duration-300">
              <div className="aspect-[16/9] bg-brand-primary/10 flex items-center justify-center relative overflow-hidden">
                <span className="font-mono text-brand-grey text-sm">Render Variante Stand-alone</span>
              </div>
              <div className="p-10">
                <div className="text-brand-primary font-mono mb-2 text-sm font-bold uppercase tracking-widest">Sistema Completo</div>
                <h3 className="font-heading font-bold text-3xl text-brand-black mb-4">Versione Stand-alone</h3>
                <p className="font-sans text-brand-black/70 leading-relaxed mb-6">Il design Icaro nella sua forma più completa. Un modulo indipendente che integra la struttura parasole con una seduta ergonomica dal design pulito.</p>
                <ul className="font-sans text-sm text-brand-black/80 space-y-3">
                  <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">✓</span> Struttura autoportante</li>
                  <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">✓</span> Seduta ergonomica integrata</li>
                  <li className="flex items-center gap-3"><span className="text-brand-primary font-bold">✓</span> Ancoraggio a terra predisposto</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. MODELLO 3D */}
      <section id="modello3d" className="py-24 px-6 bg-brand-sand/10">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl text-brand-black mb-6">Esplora ICARO in 3D</h2>
          <p className="font-sans text-brand-black/70 mb-12 max-w-2xl mx-auto">Interagisci con il modello per scoprire i materiali e i giunti meccanici.</p>
          <div className="w-full h-[500px] bg-white rounded-3xl border border-brand-grey/20 shadow-sm flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin w-10 h-10 border-4 border-brand-primary border-t-transparent rounded-full mx-auto mb-4"></div>
              <p className="font-mono text-brand-primary font-bold">Caricamento Viewer 3D...</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. GALLERY */}
      <section id="gallery" className="py-24 px-6 bg-white overflow-hidden">
        <div className="max-w-6xl mx-auto mb-12">
          <h2 className="font-heading font-bold text-4xl text-brand-black">Galleria</h2>
          <p className="font-mono text-brand-grey mt-2 uppercase text-sm font-bold">Prototipi e Render di Icaro</p>
        </div>
        <div className="flex gap-6 overflow-x-auto pb-8 px-6 max-w-[1400px] mx-auto snap-x scrollbar-hide">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="min-w-[300px] md:min-w-[450px] aspect-[4/3] bg-gray-50 rounded-2xl flex-shrink-0 snap-center flex items-center justify-center border border-brand-grey/20 shadow-sm">
              <p className="font-mono text-brand-grey">Render {item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. ABOUT US */}
      <section id="about" className="py-24 px-6 bg-brand-sand/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl text-brand-black mb-6">About Us</h2>
          <p className="font-sans text-brand-black/80 text-lg leading-relaxed">
            Siamo un team di designer e progettisti con una visione chiara: migliorare la vivibilità delle nostre città attraverso soluzioni intelligenti e sostenibili. Il progetto Icaro nasce dall'esigenza di adattare l'infrastruttura esistente alle nuove sfide climatiche.
          </p>
        </div>
      </section>

      {/* 7. CALL TO ACTION FINALE */}
      <section id="contatti" className="py-32 px-6 bg-brand-primary relative">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-white mb-6">Pronto a riqualificare i tuoi spazi?</h2>
          <p className="font-sans text-white/90 text-lg mb-10 max-w-xl mx-auto font-medium">
            Contattaci per una consulenza tecnica gratuita o per richiedere la scheda tecnica dettagliata del progetto Icaro.
          </p>
          <a href="mailto:filippo.cola@edu.unife.it" className="inline-block bg-white text-brand-primary px-10 py-4 rounded-full font-sans font-bold hover:bg-gray-50 transition-colors shadow-lg">
            Scrivici Ora
          </a>
        </div>
      </section>

    </main>
  );
}