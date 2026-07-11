import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function AboutMe() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen flex flex-col">
      {/* 1. LA TUA NAVBAR */}
      <Navbar />

      {/* 2. IL CONTENUTO DELLA PAGINA */}
      {/* pt-32 serve per spingere il testo in giù, altrimenti finirebbe sotto la Navbar fissa! */}
      <section className="flex-grow pt-32 pb-20 px-6 md:px-16">
        <div className="max-w-4xl mx-auto">
          <p className="font-mono text-[#08594A] tracking-[0.2em] text-xs font-bold uppercase mb-4">
            IL MIO PERCORSO
          </p>
          <h1 className="font-heading font-bold text-5xl md:text-7xl text-brand-black mb-6">
            Chi Sono.
          </h1>
          <p className="font-sans text-lg text-brand-black/80 leading-relaxed">
            Sono un designer con una visione chiara: migliorare la vivibilità delle nostre città.
          </p>
        </div>
      </section>

    </main>
  );
}