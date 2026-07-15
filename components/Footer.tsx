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
          <p className="font-sans text-neutral-400 text-sm max-w-xs text-justify">
            Soluzioni add-on intelligenti per mitigare l'effetto isola di calore urbana, riqualificando l'arredo esistente.
          </p>
        </div>

        {/* Colonna 2: Link */}
        <div className="flex flex-col gap-3 font-sans text-sm">
          <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Esplora</p>
          <Link href="#problema" className="hover:text-white transition-colors">Il Problema</Link>
          <Link href="#progetto" className="hover:text-white transition-colors">Il Progetto</Link>
          <Link href="#gallery" className="hover:text-white transition-colors">Galleria</Link>
          <Link href="#about" className="hover:text-white transition-colors">About Me</Link>
        </div>

        {/* Colonna 3: Contatti */}
        <div className="flex flex-col gap-3 font-sans text-sm">
          <p className="font-mono text-neutral-500 uppercase tracking-widest text-xs mb-2 font-bold">Contatti</p>
          <a href="mailto:filippo.cola@edu.unife.it" className="hover:text-white transition-colors">filippo.cola@edu.unife.it</a>
          <a href="tel:+393923488485" className="hover:text-white transition-colors">(+39) 392 348 8485</a>
        </div>

      </div>

      {/* Footer Bottom */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-neutral-800 font-mono text-neutral-500 text-xs">
        <p>© {new Date().getFullYear()} Icaro. Tutti i diritti riservati.</p>
      </div>
    </footer>
  );
}