/* eslint-disable @next/next/no-img-element */
import { Footer, Layout, Navbar } from 'nextra-theme-docs'
import { Banner, Head } from 'nextra/components'
import { getPageMap } from 'nextra/page-map'
import 'nextra-theme-docs/style.css'

export const metadata = {
  // Define your metadata here
  // For more information on metadata API, see: https://nextjs.org/docs/app/building-your-application/optimizing/metadata
}

const banner = <Banner storageKey="some-key">Nextra 4.0 is released 🎉</Banner>
const navbar = (
  <Navbar
    logo={
      <>
        <img alt='auditauth' src={'/logo.png'} style={{ width: '40px' }}/>
        <span style={{ marginLeft: '15px' }}>AuditAuth Official Documentation</span>
      </>
    }
  />
)
const footer = <Footer>MIT {new Date().getFullYear()} © Nextra.</Footer>

export default async function RootLayout({ children }: any) {
  return (
    <html
      lang="en"
      dir="ltr"
      suppressHydrationWarning
    >
      <Head>
        {/* Your additional tags should be passed as `children` of `<Head>` element */}
      </Head>
      <body>
        <Layout
          banner={banner}
          navbar={navbar}
          pageMap={await getPageMap('/beta')}
          docsRepositoryBase="https://github.com/shuding/nextra/tree/main/docs"
        // ... Your additional layout options
        >
          {children}
        </Layout>
      </body>
    </html>
  )
}
