"use client";
import { useRef, useState } from "react";
import { motion, stagger, useInView } from "framer-motion";
import { aboutMe as text } from "@/app/utilities/content";
import styles from "./AboutMe.module.css";

//TODO: Loading for ~3 seconds
//Adjust margin for isInView
const AboutMe = () => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -200px 0px", once: true })
  const variants = {
    hidden: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
    },
    shown: {
      height: "fit-content",
      borderRadius: "10px",
      width: "600px",
      transition: {
        duration: 0.5,
        height: { delay: 0.5, duration: 0.5 },
      },
    },
  };
  const staggerDelay = 0.3;
  const lines = text.split("\n");
  const lineVariants = lines.map((_, index) => ({
    hidden: {
      opacity: 0,
      width: "600px",
    },
    shown: {
      opacity: 1,
      transition: {
        delay: index * staggerDelay + 1,
      },
    },
  }));
  return (
    <div className={styles.wrapper}>
      <div className={styles.query}>
        <code>$ cat ./AboutMe.md</code>
      </div>
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={isInView ? "shown" : "hidden"}
        onClick={() => setOpen(true)}
        className={styles.output}
      >
        {lines.map((line, index) => (
          <motion.p
            className={isInView ? styles.shown : styles.hidden}
            key={index}
            variants={lineVariants[index]}
            initial="hidden"
            whileInView="shown"
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};
export default AboutMe;
