import Head from "next/head";
import Header from "../components/Header";
import Link from "../components/Link";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import useLocalization from "../i18n/useLocalization";
import LanguageToggle from "../components/LanguageToggle";
import styles from "../styles/modules/IndexPage.module.scss";
import type { FC } from "react";

const IndexPage: FC = () => {
  const [t] = useLocalization();

  return (
    <>
      <Head>
        <title>
          {t("homepage")} | {t("name")}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <main className={styles.container}>
        <LanguageToggle />
        <p>
          <span className={styles.greeting}>
            {t("greeting")} <span className={styles.gradient}>{t("name")}</span>
            .{" "}
          </span>
          {t("intro")}
          {t("colon")}
        </p>
        <div className={styles.card_grid}>
          <Feature heading={t("education_header")}>
            <p>{t("education")}</p>
          </Feature>
          <Feature heading={t("sa_header")}>
            <p>{t("study_abroad")}</p>
          </Feature>
          <Feature heading={t("work_header")}>
            <p>
              {t("work_1")}{" "}
              <Link to="https://cloverleaf.me">{t("cloverleaf")}</Link>.{" "}
              {t("work_2")}
            </p>
          </Feature>
          <Feature heading={t("freelance_header")}>
            <p>{t("freelance")}</p>
            <ul>
              <li>
                <Link to="https://crystalclearcontractors.com">
                  Crystal Clear Cleaning &amp; Contracting
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
              <li>
                <Link to="https://mabbaseball.com">Mason Amateur Baseball</Link>
              </li>
            </ul>
          </Feature>
        </div>
        <h2>{t("skills")}</h2>
        <ul>
          <li>
            <strong>
              {t("spoken_languages_header")}
              {t("colon")}
            </strong>
            {t("spoken_languages")}
          </li>
          <li>
            <strong>
              {t("programming_languages_header")}
              {t("colon")}
            </strong>
            {t("programming_languages")}
          </li>
          <li>
            <strong>
              {t("tools_header")}
              {t("colon")}
            </strong>
            {t("tools")}
          </li>
          <li>
            <strong>
              {t("certifications")}
              {t("colon")}
            </strong>
            <ul>
              <li>
                The Fundamentals of Digital Marketing, Google —{" "}
                <em>{t("cert_april_2020")}</em>
              </li>
              <li>
                Microsoft Office Specialist (MOS) Master 2016, MOS Word 2016
                Expert, MOS Excel 2016 Expert, MOS PowerPoint 2016, MOS Outlook
                2016, MOS Access 2016 — <em>{t("cert_fall_2018")}</em>
              </li>
            </ul>
          </li>
        </ul>
        <h2>{t("contact")}</h2>
        <ul>
          <li>
            <strong>
              {t("american_phone")}
              {t("colon")}
            </strong>
            <Link isExternal to="tel:+15138136421">
              {t("american_phone_number")}
            </Link>
          </li>
          <li>
            <strong>
              {t("french_phone")}
              {t("colon")}
            </strong>
            <Link isExternal to="tel:+330749792094">
              {t("french_phone_number")}
            </Link>
          </li>
          <li>
            <strong>
              {t("email")}
              {t("colon")}
            </strong>
            <Link isExternal to="mailto:daltonjcraven@gmail.com">
              {t("email_address")}
            </Link>
          </li>
          <li>
            <strong>
              {t("github")}
              {t("colon")}
            </strong>
            <Link isExternal to="https://github.com/cravend">
              {t("github_username")}
            </Link>
          </li>
          <li>
            <strong>
              {t("gitlab")}
              {t("colon")}
            </strong>
            <Link isExternal to="https://gitlab.com/cravend">
              {t("gitlab_username")}
            </Link>
          </li>
          <li>
            <strong>
              {t("linkedin")}
              {t("colon")}
            </strong>
            <Link isExternal to="https://linkedin.com/in/daltonjcraven">
              {t("linkedin_username")}
            </Link>
          </li>
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default IndexPage;
