"use client";
import styles from "./page.module.css";
import Image from "@/node_modules/next/image";
import TitleChanger from "./components/TitleChanger/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import { aboutMe, aboutMeHeader, content, links, titles } from "@/app/utilities/content";
import ReactLenis from "@studio-freight/react-lenis";
import ParallaxItem from "./components/Parallax/Parallax";
import Contacts from "./components/Contacts/Contacts";
import Gallery from "./components/Gallery/Gallery";

// TODO: Scroll to Contacts
export default function Home() {
  const selfieWidth = 200;
  return (
    <ReactLenis root>
      <div className="main">
        <div className={styles.titleWrapper}>
          <div className={styles.background}>
          <ParallaxItem>
            <div className={styles.bgImage} />
          </ParallaxItem>
          </div>
          <div className={styles.title}>
            <Image
              alt="A cute picture of the developer"
              onClick={() =>
                window.open("https://www.instagram.com/kiwi.petals/")
              }
              width={selfieWidth}
              height={(686 / 386) * selfieWidth}
              src="/pic1.webp"
            />
            <div>
              <h1 className={styles.important}>Kaylee Reed</h1>
              <TitleChanger titles={titles} />
            </div>
          </div>
        </div>
        <div className={styles._wrapper}>
          <div className={styles.section}>
            <AboutMe header={aboutMeHeader} description={aboutMe} enabled />
          </div>
          <div className={styles.section}>
            <Gallery name="Projects" content={content.project} />
            <Gallery name="Art" content={content.art} />
          </div>
          <div id="contacts" className={styles.section}>
            <Contacts links={links} />
          </div>
          {/* <div className={`${styles.section} ${styles.contacts}`}></div> */}
          <footer>
            <h2>
              This website is written with{" "}
              <a className="link" href="https://nextjs.org/">
                Next.JS
              </a>{" "}
              and is completely open-source.
            </h2>
            <h2>
              Feel free to fork and use it:{" "}
              <a className="link" href="https://github.com/KiwiPetal/portfolio">
                Repository
              </a>
            </h2>
          </footer>
        </div>
      </div>
    </ReactLenis>
  );
}
