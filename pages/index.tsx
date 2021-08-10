import React, { FC } from "react";
import { Container, Grid, Text, Heading, Box } from "theme-ui";
import Head from "../components/Head";
import Header from "../components/Header";
import Link from "../components/Link";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import useLocalization from "../src/hooks/useLocalization";
import LanguageToggle from "../components/LanguageToggle";

const IndexPage: FC = () => {
  const [t] = useLocalization();

  return (
    <Grid variant="layout">
      <Head title={t("homepage")} />
      <Header />
      <Container as="main">
        <LanguageToggle />
        <Text as="p">
          <Text as="span" variant="headline" sx={{ display: "block" }}>
            {t("greeting")}{" "}
            <Text as="span" variant="gradient">
              {t("name")}
            </Text>
            .{" "}
          </Text>
          {t("intro")}
          {t("colon")}
        </Text>
        <Grid gap={3} columns={[1, 2]} my={3}>
          <Feature heading={t("education_header")}>
            <Text as="p">{t("education")}</Text>
          </Feature>
          <Feature heading={t("sa_header")}>
            <Text as="p">{t("study_abroad")}</Text>
          </Feature>
          <Feature heading={t("work_header")}>
            <Text as="p">
              {t("work_1")}{" "}
              <Link to="https://cloverleaf.me">{t("cloverleaf")}</Link>.{" "}
              {t("work_2")}
            </Text>
          </Feature>
          <Feature heading={t("freelance_header")}>
            <Text as="p">{t("freelance")}</Text>
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
        </Grid>
        <Box>
          <Heading as="h2">{t("skills")}</Heading>
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
                  Expert, MOS Excel 2016 Expert, MOS PowerPoint 2016, MOS
                  Outlook 2016, MOS Access 2016 — <em>{t("cert_fall_2018")}</em>
                </li>
              </ul>
            </li>
          </ul>
        </Box>
        <Box>
          <Heading as="h2">{t("contact")}</Heading>
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
          </ul>
        </Box>
      </Container>
      <Footer />
    </Grid>
  );
};

export default IndexPage;
