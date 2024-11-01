'use client'
import { IContent } from "@/app/utilities/content"
import styles from "./Gallery.module.css"
import React, { useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { Card } from "./Card/Card"

interface vars {
  name: string,
  content: IContent[]
}
export default function Gallery({ name, content }: vars) {

  return (
      <div className={styles.wrapper}>
        {content.map((card, i) => {
          return (
            <Card id={i} key={"card_" + i} title={card.name} pics={card.pics} description={card.description} tags={card.tags} />
          )
        })}
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
