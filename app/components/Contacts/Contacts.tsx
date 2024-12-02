import styles from "./Contacts.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ILink } from "@/app/utilities/content";
import Code from "../Code/Code";
import Link from "next/link";

interface vars {
  links: Record<string, ILink>
}
const Contacts = ({ links }: vars) => {
  const titleRef = useRef(null);
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -10% 0px", once: true });

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
            <Link href={_link.link} key={_link.name + "_link"} className={styles.link}>
            <motion.div variants={contactVariants[i]} initial="hidden" animate={isInView ? "shown" : "hidden"} className="box">{_link.name}</motion.div>
            </Link>
          )
        })}
      </div>
    </div>
  );
};

export default Contacts;
