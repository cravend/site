import React from 'react';
import NextHead from 'next/head';
import { string } from 'prop-types';

const Head = ({ title }) => (
  <NextHead>
    <title>{title} | Dalton Craven</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);

Head.propTypes = {
  title: string.isRequired,
};

export default Head;
