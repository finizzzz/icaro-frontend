"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import Gallery from '../components/Gallery';

export default function Home() {
  return (
    <main>
      {/* 1. HERO SECTION: SOLO VIDEO */}
      <section className="h-screen w-full relative bg-black">
      <video
  autoPlay
  loop
  muted
  playsInline
  className="absolute inset-0 w-full h-full object-cover z-0"
>
  {/* Assicurati di cambiare il nome del file se lo hai rallentato */}
  <source src="/video cutted.mp4" type="video/mp4" />
</video>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black/40 to-transparent"></div>
      </section>

{/* 2. BLOCCO TESTI: Dissolvenza lineare dal basso e testo centrato */}
<motion.section 
        initial={{ opacity: 0, y: 150 }} // Parte invisibile e spostato 40px in basso
        whileInView={{ opacity: 1, y: 0 }} // Arriva visibile nella posizione originale
        transition={{ 
            duration: 0.7, 
            ease: "linear" 
        }}
        viewport={{ 
            once: false, 
            amount: 0.05 
        }}
        className="relative py-12 px-6 bg-[#F9F9F9] flex justify-center items-center"
      >
        <div className="max-w-3xl text-center flex flex-col items-center gap-6">
          
          <h1 className="font-heading font-bold text-4xl md:text-5xl text-brand-black leading-tight">
            L'ombra che segue il sole.
          </h1>
          
          {/* TESTO CENTRATO: Niente più giustificazione forzata */}
          <p className="font-sans text-brand-grey text-sm md:text-base leading-relaxed text-center max-w-2xl">
          Icaro è un sistema di schermatura solare progettato per il retrofitting dell'arredo urbano. Convertiamo le panchine pubbliche esistenti in micro-oasi climatiche, fornendo una copertura modulare a inclinazione manuale per inseguire la traiettoria solare.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-2">
            <Link 
              href="#progetto" 
              className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brand-dark"
            >
              Scopri Icaro
            </Link>
            
            <Link 
              href="#contatti" 
              className="border-2 border-brand-primary bg-transparent text-brand-primary px-8 py-3 rounded-full font-bold text-sm transition-all duration-300 hover:scale-110 hover:bg-white hover:text-brand-dark hover:border-white hover:shadow-xl"
            >
              Contattaci
            </Link>
          </div>
        </div>
      </motion.section>
      
{/* 2. PROBLEMATICA */}
<section id="problema" className="py-24 px-6 md:px-16 bg-brand-sand/30">
        <div className="max-w-6xl mx-auto">
          
          {/* PRETITOLO: Spostato fuori dalla griglia, sta sopra a tutto per fare da "Etichetta" */}
          <p className="font-mono text-brand-grey tracking-[0.2em] text-xs font-bold uppercase mb-8">
            IL PROBLEMA CLIMATICO
          </p>

       {/* GRIGLIA: Rimossa la classe items-start. Ora le due colonne si "allungheranno" (stretch) per avere esattamente la stessa altezza */}
       <div className="grid md:grid-cols-2 gap-16">
            
            {/* COLONNA TESTO (Rimane identica) */}
            <div className="relative z-20 text-left flex flex-col items-start gap-4">
              
              <h2 className="font-heading font-bold text-4xl md:text-6xl text-brand-dark leading-none mb-6 mt-[-10px]">
                Caldo sempre <br /> più intenso.
              </h2>
              
              <p className="font-sans text-brand-primary text-sm md:text-base leading-snug text-justify">
                Le recenti ondate di calore trasformano le città in trappole termiche (Urban Heat Island). Gli arredi urbani convenzionali, costantemente esposti all'irraggiamento solare, diventano superfici roventi e inagibili. Questo "lockdown climatico" colpisce duramente le fasce di popolazione più vulnerabili, come anziani, bambini e soggetti con patologie pregresse. Icaro interviene esattamente in questi vuoti infrastrutturali, istituendo zone di decompressione termica sicure e democratiche per ripristinare la vivibilità dello spazio pubblico.
              </p>
              
              <Link 
                href="https://www.who.int/news-room/fact-sheets/detail/climate-change-heat-and-health" 
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 bg-brand-primary text-white px-6 py-3 rounded-full font-sans font-bold text-sm shadow-lg transition-all duration-300 hover:bg-brand-dark hover:scale-110 text-center inline-block"
              >
                Approfondisci il problema
              </Link>
              
            </div>
            
{/* CORREZIONE IMMAGINE */}
<div className="relative w-full h-[300px] md:h-full rounded-3xl border border-brand-grey/20 overflow-hidden shadow-sm">
  <Image 
    src="/termica.png" 
    alt="Foto termica Isola di Calore"
    fill
    className="object-cover transition-transform duration-700 hover:scale-105"
  />
  <div className="absolute inset-0 bg-brand-primary/10 mix-blend-multiply z-10 pointer-events-none"></div>
</div>

          </div>
        </div>
      </section>

 {/* 3. PROGETTO / VANTAGGI COMPETITIVI */}
      {/* 1. SFONDO SEZIONE: Cambiato da bg-white a bg-brand-dark */}
      <section id="progetto" className="py-24 px-6 md:px-16 bg-brand-dark overflow-hidden relative">
        <div className="max-w-6xl mx-auto relative z-10">
          
          {/* INTESTAZIONE SEZIONE */}
          <div className="mb-20">
            {/* Testo grigio chiaro/trasparente per il pre-titolo */}
            <p className="font-mono text-white/90 tracking-[0.2em] text-xs font-bold uppercase mb-8">
              IL PROGETTO
            </p>
            {/* 2. TITOLO SEZIONE: Cambiato in bianco */}
            <h2 className="font-heading font-bold text-4xl md:text-5xl text-white leading-none mb-6 mt-[-10px]">
              Perché Icaro <br className="hidden md:block" /> è diverso.
            </h2>
            {/* 3. PARAGRAFO SEZIONE: Cambiato in verde chiaro */}
            <p className="font-sans text-brand-WHITE text-sm md:text-base leading-snug max-w-2xl text-justify">
              Non è un semplice parasole, ma un'infrastruttura climatica ingegnerizzata per l'efficienza urbana. Abbiamo analizzato i limiti delle soluzioni tradizionali per sviluppare un sistema scalabile, democratico e definitivo.
            </p>
          </div>

          {/* GRIGLIA A 4 CELLE */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* BLOCCO 01 - BALLOON */}
            {/* 1. Sfondo aggiornato a bg-brand-primary/70 e bordo a border-white/30 (Stile Navbar) */}
            <div className="flex flex-col items-start group bg-brand-primary/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:bg-white/95">
              
              {/* NUMERO: Ora bianco semitrasparente (text-white/50) per contrastare il fondo più scuro */}
              <span className="font-mono text-5xl text-white/50 font-bold mb-4 transition-colors duration-300 group-hover:text-brand-primary">
                01
              </span>
              
              <h3 className="font-heading text-2xl text-white font-bold mb-3 transition-colors duration-300 group-hover:text-brand-dark">
                Add-on Universale
              </h3>
              
              {/* TESTO CARD: Ora quasi bianco (text-white/90) per la massima leggibilità */}
              <p className="font-sans text-white/80 text-sm leading-snug text-justify transition-colors duration-300 group-hover:text-brand-dark">
                Progettato per integrarsi perfettamente sulle infrastrutture esistenti. Icaro trasforma le normali panchine pubbliche in micro-oasi climatiche senza la necessità di smantellare o sostituire l'arredo urbano attuale.
              </p>
            </div>

            {/* BLOCCO 02 - BALLOON */}
            <div className="flex flex-col items-start group bg-brand-primary/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:bg-white/95">
              <span className="font-mono text-5xl text-white/50 font-bold mb-4 transition-colors duration-300 group-hover:text-brand-primary">
                02
              </span>
              <h3 className="font-heading text-2xl text-white font-bold mb-3 transition-colors duration-300 group-hover:text-brand-dark">
                Studio dei Materiali
              </h3>
              <p className="font-sans text-white/80 text-sm leading-snug text-justify transition-colors duration-300 group-hover:text-brand-dark">
                Ogni componente è ingegnerizzato per garantire zero manutenzione nel tempo e altissime prestazioni. Le superfici schermanti respingono il calore, resistendo in modo assoluto all'usura e agli agenti atmosferici.
              </p>
            </div>

            {/* BLOCCO 03 - BALLOON */}
            <div className="flex flex-col items-start group bg-brand-primary/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:bg-white/95">
              <span className="font-mono text-5xl text-white/50 font-bold mb-4 transition-colors duration-300 group-hover:text-brand-primary">
                03
              </span>
              <h3 className="font-heading text-2xl text-white font-bold mb-3 transition-colors duration-300 group-hover:text-brand-dark">
                Installazione Semplice
              </h3>
              <p className="font-sans text-white/80 text-sm leading-snug text-justify transition-colors duration-300 group-hover:text-brand-dark">
                Il design modulare permette un sistema di montaggio estremamente semplificato. Questo minimizza i tempi di intervento e i costi di cantiere, riducendo al minimo i disagi per la viabilità cittadina.
              </p>
            </div>

            {/* BLOCCO 04 - BALLOON */}
            <div className="flex flex-col items-start group bg-brand-primary/70 backdrop-blur-md p-8 md:p-10 rounded-3xl border border-white/30 transition-all duration-300 hover:shadow-2xl hover:scale-110 hover:bg-white/95">
              <span className="font-mono text-5xl text-white/50 font-bold mb-4 transition-colors duration-300 group-hover:text-brand-primary">
                04
              </span>
              <h3 className="font-heading text-2xl text-white font-bold mb-3 transition-colors duration-300 group-hover:text-brand-dark">
                Ombra Perenne
              </h3>
              <p className="font-sans text-white/80 text-sm leading-snug text-justify transition-colors duration-300 group-hover:text-brand-dark">
                Grazie a un sistema di inclinazione manuale intuitivo e alla portata di tutti, il modulo insegue la traiettoria solare. Una singola e rapida interazione è sufficiente per garantire un'ombra costante durante tutto l'arco della giornata.
              </p>
            </div>

          </div>
        </div>
      </section>

{/* {/* 3.5 VARIANTI DI PROGETTO - Versione Interattiva */}
<section id="varianti" className="py-24 px-6 md:px-16 bg-[#F9F9F9] border-t border-brand-grey/10">
  <div className="max-w-6xl mx-auto">
    
    <div className="text-center mb-16">
      <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-black mb-4">
        Due soluzioni, una visione.
      </h2>
      <p className="font-sans text-brand-grey text-base md:text-lg max-w-2xl mx-auto">
        Icaro è un'infrastruttura democratica, progettata per adattarsi organicamente alle diverse esigenze e morfologie urbane.
      </p>
    </div>

    <div className="grid md:grid-cols-2 gap-10">
      
      {/* CARD 1: ADD-ON */}
      <div className="group rounded-3xl bg-white border border-brand-primary/20 hover:bg-brand-primary/70 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
        <div className="aspect-[16/9] bg-brand-primary/10 flex items-center justify-center relative overflow-hidden">
          <span className="font-mono text-brand-primary/60 group-hover:text-white/60 text-sm font-bold tracking-widest">RENDER VARIANTE ADD-ON</span>
        </div>
        
        <div className="p-8 md:p-10 flex-grow flex flex-col">
          <div className="text-brand-primary group-hover:text-white/50 font-mono mb-2 text-sm font-bold uppercase tracking-widest transition-colors">Modulo Universale</div>
          <h3 className="font-heading font-bold text-3xl text-brand-dark group-hover:text-white mb-4 transition-colors">Versione Add-on</h3>
          <p className="font-sans text-brand-dark group-hover:text-white/80 text-sm leading-relaxed mb-6 flex-grow text-justify transition-colors">
            Progettata per il retrofitting intelligente. Si aggancia alle sedute urbane preesistenti, riattivandole senza demolizioni.
          </p>
          <ul className="font-sans text-sm text-brand-primary group-hover:text-white/90 space-y-3 transition-colors">
            <li className="flex items-center gap-3">
              <span className="text-white bg-brand-dark group-hover:bg-white group-hover:text-brand-primary rounded-full min-w-[20px] w-5 h-5 flex items-center justify-center text-xs transition-colors">✓</span> 
              <span>Riutilizzo di zone preesistenti</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white bg-brand-dark group-hover:bg-white group-hover:text-brand-primary rounded-full min-w-[20px] w-5 h-5 flex items-center justify-center text-xs transition-colors">✓</span> 
              <span>Minima spesa, massima resa</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white bg-brand-dark group-hover:bg-white group-hover:text-brand-primary rounded-full min-w-[20px] w-5 h-5 flex items-center justify-center text-xs transition-colors">✓</span> 
              <span>Estetica minimalista personalizzabile</span>
            </li>
          </ul>
        </div>
      </div>

      {/* CARD 2: STAND-ALONE */}
      <div className="group rounded-3xl bg-white border border-brand-primary/20 hover:bg-brand-primary/70 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col">
        <div className="aspect-[16/9] bg-brand-dark/5 flex items-center justify-center relative overflow-hidden">
          <span className="font-mono text-brand-dark/60 group-hover:text-white/60 text-sm font-bold tracking-widest">RENDER VARIANTE AUTONOMA</span>
        </div>
        
        <div className="p-8 md:p-10 flex-grow flex flex-col">
          <div className="text-brand-primary group-hover:text-white/50 font-mono mb-2 text-sm font-bold uppercase tracking-widest transition-colors">Sistema Completo</div>
          <h3 className="font-heading font-bold text-3xl text-brand-dark group-hover:text-white mb-4 transition-colors">Versione Autonoma</h3>
          <p className="font-sans text-brand-dark group-hover:text-white/80 text-sm leading-relaxed mb-6 flex-grow text-justify transition-colors">
            Concepita per l'installazione ex-novo. Porta il comfort climatico e una seduta integrata in piazze e parchi sprovvisti di arredo.
          </p>
          <ul className="font-sans text-sm text-brand-primary group-hover:text-white/90 space-y-3 transition-colors">
            <li className="flex items-center gap-3">
              <span className="text-white bg-brand-dark group-hover:bg-white group-hover:text-brand-primary rounded-full min-w-[20px] w-5 h-5 flex items-center justify-center text-xs transition-colors">✓</span> 
              <span>Panca integrata a incastro</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white bg-brand-dark group-hover:bg-white group-hover:text-brand-primary rounded-full min-w-[20px] w-5 h-5 flex items-center justify-center text-xs transition-colors">✓</span> 
              <span>Ideale per nuove aree urbane</span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-white bg-brand-dark group-hover:bg-white group-hover:text-brand-primary rounded-full min-w-[20px] w-5 h-5 flex items-center justify-center text-xs">✓</span> 
              <span>Varie tipologie di seduta</span>
            </li>
          </ul>
        </div>
      </div>

    </div>
  </div>
</section>
      
     {/* 4. MODELLO 3D */}
<section id="funzionamento" className="py-24 px-6 bg-brand-sand/30">
  <div className="max-w-5xl mx-auto">
    
    <div className="text-center mb-16">
      <h2 className="font-heading font-bold text-4xl md:text-5xl text-brand-dark mb-6">
        Meccanismo e Funzionamento.
      </h2>
      <p className="font-sans text-brand-primary text-base md:text-lg max-w-2xl mx-auto">
        Scopri l'intuitività del sistema: un gesto semplice per inseguire la traiettoria solare durante tutto l'arco della giornata.
      </p>
    </div>

    {/* Contenitore Video */}
    <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl border border-brand-grey/10 group mb-10">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      >
        <source src="/video-movimento-icaro.mp4" type="video/mp4" />
      </video>
      
      <div className="absolute inset-0 bg-brand-dark/10 transition-opacity duration-300 group-hover:opacity-0"></div>
    </div>


  </div>
</section>

<Gallery/>


{/* 6. ABOUT ME */}
<section id="about" className="py-24 px-6 bg-white">
  <div className="max-w-4xl mx-auto text-center">
    <h2 className="font-heading font-bold text-4xl text-brand-black mb-6">
      About Me
    </h2>
    <p className="font-sans text-brand-black/80 text-lg leading-relaxed mb-10">
      Sono un designer e progettista con una visione chiara: migliorare la vivibilità delle nostre città attraverso soluzioni intelligenti e sostenibili. Il progetto Icaro nasce dalla mia esigenza di adattare l'infrastruttura esistente alle nuove sfide climatiche.
    </p>
    
    <a 
      href="/chi-sono" 
      className="bg-brand-primary text-white px-8 py-3 rounded-full font-bold text-sm shadow-lg transition-all duration-300 hover:scale-110 hover:bg-brand-dark inline-block"
    >
      Scopri il mio percorso
    </a>
  </div>
</section>

    </main>
  );
}