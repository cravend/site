import React from 'react';
import NextLink from 'next/link';
import { Link as StyledLink } from 'theme-ui';
import { string, node } from 'prop-types';

const Link = ({ to, children, ...props }) => {
  const externalCheck = /^https?:\/\//;
  if (externalCheck.test(to)) {
    return <StyledLink href={to} {...props}>{children}</StyledLink>;
  }
  return <NextLink passHref href={to} {...props}><StyledLink>{children}</StyledLink></NextLink>;
};

Link.propTypes = {
  to: string.isRequired,
  children: node.isRequired,
};

export default Link;
