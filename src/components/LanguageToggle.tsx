import useLocalization from "../i18n/useLocalization";
import styles from "../styles/modules/LanguageToggle.module.scss";
import Link from "./Link";

const LanguageToggle = () => {
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
