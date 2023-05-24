import createMiddleware from "next-intl/middleware";
import { locales } from "@/lib/i18n/constants";
export default createMiddleware({
  // A list of all locales that are supported
  locales: [...locales],

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: "en",
});

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
