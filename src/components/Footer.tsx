import { Container, Box, Paragraph, Grid } from "theme-ui";
import useLocalization from "../hooks/useLocalization";
import Link from "./Link";
import type { FC } from "react";

const Footer: FC = () => {
  const [t] = useLocalization();
  const year = new Date().getFullYear();

  return (
    <Box
      as="footer"
      m={0}
      p={0}
      color="white"
      backgroundColor="dark"
      sx={{
        height: 100,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container>
        <Grid gap={2} columns={"repeat(auto-fit, 200px)"}>
          <Paragraph>{`© ${year} ${t("name")} `}</Paragraph>
          <Paragraph>
            {t("view_source")}{" "}
            <Link to="https://github.com/cravend/site">{t("github")}</Link>
          </Paragraph>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
