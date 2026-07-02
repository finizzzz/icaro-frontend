import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-brand-grey/20 pt-16 pb-8 px-6 mt-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
        <div>
          <h3 className="font-heading font-bold text-brand-primary text-2xl mb-4">ICARO</h3>
          <p className="font-sans text-brand-black/70 text-sm max-w-xs">
            Soluzioni add-on intelligenti per mitigare l'effetto isola di calore urbana, riqualificando l'arredo esistente.
          </p>
        </div>
        <div className="flex flex-col gap-3 font-sans text-sm text-brand-black/70">
          <p className="font-mono text-brand-grey uppercase tracking-widest text-xs mb-2 font-bold">Esplora</p>
          <Link href="#problema" className="hover:text-brand-primary transition-colors">Il Problema</Link>
          <Link href="#progetto" className="hover:text-brand-primary transition-colors">Il Progetto</Link>
          <Link href="#gallery" className="hover:text-brand-primary transition-colors">Galleria</Link>
          <Link href="#about" className="hover:text-brand-primary transition-colors">About Us</Link>
        </div>
        <div className="flex flex-col gap-3 font-sans text-sm text-brand-black/70">
          <p className="font-mono text-brand-grey uppercase tracking-widest text-xs mb-2 font-bold">Contatti</p>
          <a href="mailto:filippo.cola@edu.unife.it" className="hover:text-brand-primary transition-colors">filippo.cola@edu.unife.it</a>
          <a href="tel:+393923488485" className="hover:text-brand-primary transition-colors">(+39) 392 348 8485</a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center pt-8 border-t border-brand-grey/20 font-mono text-brand-grey text-xs">
        <p>© {new Date().getFullYear()} Icaro. Tutti i diritti riservati.</p>
        <p>Design System: Vibe Coding</p>
      </div>
    </footer>
  );
}