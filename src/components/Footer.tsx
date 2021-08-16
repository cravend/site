import { Container, Text, Flex, Box } from "theme-ui";
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
      sx={{
        backgroundColor: "dark",
        height: 100,
        width: "100%",
        display: "flex",
        alignItems: "center",
        color: "white",
      }}
    >
      <Container color="white">
        <Flex>
          <Text mr={3}>
            &copy; {year} {t("name")}
          </Text>
          <Text>
            {t("view_source")}{" "}
            <Link to="https://github.com/cravend/site">{t("github")}</Link>
          </Text>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
