import React, { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import { Link as StyledLink } from 'theme-ui';
import { Locale } from '../src/translations/types';

type LinkType = {
  to: string,
  isExternal?: boolean,
  locale?: Locale,
  color?: string,
  children: ReactNode
}

const Link: FC<LinkType> = ({
  to, isExternal, locale, color, children,
}: LinkType) => {
  const externalCheck = /^https?:\/\//;
  if (isExternal || externalCheck.test(to)) {
    return <StyledLink color={color} href={to}>{children}</StyledLink>;
  }
  return (
    <NextLink
      passHref
      locale={locale}
      href={to}
    ><StyledLink color={color}>{children}</StyledLink>
    </NextLink>
  );
};

Link.defaultProps = {
  isExternal: false,
  locale: undefined,
  color: undefined,
};

export default Link;
