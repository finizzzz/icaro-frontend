// Queste rimangono con i due passi indietro (../../) perché 
// Navbar e Footer si trovano davvero fuori, nella cartella principale!
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

// Queste cambiano. Usiamo il singolo punto (./) perché 
// la TUA cartella components si trova ESATTAMENTE dentro "progetto"
import ProjectHero from "./components/ProjectHero";
import ProblemSection from "./components/ProblemSection";
import InspirationSection from "./components/InspirationSection";
import Sketch from "./components/Sketch";
import CompetitorSection from "./components/CompetitorSection";
import ConceptSection from "./components/ConceptSection";
import MaterialsSection from "./components/MaterialsSection";
import TechnicalStudies from "./components/TechnicalStudies";
import Gallery from "./components/Gallery";
import FinalProject from "./components/FinalProject";

export default function Progetto() {
  return (
    <main className="bg-[#F9F9F9] min-h-screen">
      {/* 1. NAVBAR */}
      <Navbar />

      {/* 2. COMPONENTI DELLA PAGINA PROGETTO */}
      <ProjectHero />
      <ProblemSection />
      <InspirationSection />
      <CompetitorSection />
      <Sketch />
      <ConceptSection />
      <MaterialsSection />
      <TechnicalStudies />S
      <Gallery />
      <FinalProject />

    </main>
  );
}