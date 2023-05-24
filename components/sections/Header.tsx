import { useTranslations } from "next-intl";
import Link from "next-intl/link";

function Header() {
  const t = useTranslations("header");

  return (
    <header>
      <h1>{t("intro.title")}</h1>
      <p>{t("intro.subtitle")}</p>
      <nav>
        <p>{t("nav.intro")}</p>
        <ul>
          <li>
            <Link href="/" locale="en">
              {t("nav.options.en")}
            </Link>
          </li>
          <li>
            <Link href="/" locale="fr">
              {t("nav.options.fr")}
            </Link>
          </li>
          <li>
            <Link href="/" locale="ar">
              {t.rich("nav.options.ar")}
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
