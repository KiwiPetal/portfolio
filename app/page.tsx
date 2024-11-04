"use client";
import styles from "./page.module.css";
import Image from "@/node_modules/next/image";
import TitleChanger from "./components/TitleChanger/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import { aboutMe, aboutMeHeader, content, links, titles } from "@/app/utilities/content";
import ParallaxItem from "./components/Parallax/Parallax";
import Contacts from "./components/Contacts/Contacts";
import Gallery from "./components/Gallery/Gallery";
import ReactLenis from "@studio-freight/react-lenis";
import LinkedImage from "./components/LinkedImage/LinkedImage";

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
            <LinkedImage />
            <div>
              <h1 className={styles.important}>Kaylee Reed</h1>
              <h1 className={styles.smallerTitle}>Fullstack Developer</h1>
              <div className={styles.line} />
              <TitleChanger titles={titles} className={styles.detailTitle} />
            </div>
          </div>
        </div>
        <div className={styles._wrapper}>
          <div className={styles.section}>
            <AboutMe header={aboutMeHeader} description={aboutMe} enabled />
          </div>
          <div className={styles.section}>
            <Gallery name="Projects" content={content.project} />
          </div>
          <div id="contacts" className={styles.section}>
            <Contacts links={links} />
          </div>
          {/* <div className={`${styles.section} ${styles.contacts}`}></div> */}
          <footer>
            <p>
              This website is written with{" "}
              <a className="link" href="https://nextjs.org/">
                Next.JS
              </a>{" "}
              and is completely open-source.
            </p>
            <p>
              Feel free to fork and use it:{" "}
              <a className="link" href="https://github.com/KiwiPetal/portfolio">
                Repository
              </a>
            </p>
          </footer>
        </div>
      </div>
    </ReactLenis>
  );
}
