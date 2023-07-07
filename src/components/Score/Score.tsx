import React, { useEffect, useRef } from "react";

// Interfaces
import { IScoreProps } from "./Score.interface";

// Constants
import {
  COUNTER_INTERVAL_GAP,
  SCORE_DIFFERENCE,
  INCREMENT_VALUE,
} from "../../constants/common";

const Score = ({ currentScore }: IScoreProps) => {
  const counterRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    let counterStart = currentScore - SCORE_DIFFERENCE;
    const counterEnd = currentScore;

    const interval = setInterval(() => {
      counterStart = counterStart + INCREMENT_VALUE;

      if (counterStart === counterEnd) {
        clearInterval(interval);
      }
      if (counterRef.current) {
        counterRef.current.innerText = counterStart.toString();
      }
    }, COUNTER_INTERVAL_GAP);

    return () => {
      clearInterval(interval);
    };
  }, [currentScore]);

  return <h3 ref={counterRef}>{currentScore - SCORE_DIFFERENCE} </h3>;
};

export default Score;
