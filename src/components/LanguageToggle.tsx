import { useTranslations } from "next-intl";

import { useLocale } from "../i18n/hooks";
import styles from "../styles/modules/LanguageToggle.module.scss";

import Link from "./Link";

const LanguageToggle = () => {
  const [, otherLocales] = useLocale();
  const t = useTranslations("LanguageToggle");

  return (
    <div dir="ltr" className={styles.container}>
      {t.rich("header")}
      <ul>
        {otherLocales.map((locale) => (
          <li key={locale}>
            <Link to="/" locale={locale}>
              {t.rich(`options.${locale}`)}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LanguageToggle;
