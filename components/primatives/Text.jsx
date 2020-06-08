/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import { Styled } from 'theme-ui';
import { string } from 'prop-types';

const Text = ({ children }) => (
  <Styled.p>{children}</Styled.p>
);

Text.propTypes = {
  children: string.isRequired,
};


export default Text;
