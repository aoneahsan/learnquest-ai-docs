import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

const APP_URL = 'https://learnquest.aoneahsan.com';
const PLAY_URL = 'https://play.google.com/store/apps/details?id=com.aoneahsan.learnquest';

type Feature = {
  title: string;
  body: string;
};

const FEATURES: Feature[] = [
  {
    title: 'Hundreds of activities',
    body: 'Interactive quizzes, puzzles, memory games, coloring, story reading, math problems, and coding challenges — organised by age band and subject for kids 1–15.',
  },
  {
    title: '50 learning tools',
    body: 'A graphing calculator, chemistry equation balancer, periodic table, dictionary, translator, spelling bee, rhyme finder, mind map, and more — each works right in the browser.',
  },
  {
    title: 'Gamified progress',
    body: 'Earn badges, build streaks, climb leaderboards, and join teams. Progress is tracked across activities so learning stays motivating.',
  },
  {
    title: 'Learning paths',
    body: 'Guided sequences of activities that build a skill step by step, with clear progress so kids always know what to do next.',
  },
  {
    title: 'Parent & teacher portals',
    body: 'Parents link a child, set controls, and watch progress. Teachers create classes, assign activities, and review student results from a dedicated dashboard.',
  },
  {
    title: 'Free, offline-ready, multilingual',
    body: 'Free to use with no paid tiers. Works as an installable web app or on Android, runs many activities offline, and supports multiple languages and a full theme customizer.',
  },
];

function HomepageHeader(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero', styles.heroBanner)}>
      <div className="container">
        <h1 className={styles.heroTitle}>{siteConfig.title}</h1>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <div className={styles.buttons}>
          <Link className="button button--primary button--lg" to="/getting-started/quick-start">
            Quick Start — 5 min
          </Link>
          <Link className="button button--secondary button--lg" to="/intro">
            Read the Docs
          </Link>
          <Link className="button button--outline button--lg" href={APP_URL}>
            Open the App
          </Link>
          <Link className="button button--outline button--lg" href={PLAY_URL}>
            Google Play
          </Link>
        </div>
      </div>
    </header>
  );
}

function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.featuresWrap}>
      <div className="container">
        <div className="row">
          {FEATURES.map((f) => (
            <div key={f.title} className="col col--4" style={{ marginBottom: '1.5rem' }}>
              <div className={styles.featureCard}>
                <h3 className={styles.featureTitle}>{f.title}</h3>
                <p className={styles.featureBody}>{f.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AuthorStrip(): ReactNode {
  return (
    <section className={styles.authorStrip}>
      <div className="container">
        <p>
          Built and maintained by{' '}
          <Link href="https://aoneahsan.com">Ahsan Mahmood</Link> —{' '}
          <Link href="https://linkedin.com/in/aoneahsan">LinkedIn</Link> ·{' '}
          <Link href="https://github.com/aoneahsan">GitHub</Link> ·{' '}
          <Link href="https://www.npmjs.com/~aoneahsan">npm</Link>
        </p>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Free Learning App for Kids`}
      description="Documentation for LearnQuest AI: a free gamified learning app with hundreds of activities, 50 educational tools, learning paths, and parent/teacher portals for kids ages 1–15."
    >
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <AuthorStrip />
      </main>
    </Layout>
  );
}
