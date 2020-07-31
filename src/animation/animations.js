import React, { useRef } from "react";
import { useSpring, useSprings, useChain } from "react-spring";

export const useTemplateProps = (isIn, duration, delay = 0) =>
  useSpring({
    from: {
      opacity: 0,
    },
    to: {
      opacity: isIn ? 1 : 0,
    },
    delay: delay,
    config: {
      duration,
    },
  });

export const useFloatingLetters = (firstWord, secondWord) => {
  const leftSpringRef = useRef();
  const rightSpringRef = useRef();
  const leftSpringsRef = useRef();
  const rightSpringsRef = useRef();

  const leftSpring = useSpring({
    ref: leftSpringRef,
    from: {
      transform: `translate(0vw, 0vh)`,
      opacity: 1,
      fontSize: `5rem`,
    },
    to: {
      transform: `translateY(13vw, -40vh)`,
      opacity: 0,
      fontSize: `3rem`,
      display: "none",
    },
    delay: 1000,
    config: {
      mass: 1,
      tension: 40,
      friction: 10,
    },
  });

  const rightSpring = useSpring({
    ref: rightSpringRef,
    from: {
      transform: `translate(0vw, 0vh)`,
      opacity: 1,
      fontSize: `5rem`,
    },
    to: {
      transform: `translateY(-13vw, -40vh)`,
      opacity: 0,
      fontSize: `3rem`,
      display: "none",
    },
    delay: 1000,
    config: {
      mass: 1,
      tension: 40,
      friction: 10,
    },
  });

  const leftSprings = useSprings(
    firstWord.split("").length,
    firstWord.split("").map(letter => {
      const randomNumber = Math.abs(Math.floor(Math.random() * 41)) - 20;

      return {
        ref: leftSpringsRef,
        from: {
          transform: `translateY(${randomNumber}px)`,
        },
        to: {
          transform: `translateY(${0}px)`,
        },
        delay: 300,
        config: {
          mass: 1,
          tension: 160,
          friction: 18,
        },
      };
    })
  );

  const rightSprings = useSprings(
    secondWord.split("").length,
    secondWord.split("").map(letter => {
      const randomNumber = Math.abs(Math.floor(Math.random() * 41)) - 20;

      return {
        ref: rightSpringsRef,
        from: {
          transform: `translateY(${randomNumber}px)`,
        },
        to: {
          transform: `translateY(${0}px)`,
        },
        delay: 300,
        config: {
          mass: 1,
          tension: 160,
          friction: 18,
        },
      };
    })
  );

  useChain([leftSpringsRef, leftSpringRef]);

  useChain([rightSpringsRef, rightSpringRef]);

  return [leftSpring, leftSprings, rightSpring, rightSprings];
};
