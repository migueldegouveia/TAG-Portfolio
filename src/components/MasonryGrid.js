import styles from "./MasonryGrid.module.css";

export default function MasonryGrid({ children }) {
  return (
    <div className={styles.masonry}>
      {children}
    </div>
  );
}