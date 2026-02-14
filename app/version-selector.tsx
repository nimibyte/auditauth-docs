'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useMemo } from 'react';

const VERSIONS = [
  { value: 'beta', label: 'Beta', badge: 'Preview' },
  { value: 'v1', label: 'v1.0', badge: 'Stable' }
];

const getVersionFromPath = (pathname: string): string => {
  const segments = pathname.split('/').filter(Boolean);
  const first = segments[0];
  const match = VERSIONS.find((v) => v.value === first);
  return match ? match.value : 'beta';
};

export const VersionSelector = () => {
  const pathname = usePathname();
  const router = useRouter();

  const currentVersion = useMemo(
    () => getVersionFromPath(pathname),
    [pathname]
  );

  const current = VERSIONS.find((v) => v.value === currentVersion)!;

  const handleChange = (next: string): void => {
    if (next === currentVersion) return;
    router.push(`/${next}`);
  };

  return (
    <div className="mb-4 px-2">
      <div className="relative">
        <select
          value={currentVersion}
          onChange={(e) => handleChange(e.target.value)}
          className="w-full appearance-none rounded-md border border-zinc-800 bg-zinc-900 px-3 py-2 pr-10 text-sm font-medium text-zinc-100 outline-none transition hover:border-zinc-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500"
          aria-label="Select documentation version"
        >
          {VERSIONS.map((v) => (
            <option key={v.value} value={v.value}>
              {v.label}
            </option>
          ))}
        </select>

      </div>
    </div>
  );
};
