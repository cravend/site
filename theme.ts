import base from '@hackclub/theme';

export type ThemeType = {
  direction: string,
  links: {
    nav: Record<string, string>
  },
  layout: {
    container: {
      maxWidth: string[],
    },
    copy: {
      maxWidth: string[],
    },
  },
  background: Record<string, string>,
  text: {
    gradient: Record<string, string>,
    rainbow: Record<string, string>,
    outline: Record<string, string>,
  },
};

const theme = base as (ThemeType & typeof base);

theme.direction = '45deg';

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

const getRainbow = () => {
  const {
    red, orange, yellow, green, blue, black,
  } = theme.colors;
  const colors = ['purple', blue, green, yellow, orange, red, 'saddlebrown', black].map((color) => `${color} `);
  return `linear-gradient(${theme.direction}, ${colors.toString()})`;
};

const getCornerRainbow = () => {
  const stripeWidth = 4;
  const {
    red, orange, yellow, green, blue, white, black,
  } = theme.colors;
  const colors = [white, white, 'purple', blue, green, yellow, orange, red, 'saddlebrown', black, white].map((color, index) => {
    const startPos = index * stripeWidth;
    const endPos = (index + 1) * stripeWidth;
    return ` ${color} ${startPos}px, ${color} ${endPos}px`;
  });
  return `linear-gradient(${theme.direction}, ${colors.toString()})`;
};

theme.background = {
  rainbow: getRainbow(),
  cornerRainbow: getCornerRainbow(),
  gradient: `linear-gradient(${theme.direction}, ${theme.colors.accent} -30%, ${theme.colors.primary} 110%)`,
};

theme.text = {
  ...base.text,
  gradient: {
    backgroundImage: theme.background.gradient,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  rainbow: {
    backgroundImage: theme.background.rainbow,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  },
  outline: {
    WebkitTextStroke: 'currentColor',
    WebkitTextStrokeWidth: '2px',
    WebkitTextFillColor: 'white',
  },
};

export default theme;
