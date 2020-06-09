/** @jsx jsx */
import {
  jsx, Box, Image, Heading, Container,
} from 'theme-ui';
import Hero from './Hero';

const Header = () => (
  <Hero>
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
        src="https://daltoncraven.me/static/02a52574366648a352d992448c6b620b/8be41/dalton-craven.jpg"
        alt="pfp"
        sx={{
          borderRadius: '50%',
          width: 150,
        }}
      />
      <Box ml={[0, 20]} p={0} sx={{ marginLeft: [0, 2], marginTop: [2, 0], textAlign: ['center', 'right'], color: 'white' }}>
        <Heading as="h1" variant="title">Dalton Craven</Heading>
        <Heading as="h2" variant="subtitle" sx={{ textTransform: 'lowercase' }}>Student &amp; Developer</Heading>
      </Box>
    </Container>
  </Hero>
);


export default Header;
