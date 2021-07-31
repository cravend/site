import React, { useEffect, ComponentType, FC } from "react";

import { useColorMode } from "theme-ui";

const useAutomaticColorMode = (): string => {
  const [colorMode, setColorMode] = useColorMode();

  useEffect(() => {
    const switchMode = (e: MediaQueryListEvent): void =>
      setColorMode(e.matches ? "dark" : "light");
    const darkModeMediaQuery = window.matchMedia(
      "(prefers-color-scheme: dark)"
    );
    try {
      darkModeMediaQuery.addEventListener("change", switchMode);
    } catch {
      darkModeMediaQuery.addListener(switchMode); // Safari <14 support
    }
    return () => darkModeMediaQuery.removeEventListener("change", switchMode);
  }, [setColorMode]);

  return colorMode;
};

export const withAutomaticColorMode =
  (Component: ComponentType): FC =>
  // eslint-disable-next-line react/display-name
  (props) => {
    useAutomaticColorMode();

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Component {...props} />;
  };

export default useAutomaticColorMode;
