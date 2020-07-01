/** @jsx jsx */
import { jsx, Container } from 'theme-ui';
import { node } from 'prop-types';

const Hero = ({ children }) => (
  <Container
    variant="wide"
    as="header"
    m={0}
    p={0}
    mb={4}
    sx={{
      backgroundColor: 'primary',
      background: theme => `${theme.background.gradient}`,
      height: 250,
      paddingBottom: [0, 37.5],
      clipPath: ['normal', 'polygon(0 0, 100% 0%, 100% 85%, 0% 100%)'],
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {children}
  </Container>

);

Hero.propTypes = {
  children: node.isRequired,
};

export default Hero;
