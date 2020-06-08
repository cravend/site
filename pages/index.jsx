/* eslint-disable react/jsx-pascal-case */
import React from 'react';
import Head from '../components/Head';
import { Heading } from '../components/primatives';

const IndexPage = () => (
  <div>
    <Head title="Home" />
    <Heading as="h1">hello world</Heading>
  </div>
);

export default IndexPage;
