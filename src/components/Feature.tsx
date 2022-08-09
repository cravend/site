import styles from "../styles/modules/Feature.module.scss";

export type FeatureProps = {
  heading: React.ReactNode;
  children: React.ReactNode;
};

const Feature = ({ heading, children }: FeatureProps) => (
  <div className={styles.card}>
    <h2 className={styles.heading}>{heading}</h2>
    {children}
  </div>
);

export default Feature;
