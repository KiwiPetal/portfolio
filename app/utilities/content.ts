
export const titles = [
  "Frontend",
  "Backend",
  "Web3",
  "3D Art",
  "Neovim Fanatic",
];

export const aboutMe = 
`
I specialize in Frontend Development, but my expertise spans over lots of different technologies.
I have examples of a few previous projects I've been a part of below.
`;

export const techStack = {
  "Languages I know": {
    Typescript: "/logos/ts.png",
    Javascript: "/logos/js.png",
    Rust: "/logos/rust.png",
    Solidity: "/logos/solidity.png",
    Python: "/logos/python.png",
    PHP: "/logos/php.png",
    HTML: "/logos/html.png",
    CSS: "/logos/css.png",
    Dart: "/logos/dart.png",
    Lua: "/logos/lua.png",
    SQL: "/logos/sql.png",
  },
  "Frameworks I use": {
    NextJS: "/logos/next.png",
    React: "/logos/react.png",
    Flutter: "/logos/flutter.png",
    Svelte: "/logos/svelte.png",
    Tailwindcss: "/logos/tailwind.png",
    FramerMotion: "/logos/framer.png",
    Anchor: "/logos/anchor.png",
    NodeJS: "/logos/node.png",
    MariaDB: "/logos/mariadb.png",
    ClickHouse: "/logos/clickhouse.png",
    ExpressJS: "/logos/express.png",
  }
} as const;

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
  project: [
    {
      name: "Prime Delivery",
      tags: ["ReactJS", "Tailwindcss", "python-telegram-bot", "MariaDB"],
      description: "A delivery fleet company working with Foodora. I made a landing/recruitment page for them (hasn't been hosted yet) and a shift manager as a Telegram Bot, which is connected to an admin webpanel.",
      pics: ["/pics/PrimeDelivery.png", "/pics/PrimeDelivery-dashboard.png"]
    },
    {
      name: "SMT50",
      tags: ["NextJS", "Tailwindcss", "Anchor", "ExpressJS", "MariaDB"],
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
      tags: ["ReactJS", "Solidity", "ExpressJS", "MariaDB"],
      description: "Crypto project where I've built both the landing page and the dashboard. Backend with a database and smart contracts for the on-chain algorithms.",
      pics: ["/pics/Soldatiki2.png", "/pics/Soldatiki.png"]
    },
    {
      name: "Crypto Nodes",
      tags: ["Flutter", "Solidity" ],
      description: "Crypto project where I've built both the landing page and the dashboard, which were connected to the Smart Contract, that was being used as a database solution.",
      pics: ["/pics/CryptoNodes-landing.png", "/pics/CryptoNodes-dashboard.png"]
    },
  ]
}

export interface ILink {
  name: string;
  link: string;
}

export type ContentTypes = 
  "project";

export interface IContent {
  name: string;
  description?: string;
  tags?: string[];
  pics: string[];
}
