import NextLink from "next/link";

import styles from "../styles/modules/Link.module.scss";

import type { Locale } from "../i18n/config";
import type { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = {
  to: string;
  isExternal?: boolean;
  locale?: Locale | undefined;
  children: React.ReactNode;
} & Omit<NextLinkProps, "href">;

const Link = ({ to, isExternal, locale, children, ...props }: LinkProps) => {
  const externalCheck = /^https?:\/\//;
  if (isExternal || externalCheck.test(to)) {
    return (
      <a className={styles.primary} href={to}>
        {children}
      </a>
    );
  }
  return (
    <NextLink locale={locale} href={to} {...props}>
      {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
      <a className={styles.primary}>{children}</a>
    </NextLink>
  );
};

export default Link;
