import React, { FC, ReactElement } from 'react';
import { Card, Heading, Text } from 'theme-ui';

type FeatureType = {
  heading: string,
  body: string | ReactElement,
}

const Feature:FC<FeatureType> = ({ heading, body }: FeatureType) => (
  <Card variant="interactive">
    <Heading as="h3" mb={[1, 2]}>{heading}</Heading>
    <Text>{body}</Text>
  </Card>
);

export default Feature;
