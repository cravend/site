import { useTranslations } from "next-intl";

import styles from "../../styles/modules/sections/Intro.module.scss";
import LanguageToggle from "../LanguageToggle";

const Intro = () => {
  const t = useTranslations("sections.Intro");

  return (
    <>
      <LanguageToggle />
      <p>
        <span className={styles.greeting}>
          {t.rich("greeting", {
            Color: (children) => (
              <span className={styles.gradient}>{children}</span>
            ),
          })}
        </span>
        {t.rich("intro")}
      </p>
    </>
  );
};

export default Intro;
