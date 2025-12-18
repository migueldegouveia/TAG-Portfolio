import styles from "./Contacto.module.css";

export default function ContactoPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Contacto</h1>
        <p className={styles.subtitle}>
          ¿Tienes un proyecto en mente? Me encantará escucharte.
        </p>
      </section>

      {/* FORMULARIO */}
      <section className={styles.formSection}>
        <form
          action="https://formspree.io/f/xeejqqyq"
          method="POST"
          className={styles.form}
        >
          <input type="hidden" name="_redirect" value="http://localhost:3000/gracias" />
          <input type="hidden" name="_subject" value="Nuevo mensaje desde el portfolio" />
          <input type="text" name="_gotcha" style={{ display: "none" }} />

          <div className={styles.field}>
            <label>Nombre</label>
            <input type="text" name="nombre" required />
          </div>

          <div className={styles.field}>
            <label>Email</label>
            <input type="email" name="email" required />
          </div>

          <div className={styles.field}>
            <label>Mensaje</label>
            <textarea name="mensaje" required></textarea>
          </div>

          <button type="submit" className={styles.submitBtn}>
            Enviar mensaje
          </button>
        </form>

        {/* INFORMACIÓN DE CONTACTO */}
        <div className={styles.contactInfo}>
          <p>Puedes escribirme directamente a:</p>
          <p className={styles.email}>erikadiasdg@gmail.com</p>

          <p className={styles.socialText}>O seguirnos en Instagram:</p>
          <a
            href="https://www.instagram.com/tag.estudio/"
            target="_blank"
            className={styles.socialLink}
          >
            @tag.estudio
          </a>
        </div>
      </section>

    </main>
  );
}
