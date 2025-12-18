import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "TAG Estudio – Arquitectura & Interiorismo",
  description: "Portfolio de Erika Dias. Proyectos de arquitectura, interiorismo y diseño de espacios.",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        {/* Tipografía principal */}
        <link
          href="https://fonts.googleapis.com/css?family=Montserrat:300,400,500,600,700,800,900&display=swap"
          rel="stylesheet"
        />
      </head>

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
