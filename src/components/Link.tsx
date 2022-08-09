import NextLink from "next/link";

import styles from "../styles/modules/Link.module.scss";

import type { Locale } from "../i18n/config";

export type LinkProps = {
  to: string;
  isExternal?: boolean;
  locale?: Locale;
  ariaLabel?: string;
  children: React.ReactNode;
};

const Link = ({ to, isExternal, locale, ariaLabel, children }: LinkProps) => {
  const externalCheck = /^https?:\/\//;
  if (isExternal || externalCheck.test(to)) {
    return (
      <a aria-label={ariaLabel} className={styles.primary} href={to}>
        {children}
      </a>
    );
  }
  return (
    <NextLink locale={locale ?? false} href={to}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a aria-label={ariaLabel} className={styles.primary}>
        {children}
      </a>
    </NextLink>
  );
};

export default Link;
