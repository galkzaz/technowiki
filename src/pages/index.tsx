import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

const WikiSections = [
  {
    title: 'Mathematics',
    description: 'Discrete Math, Linear Algebra, and Probability foundations.',
    link: '/mathematics',
    icon: '∑',
  },
  {
    title: 'Hardware Design',
    description: 'Computer Organization, Digital Logic, and Microarchitecture.',
    link: '/hardware-design',
    icon: '⚙️',
  },
  {
    title: 'Software Systems',
    description: 'Algorithms, OS, Databases, and System Design.',
    link: '/software-systems',
    icon: '💻',
  },
  {
    title: 'Embedded Systems',
    description: 'RTOS, Microcontrollers, and Embedded Linux.',
    link: '/embedded-systems',
    icon: '🔌',
  },
  {
    title: 'Software Engineering',
    description: 'Software Engineering',
    link: '/software-engineering',
    icon: '🔌',
  },
];

export default function Home() {
  return (
    <Layout title="CS Wiki Home" description="Computer Science Knowledge Base">
      <main className={styles.container}>
        <section className={styles.hero}>
          <h1>TechnoWiki</h1>
          <p>A comprehensive knowledge base for Computer Science & Engineering</p>
        </section>

        <div className={styles.grid}>
          {WikiSections.map((props, idx) => (
            <Link key={idx} to={props.link} className={styles.card}>
              <div className={styles.cardIcon}>{props.icon}</div>
              <h3>{props.title}</h3>
              <p>{props.description}</p>
            </Link>
          ))}
        </div>
      </main>
    </Layout>
  );
}
