import styles from "./Proyectos.module.css";
import { proyectos } from "../../data/proyectos";
import MasonryGrid from "../../components/MasonryGrid";
import ProyectoCard from "../../components/projects/ProyectoCard";
import HeroBackground from "../../components/HeroBackground";

export default function ProyectosPage() {
  return (
    <main className={styles.page}>
      
      {/* HERO */}
      <HeroBackground
        mediaType="image"
        mediaSrc="/fondos/header-proyectos.jpg"
        overlayColor="rgba(0,0,0,0.32)"
        height="400px"
      >
        <h1 className={styles.heroTitle}>Proyectos</h1>
        <p className={styles.heroSubtitle}>
          Arquitectura · Interiorismo · Reformas
        </p>
      </HeroBackground>

      {/* GRID */}
      <section className={styles.gridSection}>
        <MasonryGrid>
          {proyectos.map((proyecto, i) => (
            <ProyectoCard
              key={proyecto.slug}
              proyecto={proyecto}
              delay={i * 90}
            />
          ))}
        </MasonryGrid>
      </section>

    </main>
  );
}