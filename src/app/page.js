import styles from "./Home.module.css";
import Link from "next/link";
import { proyectos } from "../data/proyectos";
import HomeProjectCard from "../components/projects/HomeProjectCard";

export default function HomePage() {
  const destacados = proyectos.slice(0, 4);

  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.heroTitle}>TAG Estudio</h1>
        <p className={styles.heroSubtitle}>
          Arquitectura · Interiorismo · Reformas
        </p>
        <Link href="/proyectos" className={styles.heroBtn}>
          Ver proyectos
        </Link>
      </section>

      {/* SOBRE EL ESTUDIO */}
      <section className={styles.about}>
        <div className={styles.aboutText}>
          <h2>Sobre el estudio</h2>
          <p>
            TAG es un estudio de arquitectura e interiorismo enfocado en crear
            espacios funcionales, estéticos y atemporales. Diseñamos viviendas,
            locales comerciales y reformas integrales con una mirada sensible y
            contemporánea.
          </p>
          <Link href="/estudio" className={styles.linkBtn}>
            Conocer más
          </Link>
        </div>
      </section>

      {/* SERVICIOS */}
      <section className={styles.services}>
        <h2 className={styles.sectionTitle}>Servicios</h2>

        <div className={styles.servicesGrid}>
          <div className={styles.serviceCard}>
            <h3>Arquitectura</h3>
            <p>Diseño de viviendas unifamiliares, ampliaciones y proyectos a medida.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3>Interiorismo</h3>
            <p>Diseño de espacios interiores residenciales y comerciales.</p>
          </div>

          <div className={styles.serviceCard}>
            <h3>Reformas</h3>
            <p>Transformación integral de espacios con soluciones contemporáneas.</p>
          </div>
        </div>
      </section>

      {/* PROYECTOS DESTACADOS */}
      <section className={styles.destacados}>
        <h2 className={styles.sectionTitle}>Proyectos destacados</h2>

        <div className={styles.grid}>
          {destacados.map((proyecto, i) => (
            <HomeProjectCard
              key={proyecto.slug}
              title={proyecto.titulo}
              image={proyecto.imagenPortada}
              href={`/proyectos/${proyecto.slug}`}
              index={i}
            />
          ))}
        </div>

        <Link href="/proyectos" className={styles.linkBtnCenter}>
          Ver todos los proyectos
        </Link>
      </section>

      {/* CTA FINAL */}
      <section className={styles.cta}>
        <h2>¿Tienes un proyecto en mente?</h2>
        <p>Estaré encantada de ayudarte a hacerlo realidad.</p>
        <Link href="/contacto" className={styles.heroBtn}>
          Contactar
        </Link>
      </section>

    </main>
  );
}
