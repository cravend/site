import React, { FC } from 'react';
import {
  Box,
  Button,
  Container,
  NavLink,
  Heading,
  Text,
  Card,
  Grid,
  Flex,
} from 'theme-ui';
import Head from 'next/head';
import { TypeScale, ColorPalette } from '@theme-ui/style-guide';
import theme from '@cravend/theme';
import Hero from '../components/Hero';

const ThemePage: FC = () => (
  <>
    <Head>
      <title>Hack Club Theme</title>
    </Head>
    <Hero>
      <Flex sx={{
        flexDirection: 'column', alignItems: 'center', justifyContent: 'center', margin: '0 auto',
      }}
      >
        <Heading as="h1" variant="title" sx={{ textAlign: 'center' }}>
          <Text
            as="span"
            variant="outline"
          >
            Dalton's
          </Text>{' '}
          <Text as="span">Theme</Text>
        </Heading>
        <Grid
          gap={4}
          columns="auto auto"
          sx={{
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: 2,
            mt: 3,
            mb: 4,
          }}
        >
          <Text>Heavily influenced by <NavLink href="https://github.com/hackclub/theme">Hack Club Theme</NavLink></Text>
        </Grid>
      </Flex>
    </Hero>
    <Box as="main" sx={{ bg: 'background', py: 4 }}>
      {Object.keys(theme.layout).map((key) => (
        <Container
          key={key}
          variant={key}
          sx={{
            my: 3, py: 3, bg: 'sunken', borderRadius: 'default',
          }}
        >
          {key}
        </Container>
      ))}
      <Container variant="container" sx={{ px: 3 }}>
        {Object.keys(theme.text).map((key) => {
          const Component = key.includes('head') ? Heading : Text;
          return (
            <Component key={key} variant={key} sx={{ mb: 3 }}>
              {key}
            </Component>
          );
        })}
        {Object.keys(theme.buttons).map((key) => (
          <Button
            key={key}
            variant={key}
            sx={{ mr: 3 }}
          >
            {key}
          </Button>
        ))}
        {Object.keys(theme.cards).map((key) => (
          <Card
            key={key}
            variant={key}
            sx={{ my: 3 }}
          >
            {key}
          </Card>
        ))}
        <TypeScale />
        <ColorPalette
          omit={['modes', 'placeholder', 'twitter', 'instagram', 'facebook']}
        />
        <Text as="pre" variant="styles.pre">
          {JSON.stringify(theme, null, 2)}
        </Text>
      </Container>
    </Box>
  </>
);

export default ThemePage;
