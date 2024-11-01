
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
- Databases: MySQL, ClickHouse.
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
      pics: ["/pics/ring.png"]
    },
    {
      name: "Blender",
      pics: ["/pics/anvil.png"]
    },
    {
      name: "Blender",
      pics: ["/pics/donut.png"]
    },
    {
      name: "Adobe Illustrator",
      pics: ["/pics/mask.png"]
    },
    {
      name: "Adobe Illustrator",
      pics: ["/pics/lich-king.png"]
    },
    {
      name: "Adobe Illustrator",
      pics: ["/pics/mask2.png"]
    },
  ],
  project: [
    {
      name: "Prime Delivery",
      tags: ["ReactJS", "python-telegram-bot", "MariaDB"],
      description: "A delivery fleet company working with Foodora. I made a landing/recruitment page for them (hasn't been hosted yet) and a shift manager as a Telegram Bot, which is connected to an admin webpanel.",
      pics: ["/pics/PrimeDelivery.png", "/pics/PrimeDelivery-dashboard.png"]
    },
    {
      name: "SMT50",
      tags: ["NextJS", "Anchor", "ExpressJS", "Sequelize", "MariaDB"],
      description: "Crypto project deployed on Solana, where I've built and redesigned the dashboard, created the secure API with a connection to the database and a custom Solana program (smart contract) that created unique PDA's for users.",
      pics: ["/pics/smt50dashboard.png"]
    },
    {
      name: "Astrodiggers",
      tags: ["ReactJS", "Solidity", "ExpressJS", "ClickHouse"],
      description: "Crypto project for which I've built 2 websites (Landing page and a dashboard), web3 upgradable smart contracts on Ethereum blockchain, and backend with database connection for the Tournaments in the project.",
      pics: ["/pics/Astrodiggers.png", "/pics/Astrodiggers-dashboard.png"]
    },
    {
      name: "Soldatiki",
      tags: ["Flutter", "Solidity", "ExpressJS", "MariaDB"],
      description: "Crypto project where I've built both the landing page and the dashboard. Backend with a database and smart contracts for the on-chain algorithms.",
      pics: ["/pics/Soldatiki2.png", "/pics/Soldatiki.png"]
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
  name: string;
  description?: string;
  tags?: string[];
  pics: string[];
}
