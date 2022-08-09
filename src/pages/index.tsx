import { useTranslations } from "next-intl";
import Head from "next/head";

import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import LanguageToggle from "../components/LanguageToggle";
import Link from "../components/Link";
import styles from "../styles/modules/IndexPage.module.scss";

import type { GetStaticProps } from "next";

const IndexPage = () => {
  const t = useTranslations("pages.Index");

  return (
    <>
      <Head>
        <title>{t.rich("title")}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={styles.container}>
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
        <div className={styles.card_grid}>
          <Feature heading={t.rich("education.header")}>
            <p>{t.rich("education.content")}</p>
          </Feature>
          <Feature heading={t.rich("study_abroad.header")}>
            <p>{t.rich("study_abroad.content")}</p>
          </Feature>
          <Feature heading={t.rich("work.header")}>
            <p>
              {t.rich("work.content", {
                Link: (text) => <Link to="https://qantev.com">{text}</Link>,
              })}
            </p>
          </Feature>
          <Feature heading={t.rich("freelance.header")}>
            <p>{t.rich("freelance.content")}</p>
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
                <Link to="https://cleancrystalclear.com">
                  Clean Crystal Clear
                </Link>
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
          </Feature>
        </div>
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
        <h2>{t.rich("contact.header")}</h2>
        <ul>
          <li>
            {t.rich("contact.content.phone", {
              Link: (text) => (
                <Link isExternal to="tel:+15138136421">
                  {text}
                </Link>
              ),
            })}
          </li>
          <li>
            {t.rich("contact.content.email", {
              Link: (text) => (
                <Link isExternal to="mailto:daltoncraven@proton.me">
                  {text}
                </Link>
              ),
            })}
          </li>
          <li>
            {t.rich("contact.content.github", {
              Link: (text) => (
                <Link isExternal to="https://github.com/cravend">
                  {text}
                </Link>
              ),
            })}
          </li>
          <li>
            {t.rich("contact.content.gitlab", {
              Link: (text) => (
                <Link isExternal to="https://gitlab.com/cravend">
                  {text}
                </Link>
              ),
            })}
          </li>
          <li>
            {t.rich("contact.content.linkedin", {
              Link: (text) => (
                <Link isExternal to="https://www.linkedin.com/in/daltoncraven/">
                  {text}
                </Link>
              ),
            })}
          </li>
          <li>
            {t.rich("contact.content.gpg", {
              Link: (text) => (
                <Link isExternal to="https://github.com/cravend.gpg">
                  {text}
                </Link>
              ),
            })}
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
  props: {
    // You can get the messages from anywhere you like. The recommended
    // pattern is to put them in JSON files separated by language and read
    // the desired one based on the `locale` received from Next.js.
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion, @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-unsafe-member-access
    messages: (await import(`../i18n/translations/${locale!}.json`)).default,
  },
});
