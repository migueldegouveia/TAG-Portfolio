import styles from "./HeroBackground.module.css";

export default function HeroBackground({
  mediaType = "image",
  mediaSrc,
  overlayColor = "rgba(0,0,0,0.45)",
  height = "350px",
  children,
  ...props
}) {
  return (
    <section
      className={styles.hero}
      style={{ minHeight: height, ...props.style }}
    >
      {mediaType === "video" ? (
        <video
          className={styles.media}
          src={mediaSrc}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      ) : (
        <img
          className={styles.media}
          src={mediaSrc}
          alt=""
          aria-hidden="true"
        />
      )}
      <div
        className={styles.overlay}
        style={{ background: overlayColor }}
      />
      <div className={styles.content}>
        {children}
      </div>
    </section>
  );
}