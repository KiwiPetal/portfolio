"use client";

import { useEffect, useState } from "react";

const TitleChanger = () => {
  const [choice, setChoice] = useState(0);
  const titles = [
    "Web Designer",
    "Web3 Engineer",
    "Backend Developer",
    "3D Artist",
    "Average Jamie Enjoyer"
  ];
  const [currString, setCurrString] = useState(titles[0]);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  useEffect(() => {
    const intervalID = setInterval(() => {
      let newChoice = choice + 1;
      if (choice + 1 >= titles.length) {
        newChoice = 0;
      }
      let iterations = 0;
      let modifiedWord: string = titles[choice];
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
  return <h1>{currString}</h1>;
};

export default TitleChanger;
