"use client";
import { useRef, useState } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import styles from "./AboutMe.module.css";
import Code from "../Code/Code";
import { aboutMe, techStack } from "@/app/utilities/content";
import Image from "next/image";

const AboutMe = () => {
  const titleRef = useRef(null);
  const possibleGroups = Object.keys(techStack);
  const [currentGroup, setCurrentGroup] = useState(possibleGroups[0]);
  const staggerDelay = 0.025;
  const containerStaggerDelay = 0.4;
  const isInView = useInView(titleRef, { margin: "0px 0px -50% 0px", once: true });
  const variants = (i: number) => {
    return {
      hidden: {
        y: 25,
        opacity: 0
      },
      shown: {
        y: 0,
        opacity: 1,
        transition: {
          duration: 1,
          delay: containerStaggerDelay * i,
        },
      },
    }
  };


  return (
    <div className={styles.wrapper}>
      <Code text="About Me" style="l" titleRef={titleRef} enabled isInView={isInView} />
      <div className={styles.descriptionWrapper}>
        <motion.p variants={variants(1)} animate={isInView ? "shown" : "hidden"} >
          {aboutMe}
        </motion.p>
        <motion.div className={styles.wrapper} variants={variants(2)} animate={isInView ? "shown" : "hidden"}>
          <div className={styles.selector}>
            {possibleGroups.map(group => (
              <div key={"groups:" + group} onClick={() => setCurrentGroup(group)}>
                <p className={group === currentGroup ? styles.active : ""}>
                  {group}
                </p>
                {
                  group === currentGroup && (
                    <motion.div layoutId="underline" className={styles.selected} />
                  )
                }
              </div>
            ))}
          </div>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentGroup}
              className={styles.cardWrapper}>
              { /* @ts-ignore */}
              {Object.keys(techStack[currentGroup]).map((tech: string, i: number) => (
                <motion.div
                  key={"tech:" + tech}
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  transition={{ delay: i * staggerDelay, duration: 0.2 }}
                  className={styles.card}>
                  { /* @ts-ignore */}
                  <Image width={28} height={28} alt={`${tech} logo`} src={techStack[currentGroup][tech]} />
                  <p>{tech}</p>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};
export default AboutMe;
