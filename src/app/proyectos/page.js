import { proyectos } from "../../data/proyectos";
import MasonryGrid from "../../components/MasonryGrid";
import ProyectoCard from "../../components/projects/ProyectoCard";
import HeroBackground from "../../components/HeroBackground";

export default function ProyectosPage() {
  return (
    <main style={{ minHeight: "80vh", padding: "4rem 0 2rem 0" }}>
      <HeroBackground
        mediaType="image"
        mediaSrc="/fondos/header-proyectos.jpg"
        overlayColor="rgba(0,0,0,0.28)"
        height="240px"
      >
        <h1 style={{
          color: "#fff",
          fontSize: "2.4rem",
          fontWeight: 800,
          letterSpacing: "0.01em"
        }}>PROYECTOS</h1>
      </HeroBackground>
      <MasonryGrid>
        {proyectos.map((proyecto, i) => (
          <ProyectoCard key={proyecto.slug} proyecto={proyecto} delay={i * 90} />
        ))}
      </MasonryGrid>
    </main>
  );
}