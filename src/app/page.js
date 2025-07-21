import styles from './Home.module.css';
import HomeProjectCard from '../components/projects/HomeProjectCard';

const projects = [
  {
    title: 'Casa Horizonte',
    image: '/proyectos/cafeteria-vintage-1.jpg',
    href: '/proyectos/casa-horizonte',
  },
  {
    title: 'Edificio Cobalto',
    image: '/proyectos/local-eco-1.jpg',
    href: '/proyectos/edificio-cobalto',
  },
  {
    title: 'Reforma Áurea',
    image: '/proyectos/cocina-moderna-1.jpg',
    href: '/proyectos/reforma-aurea',
  },
  {
    title: 'Vivienda Prisma',
    image: '/proyectos/local-eco-3.jpg',
    href: '/proyectos/vivienda-prisma',
  }
];

export default function Home() {
  return (
    <main className={styles.homeBg}>
      <section className={styles.projectsGrid}>
        {projects.map((p, i) => (
          <HomeProjectCard
            key={p.title}
            title={p.title}
            image={p.image}
            href={p.href}
            index={i}
          />
        ))}
      </section>
    </main>
  );
}