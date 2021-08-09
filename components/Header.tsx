import React, { FC } from "react";
import { Box, Image, Heading, Container } from "theme-ui";
import useLocalization from "../src/hooks/useLocalization";
import Hero from "./Hero";

const Header: FC = () => {
  const [t] = useLocalization();

  return (
    <Hero isDiagonal>
      <Container
        variant="copy"
        m="0 auto"
        py={4}
        sx={{
          display: "flex",
          height: "100%",
          flexDirection: ["column", "row"],
          alignItems: "center",
          justifyContent: "space-around",
        }}
      >
        <Image
          src="/images/dalton-craven.jpg"
          alt={t("pfp")}
          width={150}
          sx={{ borderRadius: "50%" }}
        />
        <Box
          ml={[0, 20]}
          p={1}
          sx={{
            marginLeft: [0, 2],
            marginTop: [2, 0],
            textAlign: ["center", "right"],
            color: "white",
          }}
        >
          <Heading as="h1" variant="title">
            {t("name")}
          </Heading>
          <Heading
            as="h3"
            variant="subtitle"
            sx={{ textTransform: "lowercase" }}
          >
            {t("tagline")}
          </Heading>
        </Box>
      </Container>
    </Hero>
  );
};

export default Header;
