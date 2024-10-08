
export const titles = [
  "Frontend",
  "Backend",
  "Web3",
  "3D Art",
  "Neovim Fanatic",
];

export const aboutMeHeader = `cat ./AboutMe.md`;

export const aboutMe = `# About Me
I specialize in Frontend Development, but my expertise spans over lots of different technologies. 
I have examples of a few previous projects I've been a part of below.

# My Expertise
- Frontend: React.JS, Next.JS, Flutter.
- Backend: Express.JS, Sequelize, Python.
- Blockchain: Solidity, Rust.
- Databases: MySQL, MariaDB, ClickHouse.
- Creativity: 3D Art, Sketching, Music.`;

export const links: Record<string, ILink> = {
  email: {
    name: "kaylee.reed@little-kiwi.net",
    link: "mailto:kaylee.reed@little-kiwi.net",
  },
  cv: {
    name: "My CV",
    link: "/files/Kaylee Reed - CV.pdf"
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
  linkedin: {
    name: "LinkedIn",
    link: "https://linkedin.com/in/kiwipetal"
  },
}

export const content: Record<ContentTypes, IContent[]> = {
  art: [
    {
      name: "Blender",
      src: "/pics/ring.png"
    },
    {
      name: "Blender",
      src: "/pics/anvil.png"
    },
    {
      name: "Blender",
      src: "/pics/donut.png"
    },
    {
      name: "Adobe Illustrator",
      src: "/pics/mask.png"
    },
    {
      name: "Adobe Illustrator",
      src: "/pics/mask2.png"
    },
  ],
  project: [
    {
      name: "Prime Delivery",
      description: "A delivery fleet company working with Foodora. I made a landing/recruitment page for them (hasn't been hosted yet) and a shift manager as a Telegram Bot. Connected with an admin panel.",
      src: "/pics/PrimeDelivery.png"
    },
    {
      name: "Prime Delivery",
      description: "Admin panel that shows business statistics and information from the shift manager.",
      src: "/pics/PrimeDelivery-dashboard.png"
    },
    {
      name: "Astrodiggers",
      description: "A crypto project for which I've built 2 websites (Landing page and a dashboard), web3 contracts, and backend for the Tournaments in the project.",
      src: "/pics/Astrodiggers.png"
    },
    {
      name: "Astrodiggers",
      description: "Client dashboard of the project",
      src: "/pics/Astrodiggers-dashboard.png"
    },
    {
      name: "Soldatiki",
      description: "Another crypto project where I've built Frontend, Backend and smart contracts",
      src: "/pics/Soldatiki2.png"
    },
  ]
}

export interface ILink {
  name: string;
  link: string;
}

export type ContentTypes = 
  "project" | "art";

export interface IContent {
  name?: string;
  description?: string;
  src: string;
}
