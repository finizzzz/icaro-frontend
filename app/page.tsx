// app/page.tsx
"use client";

// IMPORTIAMO I NOSTRI COMPONENTI DELLA HOME (I musicisti)
import HomeHero from "../components/home/HomeHero";
import HomeProblem from "../components/home/HomeProblem";
import HomeQualities from "../components/home/HomeQualities";
import HomeVariants from "../components/home/HomeVariants";
import HomeVideo from "../components/home/HomeVideo";
import HomeAbout from "../components/home/HomeAbout";
import HomeFinal from "../components/home/HomeFinal";
// IMPORTIAMO GLI ELEMENTI GLOBALI (Opzionali, usali se li hai creati)
// import Footer from "../components/Footer";

export default function Home() {
  return (
    // IL PALCOSCENICO
    <main className="w-full overflow-x-hidden bg-white">
      
      {/* LA REGIA: Mettiamo in ordine i componenti della pagina */}
      <HomeHero />
      <HomeProblem />
      <HomeQualities />
      <HomeVariants />
      <HomeVideo />
      <HomeAbout />
      <HomeFinal />

      {/* CHIUSURA CON IL FOOTER */}
      {/* <Footer /> */}
      
    </main> 
  );
}