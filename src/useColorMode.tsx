import React, { useEffect, ComponentType, FC } from 'react';
import { useColorMode } from 'theme-ui';

const useAutomaticColorMode = (): string => {
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    const switchMode = (e: MediaQueryListEvent): void => setColorMode(e.matches ? 'dark' : 'light');
    const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    darkModeMediaQuery.addEventListener('change', switchMode);
    return () => darkModeMediaQuery.removeEventListener('change', switchMode);
  }, [setColorMode]);

  return colorMode;
};

export const withAutomaticColorMode = (Component: ComponentType): FC => (props) => {
  useAutomaticColorMode();

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...props} />;
};

export default useAutomaticColorMode;
