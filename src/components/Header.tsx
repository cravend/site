import Image from "next/image";

import profilePic from "../assets/images/dalton-craven.webp";
import useLocalization from "../i18n/useLocalization";
import styles from "../styles/modules/Header.module.scss";

import Hero from "./Hero";

const Header = () => {
  const [t] = useLocalization();

  return (
    <Hero isDiagonal>
      <div className={styles.container}>
        <div className={styles.profile}>
          <Image
            className={styles.pfp}
            src={profilePic}
            alt={t("pfp")}
            width={150}
            height={150}
          />
        </div>
        <div className={styles.text_container}>
          <h1 className={styles.title}>{t("name")}</h1>
          <p className={styles.subtitle}>
            <b>{t("tagline")}</b>
          </p>
        </div>
      </div>
    </Hero>
  );
};

export default Header;
