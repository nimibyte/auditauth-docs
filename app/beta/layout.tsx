/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { FlaskConical } from 'lucide-react';
import { getPageMap } from 'nextra/page-map';
import Link from 'next/link';
import sharedLayoutStyles from '../docs-layout.module.css';
import { SiteFooter } from '../site-footer';
import styles from './beta-banner.module.css';
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
    url: 'https://docs.auditauth.com/beta',
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
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/logo.png',
  },
};

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'AuditAuth Documentation',
  url: 'https://docs.auditauth.com/beta',
  publisher: {
    '@type': 'Organization',
    name: 'AuditAuth',
    url: 'https://auditauth.com'
  }
};

const banner = (
  <Banner storageKey="auditauth-beta-docs-banner">
    <span className={styles.bannerContent}>
      <FlaskConical size={14} className={styles.icon} />
      <span className={styles.label}>Beta Docs</span>
      <span className={styles.text}>You are viewing preview documentation that may change.</span>
      <Link href="/v1" className={styles.link}>
        Switch to stable v1
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
          pageMap={await getPageMap('/beta')}
          docsRepositoryBase="https://github.com/nimibyte/auditauth-docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
