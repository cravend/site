import Image from "next/image";
import useLocalization from "../hooks/useLocalization";
import styles from "../styles/Header.module.scss";
import Hero from "./Hero";
import type { FC } from "react";

const Header: FC = () => {
  const [t] = useLocalization();

  return (
    <Hero isDiagonal>
      <div className={styles.container}>
        <Image
          width={150}
          height={150}
          className={styles.pfp}
          src="/images/dalton-craven.jpg"
          alt={t("pfp")}
        />
        <div className={styles.text_container}>
          <h1 className={styles.title}>{t("name")}</h1>
          <h3 className={styles.subtitle}>{t("tagline")}</h3>
        </div>
      </div>
    </Hero>
  );
};

export default Header;
