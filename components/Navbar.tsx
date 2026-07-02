import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-4xl">
      <div className="flex items-center justify-between px-6 py-3 bg-brand-primary/70 backdrop-blur-md border border-white/30 rounded-full shadow-lg transition-all duration-300 hover:scale-[1.05]">
        <Link href="/" className="font-heading font-bold text-white text-xl tracking-wide">
          ICARO
        </Link>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 font-sans text-white text-sm font-light tracking-wide">
            <Link href="#problema" className="hover:text-white/60 transition-colors">Il Problema</Link>
            <Link href="#progetto" className="hover:text-white/60 transition-colors">Il Progetto</Link>
            <Link href="#gallery" className="hover:text-white/60 transition-colors">Galleria</Link>
            <Link href="#about" className="hover:text-white/60 transition-colors">About Us</Link>
          </div>
          <Link href="#contatti" className="bg-white text-brand-primary px-5 py-2 rounded-full font-sans font-bold text-sm transition-all duration-300 hover:scale-110 hover:shadow-md">
            Contattaci
          </Link>
        </div>
      </div>
    </nav>
  );
}