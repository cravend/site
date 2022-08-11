import { useTranslations } from "next-intl";

import { useLocale } from "../i18n/hooks";
import styles from "../styles/modules/LanguageToggle.module.scss";

import Link from "./Link";

const LanguageToggle = () => {
  const [, otherLocale] = useLocale();
  const t = useTranslations("LanguageToggle");

  return (
    <div className={styles.container}>
      <Link to="/" locale={otherLocale}>
        {t.rich("toggle_locale")}
      </Link>
    </div>
  );
};

export default LanguageToggle;
