/** @jsx jsx */
import { FC } from 'react';
import {
  jsx, Box, Image, Heading, Container,
} from 'theme-ui';
import Hero from './Hero';

const Header: FC = () => (
  <Hero isDiagonal>
    <Container
      variant="copy"
      m="0 auto"
      p={3}
      sx={{
        display: 'flex',
        height: '100%',
        flexDirection: ['column', 'row'],
        alignItems: 'center',
        justifyContent: 'space-around',
      }}
    >
      <Image
        src="/images/dalton-craven.jpg"
        alt="pfp"
        width={150}
        sx={{ borderRadius: '50%' }}
      />
      <Box
        ml={[0, 20]}
        p={0}
        sx={{
          marginLeft: [0, 2],
          marginTop: [2, 0],
          textAlign: ['center', 'right'],
          color: 'white',
        }}
      >
        <Heading as="h1" variant="title">Dalton Craven</Heading>
        <Heading as="h3" variant="subtitle" sx={{ textTransform: 'lowercase' }}>Student &amp; Developer</Heading>
      </Box>
    </Container>
  </Hero>
);

export default Header;
