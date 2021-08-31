import styles from "../styles/modules/Hero.module.scss";
import type { ReactNode } from "react";

export type HeroProps = {
  isDiagonal?: boolean;
  children: ReactNode;
};

const Hero = ({ isDiagonal = false, children }: HeroProps) => (
  <header className={isDiagonal ? styles.diagonal : styles.normal}>
    {children}
  </header>
);
export default Hero;
