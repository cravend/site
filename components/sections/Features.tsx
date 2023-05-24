import { useTranslations } from "next-intl";
import Link from "next-intl/link";

function Feature({
  header,
  children,
}: {
  header: string;
  children: React.ReactNode;
}) {
  return (
    // TODO: should this be <article>?
    <section>
      <h3>{header}</h3>
      {children}
    </section>
  );
}

function Features() {
  const t = useTranslations("Features");
  return (
    // TODO: figure out grid
    <section>
      <h2 className="sr-only">{t("header")}</h2>
      <Feature header={t("education.header")}>
        <p>
          {t.rich("education.content", {
            Link: (children) => (
              <a href="https://sc.edu/about/offices_and_divisions/undergraduate_admissions/honors_and_scholars_programs/top_scholars/index.php">
                {children}
              </a>
            ),
          })}
        </p>
      </Feature>
      <Feature header={t("study_abroad.header")}>
        <p>{t("study_abroad.content")}</p>
      </Feature>
      <Feature header={t("work.header")}>
        <p>
          {t.rich("work.content.intro", {
            Link: (children) => <a href="https://qantev.com">{children}</a>,
          })}
        </p>
        <p>{t("work.content.conclusion")}</p>
      </Feature>
      <Feature header={t("freelance.header")}>
        <p>{t("freelance.content.intro")}</p>
        <p>
          {t.rich("freelance.content.conclusion", {
            Resume: (children) => (
              <Link href="/resume.pdf" locale="en">
                {children}
              </Link>
            ),
            Contact: (children) => (
              <Link href="#contact" locale="en">
                {children}
              </Link>
            ),
          })}
        </p>
      </Feature>
    </section>
  );
}

export default Features;
