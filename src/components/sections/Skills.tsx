import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("pages.Index");
  return (
    <>
      <h2>{t.rich("skills.header")}</h2>
      <ul>
        <li>{t.rich("skills.languages_spoken")}</li>
        <li>{t.rich("skills.languages_tech")}</li>
        <li>{t.rich("skills.tools")}</li>
        <li>
          <strong>{t.rich("skills.certifications.header")}</strong>
          <ul>
            <li>{t.rich("skills.certifications.content.0")}</li>
            <li>{t.rich("skills.certifications.content.1")}</li>
            <li>{t.rich("skills.certifications.content.2")}</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Skills;
