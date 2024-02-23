import styles from "./Contacts.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {links} from "@/app/utilities/content";

const Contacts = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -33% 0px", once: true });

  const variants = {
    hidden: {
      opacity: 0,
      x: "-20%",
    },
    shown: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 1,
        ease: [0.65,0.05,0.36,1],
      },
    }
  }

  return (
    <motion.div ref={ref} variants={variants} animate={isInView ? "shown" : "hidden"}>
      <p>// Where can you find me?</p>
      <div className={styles.contacts}>
        <a href={links.email} className={`box ${styles.widest}`}>kaylee.reed@mail.com</a>
        <a href={links.discord} className={"box"}>Discord</a>
        <a href={links.twitter} className={"box"}>Twitter</a>
        <a href={links.spotify} className={"box"}>Spotify</a>
        <a href={links.github} className={`box ${styles.wide}`}>Github</a>
        <a href={links.gitlab} className={"box"}>Gitlab</a>
      </div>
    </motion.div>
  );
};

export default Contacts;
