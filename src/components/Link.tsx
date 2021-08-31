import NextLink from "next/link";
import styles from "../styles/modules/Link.module.scss";
import type { Locale } from "../i18n/config";
import type { ReactNode } from "react";

export type LinkProps = {
  to: string;
  isExternal?: boolean;
  locale?: Locale;
  children: ReactNode;
};

const Link = ({ to, isExternal, locale, children }: LinkProps) => {
  const externalCheck = /^https?:\/\//;
  if (isExternal || externalCheck.test(to)) {
    return (
      <a className={styles.primary} href={to}>
        {children}
      </a>
    );
  }
  return (
    <NextLink locale={locale} href={to}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.primary}>{children}</a>
    </NextLink>
  );
};

export default Link;
