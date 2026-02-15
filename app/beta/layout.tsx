/* eslint-disable @next/next/no-img-element */
import type { Metadata } from 'next';
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { FlaskConical } from 'lucide-react';
import { getPageMap } from 'nextra/page-map';
import Link from 'next/link';
import { headers } from 'next/headers';
import { SiteFooter } from '../site-footer';
import styles from './beta-banner.module.css';
import 'nextra-theme-docs/style.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://auditauth.com'),
  title: {
    default: 'AuditAuth Documentation',
    template: '%s | AuditAuth Documentation',
  },
  description: 'Official AuditAuth documentation for architecture, integration, identity, and governance.',
  applicationName: 'AuditAuth Documentation',
  openGraph: {
    title: 'AuditAuth Documentation',
    description: 'Official AuditAuth documentation for architecture, integration, identity, and governance.',
    url: 'https://auditauth.com',
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
      <>
        <img alt="auditauth" src="/logo.png" style={{ width: '40px' }} />
        <span style={{ marginLeft: '15px' }}>
          AuditAuth Official Documentation
        </span>
      </>
    }
  />
);

const footer = <Footer><SiteFooter /></Footer>;

export default async function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  const headersList = await headers();
  const pathname = headersList.get('x-pathname') || '/beta';

  const segments = pathname.split('/').filter(Boolean);
  const version = segments[0] || 'beta';

  return (
    <html lang="en" dir="ltr" suppressHydrationWarning>
      <Head />
      <body>
        <Layout
          key={version}
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
