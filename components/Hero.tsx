import React, { ReactChild, FC } from 'react';
import { Box, get, ThemeUICSSObject } from 'theme-ui';

type HeroType = {
  isDiagonal?: boolean
  children: ReactChild
}

const Hero: FC<HeroType> = ({ isDiagonal, children }: HeroType) => {
  const styles: ThemeUICSSObject = isDiagonal
    ? {
      backgroundColor: 'primary',
      background: (theme) => get(theme, 'background.gradient') as string,
      height: 250,
      paddingBottom: [0, 37.5],
      clipPath: ['normal', 'polygon(0 0, 100% 0%, 100% 85%, 0% 100%)'],
      display: 'flex',
      alignItems: 'center',
    }
    : {
      backgroundColor: 'primary',
      background: (theme) => get(theme, 'background.gradient') as string,
      height: 150,
      display: 'flex',
      alignItems: 'center',
    };

  return (
    <Box as="header" m={0} p={0} mb={[0, 4]} sx={styles}>{children}</Box>
  );
};

Hero.defaultProps = {
  isDiagonal: false,
};

export default Hero;
