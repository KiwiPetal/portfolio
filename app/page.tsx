import styles from "./page.module.css";
import Image from "@/node_modules/next/image";
import pic1 from "../public/pic1.jpg";
import pic2 from "../public/pic2.jpg";
import TitleChanger from "./components/TitleChanger/Title";
import AboutMe from "./components/AboutMe/AboutMe";
import { aboutMe, aboutMeHeader, titles } from "@/app/utilities/content";

// TODO: Manage scrolling
// TODO: Cursor animation
export default function Home() {
  const selfieWidth = 200;
  return (
    <div className="main">
      <div className={styles.title}>
        <Image
          alt="Picture of me"
          width={selfieWidth}
          height={(686 / 386) * selfieWidth}
          src="/pic3.jpg"
        />
        <div>
          <h1>Kaylee Reed</h1>
          <TitleChanger titles={titles} />
        </div>
      </div>
      <div className={`${styles.section} ${styles.aboutMe}`}>
        <AboutMe header={aboutMeHeader} description={aboutMe} enabled />
      </div>
      <div className={`${styles.section} ${styles.contacts}`}>
      </div>
    </div>
  );
}
