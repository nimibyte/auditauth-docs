import { readdir } from 'node:fs/promises';
import path from 'node:path';
import type { MetadataRoute } from 'next';

const BASE_URL = 'https://docs.auditauth.com';
const APP_DIR = path.join(process.cwd(), 'app');

function isPageFile(fileName: string): boolean {
  return fileName === 'page.mdx' || fileName === 'page.tsx';
}

function isExcludedSegment(segment: string): boolean {
  return segment === 'api' || segment.startsWith('_');
}

async function collectRoutes(dirPath: string, segments: string[] = []): Promise<string[]> {
  const entries = await readdir(dirPath, { withFileTypes: true });
  const routes: string[] = [];

  for (const entry of entries) {
    if (entry.isDirectory()) {
      if (isExcludedSegment(entry.name)) {
        continue;
      }

      const childRoutes = await collectRoutes(path.join(dirPath, entry.name), [...segments, entry.name]);
      routes.push(...childRoutes);
      continue;
    }

    if (isPageFile(entry.name) && segments.length > 0) {
      routes.push(`/${segments.join('/')}`);
    }
  }

  return routes;
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const routes = await collectRoutes(APP_DIR);
  const deduped = Array.from(new Set(routes)).sort((a, b) => a.localeCompare(b));
  const now = new Date();

  return deduped.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: route === '/beta' || route === '/v1' ? 1 : 0.7
  }));
}
