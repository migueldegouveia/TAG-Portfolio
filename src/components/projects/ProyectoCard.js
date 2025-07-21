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
        <h2>{proyecto.titulo}</h2>
        <p>{proyecto.descripcion}</p>
        <span className={styles.meta}>
          {proyecto.categoria} · {proyecto.año}
        </span>
      </div>
    </a>
  );
}