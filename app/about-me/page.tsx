// app/about-me/page.tsx
"use client";
// Nota: importeremo la tua Hero della home in un secondo momento per non fare confusione.
import AboutHero from "./components/AboutHero";
import AboutInfo from "./components/AboutInfo";

export default function AboutMe() {
  return (
    <main className="bg-black min-h-screen text-white selection:bg-brand-primary selection:text-white">
      {/* 
        Qui andrà la <Hero /> 
      */}
      
      {/* Montiamo il nostro primo mattoncino */}
      <AboutHero />
      <AboutInfo />


      {/* 
        Qui andranno <AboutSkills /> 
        Qui andrà <AboutContact /> 
      */}
    </main>
  );
}