"use client"
import { useState } from "react";
import styles from "./page.module.css";

export default function BullsAndCows() {
  // TODO: Add caching
  const [helper, setHelper] = useState(true);

  const component = helper == true
    ? (
      // Helper UI
      <div className={styles.helper}>
        <p>
          Welcome to Bulls and Cows! The favorite game from my childhood.
        </p>
        <p>
          The rules are simple. 
            A random code with unique numbers gets generated. Digits, that are correct, but aren't in the correct position, are <span className={styles.yellow}>Cows</span>. Correct digits in the correct position are <span className={styles.green}>Bulls</span>.
        </p>
        <p>
          Good luck!
        </p>
        <div className="box" onClick={() => setHelper(false)}>
          Play
        </div>
      </div>
    )
    : (
      // Game UI
      <div className={styles.gameField}>
        awd
      </div>
    )

  return (
    <div className={styles.wrapper}>
      {component}
    </div>
  )
}
