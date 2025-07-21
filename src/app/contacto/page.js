export default function ContactoPage() {
  return (
    <section>
      <h2>Contacto</h2>
      <p>
        ¿Quieres saber más, solicitar un presupuesto o colaborar? Completa el siguiente formulario y me pondré en contacto contigo.
      </p>
      <form>
        <label>
          Nombre: <input type="text" name="nombre" required />
        </label>
        <br />
        <label>
          Email: <input type="email" name="email" required />
        </label>
        <br />
        <label>
          Mensaje: <textarea name="mensaje" required></textarea>
        </label>
        <br />
        <button type="submit">Enviar</button>
      </form>
      <p>
        También puedes escribirme a <strong>erikadiasdg@gmail.com</strong> o seguirme en Instagram.
      </p>
    </section>
  );
}