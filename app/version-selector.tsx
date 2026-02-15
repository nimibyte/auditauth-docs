'use client';

import {
  BookOpenText,
  Check,
  ChevronDown,
  FlaskConical,
  ShieldCheck,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useMemo, useRef, useState } from 'react';
import styles from './version-selector.module.css';

const VERSIONS = [
  {
    value: 'beta',
    label: 'Beta',
    badge: 'Preview',
    icon: FlaskConical,
  },
  {
    value: 'v1',
    label: 'v1.0',
    badge: 'Stable',
    icon: ShieldCheck,
  },
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
  const rootRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState(false);

  const currentVersion = useMemo(
    () => getVersionFromPath(pathname),
    [pathname]
  );

  const activeVersion = useMemo(
    () => VERSIONS.find((v) => v.value === currentVersion) ?? VERSIONS[0],
    [currentVersion]
  );

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent): void => {
      if (!rootRef.current) return;
      if (!rootRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent): void => {
      if (event.key === 'Escape') {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleChange = (next: string): void => {
    if (next === currentVersion) return;
    setOpen(false);
    router.push(`/${next}`);
  };

  const getBadgeTone = (version: string): string => {
    return version === 'beta' ? styles.badgeBeta : styles.badgeStable;
  };

  return (
    <div className={styles.wrapper} ref={rootRef}>
      <div className={styles.root}>
        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          className={styles.trigger}
          aria-haspopup="menu"
          aria-expanded={open}
          aria-label="Select documentation version"
        >
          <span className={styles.triggerMain}>
            <BookOpenText className={styles.icon} />
            <span>{activeVersion.label}</span>
          </span>
          <span className={styles.triggerSide}>
            <span className={`${styles.badge} ${getBadgeTone(activeVersion.value)}`}>
              {activeVersion.badge}
            </span>
            <ChevronDown className={`${styles.chevron} ${open ? styles.chevronOpen : ''}`} />
          </span>
        </button>

        {open && (
          <div role="menu" className={styles.menu}>
            {VERSIONS.map((version) => {
              const Icon = version.icon;
              const isActive = version.value === currentVersion;

              return (
                <button
                  key={version.value}
                  type="button"
                  role="menuitemradio"
                  aria-checked={isActive}
                  onClick={() => handleChange(version.value)}
                  className={`${styles.item} ${isActive ? styles.itemActive : ''}`}
                >
                  <span className={styles.itemRow}>
                    <span className={styles.itemMain}>
                      <Icon className={styles.icon} />
                      <span>{version.label}</span>
                    </span>
                    <span className={styles.itemSide}>
                      <span className={`${styles.badge} ${getBadgeTone(version.value)}`}>
                        {version.badge}
                      </span>
                      {isActive && <Check className={styles.check} />}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};
