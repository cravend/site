import { useTranslations } from "next-intl";

import Link from "../Link";

const Contact = () => {
  const t = useTranslations("sections.Contact");
  return (
    <>
      <h2 id="contact">{t.rich("header")}</h2>
      <ul>
        <li>
          {t.rich("content.phone", {
            Link: (text) => (
              <Link isExternal to="tel:+15138136421">
                {text}
              </Link>
            ),
          })}
        </li>
        <li>
          {t.rich("content.email", {
            Link: (text) => (
              <Link isExternal to="mailto:daltoncraven@proton.me">
                {text}
              </Link>
            ),
          })}
        </li>
        <li>
          {t.rich("content.github", {
            Link: (text) => (
              <Link isExternal to="https://github.com/cravend">
                {text}
              </Link>
            ),
          })}
        </li>
        <li>
          {t.rich("content.gitlab", {
            Link: (text) => (
              <Link isExternal to="https://gitlab.com/cravend">
                {text}
              </Link>
            ),
          })}
        </li>
        <li>
          {t.rich("content.linkedin", {
            Link: (text) => (
              <Link isExternal to="https://www.linkedin.com/in/daltoncraven/">
                {text}
              </Link>
            ),
          })}
        </li>
        <li>
          {t.rich("content.gpg", {
            Link: (text) => (
              <Link isExternal to="https://github.com/cravend.gpg">
                {text}
              </Link>
            ),
          })}
        </li>
      </ul>
    </>
  );
};

export default Contact;
