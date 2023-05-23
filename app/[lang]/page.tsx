import { getDictionary } from "@/lib/i18n/dictionaries";

export default async function Home({ params }: { params: { lang: string } }) {
  const translations = await getDictionary(params.lang);

  return (
    <main>
      <pre>
        <code>{JSON.stringify(translations, null, 2)}</code>
      </pre>
    </main>
  );
}
