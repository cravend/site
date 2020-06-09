import React from 'react';
import { Text as ThemedText } from 'theme-ui';
import { string } from 'prop-types';

const Text = ({ children, ...otherProps }) => (
  <ThemedText as="p" {...otherProps}>{children}</ThemedText>
);

Text.propTypes = {
  children: string.isRequired,
};

export default Text;
