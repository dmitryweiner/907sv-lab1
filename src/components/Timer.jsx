import React, { useState, useEffect } from "react";

export default function Timer({ delay }) {
  const [remainingTime, setRemainingTime] = useState(delay);

  useEffect(() => {
    let time = remainingTime;
    let timerId = 0;

    if (remainingTime) {
      timerId = setInterval(() => {
        if (time > 0){
          time --;
          setRemainingTime(time)
        }
      }, 1000);
    }
    return () => {
      clearInterval(timerId);

    };

  },[]);

  return <span>{remainingTime}</span>;
}
