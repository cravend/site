import { Strings } from './types';

const common = {
  name: 'Dalton Craven',
  github: 'GitHub',
};

const en = {
  ...common,
  tagline: 'Student & Developer',
  pfp: 'Profile picture',
  viewSource: 'View source on',
};

const fr = {
  ...common,
  tagline: 'Étudiant & Développeur',
  pfp: 'Image de profil',
  viewSource: 'Voir le code source sur',
};

export default {
  en,
  fr,
} as Strings;
