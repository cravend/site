import Header from "@/components/sections/Header";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("main");

  /* TODO: remove */
  const lang = useTranslations();
  return (
    <>
      <Header />
      {/* TODO: remove */}
      {lang("lang")}
      <hr />
      <main>
        <p>
          <span>{t("welcome")}</span> {t("content")}
        </p>
      </main>
    </>
  );
}
