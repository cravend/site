import React from 'react';
import { Styled } from 'theme-ui';
import { string } from 'prop-types';

const getHeading = (level) => {
  switch (level) {
  case 'h1':
    return Styled.h1;
  case 'h2':
    return Styled.h2;
  case 'h3':
    return Styled.h3;
  case 'h4':
    return Styled.h4;
  case 'h5':
    return Styled.h5;
  case 'h6':
    return Styled.h6;
  default:
    return null; // for spice + so i realize something is wrong
  }
};

const getSize = (size) => {
  switch (size) {
  case 'h1':
    return 5;
  case 'h2':
    return 4;
  case 'h3':
    return 3;
  case 'h4':
    return 2;
  case 'h5':
    return 1;
  case 'h6':
    return 0;
  default:
    return undefined;
  }
};

const Heading = ({ as, size, children }) => {
  const H = getHeading(as);
  if (!H) {
    return <code>header level not supplied</code>;
  }
  return <H sx={{ fontSize: getSize(size) }}>{children}</H>;
};

Heading.propTypes = {
  as: string.isRequired,
  size: string,
  children: string.isRequired,
};

Heading.defaultProps = {
  size: undefined,
};

export default Heading;
