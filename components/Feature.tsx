import React from "react";
import { Card, Heading } from "theme-ui";
import type { FC, ReactNode } from "react";

type FeatureType = {
  heading: string;
  children: ReactNode;
};

const Feature: FC<FeatureType> = ({ heading, children }: FeatureType) => (
  <Card variant="interactive">
    <Heading pb={1} as="h2">
      {heading}
    </Heading>
    {children}
  </Card>
);

export default Feature;
