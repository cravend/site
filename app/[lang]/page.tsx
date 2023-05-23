import { getDictionary } from "@/lib/i18n/dictionaries";
import Link from "next/link";

export default async function Home({ params }: { params: { lang: string } }) {
  const translations = await getDictionary(params.lang);

  return (
    <>
      <header>
        <h1>{translations.header.intro.title}</h1>
        <p>{translations.header.intro.subtitle}</p>
        <nav>
          <p>{translations.nav.intro}</p>
          <ul>
            <li>
              <Link href="/en">{translations.nav.options.en}</Link>
            </li>
            <li>
              <Link href="/fr">{translations.nav.options.fr}</Link>
            </li>
            <li>
              <Link href="/ar">{translations.nav.options.ar}</Link>
            </li>
          </ul>
        </nav>
      </header>
      <hr />
      <main>
        <p>
          <span>{translations.main.welcome}</span> {translations.main.content}
        </p>
      </main>
    </>
  );
}
