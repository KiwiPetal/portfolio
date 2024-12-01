"use client"
import { useState } from "react";
import styles from "./Card.module.css";
import { motion } from "framer-motion";

interface props {
  id: number;
  title: string;
  description?: string;
  pics: string[];
  tags?: string[];
  link?: string;
}

// Framer motion {{{
const openSpring = { type: "spring", stiffness: 200, damping: 30 };
const closeSpring = { type: "spring", stiffness: 200, damping: 30 };
const pipVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 1,
      ease: [0.65, 0.05, 0.36, 1],
    },
  }
}
const infoVariants = {
  open: {
    opacity: 1,
    paddingBottom: "15px",
    duration: 0.8,
    transition: {
      duration: 0.8,
      ease: [0.65, 0.05, 0.36, 1],
    },
  },
  close: {
    opacity: 0,
    paddingBottom: "0px",
    transition: {
      duration: 0.5,
      ease: [0.17, 0.84, 0.5, 1],
    },
  }
}
// }}}

export function Card(props: props) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0)

  const length = props.pics.length;
  return (
    <>
      <Overlay open={open} setClose={() => setOpen(false)} />
      <div className={styles.card_wrapper}>
        <motion.div
          layoutId={"card" + props.id}
          key={"card" + props.id}
          transition={{
            duration: 0.5,
            layout: open ? openSpring : closeSpring
          }}

          className={
            `${styles.card} ${open ? styles.open : ""}`
          }>
          <img className={styles.mainImg} onClick={() => setOpen(!open)} alt={props.title ? props.title : ""} src={props.pics[currentImage]} />
          <motion.div layoutId={"description-layout-"+props.id} variants={infoVariants} initial={"close"} animate={open ? "open" : "close"} className={styles.description}>
            {
              length > 1 && (
                <motion.div
                  variants={pipVariants}
                  animate={open ? "visible" : "hidden"}
                  className={styles.pipsWrapper}>
                  <div className={styles.pips}>
                    {props.pics.map((_, i) => {
                      return (
                        <div
                          key={"pip" + i}
                          onClick={() => setCurrentImage(i)}
                          className={`${styles.pip}`} />
                      )
                    })}
                    <div
                      className={`${styles.pip} ${styles.activePip}`}
                      style={{ '--length': length, '--current': currentImage } as React.CSSProperties}
                    />
                  </div>
                </motion.div>
              )
            }
            <p className={styles.title}>
              {props.title}
            </p>
            {
              props.tags && (
                <div className={`${styles.tags}`}>
                  {props.tags.map((tag, tag_i) => (
                    <p key={"tag" + props.id + tag_i} className={`${styles.tag}`}>
                      #{tag}
                    </p>
                  ))}
                </div>
              )
            }
            {props.description}
          </motion.div>

        </motion.div>
      </div>
    </>
  );
}

interface overlayVars {
  setClose: () => void;
  open: boolean;
}
function Overlay({ setClose, open }: overlayVars) {
  return (
    <div className={`${styles.overlay} ${open ? "" : styles.hidden}`} onClick={setClose} />
  )
}
