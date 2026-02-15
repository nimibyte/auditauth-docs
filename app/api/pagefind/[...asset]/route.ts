import { readFile } from 'node:fs/promises';
import path from 'node:path';

const PAGEFIND_DIR = path.join(process.cwd(), 'public', '_pagefind');

const getContentType = (filePath: string): string => {
  if (filePath.endsWith('.js')) return 'text/javascript; charset=utf-8';
  if (filePath.endsWith('.css')) return 'text/css; charset=utf-8';
  if (filePath.endsWith('.json')) return 'application/json; charset=utf-8';
  if (filePath.endsWith('.wasm') || filePath.endsWith('.pagefind')) return 'application/wasm';
  if (filePath.endsWith('.pf_meta')) return 'application/octet-stream';
  return 'application/octet-stream';
};

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ asset?: string[] | string }> }
) {
  const { asset } = await params;

  if (!asset) {
    return new Response('Not Found', { status: 404 });
  }

  const segments = Array.isArray(asset) ? asset : [asset];

  if (segments.length === 0) {
    return new Response('Not Found', { status: 404 });
  }

  const requestedPath = path.resolve(PAGEFIND_DIR, ...segments);
  const allowedPrefix = `${PAGEFIND_DIR}${path.sep}`;

  if (!requestedPath.startsWith(allowedPrefix)) {
    return new Response('Not Found', { status: 404 });
  }

  try {
    const content = await readFile(requestedPath);

    return new Response(content, {
      status: 200,
      headers: {
        'Content-Type': getContentType(requestedPath),
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch {
    return new Response('Not Found', { status: 404 });
  }
}
