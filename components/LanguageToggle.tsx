import React, { FC } from 'react';
import useLocalization from '../src/hooks/useLocalization';
import { languageNames } from '../src/translations/config';
import Link from './Link';

type LanguageToggleType = {
  color?: string,
}

const LanguageToggle: FC<LanguageToggleType> = ({ color }: LanguageToggleType) => {
  const [,, otherLocale] = useLocalization();

  return <Link to="/" locale={otherLocale} color={color}>{languageNames[otherLocale]}</Link>;
};

LanguageToggle.defaultProps = {
  color: undefined,
};

export default LanguageToggle;
