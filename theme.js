import base from '@hackclub/theme';

const theme = base;

theme.direction = '45deg';
theme.gradient = `linear-gradient(${theme.direction}, ${theme.colors.accent} -30%, ${theme.colors.primary} 110%)`;

theme.colors = {
  ...base.colors,
  primary: '#16837C', // 74ebe4
  accent: '#a8dcd9',
  // accent: colors.blue,
  // modes: {
  //   dark: {
  //     accent: colors.cyan,
  //   },
  // },
};

theme.layout.container.maxWidth = ['copyUltra', null, 'layout', null, 'layoutPlus'];
theme.layout.copy.maxWidth = ['copyPlus', null, null, null, 'copyUltra'];

theme.fonts.heading = 'Poppins, "sans-serif"';
theme.fonts.body = 'Poppins, "sans-serif"';
theme.links = {
  nav: {
    color: 'muted',
    transition: 'color .125s ease-in-out',
  },
};

theme.text.gradient = {
  backgroundImage: theme.gradient,
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
};

export default theme;
