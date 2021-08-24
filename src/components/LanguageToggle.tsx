import useLocalization from "../hooks/useLocalization";
import styles from "../styles/LanguageToggle.module.scss";
import Link from "./Link";
import type { FC } from "react";

const LanguageToggle: FC = () => {
  const [t, , otherLocale] = useLocalization();

  return (
    <div className={styles.container}>
      <Link to="/" locale={otherLocale}>
        {t("toggle_locale")}
      </Link>
    </div>
  );
};

export default LanguageToggle;
