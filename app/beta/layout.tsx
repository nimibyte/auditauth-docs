/* eslint-disable @next/next/no-img-element */
import { Footer, Layout, Navbar } from 'nextra-theme-docs';
import { Banner, Head } from 'nextra/components';
import { getPageMap } from 'nextra/page-map';
import { headers } from 'next/headers';
import 'nextra-theme-docs/style.css';

export const metadata = {};

const banner = (
  <Banner storageKey="some-key">
    AuditAuth Docs
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

const footer = (
  <Footer>
    MIT {new Date().getFullYear()} © AuditAuth
  </Footer>
);

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
          pageMap={await getPageMap('/beta')}
          docsRepositoryBase="https://github.com/nimibyte/auditauth-docs"
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
