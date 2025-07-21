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
      <section className={styles.heroImgBox}>
        <img
          src={proyecto.imagenPrincipal}
          alt={proyecto.titulo}
          className={styles.heroImg}
        />
      </section>
      <section className={styles.infoSection}>
        <div className={styles.metaBox}>
          <h1 className={styles.titulo}>{proyecto.titulo}</h1>
          <div className={styles.meta}>
            <span className={styles.tipo}>{proyecto.tipo}</span>
            <span className={styles.separator}>·</span>
            <span className={styles.ubicacion}>{proyecto.ubicacion}</span>
          </div>
        </div>
        <div className={styles.descripcion}>
          {proyecto.descripcion}
        </div>
        {proyecto.galeria?.length > 0 && (
          <div className={styles.galeria}>
            {proyecto.galeria.map((img, idx) => (
              <img key={idx} src={img} alt={proyecto.titulo + " galería " + (idx+1)} className={styles.galeriaImg} />
            ))}
          </div>
        )}
        <div className={styles.navegacion}>
          {prev && (
            <Link href={`/proyectos/${prev.slug}`} className={styles.navLink + " " + styles.prev}>
              <span className={styles.arrow}>&larr;</span>
              <span>
                <span className={styles.navTitle}>{prev.titulo}</span>
                <span className={styles.navLoc}>{prev.ubicacion}</span>
              </span>
            </Link>
          )}
          {next && (
            <Link href={`/proyectos/${next.slug}`} className={styles.navLink + " " + styles.next}>
              <span>
                <span className={styles.navTitle}>{next.titulo}</span>
                <span className={styles.navLoc}>{next.ubicacion}</span>
              </span>
              <span className={styles.arrow}>&rarr;</span>
            </Link>
          )}
        </div>
      </section>
    </main>
  );
}