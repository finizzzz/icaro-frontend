import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function ProjectHero() {
  return (
    <section className="pt-32 pb-20 px-6 md:px-16 bg-[#08594A] text-white shadow-xl">
      <div className="max-w-5xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-12 group font-mono text-xs tracking-widest uppercase">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Torna alla Home
        </Link>
        <p className="font-mono text-white/70 tracking-[0.2em] text-xs font-bold uppercase mb-4">
          IL PROGETTO
        </p>
        <h1 className="font-heading font-bold text-5xl md:text-7xl mb-6">
          Icaro.
        </h1>
        <p className="font-sans text-lg md:text-xl text-white/90 leading-relaxed max-w-2xl">
          Un parasole pubblico innovativo progettato per integrare la sostenibilità e il comfort nelle panchine urbane esistenti.
        </p>
      </div>
    </section>
  );
}