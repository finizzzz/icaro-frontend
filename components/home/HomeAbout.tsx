// components/home/HomeAbout.tsx
import Link from "next/link";
import Image from "next/image";

export default function HomeAbout() {
  return (
    <section id="about" className="bg-black pt-32 md:pt-40 w-full relative flex flex-col">
      
      {/* Blocco Testo Esistente */}
      <div className="max-w-[1920px] mx-auto w-full px-6 md:px-16 lg:px-24 mb-24">
        <div className="max-w-4xl">
          <p className="font-mono text-brand-primary tracking-[0.3em] text-sm font-bold uppercase mb-8">
            Il Progettista
          </p>

          <h2 className="font-heading font-black text-6xl md:text-[8rem] text-white uppercase tracking-tighter leading-[0.85] mb-12">
            ABOUT <br /> ME.
          </h2>
          
          <p className="font-sans text-neutral-300 text-xl leading-relaxed mb-12 text-justify hyphens-auto max-w-2xl">
            Sono un designer e progettista con una visione chiara: migliorare la vivibilità delle nostre città attraverso soluzioni intelligenti e sostenibili. Il progetto Icaro nasce dalla mia esigenza di adattare l'infrastruttura urbana esistente alle nuove sfide climatiche.
          </p>
          
          <Link 
            href="/about-me" 
            className="group inline-flex items-center justify-center bg-white text-black px-8 py-4 rounded-full font-bold text-sm transition-all duration-300 hover:bg-brand-primary hover:text-white hover:scale-105"
          >
            Scopri il mio percorso
          </Link>
        </div>
      </div>

    </section>
  );
}