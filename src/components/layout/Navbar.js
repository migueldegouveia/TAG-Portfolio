"use client";
import styles from './Navbar.module.css';
import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // Función para controlar el tamaño de la pantalla
    function handleResize() {
      setIsMobile(window.innerWidth <= 700);
    }
    // Inicializa el valor
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const links = [
    { href: "/proyectos", label: "Proyectos" },
    { href: "/servicios", label: "Servicios" },
    { href: "/estudio", label: "Estudio" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.logoBox}>
          <Link href="/" className={styles.logoLink}>
            <Image
              src="/logo/LOGO.svg"
              alt="TAG Logo"
              width={96}
              height={96}
              className={styles.logoImg}
              priority
            />
          </Link>
        </div>

        {/* Desktop menu */}
        {!isMobile && (
          <ul className={styles.menu}>
            {links.map(link => (
              <li key={link.href}>
                <Link href={link.href} className={styles.link}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        )}

        {/* Mobile hamburger button */}
        {isMobile && (
          <button
            className={`${styles.burger} ${open ? styles.burgerActive : ''}`}
            aria-label="Abrir menú"
            aria-expanded={open ? "true" : "false"}
            onClick={() => setOpen(!open)}
          >
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
            <span className={styles.burgerBar}></span>
          </button>
        )}

      </nav>

      {/* Mobile menu */}
      {isMobile && open && (
        <div className={styles.mobileMenu}>
          {links.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}