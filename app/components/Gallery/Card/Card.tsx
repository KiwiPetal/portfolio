"use client"
import { memo, useRef, useState } from "react";
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

const openSpring = { type: "spring", stiffness: 200, damping: 30 };
const closeSpring = { type: "spring", stiffness: 300, damping: 35 };

const infoVariants = {
  open: {
    height: "auto",
    paddingTop: "15px",
    paddingBottom: "15px",
    duration: 0.3,
    transition: {
      duration: 0.8,
      ease: [0.65, 0.05, 0.36, 1],
      height: { delay: 0.2, duration: 0.5, ease: [0.17, 0.84, 0.5, 1] },
    },
  },
  close: {
    height: "0px",
    paddingTop: "0px",
    paddingBottom: "0px",
    transition: {
      duration: 0.8,
      ease: [0.65, 0.05, 0.36, 1],
      height: { duration: 0.2, ease: [0.17, 0.84, 0.5, 1] },
    },
  }
}

export function Card(props: props) {
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0)
  return (
    <div className={styles.card_wrapper}>
      <Overlay open={open} setClose={() => setOpen(false)} />
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
        <motion.div variants={infoVariants} animate={open ? "open" : "close"} className={styles.description}>
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