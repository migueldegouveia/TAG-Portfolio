import styles from "./Gracias.module.css";
import Link from "next/link";

export default function GraciasPage() {
  return (
    <main className={styles.page}>
      <section className={styles.box}>
        <h1 className={styles.title}>¡Gracias por tu mensaje!</h1>
        <p className={styles.text}>
          He recibido tu consulta correctamente. Me pondré en contacto contigo lo antes posible.
        </p>

        <div className={styles.buttons}>
          <Link href="/" className={styles.btnPrimary}>
            Volver al inicio
          </Link>
          <Link href="/proyectos" className={styles.btnSecondary}>
            Ver proyectos
          </Link>
        </div>
      </section>
    </main>
  );
}
