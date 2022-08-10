import { useTranslations } from "next-intl";
import Head from "next/head";

import Contact from "../components/sections/Contact";
import Features from "../components/sections/Features";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import Intro from "../components/sections/Intro";
import Skills from "../components/sections/Skills";
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
        <Intro />
        <Features />
        <Skills />
        <Contact />
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
