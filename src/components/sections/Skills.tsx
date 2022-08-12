import { useTranslations } from "next-intl";

import Link from "../Link";

const Skills = () => {
  const t = useTranslations("sections.Skills");
  return (
    <>
      <h2>{t.rich("header")}</h2>
      <ul>
        <li>
          {t.rich("languages_spoken", {
            En: (children) => (
              <Link to="/" locale="en">
                {children}
              </Link>
            ),
            Fr: (children) => (
              <Link to="/" locale="fr">
                {children}
              </Link>
            ),
            Ar: (children) => (
              <Link to="/" locale="ar">
                {children}
              </Link>
            ),
          })}
        </li>
        <li>{t.rich("languages_tech")}</li>
        <li>{t.rich("tools")}</li>
        <li>
          <strong>{t.rich("certifications.header")}</strong>
          <ul>
            <li>{t.rich("certifications.content.0")}</li>
            <li>{t.rich("certifications.content.1")}</li>
            <li>{t.rich("certifications.content.2")}</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Skills;
