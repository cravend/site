import React from 'react';
import { Text as ThemedText } from 'theme-ui';
import { node } from 'prop-types';

const Text = ({ children, ...otherProps }) => (
  <ThemedText as="p" my={1} {...otherProps}>{children}</ThemedText>
);

Text.propTypes = {
  children: node.isRequired,
};

export default Text;
