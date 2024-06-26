"use client";
import { useEffect, useRef, useState } from "react";
import { motion, stagger, useInView, useTransform } from "framer-motion";
import styles from "./AboutMe.module.css";
import Code from "../Code/Code";

interface vars {
  enabled: boolean;
  header: string;
  description: string;
}

//TODO: Loading for ~3 seconds
//Adjust margin for isInView
const AboutMe = ({ enabled, header, description }: vars) => {
  // const [open, setOpen] = useState(false);
  const ref = useRef(null);
  const titleRef = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px", once: true });
  const isInViewTop = useInView(titleRef, { margin: "0px 0px -30% 0px", once: true });
  const variants = {
    hidden: {
      width: "50px",
      height: "50px",
      borderRadius: "50%",
      opacity: 0.2
    },
    shown: {
      height: "fit-content",
      borderRadius: "10px",
      width: "fit-content",
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.65,0.05,0.36,1],
        height: { delay: 0.8, duration: 1.5, ease: [0.17,0.84,0.5,1] },
      },
    },
  };
  const staggerDelay = 0.3;
  const lines = description.split("\n");
  const lineVariants = lines.map((_, index) => ({
    hidden: {
      opacity: 0,
      // width: "600px",
    },
    shown: {
      opacity: 1,
      transition: {
        delay: index * staggerDelay + 1,
      },
    },
  }));

  const characters = Array.from(header);

  const containerVariants = {
    hidden: { 
    },
    shown: {
      transition: {
        delay: 3,
        staggerChildren: 0.04, 
      }
    }
  }
  const childVariants = {
    hidden: {
      opacity: 1,
      display: "none",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0,
      },
    },
    shown: {
      opacity: 1,
      display: "inline",
      transition: {
        damping: 12,
        stiffness: 100,
        duration: 0,
      },
    },
  };
  return (
    <div className={styles.wrapper}>
        <Code text={header} enabled titleRef={titleRef} style="m" isInView={isInViewTop} terminal />
      <motion.div
        ref={ref}
        variants={variants}
        initial="hidden"
        animate={enabled ? isInView ? "shown" : "hidden" : "hidden"}
        className={styles.output}
      >
        {lines.map((line, index) => (
          <motion.p
            className={isInView ? styles.shown : styles.hidden}
            key={index}
            variants={lineVariants[index]}
            initial="hidden"
            animate={isInView ? "shown" : "hidden"}
          >
            {line}
          </motion.p>
        ))}
      </motion.div>
    </div>
  );
};
export default AboutMe;
