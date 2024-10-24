'use client'
import { IContent } from "@/app/utilities/content"
import Image from "@/node_modules/next/image";
import { motion, useInView } from "framer-motion";
import styles from "./Gallery.module.css"
import LaunchIcon from '@mui/icons-material/Launch';
import React, { createRef, useEffect, useRef, useState } from "react"

interface vars {
  name: string,
  content: IContent[]
}
export default function Gallery({ name, content }: vars) {
  const [dragging, setDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [translateX, setTranslateX] = useState(0);
  const length = content.length;
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);
  const slideRefs = useRef(content.map(() => createRef()));
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { margin: "0px 0px -30% 0px", once: true });
  const pipVariants = {
    hidden: {
      opacity: 0,
      maxHeight: "0px",
      y: "-15px",
      marginTop: "0px"
    },
    visible: {
      opacity: 1,
      maxHeight: "100%",
      y: "0px",
      marginTop: "10px",
      transition: {
        delay: 0.7,
        duration: 1,
        ease: [0.65, 0.05, 0.36, 1],
      },
    }
  }
  const containerVariants = {
    hidden: {
      opacity: 0,
      x: "-5%",
    },
    visible: {
      opacity: 1,
      x: "0px",
      transition: {
        duration: 1,
        ease: [0.65, 0.05, 0.36, 1],
      },
    }
  }
  const navVariants = {
    hidden: {
      opacity: 0,
      display: "none"
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.7,
        ease: [0.65, 0.05, 0.36, 1],
      },
    }
  }
  const childVariants = {
    hidden: {
      height: "0px",
      width: "600px",
      opacity: 0,
    },
    visible: {
      height: containerHeight,
      width: "100%",
      opacity: 1,
      transition: {
        height: { duration: 1.5, ease: [0.17, 0.84, 0.5, 1] },
        width: { duration: 1, ease: [0.17, 0.84, 0.5, 1] },
        opacity: { duration: 1.5, delay: 0.2 }
      },
    }
  }

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setDragging(true);
    setStartX(event.clientX);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!dragging) {
      return;
    }

    const currentX = event.clientX;
    const deltaX = currentX - startX;

    if (containerRef.current) {
      setTranslateX(deltaX);
      // @ts-ignore
      containerRef.current.style.transition = "none";
    }
  };

  const handleMouseUp = () => {
    setDragging(false);

    if (containerRef.current) {
      // @ts-ignore
      containerRef.current.style.transition = "transform 0.3s ease-in-out";
      const threshold = 100;

      if (translateX > threshold && current > 0) {
        setCurrent(current - 1);
      } else if (translateX < -threshold && current < length - 1) {
        setCurrent(current + 1);
      } else if (translateX < -threshold) {
        setCurrent(0);
      } else if (translateX > threshold) {
        setCurrent(length - 1);
      }
      setTranslateX(0);
    }
  };

  useEffect(() => {
    const currentRef = slideRefs.current[current];
    if (currentRef && currentRef.current) {
      const height = (currentRef.current as HTMLElement).offsetHeight;
      setContainerHeight(height);
    }
  }, [current])

  return (
    <motion.div variants={containerVariants} animate={isInView ? "visible" : "hidden"} className={styles.wrapper}>
      <motion.div
        variants={navVariants}
        animate={open ? "visible" : "hidden"}
        className={styles.nav}
      >
        <div
          onClick={() => setCurrent(current - 1 < 0 ? length - 1 : current - 1)}>{"<"}</div>
        <div
          onClick={() => setCurrent(current + 1 >= length ? 0 : current + 1)}>{">"}</div>
      </motion.div>
      <div className={styles.bar}
      >
        <div className={styles.top} onClick={() => setOpen(!open)}>
          <p>
            {!open ? name : content[current].name ? content[current].name : name}
          </p>
          <div className={`${styles.tick} ${open ? "" : styles.active}`} />
        </div>
        <motion.div
          variants={childVariants}
          animate={open ? "visible" : "hidden"}
          className={`${styles.child}`}
        >
          <div
            className={styles.drag}
            ref={containerRef}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
          >
            {content.map((card, i) => {
              return (
                <div
                  key={"card" + i}
                  // @ts-ignore
                  ref={slideRefs.current[i]}
                  style={{
                    transform: `translateX(-${current * 100
                      }%) translateX(${translateX}px)`,
                  }}
                  className={
                    `${styles.card}`
                  }>
                  <div>
                    <p>
                      {card.description}
                    </p>
                    {
                      card.tags && (
                        <div className={`${styles.tags}`}>
                          {card.tags.map((tag, tag_i) => (
                            <p key={"tag" + i + tag_i} className={`${styles.tag}`}>
                              #{tag}
                            </p>
                          ))}
                        </div>
                      )
                    }
                    <div>
                      <img alt={card.name ? card.name : ""} src={card.src} />
                      <div onClick={() => window.open(card.src)}><LaunchIcon /></div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </motion.div>
      </div>
      <motion.div
        variants={pipVariants}
        animate={open ? "visible" : "hidden"}
        className={styles.pipsWrapper}>
        <div className={styles.pips}>
          {content.map((_, i) => {
            return (
              <div
                key={"pip" + i}
                onClick={() => setCurrent(i)}
                className={`${styles.pip}`} />
            )
          })}
          <div
            className={`${styles.pip} ${styles.activePip}`}
            style={{ '--length': length, '--current': current } as React.CSSProperties}
          />
        </div>
      </motion.div>
    </motion.div>
  )
}
