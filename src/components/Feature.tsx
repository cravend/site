import styles from "../styles/Feature.module.scss";
import type { FC, ReactNode } from "react";

type FeatureType = {
  heading: string;
  children: ReactNode;
};

const Feature: FC<FeatureType> = ({ heading, children }: FeatureType) => (
  <div className={styles.card}>
    <h2 className={styles.heading}>{heading}</h2>
    {children}
  </div>
);

export default Feature;
