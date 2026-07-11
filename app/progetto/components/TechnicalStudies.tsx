"use client";
// 1. IMPORTIAMO 'useState'. È lo strumento di React per creare memorie interattive.
import { useState } from "react";
import Image from "next/image";
import { Ruler, ShieldCheck } from "lucide-react";

export default function EngineeringSection() {
  /* ========================================================================
     IL CERVELLO DEL COMPONENTE (React State)
     activeTab è la variabile che contiene il valore attuale (di base 'quote').
     setActiveTab è la "funzione" che useremo per cambiare quel valore.
     ======================================================================== */
  const [activeTab, setActiveTab] = useState("quote");

  return (
    <section id="ingegneria" className="py-32 px-6 md:px-16 bg-white text-brand-black">
      <div className="max-w-6xl mx-auto">
        
        {/* Intestazione */}
        <div className="text-center mb-16">
          <p className="font-mono text-[#08594A] tracking-[0.2em] text-sm font-bold uppercase mb-4">
            06. Ingegnerizzazione
          </p>
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-[#08594A]">
            Dalla forma alla funzione.
          </h2>
        </div>

        {/* ========================================================================
            I BOTTONI (TABS)
            ======================================================================== */}
        <div className="flex justify-center gap-4 mb-16">
          
          {/* Bottone 1: QUOTE */}
          <button 
            // Quando clicco, dico a React di cambiare la memoria in "quote"
            onClick={() => setActiveTab("quote")}
            // La logica visiva: Se activeTab è "quote", sfondo verde e testo bianco. Altrimenti sfondo grigio chiaro.
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 ${
              activeTab === "quote" 
                ? "bg-[#08594A] text-white shadow-lg" 
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            <Ruler size={18} />
            <span>Quote e Ingombri</span>
          </button>

          {/* Bottone 2: TEST FISICI */}
          <button 
            // Quando clicco, dico a React di cambiare la memoria in "test"
            onClick={() => setActiveTab("test")}
            className={`flex items-center gap-2 px-8 py-4 rounded-full font-sans font-bold text-sm transition-all duration-300 ${
              activeTab === "test" 
                ? "bg-[#08594A] text-white shadow-lg" 
                : "bg-neutral-100 text-neutral-500 hover:bg-neutral-200"
            }`}
          >
            <ShieldCheck size={18} />
            <span>Test e Validazione</span>
          </button>

        </div>

        {/* ========================================================================
            IL CONTENUTO DINAMICO (Conditional Rendering)
            ======================================================================== */}
        
        <div className="min-h-[500px]"> {/* min-h evita che la pagina "salti" cambiando contenuto */}
          
          {/* SEZIONE QUOTE (Appare solo se activeTab è uguale a "quote") */}
          {activeTab === "quote" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 animate-in fade-in duration-700">
              <div className="relative w-full aspect-square bg-[#F4F4F4] rounded-3xl overflow-hidden border border-neutral-200 p-8 flex items-center justify-center">
                {/* Qui inserirai il tuo disegno tecnico CAD */}
                <Image src="/quote-tecniche.jpg" alt="Blueprint Quote" fill className="object-contain p-4" unoptimized />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-heading font-bold text-3xl mb-6 text-[#08594A]">Integrazione non invasiva.</h3>
                <p className="font-sans text-lg text-neutral-600 mb-8 leading-relaxed">
                  Le dimensioni del modulo di ancoraggio sono state calcolate per adattarsi al 90% delle sedute urbane standard senza sporgere. Il raggio di inclinazione della copertura garantisce l'ombra senza invadere le corsie pedonali adiacenti.
                </p>
                <div className="grid grid-cols-2 gap-6 border-t border-neutral-100 pt-8">
                  <div>
                    <p className="font-mono text-xs text-neutral-400 mb-1">PESO OPERATIVO</p>
                    <p className="font-sans font-bold text-xl">~20 kg</p>
                  </div>
                  <div>
                    <p className="font-mono text-xs text-neutral-400 mb-1">SUPERFICIE OMBRA</p>
                    <p className="font-sans font-bold text-xl">4.5 mq</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* SEZIONE TEST FISICI (Appare solo se activeTab è uguale a "test") */}
          {activeTab === "test" && (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-in fade-in duration-700">
              
              <div className="bg-[#F4F4F4] rounded-3xl overflow-hidden border border-neutral-200 flex flex-col">
                <div className="relative h-48 w-full bg-neutral-800">
                  <Image src="/test-carichi.jpg" alt="Test Carichi" fill className="object-cover" unoptimized />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">FEA Ancoraggio</h4>
                  <p className="text-sm text-neutral-600">Simulazione statica lineare sulle staffe in acciaio zincato per validare la tenuta del carico a sbalzo. Safety Factor calcolato: {">"}3.5.</p>
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-3xl overflow-hidden border border-neutral-200 flex flex-col">
                <div className="relative h-48 w-full bg-neutral-800">
                  <Image src="/test-vento.jpg" alt="Test Vento" fill className="object-cover" unoptimized />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">Stress da Vento</h4>
                  <p className="text-sm text-neutral-600">Analisi della pressione (300 Pa) sul telone Soltis 92 per calcolare la resistenza alla torsione delle cerniere a frizione in alluminio anodizzato.</p>
                </div>
              </div>

              <div className="bg-[#F4F4F4] rounded-3xl overflow-hidden border border-neutral-200 flex flex-col">
                <div className="relative h-48 w-full bg-neutral-800">
                  <Image src="/test-cinematica.jpg" alt="Test Cinematica" fill className="object-cover" unoptimized />
                </div>
                <div className="p-6">
                  <h4 className="font-bold text-lg mb-2">Cinematica Manovella</h4>
                  <p className="text-sm text-neutral-600">Studio delle interferenze fisiche tra gli ingranaggi di demoltiplicazione per garantire un sollevamento fluido e privo di sforzo per l'utente.</p>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}