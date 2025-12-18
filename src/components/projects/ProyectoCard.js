import styles from "./ProyectoCard.module.css";

export default function ProyectoCard({ proyecto, delay = 0 }) {
  return (
    <a
      href={`/proyectos/${proyecto.slug}`}
      className={styles.card}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className={styles.imgBox}>
        <img src={proyecto.imagenPortada} alt={proyecto.titulo} />
      </div>

      <div className={styles.info}>
        <h2 className={styles.title}>{proyecto.titulo}</h2>

        <p className={styles.meta}>
          {proyecto.tipo} · {proyecto.ubicacion} · {proyecto.año}
        </p>
      </div>
    </a>
  );
}
