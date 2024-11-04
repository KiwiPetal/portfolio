import styles from "./Contacts.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ILink } from "@/app/utilities/content";
import Code from "../Code/Code";

interface vars {
  links: Record<string, ILink>
}
const Contacts = ({ links }: vars) => {
  const titleRef = useRef(null);
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
  const staggerDelay = 0.15;
  const contactVariants = Object.keys(links).map((_, i) => (
    {
      hidden: {
        opacity: 0,
        y: "50px",
      },
      shown: {
        opacity: 1,
        y: "0px",
        transition: {
          delay: i * staggerDelay,
          duration: 1.5,
          ease: [0.65, 0.05, 0.36, 1],
        },
      }
    }
  ))

  return (
    <div ref={ref} className={styles.wrapper}>
      <Code text="Where can you find me?" enabled isInView={isInView} titleRef={titleRef} style="m" />
      <div className={styles.contacts}>
        {Object.keys(links).map((link, i) => {
          let _link = links[link];
          return (
            <motion.a variants={contactVariants[i]} initial="hidden" animate={isInView ? "shown" : "hidden"} href={_link.link} key={_link.name + "_link"} className="box">{_link.name}</motion.a>
          )
        })}
      </div>
    </div>
  );
};

export default Contacts;
