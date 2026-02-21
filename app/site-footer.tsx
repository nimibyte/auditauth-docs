import Image from 'next/image';
import styles from './site-footer.module.css';

export const SiteFooter = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.brand}>
          <Image alt="AuditAuth" src="/logo.png" width={42} height={42} className={styles.logo} />
          <div>
            <span className={styles.title}>AuditAuth</span>
            <span className={styles.subtitle}>Official Documentation</span>
          </div>
        </div>
        <span className={styles.pill}>Identity Control Plane</span>
      </div>

      <div className={styles.grid}>
        <div>
          <span className={styles.sectionTitle}>Project</span>
          <div className={styles.list}>
            <a href="https://auditauth.com" target="_blank" rel="noreferrer" className={styles.link}>
              Landing & Console
            </a>
            <a href="https://github.com/nimibyte/auditauth-docs" target="_blank" rel="noreferrer" className={styles.link}>
              Documentation Repository
            </a>
          </div>
        </div>

        <div>
          <span className={styles.sectionTitle}>Resources</span>
          <div className={styles.list}>
            <a href="https://api.auditauth.com/docs-public#/" target="_blank" rel="noreferrer" className={styles.link}>
              Public API Swagger
            </a>
            <a href="https://github.com/nimibyte/auditauth-docs" target="_blank" rel="noreferrer" className={styles.link}>
              Docs Source
            </a>
            <a href="https://github.com/nimibyte/auditauth-sdk" target="_blank" rel="noreferrer" className={styles.link}>
              SDKs & Examples
            </a>
          </div>
        </div>

        <div>
          <span className={styles.sectionTitle}>Platform</span>
          <div className={styles.list}>
            <a href="https://auditauth.com" target="_blank" rel="noreferrer" className={styles.link}>
              Product Home
            </a>
            <a href="https://auditauth.com" target="_blank" rel="noreferrer" className={styles.link}>
              Console Access
            </a>
          </div>
        </div>
      </div>

      <div className={styles.bottom}>MIT {new Date().getFullYear()} © AuditAuth. Built for secure identity operations.</div>
    </div>
  );
};
