import styles from "./Contacts.module.css";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ILinks } from "@/app/utilities/content";

interface vars {
  links: ILinks
}
const Contacts = ({ links }: vars) => {
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
    <motion.div ref={ref} variants={variants} className={styles.wrapper} animate={isInView ? "shown" : "hidden"}>
      <p>{"// Where can you find me?"}</p>
      <div className={styles.contacts}>
        {Object.keys(links).map(link => {
          let _link = links[link];
          return (
            <a href={_link.link} key={_link.name + "_link"} className="box">{_link.name}</a>
          )
        })}
      </div>
    </motion.div>
  );
};

export default Contacts;
