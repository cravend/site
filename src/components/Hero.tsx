import styles from "../styles/modules/Hero.module.scss";
import type { ReactChild, FC } from "react";

type HeroType = {
  isDiagonal?: boolean;
  children: ReactChild;
};

const Hero: FC<HeroType> = ({ isDiagonal = false, children }: HeroType) => (
  <header className={isDiagonal ? styles.diagonal : styles.normal}>
    {children}
  </header>
);
export default Hero;
