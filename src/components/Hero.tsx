import { useRtl } from "../i18n/hooks";
import styles from "../styles/modules/Hero.module.scss";

export type HeroProps = {
  children: React.ReactNode;
  isDiagonal?: boolean;
};

const getClassNames = (isDiagonal: boolean, isRtl: boolean) => {
  const classNames = [];
  if (isDiagonal) {
    classNames.push(styles.diagonal);
  } else {
    classNames.push(styles.normal);
  }
  if (isRtl) {
    classNames.push(styles.rtl);
  }
  return classNames.length <= 1 ? classNames[0] : classNames.join(" ");
};

const Hero = ({ isDiagonal = false, children }: HeroProps) => (
  <header className={getClassNames(isDiagonal, useRtl())}>{children}</header>
);
export default Hero;
