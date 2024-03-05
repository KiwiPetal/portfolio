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
- Frontend Development: I create visually appealing interfaces that stand out.
- Blockchain Enthusiast: I'm involved in lots of exciting blockchain projects.
- Database Management: I have hands-on experience fine-tuning data, ensuring it operates smoothly.
- Creative Explorations: Outside of work, I'm in love with creating 3D models, sketching and gaming.`;

export const links: ILinks = {
  email: {
    name: "kaylee.reed@mail.com",
    link: "mailto:kaylee.reed@mail.com",
  },
  discord: {
    name: "Discord",
    link: "https://discordlookup.com/user/258571406302773251",
  },
  twitter: {
    name: "Twitter",
    link: "https://twitter.com/TheKiwiPetal",
  },
  spotify: {
    name: "Spotify",
    link: "https://open.spotify.com/user/space_carp",
  },
  github: {
    name: "Github",
    link: "https://github.com/KiwiPetal",
  },
  gitlab: {
    name: "Gitlab",
    link: "https://gitlab.com/KiwiPetal",
  },
}

export interface ILink {
  name: string;
  link: string;
}
export interface ILinks {
  [key: string]: ILink
}
