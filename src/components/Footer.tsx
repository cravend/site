import useLocalization from "../i18n/useLocalization";
import styles from "../styles/modules/Footer.module.scss";
import Link from "./Link";

const Footer = () => {
  const [t] = useLocalization();
  const year = new Date().getFullYear();

  return (
    <footer className={styles.background}>
      <div className={styles.container}>
        <p>
          {`© ${year} ${t("name")} | ${t("view_source")} `}
          <Link to="https://github.com/cravend/site">{t("github")}</Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
