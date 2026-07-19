// 1. "use client" è obbligatorio se usi interattività (link, bottoni)
"use client";

import Link from "next/link";

export default function Footer() {
  return (
    // bg-neutral-900 crea un grigio molto scuro, quasi nero.
    // text-neutral-300 rende il testo chiaro per contrasto.
    <footer id="footer" className="bg-neutral-900 border-t border-neutral-800 pt-16 pb-8 px-6 text-neutral-300">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 mb-12">
        
        {/* Colonna 1: Branding */}
        <div>
          <h3 className="font-heading font-bold text-white text-2xl mb-4">Icaro.</h3>
          <p className="font-sans text-neutral-400 text-sm max-w-xs text-left mb-10">
          Il progetto appena presentato è un concept di un prodotto innovativo contro il problema del caldo estremo nelle città. Si tratta di microrifugio climatico autonomo o add-on che sfrutta l'ombra come strumento per mitigare l'effetto isola di calore urbana, riqualificando l'arredo esistente o creando spazi prima inesistenti. 
          </p>
        </div>

        {/* Colonna 2: Link */}
        <div className="flex flex-col gap-5 font-sans text-sm">
          <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Esplora</p>
          <Link href="#problema" className="hover:text-white transition-colors">Il Problema</Link>
          <Link href="#progetto" className="hover:text-white transition-colors">Il Progetto</Link>
          <Link href="progetto/#gallery" className="hover:text-white transition-colors">Galleria</Link>
          <Link href="about-me" className="hover:text-white transition-colors mb-10">About Me</Link>
        </div>

        {/* Colonna 3: Contatti */}
        <div className="flex flex-col gap-5 font-sans text-sm">
          <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Contatti</p>
          <a href="mailto:filippo.cola@edu.unife.it" className="hover:text-white transition-colors">filippo.cola@edu.unife.it</a>
          <a href="tel:+393923488485" className="hover:text-white transition-colors">(+39) 392 348 8485</a>
        </div>

      </div>

    </footer>
  );
}