import NextLink from "next/link";

import styles from "../styles/modules/Link.module.scss";

import type { Locale } from "../i18n/config";
import type { LinkProps as NextLinkProps } from "next/link";

export type LinkProps = {
  to: string;
  isExternal?: boolean;
  openInNewTab?: boolean;
  locale?: Locale | false | undefined;
  children: React.ReactNode;
} & Omit<NextLinkProps, "href">;

const Link = ({
  to,
  isExternal,
  locale,
  children,
  openInNewTab,
  ...props
}: LinkProps) => {
  const externalCheck = /^https?:\/\//;
  const newTabProps =
    openInNewTab &&
    ({
      target: "_blank",
      rel: "noopener noreferrer",
    } as const);
  if (isExternal || externalCheck.test(to)) {
    return (
      <a className={styles.primary} href={to} {...newTabProps}>
        {children}
      </a>
    );
  }
  return (
    <NextLink
      locale={locale}
      href={to}
      className={styles.primary}
      {...newTabProps}
      {...props}
    >
      {children}
    </NextLink>
  );
};

export default Link;
