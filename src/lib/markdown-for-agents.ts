import { TRANSLATIONS } from "./i18n/translations";

const LINKS = {
  email: "mailto:daltoncraven@proton.me",
  linkedin: "https://www.linkedin.com/in/daltoncraven/",
  github: "https://github.com/cravend",
  resume: "resume.pdf",
} as const;

type Lang = keyof typeof TRANSLATIONS;

function t(
  lang: Lang,
  key: keyof (typeof TRANSLATIONS)[Lang],
): string | string[] {
  const value = TRANSLATIONS[lang][key];
  return value as string | string[];
}

export function buildMarkdown(lang: Lang): string {
  const lines: string[] = [];
  const heroTitle = t(lang, "hero.title") as string;
  const heroTagline = t(lang, "hero.tagline") as string;

  lines.push(`# Dalton Craven`);
  lines.push("");
  lines.push(`## ${heroTitle}`);
  lines.push("");
  lines.push(heroTagline);
  lines.push("");
  lines.push("---");
  lines.push("");

  lines.push(`## ${t(lang, "section.about.title")}`);
  lines.push("");
  lines.push(t(lang, "section.about.paragraph1") as string);
  lines.push("");
  lines.push(t(lang, "section.about.paragraph2") as string);
  lines.push("");
  lines.push(`### ${t(lang, "section.about.location.title")}`);
  lines.push("");
  lines.push("Paris, France");
  lines.push("");
  lines.push(`### ${t(lang, "section.about.languages.title")}`);
  lines.push("");
  lines.push(`- ${t(lang, "section.about.languages.english")}`);
  lines.push(`- ${t(lang, "section.about.languages.french")}`);
  lines.push(`- ${t(lang, "section.about.languages.italian")}`);
  lines.push(`- ${t(lang, "section.about.languages.asl")}`);
  lines.push("");
  lines.push(`### ${t(lang, "section.about.links.title")}`);
  lines.push("");
  lines.push(`- [${t(lang, "section.about.links.email")}](${LINKS.email})`);
  lines.push(
    `- [${t(lang, "section.about.links.linkedin")}](${LINKS.linkedin})`,
  );
  lines.push(`- [${t(lang, "section.about.links.github")}](${LINKS.github})`);
  lines.push(`- [${t(lang, "section.about.links.resume")}](${LINKS.resume})`);
  lines.push("");
  lines.push("---");
  lines.push("");

  lines.push(`## ${t(lang, "section.experience.title")}`);
  lines.push("");
  for (let i = 1; i <= 8; i++) {
    const itemTitle = t(
      lang,
      `experience.item${i}.title` as keyof (typeof TRANSLATIONS)[Lang],
    ) as string;
    const subtitle = t(
      lang,
      `experience.item${i}.subtitle` as keyof (typeof TRANSLATIONS)[Lang],
    ) as string;
    const points = t(
      lang,
      `experience.item${i}.points` as keyof (typeof TRANSLATIONS)[Lang],
    ) as string[];
    lines.push(`### ${itemTitle}`);
    lines.push("");
    lines.push(`*${subtitle}*`);
    lines.push("");
    for (const point of points) {
      lines.push(`- ${point}`);
    }
    lines.push("");
  }
  lines.push("---");
  lines.push("");

  lines.push(`## ${t(lang, "section.skills.title")}`);
  lines.push("");
  lines.push(`### ${t(lang, "section.skills.favorites.title")}`);
  lines.push("");
  for (let i = 1; i <= 5; i++) {
    lines.push(
      `- ${t(lang, `section.skills.favorites.item${i}` as keyof (typeof TRANSLATIONS)[Lang])}`,
    );
  }
  lines.push("");
  lines.push(`### ${t(lang, "section.skills.code.title")}`);
  lines.push("");
  for (let i = 1; i <= 5; i++) {
    lines.push(
      `- ${t(lang, `section.skills.code.item${i}` as keyof (typeof TRANSLATIONS)[Lang])}`,
    );
  }
  lines.push("");
  lines.push(`### ${t(lang, "section.skills.tooling.title")}`);
  lines.push("");
  for (let i = 1; i <= 5; i++) {
    lines.push(
      `- ${t(lang, `section.skills.tooling.item${i}` as keyof (typeof TRANSLATIONS)[Lang])}`,
    );
  }
  lines.push("");
  lines.push("---");
  lines.push("");

  lines.push(`## ${t(lang, "section.contact.title")}`);
  lines.push("");
  lines.push(t(lang, "section.contact.description") as string);
  lines.push("");
  lines.push(`- [${t(lang, "section.contact.email")}](${LINKS.email})`);
  lines.push(`- [${t(lang, "section.contact.linkedin")}](${LINKS.linkedin})`);
  lines.push(`- [${t(lang, "section.contact.github")}](${LINKS.github})`);
  lines.push(`- [${t(lang, "section.contact.resume")}](${LINKS.resume})`);

  return lines.join("\n");
}
