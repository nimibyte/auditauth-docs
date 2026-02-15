/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { ShieldAlert } from 'lucide-react';
import { getPageMap } from 'nextra/page-map';
import Link from 'next/link';
import sharedLayoutStyles from '../docs-layout.module.css';
import { SiteFooter } from '../site-footer';
import styles from './v1-banner.module.css';
import 'nextra-theme-docs/style.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.auditauth.com'),
  title: {
    default: 'AuditAuth Documentation',
    template: '%s | AuditAuth Documentation',
  },
  description: 'Official AuditAuth documentation for architecture, integration, identity, and governance.',
  alternates: {
    canonical: './',
  },
  applicationName: 'AuditAuth Documentation',
  openGraph: {
    title: 'AuditAuth Documentation',
    description: 'Official AuditAuth documentation for architecture, integration, identity, and governance.',
    url: 'https://docs.auditauth.com/v1',
    siteName: 'AuditAuth Documentation',
    type: 'website',
    images: [
      {
        url: '/logo.png',
        width: 512,
        height: 512,
        alt: 'AuditAuth Logo',
      },
    ],
  },
  twitter: {
    card: 'summary',
    title: 'AuditAuth Documentation',
    description: 'Official AuditAuth documentation for architecture, integration, identity, and governance.',
    images: ['/logo.png'],
  },
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AuditAuth Documentation',
  url: 'https://docs.auditauth.com/v1',
  publisher: {
    '@type': 'Organization',
    name: 'AuditAuth',
    url: 'https://auditauth.com'
  }
};

const banner = (
  <Banner storageKey="auditauth-v1-docs-banner">
    <span className={styles.bannerContent}>
      <ShieldAlert size={14} className={styles.icon} />
      <span className={styles.label}>v1 Stabilizing</span>
      <span className={styles.text}>Contracts are stable-oriented but still validated against beta maturity updates.</span>
      <Link href="/beta" className={styles.link}>
        Review beta changes
      </Link>
    </span>
  </Banner>
);

const navbar = (
  <Navbar
    logo={
      <span className={sharedLayoutStyles.navLogo}>
        <img alt="AuditAuth" src="/logo.png" className={sharedLayoutStyles.navLogoImage} />
        <span className={sharedLayoutStyles.navLogoText}>
          <span className={sharedLayoutStyles.navLogoProduct}>AuditAuth</span>
          <span className={sharedLayoutStyles.navLogoContext}>Documentation</span>
        </span>
      </span>
    }
  />
);

const footer = <Footer><SiteFooter /></Footer>;

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <Layout
          banner={banner}
          navbar={navbar}
          footer={footer}
          pageMap={await getPageMap('/v1')}
          docsRepositoryBase="https://github.com/nimibyte/auditauth-docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
