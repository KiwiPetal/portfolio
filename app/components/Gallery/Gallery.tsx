'use client'
import { IContent } from "@/app/utilities/content"
import styles from "./Gallery.module.css"
import React, { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Card } from "./Card/Card"
import Code from "../Code/Code"

interface vars {
  content: IContent[]
}
export default function Gallery({ content }: vars) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px", once: true });
  const containerVariants = {
    hidden: {
      opacity: 0,
    },
    shown: {
      opacity: 1,
      transition: {
        delay: 0.2,
        duration: 1.5,
        ease: [0.65, 0.05, 0.36, 1],
      },
    }
  }
  return (
    <div className={styles.section}>
      <Code text="My Projects" enabled isInView={isInView} titleRef={ref} style="l" />
      <motion.div variants={containerVariants} animate={isInView ? "shown" : "hidden"} className={styles.wrapper}>
        {content.map((card, i) => {
          return (
            <Card id={i} key={"card_" + i} title={card.name} pics={card.pics} description={card.description} tags={card.tags} />
          )
        })}
      </motion.div>
    </div>
  )
}
