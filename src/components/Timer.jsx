import React, { useEffect, useState } from "react";

export default function Timer({ delay }) {
  const [remainingTime, setRemainingTime] = useState(delay);

  useEffect(() => {
    const timerId = setInterval(() => {
      setRemainingTime((remainingTime) => {
        if (remainingTime > 0) {
          return remainingTime - 1;
        } else {
          clearInterval(timerId);
          return 0;
        }
      });
    }, 1000);
    return () => clearInterval(timerId);
  }, []);

  return <span>{remainingTime}</span>;
}
