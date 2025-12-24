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
    title: 'Operational Reliability',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/></svg>
    ),
    description: (
      <>
        Durable execution, elastic scaling, and cost-efficient operations.
        Agents survive failures and scale with demand.
      </>
    ),
  },
  {
    title: 'Security & Trust',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
    ),
    description: (
      <>
        Architectural security controls that prevent unauthorized actions—
        even against adversarial prompt manipulation.
      </>
    ),
  },
  {
    title: 'Governance & Compliance',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M15 2H9a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"/><path d="m9 14 2 2 4-4"/></svg>
    ),
    description: (
      <>
        Policy enforcement, guardrails, and tamper-proof audit logs.
        Full auditability for regulatory compliance.
      </>
    ),
  },
  {
    title: 'Data Foundation & Factuality',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5V19A9 3 0 0 0 21 19V5"/><path d="M3 12A9 3 0 0 0 21 12"/></svg>
    ),
    description: (
      <>
        Verified data with quality scoring and provenance tracking.
        Ground agents in facts, not hallucinations.
      </>
    ),
  },
  {
    title: 'Intelligence & Reasoning',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a8 8 0 0 0-8 8c0 3.5 2 6 4 7.5V22h8v-4.5c2-1.5 4-4 4-7.5a8 8 0 0 0-8-8Z"/><path d="M12 2v4"/><path d="m8 10 4 4 4-4"/></svg>
    ),
    description: (
      <>
        Model routing, reasoning patterns, and three-tier memory.
        Apply the right strategy for each task.
      </>
    ),
  },
  {
    title: 'Integration & Exposition',
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3"/><path d="M12 2v4"/><path d="M12 18v4"/><path d="m4.93 4.93 2.83 2.83"/><path d="m16.24 16.24 2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="m4.93 19.07 2.83-2.83"/><path d="m16.24 7.76 2.83-2.83"/></svg>
    ),
    description: (
      <>
        MCP for tools, A2A for agent collaboration, and AG-UI for
        rich user interfaces across channels.
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
            Eight Fundamental Needs
          </Heading>
          <p className={styles.featuresSubtitle}>
            Organizations deploying autonomous AI agents face eight fundamental challenges. The Agentic Platform addresses them systematically.
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
