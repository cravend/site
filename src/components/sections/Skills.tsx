import { useTranslations } from "next-intl";

const Skills = () => {
  const t = useTranslations("sections.Skills");
  return (
    <>
      <h2>{t.rich("header")}</h2>
      <ul>
        <li>{t.rich("languages_spoken")}</li>
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
