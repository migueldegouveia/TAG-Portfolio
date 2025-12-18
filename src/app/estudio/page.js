import styles from "./Estudio.module.css";

export default function SobreMiPage() {
  return (
    <main className={styles.page}>

      {/* HERO */}
      <section className={styles.hero}>
        <h1 className={styles.title}>Sobre mí</h1>
        <p className={styles.subtitle}>
          Arquitectura · Interiorismo · Diseño de espacios
        </p>
      </section>

      {/* CONTENIDO */}
      <section className={styles.content}>

        {/* FOTO */}
        <div className={styles.photoBox}>
          <div className={styles.photoPlaceholder}>
            <img
              src="/foto/erikaportfolio.jpg"
              alt="Erika Dias"
              className={styles.photo}
            />
          </div>
        </div>

        {/* TEXTO PRINCIPAL */}
        <div className={styles.textBox}>
          <p className={styles.paragraph}>
            Soy Erika Dias, arquitecta y diseñadora de interiores. Me apasiona crear espacios funcionales, estéticos y personalizados, siempre buscando equilibrio entre forma, luz y materialidad.
          </p>

          <p className={styles.paragraph}>
            Mi experiencia abarca proyectos residenciales, comerciales y de interiorismo, con un enfoque en soluciones sostenibles y diseño consciente.
          </p>

          {/* BLOQUES DE INFORMACIÓN */}
          <div className={styles.infoBlocks}>
            <div className={styles.block}>
              <h3>Formación</h3>
              <p>Universidad Central de Venezuela, 2018</p>
            </div>

            <div className={styles.block}>
              <h3>Especializaciones</h3>
              <p>Arquitectura sostenible · Diseño de interiores · Gestión de proyectos</p>
            </div>

            <div className={styles.block}>
              <h3>Filosofía</h3>
              <p>Cada espacio debe contar una historia y adaptarse a quienes lo habitan.</p>
            </div>
          </div>

          <p className={styles.paragraph}>
            Si quieres conocer más sobre mi trabajo, te invito a explorar mis proyectos o ponerte en contacto conmigo.
          </p>
        </div>
      </section>

    </main>
  );
}
