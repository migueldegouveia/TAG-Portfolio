"use client";
import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.topRow}>
        <div className={styles.logoAndText}>
          <img src="/logo/LOGO.svg" alt="TAG Logo" className={styles.logoFooter} />
          <span className={styles.tagline}>Estudio de Arquitectura</span>
        </div>
        <nav className={styles.footerNav}>
          <Link href="/proyectos" className={styles.footerLink}>Proyectos</Link>
          <Link href="/servicios" className={styles.footerLink}>Servicios</Link>
          <Link href="/el-estudio" className={styles.footerLink}>Estudio</Link>
          <Link href="/contacto" className={styles.footerLink}>Contacto</Link>
        </nav>
        <div className={styles.social}>
          <a
            href="https://www.instagram.com/tag.estudio/?utm_source=ig_web_button_share_sheet"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="12" fill="#1800AD"/><path d="M14 9.3A4.7 4.7 0 1 0 14 18.7A4.7 4.7 0 1 0 14 9.3ZM21.5 8.5a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" fill="#F8F7F3"/></svg>
          </a>
          <a
            href="mailto:estudio@tag.com"
            aria-label="Email"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialLink}
          >
            <svg width="28" height="28" viewBox="0 0 28 28"><circle cx="14" cy="14" r="12" fill="#1800AD"/><path d="M8 10h12v8H8v-8zm0 0l6 4l6-4" stroke="#F8F7F3" strokeWidth="1.5" fill="none"/></svg>
          </a>
        </div>
      </div>
      <div className={styles.bottomRow}>
        <span>© {new Date().getFullYear()} TAG Estudio. Todos los derechos reservados.</span>
        <span>Hecho con ❤️ por TAG</span>
      </div>
    </footer>
  );
}