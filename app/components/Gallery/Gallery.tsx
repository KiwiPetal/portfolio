'use client'
import { IContent } from "@/app/utilities/content"
import styles from "./Gallery.module.css"
import React, { useRef, useState } from "react"
import { AnimatePresence, motion, useInView } from "framer-motion"
import { Card } from "./Card/Card"
import Code from "../Code/Code"

interface vars {
  name: string,
  content: IContent[]
}
export default function Gallery({ name, content }: vars) {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px 0px -50% 0px", once: true });
  const staggerDelay = 0.1;
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
  // OLD RENDER {{{
  // return (
  //   <motion.div variants={containerVariants} animate={isInView ? "visible" : "hidden"} className={styles.wrapper}>
  //     <motion.div
  //       variants={navVariants}
  //       animate={open ? "visible" : "hidden"}
  //       className={styles.nav}
  //     >
  //       <div
  //         onClick={() => setCurrent(current - 1 < 0 ? length - 1 : current - 1)}>{"<"}</div>
  //       <div
  //         onClick={() => setCurrent(current + 1 >= length ? 0 : current + 1)}>{">"}</div>
  //     </motion.div>
  //     <div className={styles.bar}
  //     >
  //       <div className={styles.top} onClick={() => setOpen(!open)}>
  //         <p>
  //           {!open ? name : content[current].name ? content[current].name : name}
  //         </p>
  //         <div className={`${styles.tick} ${open ? "" : styles.active}`} />
  //       </div>
  //       <motion.div
  //         variants={childVariants}
  //         animate={open ? "visible" : "hidden"}
  //         className={`${styles.child}`}
  //       >
  //         <div
  //           className={styles.drag}
  //           ref={containerRef}
  //           onMouseDown={handleMouseDown}
  //           onMouseMove={handleMouseMove}
  //           onMouseUp={handleMouseUp}
  //           onMouseLeave={handleMouseUp}
  //         >
  //           {content.map((card, i) => {
  //             return (
  //               <div
  //                 key={"card" + i}
  //                 // @ts-ignore
  //                 ref={slideRefs.current[i]}
  //                 style={{
  //                   transform: `translateX(-${current * 100
  //                     }%) translateX(${translateX}px)`,
  //                 }}
  //                 className={
  //                   `${styles.card}`
  //                 }>
  //                 <div>
  //                   <p>
  //                     {card.description}
  //                   </p>
  //                   {
  //                     card.tags && (
  //                       <div className={`${styles.tags}`}>
  //                         {card.tags.map((tag, tag_i) => (
  //                           <p key={"tag" + i + tag_i} className={`${styles.tag}`}>
  //                             #{tag}
  //                           </p>
  //                         ))}
  //                       </div>
  //                     )
  //                   }
  //                   <div>
  //                     <img alt={card.name ? card.name : ""} src={card.src} />
  //                     <div onClick={() => window.open(card.src)}><LaunchIcon /></div>
  //                   </div>
  //                 </div>
  //               </div>
  //             )
  //           })}
  //         </div>
  //       </motion.div>
  //     </div>
  //     <motion.div
  //       variants={pipVariants}
  //       animate={open ? "visible" : "hidden"}
  //       className={styles.pipsWrapper}>
  //       <div className={styles.pips}>
  //         {content.map((_, i) => {
  //           return (
  //             <div
  //               key={"pip" + i}
  //               onClick={() => setCurrent(i)}
  //               className={`${styles.pip}`} />
  //           )
  //         })}
  //         <div
  //           className={`${styles.pip} ${styles.activePip}`}
  //           style={{ '--length': length, '--current': current } as React.CSSProperties}
  //         />
  //       </div>
  //     </motion.div>
  //   </motion.div>
  // )
  // }}}
}
