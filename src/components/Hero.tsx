import styles from "../styles/modules/Hero.module.scss";

export type HeroProps = {
  isDiagonal?: boolean;
  children: React.ReactNode;
};

const Hero = ({ isDiagonal = false, children }: HeroProps) => (
  <header className={isDiagonal ? styles.diagonal : styles.normal}>
    {children}
  </header>
);
export default Hero;
