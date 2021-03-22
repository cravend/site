import { Strings } from './types';

const common = {
  name: 'Dalton Craven',
};

const en = {
  ...common,
  tagline: 'Student & developer',
  pfp: 'Profile picture',
};

const fr = {
  ...common,
  tagline: 'Étudiant & développeur',
  pfp: 'Image de profil',
};

export default {
  en,
  fr,
} as Strings;
