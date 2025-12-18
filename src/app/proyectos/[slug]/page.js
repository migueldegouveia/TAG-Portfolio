import proyectos from '../../../data/proyectos';
import Link from "next/link";
import styles from "./ProyectoPage.module.css";

export default function ProyectoPage({ params }) {
  const { slug } = params;

  const idx = proyectos.findIndex(p => p.slug === slug);
  const proyecto = proyectos[idx];

  if (!proyecto) return <div>Proyecto no encontrado</div>;

  const prev = idx > 0 ? proyectos[idx - 1] : null;
  const next = idx < proyectos.length - 1 ? proyectos[idx + 1] : null;

  return (
    <main>

      {/* ===== HERO ===== */}
      <section className={styles.heroImgBox}>
        <img
          src={proyecto.imagenPrincipal}
          alt={proyecto.titulo}
          className={styles.heroImg}
        />

        <div className={styles.heroOverlay}></div>

        <div className={styles.heroText}>
          <h1 className={styles.heroTitle}>{proyecto.titulo}</h1>
          <p className={styles.heroMeta}>
            {proyecto.tipo} · {proyecto.ubicacion}
          </p>
        </div>
      </section>

      {/* ===== INFO ===== */}
      <section className={styles.infoSection}>

        {/* ===== FICHA TÉCNICA ===== */}
        <div className={styles.ficha}>
          <p><strong>Tipo:</strong> {proyecto.tipo}</p>
          <p><strong>Ubicación:</strong> {proyecto.ubicacion}</p>
          <p><strong>Año:</strong> {proyecto.año}</p>
          {proyecto.superficie && (
            <p><strong>Superficie:</strong> {proyecto.superficie}</p>
          )}
          {proyecto.cliente && (
            <p><strong>Cliente:</strong> {proyecto.cliente}</p>
          )}
        </div>

        {/* ===== DESCRIPCIÓN ===== */}
        <div className={styles.descripcion}>
          {proyecto.descripcion
            .split("\n\n")
            .map((p, i) => <p key={i}>{p}</p>)
          }
        </div>

        {/* ===== GALERÍA ===== */}
        {proyecto.galeria?.length > 0 && (
          <div className={styles.galeria}>
            {proyecto.galeria.map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`${proyecto.titulo} galería ${idx + 1}`}
                className={styles.galeriaImg}
              />
            ))}
          </div>
        )}

        {/* ===== NAVEGACIÓN ENTRE PROYECTOS ===== */}
        <nav className={styles.navegacion}>
          {prev && (
            <Link
              href={`/proyectos/${prev.slug}`}
              className={`${styles.navLink} ${styles.prev}`}
            >
              <span className={styles.arrow}>&larr;</span>
              <span>
                <span className={styles.navTitle}>{prev.titulo}</span>
                <span className={styles.navLoc}>{prev.ubicacion}</span>
              </span>
            </Link>
          )}

          {next && (
            <Link
              href={`/proyectos/${next.slug}`}
              className={`${styles.navLink} ${styles.next}`}
            >
              <span>
                <span className={styles.navTitle}>{next.titulo}</span>
                <span className={styles.navLoc}>{next.ubicacion}</span>
              </span>
              <span className={styles.arrow}>&rarr;</span>
            </Link>
          )}
        </nav>

      </section>
    </main>
  );
}
