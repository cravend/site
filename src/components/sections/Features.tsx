import { useTranslations } from "next-intl";

import { useLocale } from "../../i18n/hooks";
import styles from "../../styles/modules/sections/Features.module.scss";
import Feature from "../Feature";
import Link from "../Link";

const RESUME_MAPPING = {
  en: "/resumes/Dalton Craven Résumé (en).pdf",
  fr: "/resumes/Dalton Craven Résumé (en).pdf",
  ar: "/resumes/Dalton Craven Résumé (en).pdf",
} as const;

const Features = () => {
  const t = useTranslations("sections.Features");
  const [locale] = useLocale();

  return (
    <div className={styles.grid}>
      <Feature heading={t.rich("education.header")}>
        <p>
          {t.rich("education.content", {
            Link: (children) => (
              <Link to="https://sc.edu/about/offices_and_divisions/undergraduate_admissions/honors_and_scholars_programs/top_scholars/index.php">
                {children}
              </Link>
            ),
          })}
        </p>
      </Feature>
      <Feature heading={t.rich("study_abroad.header")}>
        <p>{t.rich("study_abroad.content")}</p>
      </Feature>
      <Feature heading={t.rich("work.header")}>
        <p>
          {t.rich("work.content.intro", {
            Link: (text) => <Link to="https://qantev.com">{text}</Link>,
          })}
        </p>
        <p>{t.rich("work.content.update")}</p>
      </Feature>
      <Feature heading={t.rich("freelance.header")}>
        <p>{t.rich("freelance.content.intro")}</p>
        <ul>
          <li>
            <Link to="https://crystalclearcontractors.com">
              Crystal Clear Contracting
            </Link>
          </li>
          <li>
            <Link to="https://crystalclearconcrete.com">
              Crystal Clear Concrete
            </Link>
          </li>
          <li>
            <Link to="https://cleancrystalclear.com">Clean Crystal Clear</Link>
          </li>
          <li>
            <Link to="https://elitepaintcincy.com">Elite Painting</Link>
          </li>
          <li>
            <Link to="https://elitecontractingcincy.com">
              Elite Contracting
            </Link>
          </li>
        </ul>
        <p>
          {t.rich("freelance.content.conclusion", {
            Resume: (text) => (
              <Link locale={false} to={RESUME_MAPPING[locale]} openInNewTab>
                {text}
              </Link>
            ),
            Contact: (text) => <Link to="#contact">{text}</Link>,
          })}
        </p>
      </Feature>
    </div>
  );
};

export default Features;
