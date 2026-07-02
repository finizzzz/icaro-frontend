import type { Metadata } from "next";
import { Inter, Roboto_Mono, Manrope } from "next/font/google";
import "./globals.css";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const robotoMono = Roboto_Mono({ subsets: ["latin"], variable: "--font-roboto-mono" });
const manrope = Manrope({ subsets: ["latin"], variable: "--font-aileron" }); 

export const metadata: Metadata = {
  title: "Icaro | Parasole Urbano Add-on",
  description: "Progetto Icaro: parasole pubblico add-on per panchine esistenti.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it" className="scroll-smooth scroll-pt-32">
      <body className={`${inter.variable} ${robotoMono.variable} ${manrope.variable} antialiased bg-white text-brand-black relative`}>
        <Navbar />
        {children}
        <Footer /> 
      </body>
    </html>
  );
}