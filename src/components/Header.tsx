import Image from "next/image";
import useLocalization from "../i18n/useLocalization";
import styles from "../styles/modules/Header.module.scss";
import profilePic from "../assets/images/dalton-craven.webp";
import Hero from "./Hero";
import type { FC } from "react";

const Header: FC = () => {
  const [t] = useLocalization();

  return (
    <Hero isDiagonal>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Image className={styles.pfp} src={profilePic} alt={t("pfp")} />
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.title}>{t("name")}</h1>
          <h3 className={styles.subtitle}>{t("tagline")}</h3>
        </div>
      </div>
    </Hero>
  );
};

export default Header;
