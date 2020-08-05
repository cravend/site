/** @jsx jsx */
import { ReactChild, FC } from 'react';
import { jsx, Container } from 'theme-ui';
import { ThemeType } from '@cravend/theme';

type HeroType = {
  children: ReactChild,
}

const Hero: FC<HeroType> = ({ children }: HeroType) => (
  <Container
    variant="wide"
    as="header"
    m={0}
    p={0}
    mb={4}
    sx={{
      backgroundColor: 'primary',
      background: (theme: ThemeType) => theme.background.gradient,
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

export default Hero;
