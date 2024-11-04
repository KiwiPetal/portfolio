import { motion } from "framer-motion"
import styles from "./Code.module.css"
import { MutableRefObject } from "react";
interface vars {
  enabled: boolean;
  isInView: boolean;
  terminal?: boolean;
  titleRef: MutableRefObject<null>;
  text: string;
  style?: "s" | "m" | "l";
}
export default function Code({ enabled, isInView, titleRef, text, terminal, style = "m" }: vars) {
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
      display: "none",
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        duration: 0,
      },
    },
    shown: {
      display: "inline",
      transition: {
        damping: 12,
        stiffness: 100,
        duration: 0,
      },
    },
  };

  const characters = Array.from(text);

  return (
    <div className={`${styles.query} ${styles[style]}`}>
      <motion.code
        variants={containerVariants}
        initial="hidden"
        animate={enabled ? isInView ? "shown" : "hidden" : "hidden"}
        ref={titleRef}>
        {terminal ? "$ " : ""}{characters.map((character, index) => (
          <motion.span variants={childVariants}

            key={index}>
            {character === " " ? "\u00A0" : character}
          </motion.span>
        ))}</motion.code>
    </div>
  )
}
