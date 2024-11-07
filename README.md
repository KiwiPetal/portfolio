# My portfolio
Finally decided to create my portfolio.
I'm still working on a couple of things, but overall it is completed.

It's written on [Next.js by Vercel](https://nextjs.org/) using Typescript.

I use [Majör Mono by Emre Parlak](https://www.emreparlak.com/major/) and [Victor Mono by rubjo](https://rubjo.github.io/victor-mono/). Please check them out. I'm absolutely in love with both and I personally use Victor Mono as my main font for the terminal.

## Setup

- Change the desired text in `./app/utilities/content.ts`. Every component is procedural, so don't be afraid to add more lines in any of the strings.

- Download all libraries used in the project
```bash
yarn
# or
npm i
```

- To start the website in a development mode, do
```bash
yarn dev
# or
npm run dev
```

- To build and start the website, do
```bash
yarn build && yarn start
# or
npm run build && npm run start
```

## Project Structure
`./app/components/`
Contains all client-side components

`./app/utilities/`
Currently only the text for the dynamic components

`./app/page.tsx`
The only page of the website

`./app/layout.tsx`
Layout of the page. Used only for Metadata

`./app/globals.css`
Global css rules. Colours/Fonts

## TODOs
- [x] Intro card
- [x] About me
- [x] Contacts
- [x] Additional bars for finished products
- [x] Rework bars for finished products
- [x] Reworked animations and accessibility
- [ ] Better Documentation for edits
- [ ] Revamp Gallery with additional flair
- [ ] (Questionable) API integration
