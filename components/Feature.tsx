import React, { FC, ReactNode } from 'react';
import { Card, Heading } from 'theme-ui';

type FeatureType = {
  heading: string,
  children: ReactNode,
}

const Feature:FC<FeatureType> = ({ heading, children }: FeatureType) => (
  <Card variant="interactive">
    <Heading as="h2">{heading}</Heading>
    {children}
  </Card>
);

export default Feature;
