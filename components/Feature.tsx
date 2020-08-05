import React, { FC, ReactChild } from 'react';
import { Card, Heading, Text } from 'theme-ui';

type FeatureType = {
  heading: string,
  body: ReactChild,
}

const Feature:FC<FeatureType> = ({ heading, body }: FeatureType) => (
  <Card variant="interactive">
    <Heading as="h2" mb={[1, 2]}>{heading}</Heading>
    <Text>{body}</Text>
  </Card>
);

export default Feature;
