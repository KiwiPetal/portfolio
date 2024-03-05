export const titles = [
  "Frontend Developer",
  "Backend Programmer",
  "Web3 Engineer",
  "3D Artist",
  "Vim Enthusiast",
];

export const aboutMeHeader = `cat ./AboutMe.md`;

export const aboutMe = `# About Me
Howdy, sugar! I'm Kaylee, a freelance coder, weavin' magic in the digital realm.

# My Expertise
- Frontend Development: React.JS, Next.JS, Flutter.
- Backend Creation: Express.JS, Sequelize, Python.
- Blockchain Enthusiast: Solidity, Rust.
- Database Management: MySQL, MariaDB, ClickHouse.
- Creative Explorations: 3D Art, Sketching, Music, Gaming.`;

export const links: ILinks = {
  email: {
    name: "kaylee.reed@mail.com",
    link: "mailto:kaylee.reed@mail.com",
  },
  discord: {
    name: "Discord",
    link: "https://discordlookup.com/user/258571406302773251",
  },
  github: {
    name: "Github",
    link: "https://github.com/KiwiPetal",
  },
  gitlab: {
    name: "Gitlab",
    link: "https://gitlab.com/KiwiPetal",
  },
  twitter: {
    name: "Twitter",
    link: "https://twitter.com/TheKiwiPetal",
  },
  spotify: {
    name: "Spotify",
    link: "https://open.spotify.com/user/space_carp",
  },
}

export interface ILink {
  name: string;
  link: string;
}
export interface ILinks {
  [key: string]: ILink
}
