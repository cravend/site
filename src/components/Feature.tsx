import styles from "../styles/modules/Feature.module.scss";
import type { ReactNode } from "react";

export type FeatureProps = {
  heading: string;
  children: ReactNode;
};

const Feature = ({ heading, children }: FeatureProps) => (
  <div className={styles.card}>
    <h2 className={styles.heading}>{heading}</h2>
    {children}
  </div>
);

export default Feature;
