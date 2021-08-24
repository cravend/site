import NextLink from "next/link";
import { Locale } from "../translations/types";
import styles from "../styles/Link.module.scss";
import type { FC, ReactNode } from "react";

type LinkType = {
  to: string;
  isExternal?: boolean;
  locale?: Locale;
  children: ReactNode;
};

const Link: FC<LinkType> = ({ to, isExternal, locale, children }: LinkType) => {
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
