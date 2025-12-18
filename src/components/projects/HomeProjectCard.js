"use client";
import styles from './HomeProjectCard.module.css';
import { useRef, useEffect } from 'react';

export default function HomeProjectCard({ title, image, href, index = 0 }) {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    function handleScroll() {
      const rect = card.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      let visible = 0;
      if (rect.top < windowHeight && rect.bottom > 0) {
        const progress = Math.min(
          1,
          Math.max(0, (windowHeight - rect.top) / (windowHeight + rect.height))
        );
        visible = progress;
      }

      if (visible > 0.13) {
        setTimeout(() => {
          card.classList.add(styles.visible);
        }, index * 110);
      } else {
        card.classList.remove(styles.visible);
      }
    }

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [index]);

  return (
    <a href={href} className={styles.card} ref={cardRef} tabIndex={0}>
      <div className={styles.imageBox}>
        <img src={image} alt={title} className={styles.img} />
        <div className={styles.overlay}></div>
        <div className={styles.text}>{title}</div>
      </div>
    </a>
  );
}