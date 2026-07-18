"use client";
import { useRef } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "framer-motion";

export default function MaterialsSection() {
  // 1. I "GANCI" (Refs)
  const containerRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // 2. IL SENSORE DI SCROLL
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // 3. IL MOTORE DI SCRUBBING VIDEO
  useMotionValueEvent(scrollYProgress, "change", (latestScroll) => {
    if (videoRef.current && videoRef.current.duration) {
      const targetTime = latestScroll * videoRef.current.duration;
      videoRef.current.currentTime = targetTime;
    }
  });

  // 4. TIMELINE DEI TESTI
  const txt1Op = useTransform(scrollYProgress, [0.00, 0.05, 0.12, 0.15], [0, 1, 1, 0]); 
  const txt2Op = useTransform(scrollYProgress, [0.15, 0.20, 0.27, 0.30], [0, 1, 1, 0]); 
  const txt3Op = useTransform(scrollYProgress, [0.30, 0.35, 0.42, 0.45], [0, 1, 1, 0]); 
  const txt4Op = useTransform(scrollYProgress, [0.45, 0.50, 0.57, 0.60], [0, 1, 1, 0]); 
  const txt5Op = useTransform(scrollYProgress, [0.60, 0.65, 0.72, 0.80], [0, 1, 1, 0]); 
  const txt6Op = useTransform(scrollYProgress, [0.80, 0.85, 0.95, 1.00], [0, 1, 1, 0]); 

  const txtY = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section ref={containerRef} id="materiali" className="relative h-[1000vh] bg-black">
      
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* --- IL VIDEO IN SCRUBBING --- */}
        <div className="absolute inset-0 w-full h-full z-0">
          <video 
            ref={videoRef}
            src="/dettaglio-materiali.mp4" 
            muted 
            playsInline 
            preload="auto"
            className="w-full h-full object-cover" 
          />
        </div>

        {/* --- OVERLAY GRAFICI --- */}
        {/* Overlay base per scurire tutto il video */}
        <div className="absolute inset-0 bg-black/60 z-10" />

        {/* 
          NUOVO GRADIENTE SUPERIORE: 
          Ancorato in alto (top-0), si estende in orizzontale (inset-x-0).
          Altezza h-48 (192px). Sfuma da nero assoluto verso il trasparente.
        */}
        <div className="absolute top-0 inset-x-0 h-48 bg-gradient-to-b from-black to-transparent z-10" />
        
        {/* (Opzionale) Se ti serve anche in basso per la sezione successiva, scommenta qui sotto: */}
        {/* <div className="absolute bottom-0 inset-x-0 h-48 bg-gradient-to-t from-black to-transparent z-10" /> */}

        {/* --- I TESTI (Struttura Z-Pattern mantenuta) --- */}
        <div className="relative z-20 w-full max-w-6xl px-6 md:px-16 mx-auto h-full flex items-center">
          
          <motion.div style={{ opacity: txt1Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">01. Copertura</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">Tessuto Soltis 92</h3>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
              Per la copertura, i laterali e le maniglie di regolazione abbiamo adottato un telone in poliestere spalmato in PVC bianco con una trama forata. In particolare il tessuto Soltis 92 che agisce come un dispositivo di gestione microclimatica passiva ad altissima efficienza. La sua microforatura ingegnerizzata, unita alla colorazione bianca che ne massimizza l'albedo, permette di respingere fino al 97% dell'energia termica solare. Questa porosità strutturale blocca l'irraggiamento diretto ma garantisce la continua permeabilità all'aria, permettendo al calore di dissiparsi naturalmente verso l'alto. Questa dinamica termofluidodinamica azzera l'effetto serra tipico dei teli a trama chiusa e abbatte drasticamente la temperatura percepita dall'utente sotto la struttura, ottimizzando il comfort termico senza compromettere la luminosità e il contatto visivo con l'ambiente circostante.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt2Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">02. Resistenza</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">Lamiera in Alluminio</h3>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
            Il sistema è sormontato da un carter in lamiera di alluminio (spessore 0.2 mm) con finitura celeste/verde acqua, concepito per generare un voluto contrasto cromatico con il candore del tessuto. Le estremità del profilo presentano un'orlatura ripiegata internamente: questa lavorazione non solo garantisce la sicurezza tattile eliminando gli spigoli vivi, ma funge da nervatura per irrigidire strutturalmente il componente. Oltre alla valenza estetica, il carter svolge una fondamentale funzione di scudo contro gli agenti atmosferici. Quando la struttura viene portata in posizione di riposo, la cinematica permette alla copertura di ritrarsi e ricoverarsi integralmente al di sotto della lamiera, mettendola al riparo dalle intemperie e preservando le prestazioni tecniche del materiale nel tempo.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt3Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">03. Leggerezza</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">Alluminio Anodizzato</h3>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
            L'architettura portante della copertura è definita da un telaio composto da sei profilati tubolari cavi in alluminio anodizzato, ciascuno con una sezione di 20 mm di diametro. Questa nervatura metallica assolve la duplice funzione di ancorare saldamente il telo alla struttura principale e di imprimergli l'esatta geometria e tensione spaziale. Sotto il profilo ingegneristico, l'utilizzo dell'alluminio ottimizza le prestazioni cinematiche del sistema: l'elevato rapporto resistenza-peso del materiale garantisce un'assoluta solidità strutturale mantenendo al minimo la massa inerziale. Questa drastica riduzione dei pesi in gioco è il parametro cardine per non sovraccaricare le cerniere a frizione, preservare la fluidità del movimento e assicurare all'utente una manovrabilità sempre leggera e a bassissimo sforzo.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt4Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">04. Meccanismo</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">Acciaio Inox</h3>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
            Il cuore meccanico del sistema — che comprende il gruppo ingranaggi, gli elementi di trasmissione della manovella e l'intera viteria e bulloneria di serraggio — è realizzato integralmente in acciaio inossidabile. È una scelta mirata per garantire la massima affidabilità: questa lega offre un'altissima resistenza all'usura per le parti in continuo movimento e non teme la corrosione. L'obiettivo è avere un sistema che scorre sempre in modo fluido e sicuro, azzerando il rischio di ruggine, blocchi o cedimenti strutturali anche dopo anni di utilizzo all'aperto e in qualsiasi condizione atmosferica.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt5Op, y: txtY }} className="absolute max-w-lg left-6 md:left-16 text-white">
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">05. Superfici</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">Legno di Teak</h3>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
            Per il piano di seduta la scelta è ricaduta sul massello di teak, un'essenza la cui naturale saturazione di oleoresine la rende idrorepellente, imputrescibile e a zero manutenzione. L'eccellente stabilità fibrillare assorbe i carichi e lo stress ambientale senza imbarcarsi o scheggiarsi. A livello di ergonomia fisica, la bassa conduttività termica del legno garantisce un comfort tattile costante, impedendo il surriscaldamento estivo o il gelo invernale. Con l'esposizione ai raggi UV, il massello innesca una fisiologica ossidazione superficiale virando verso un caratteristico grigio argento: un'evoluzione materica che arricchisce l'oggetto, creando un calibrato contrasto organico con il rigore tecnico dell'alluminio e dell'acciaio.
            </p>
          </motion.div>

          <motion.div style={{ opacity: txt6Op, y: txtY }} className="absolute max-w-lg right-6 md:right-16 text-white text-left md:text-right">
            <p className="font-mono text-white tracking-[0.2em] text-sm font-bold uppercase mb-4 drop-shadow-md">06. Struttura</p>
            <h3 className="font-heading font-bold text-4xl md:text-5xl text-white mb-8">Acciaio Zincato</h3>
            <p className="font-sans text-lg md:text-xl leading-relaxed text-white/80 drop-shadow-lg text-justify w-full">
            Per quanto riguarda le fodamententa, gli incastri per la seduta, i perni che permettono il movimento rotazionale dell'intera copertura e le piastre che li fissano abbiamo scelto di utilizzare l'acciaio zincato. Questa lega è stata selezionata per la sua spiccata capacità di gestire i massimi carichi statici e dinamici dell'intera struttura. Il trattamento superficiale di zincatura garantisce una fondamentale protezione catodica contro la corrosione: crea uno scudo chimico resistente all'umidità di risalita e agli agenti atmosferici, assicurando la totale integrità delle fondamenta e mantenendo invariata nel tempo la precisione e la fluidità del cinematismo rotazionale alla base del sistema.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}