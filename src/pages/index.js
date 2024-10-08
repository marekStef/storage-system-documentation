import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';

import Heading from '@theme/Heading';
import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className="hero__title">
          {siteConfig.title}
        </Heading>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
        <div className={styles.buttons} style={{flexDirection: 'column', alignItems: 'center'}}>
          <Link
            style={{
              margin: '1rem',
              width: '100%',
              maxWidth: '280px', // Adjusted width for better fit
              textAlign: 'center',
              whiteSpace: 'normal', // Allows text to wrap
              wordBreak: 'break-word', // Ensures long words break if necessary
            }}
            className="button button--secondary button--lg"
            to="/docs/category/introduction">
            Storage System Walkthrough - 40 minutes of reading⏱️
          </Link>
          <Link
            style={{
              margin: '1rem',
              width: '100%',
              maxWidth: '280px', // Adjusted width for better fit
              textAlign: 'center',
              whiteSpace: 'normal', // Allows text to wrap
              wordBreak: 'break-word', // Ensures long words break if necessary
            }}
            className="button button--secondary button--lg"
            to="/docs/example-apps/intro">
            Storage System Example Apps - 15 minutes of reading⏱️
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
