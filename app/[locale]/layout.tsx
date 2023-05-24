import { Locale, dir } from "@/lib/i18n/constants";
// import "./globals.css";
import { Atkinson_Hyperlegible } from "next/font/google";

import { useLocale } from "next-intl";
import { notFound } from "next/navigation";

const atkinsonHyperlegible = Atkinson_Hyperlegible({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  fallback: ["Arial"],
});
export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const locale = useLocale() as Locale;

  // Show a 404 error if the user requests an unknown locale
  if (params.locale !== locale) {
    notFound();
  }

  return (
    <html lang={locale} dir={dir[locale]}>
      <body className={atkinsonHyperlegible.className}>{children}</body>
    </html>
  );
}

// One day...
// export function generateStaticParams() {
//   return [{ locale: "en" }, { locale: "fr" }, { locale: "ar" }];
// }
