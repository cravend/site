import { Strings } from "./types";

const common = {
  name: "Dalton Craven",
  github: "GitHub",
  gitlab: "GitLab",
  cloverleaf: "Cloverleaf",
  programming_languages:
    "React, GraphQL, Java, HTML, CSS, JavaScript, Visual Basic .NET, C++, PHP, SQL, Python, R",
  tools:
    "Next, Git, GitHub, GitLab, Gatsby, cPanel, WHM, Flask, Django, Linux, DigitalOcean, AWS, Netlify, WordPress",
  american_phone_number: "+1 513 813 6421",
  french_phone_number: "+33 07 49 79 20 94",
  email_address: "daltonjcraven@gmail.com",
  github_username: "cravend",
  gitlab_username: "cravend",
};

const en = {
  ...common,
  colon: ": ",
  homepage: "Home",
  toggleLocale: "Lire en français",
  tagline: "Student & Developer",
  pfp: "Profile picture",
  viewSource: "View source on",
  greeting: "Hello! My name is",
  intro:
    "It’s hard to introduce myself over the internet, but here’s a little bit about me",
  education_header: "Education",
  education:
    "I’m a sophomore at the University of South Carolina. I’m pursuing a Bachelor of Science in Computer Science with a major in computer science and a minor in psychology (weird, right?). I’m also a McNair Scholar as part of UofSC’s most prestigious scholarship program, the University Top Scholars.",
  sa_header: "Study Abroad",
  study_abroad:
    "I’m currently studying abroad at the American University of Paris! I’ll be in France for the entirety of 2021. Spending an extended period of time in a different culture has been a goal of mine for a long time, and I’m looking forward to fully experiencing it when COVID is finally over.",
  work_header: "Work",
  work_1:
    "I recently wrapped up a full-time internship as a front-end web developer at",
  work_2:
    "There, I used a variety of technologies (primarily Next/React and GraphQL) in an agile development team to routinely publish production code for our application. I was also an undergraduate teaching assistant for the spring 2020 semester, running eight sections of Linux/UNIX labs for approximately 250 students.",
  freelance_header: "Freelancing",
  freelance:
    "I also do freelance web development! I work primarily with small businesses (although I’m open for anything), with an emphasis on providing resources and training to ensure long-term functionality.",
  skills: "Skills & Certifications",
  spoken_languages_header: "Languages (spoken)",
  spoken_languages: "English, French, American Sign Language (ASL)",
  programming_languages_header: "Languages (tech)",
  tools_header: "Tools",
  certifications: "Certifications",
  cert_april_2020: "Certified April 2020",
  cert_fall_2018: "Certified Fall 2018",
  contact: "Contact",
  american_phone: "American Phone",
  french_phone: "French Phone",
  email: "Email",
};

const fr = {
  ...common,
  colon: " : ",
  homepage: "Accueil",
  toggleLocale: "Read in English",
  tagline: "Étudiant & Développeur",
  pfp: "Image de profil",
  viewSource: "Voir le code source sur",
  greeting: "Salut ! Je m’appelle",
  intro:
    "Il est difficile de me présenter sur Internet, mais voici un peu de moi",
  education_header: "Formation",
  education:
    "Je suis étudiant en deuxième année à l’Université de Caroline du Sud. Je poursuis un baccalauréat ès sciences en informatique avec une mineure en psychologie. Je suis également boursier McNair dans le cadre du programme de bourses le plus prestigieux, les « University Top Scholars ».",
  sa_header: "Étudier à L’étranger",
  study_abroad:
    "J’étudie actuellement à l’étranger à l’Université américaine de Paris ! Je serai en France pendant toute l’année 2021. Passer une longue période de temps dans une culture différente est un de mes objectifs depuis longtemps, et j’ai hâte de vivre pleinement lorsque COVID sera enfin terminé.",
  work_header: "Travailler",
  work_1:
    "J’ai récemment terminé un stage à temps plein en tant que développeur web front-end chez",
  work_2:
    "Là, j’ai utilisé une variété de technologies (principalement Next / React et GraphQL) dans une équipe de développement agile pour publier régulièrement du code de production pour notre application. J’étais également assistant d’enseignement de premier cycle pour le semestre de printemps 2020, dirigeant huit sections de cours Linux / UNIX pour environ 250 étudiants.",
  freelance_header: "Freelance",
  freelance:
    "Je fais aussi du développement web en freelance ! Je travaille principalement avec des petites entreprises (bien que je sois ouvert à tout), en mettant l’accent sur la fourniture de ressources et de formation pour assurer une fonctionnalité à long terme.",
  skills: "Compétences & Certifications",
  spoken_languages_header: "Langues (parlées)",
  spoken_languages: "Anglais, Français, Langue des signes américaine (ASL)",
  programming_languages_header: "Langues (tech)",
  tools_header: "Outils",
  certifications: "Certifications",
  cert_april_2020: "Certifié avril 2020",
  cert_fall_2018: "Certifié automne 2018",
  contact: "Contact",
  american_phone: "Numéro américain",
  french_phone: "Numéro français",
  email: "Email",
};

export default {
  en,
  fr,
} as Strings;
