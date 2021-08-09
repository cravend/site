import React, { FC } from "react";
import NextHead from "next/head";

type HeadType = {
  title: string;
};

const Head: FC<HeadType> = ({ title }: HeadType) => (
  <NextHead>
    <title>{title} | Dalton Craven</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
  </NextHead>
);

export default Head;
