import { useTranslations } from "next-intl";

import styles from "../../styles/modules/sections/Footer.module.scss";
import Link from "../Link";

const Footer = () => {
  const t = useTranslations("sections.Footer");

  return (
    <footer className={styles.background}>
      <div className={styles.container}>
        <p>
          {t.rich("text", {
            date: new Date(),
            Link: (text) => (
              <Link to="https://github.com/cravend/site">{text}</Link>
            ),
          })}
        </p>
      </div>
    </footer>
  );
};

export default Footer;
