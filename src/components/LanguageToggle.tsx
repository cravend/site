import { Box } from "theme-ui";
import useLocalization from "../hooks/useLocalization";
import Link from "./Link";
import type { FC } from "react";

const LanguageToggle: FC = () => {
  const [t, , otherLocale] = useLocalization();

  return (
    <Box
      p={[0, 3]}
      sx={{
        position: ["relative", "absolute"],
        top: 0,
        right: 0,
      }}
    >
      <Link to="/" locale={otherLocale} color={["primary", "white"]}>
        {t("toggle_locale")}
      </Link>
    </Box>
  );
};

export default LanguageToggle;
