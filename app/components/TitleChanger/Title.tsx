"use client";

import { useEffect, useState } from "react";

interface vars {
  titles: string[];
  className?: string;
}

const TitleChanger = ({ titles, className }: vars) => {
  const [choice, setChoice] = useState(0);
  const [currString, setCurrString] = useState(titles[0]);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".toLowerCase();

  useEffect(() => {
    const intervalID = setInterval(() => {
      let newChoice = choice + 1;
      if (choice + 1 >= titles.length) {
        newChoice = 0;
      }
      let iterations = 0;
      let modifiedWord: string = titles[choice].toUpperCase();
      const glitchInterval = setInterval(() => {
        const oldCount = modifiedWord.split("").length;
        const newCount = titles[newChoice].split("").length;
        const newTitle = modifiedWord
          .split("")
          .map((letter, index) => {
            if (index < iterations) {
              return titles[newChoice].split("")[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join("");
        if (oldCount > newCount) {
          modifiedWord = modifiedWord.slice(0, -1);
        }
        if (oldCount < newCount) {
          modifiedWord = modifiedWord + letters[Math.floor(Math.random() * 26)];
        }
        iterations += 1 / 2;
        setCurrString(newTitle);
        if (iterations > titles[newChoice].split("").length) {
          clearInterval(glitchInterval);
          setCurrString(titles[newChoice]);
        }
      }, 35);

      setChoice(newChoice);
    }, 3000);

    return () => {
      clearInterval(intervalID);
    };
  }, [choice]);
  return <h1 className={className}>{currString}</h1>;
};

export default TitleChanger;
