import nextra from 'nextra';

const withNextra = nextra({});

export default withNextra({
  async redirects() {
    return [
      {
        source: '/docs/:path*',
        destination: '/:path*',
        permanent: true,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: '/_pagefind/:path*',
        destination: '/api/pagefind/:path*',
      },
    ];
  },
  turbopack: {
    resolveAlias: {
      'next-mdx-import-source-file': './mdx-components.ts',
    }
  }
});
