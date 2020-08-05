import React, { FC, ReactNode } from 'react';
import NextLink from 'next/link';
import { Link as StyledLink } from 'theme-ui';

type LinkType = {
  to: string,
  isExternal?: boolean,
  children: ReactNode
}

const Link: FC<LinkType> = ({ to, isExternal, children }: LinkType) => {
  const externalCheck = /^https?:\/\//;
  if (externalCheck.test(to) || isExternal) {
    return <StyledLink href={to}>{children}</StyledLink>;
  }
  return <NextLink passHref href={to}><StyledLink>{children}</StyledLink></NextLink>;
};

export default Link;
