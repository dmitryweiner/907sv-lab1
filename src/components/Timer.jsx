import React, { useEffect, useState } from "react";

export default function Timer({ delay }) {
  const [remainingTime, setRemainingTime] = useState(delay);

  useEffect(() => {
    let timerId;
    if (remainingTime) {
      timerId = setInterval(() => {
        setRemainingTime((remainingTime) => remainingTime - 1);
      }, 1000);
    }
    return () => clearInterval(timerId);
  });

  return <span>{remainingTime}</span>;
}
