import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Empezar el curso
          </Link>
        </div>
      </div>
    </header>
  );
}

const features = [
  {icon: '🎨', title: 'Conoce Affinity', text: 'Interfaz, herramientas y conceptos básicos explicados paso a paso.'},
  {icon: '✍️', title: 'Practica', text: 'Ejercicios guiados para ganar soltura con vectores, capas y texto.'},
  {icon: '📚', title: 'Crea tu sobrecubierta', text: 'Diseña desde cero la sobrecubierta de un libro lista para imprimir.'},
];

function Features() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {features.map((f) => (
            <div key={f.title} className="col col--4 margin-bottom--md">
              <div className={styles.card}>
                <div className={styles.emoji}>{f.icon}</div>
                <Heading as="h3">{f.title}</Heading>
                <p>{f.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={siteConfig.title}
      description="Material del curso de Affinity: interfaz, herramientas y diseño de una sobrecubierta de libro">
      <HomepageHeader />
      <main>
        <Features />
      </main>
    </Layout>
  );
}
