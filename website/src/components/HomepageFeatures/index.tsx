import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  icon: ReactNode;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Easy to Customize',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
    ),
    description: (
      <>
        Built with customization in mind. Update colors, fonts, and layouts
        to match your brand with simple CSS variables.
      </>
    ),
  },
  {
    title: 'SEO Optimized',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
    ),
    description: (
      <>
        Optimized for search engines out of the box. Sitemap generation,
        meta tags, and structured data included.
      </>
    ),
  },
  {
    title: 'PWA Ready',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/></svg>
    ),
    description: (
      <>
        Progressive Web App support for offline capabilities. Install on any
        device for a native app experience.
      </>
    ),
  },
  {
    title: 'GitHub Pages Ready',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m8 3 4 8 5-5 5 15H2L8 3z"/></svg>
    ),
    description: (
      <>
        Deploy to GitHub Pages with a single command. GitHub Actions workflow
        included for automated deployments.
      </>
    ),
  },
  {
    title: 'Dark Mode',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>
    ),
    description: (
      <>
        Beautiful dark mode that respects user preferences. Easy on the eyes
        for late-night documentation reading.
      </>
    ),
  },
  {
    title: 'Fast & Performant',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
    ),
    description: (
      <>
        Built on Docusaurus for blazing fast performance. Static site generation
        with React for the best user experience.
      </>
    ),
  },
];

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresHeader}>
          <Heading as="h2" className={styles.featuresTitle}>
            Everything you need
          </Heading>
          <p className={styles.featuresSubtitle}>
            A complete template to get your documentation site up and running in minutes.
          </p>
        </div>
        <div className="row">
          {FeatureList.map((props, idx) => (
            <div key={idx} className={clsx('col col--4', 'fade-in-up', `stagger-${(idx % 3) + 1}`)}>
              <Feature {...props} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({title, icon, description}: FeatureItem) {
  return (
    <div className={styles.featureCard}>
      <div className={styles.featureIcon}>{icon}</div>
      <Heading as="h3" className={styles.featureTitle}>{title}</Heading>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}
