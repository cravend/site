import { Box } from "theme-ui";
import React, { FC } from "react";
import useLocalization from "../src/hooks/useLocalization";
import Link from "./Link";

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
        {t("toggleLocale")}
      </Link>
    </Box>
  );
};

LanguageToggle.defaultProps = {
  color: undefined,
};

export default LanguageToggle;
