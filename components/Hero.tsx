import React, { ReactChild, FC } from 'react';
import { Box, Container } from 'theme-ui';
import { ThemeType } from '@cravend/theme';

type HeroType = {
  isDiagonal?: boolean
  children: ReactChild
}

const Hero: FC<HeroType> = ({ isDiagonal, children }: HeroType) => {
  const styles = isDiagonal
    ? {
      backgroundColor: 'primary',
      background: (theme: ThemeType) => theme.background.gradient,
      height: 250,
      paddingBottom: [0, 37.5],
      clipPath: ['normal', 'polygon(0 0, 100% 0%, 100% 85%, 0% 100%)'],
      display: 'flex',
      alignItems: 'center',
    }
    : {
      backgroundColor: 'primary',
      background: (theme: ThemeType) => theme.background.gradient,
      height: 150,
      display: 'flex',
      alignItems: 'center',
    };

  return (
    <Box as="header" m={0} p={0} mb={4} sx={styles}>
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
        {children}
      </Container>
    </Box>
  );
};

Hero.defaultProps = {
  isDiagonal: false,
};

export default Hero;
