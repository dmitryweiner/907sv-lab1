import React, { useEffect, useState } from 'react';

function Timer( { delay } )
{
    const [remainingTime, setRemainingTime] = useState(delay);
    useEffect(() => {
        let time = remainingTime;
        let timerID = 0;

            timerID = setInterval(() => {
                if (time > 0) {
                    time = time - 1;
                    setRemainingTime(time)
                }
            }, 1000);
        return () => {
            clearInterval(timerID);
        };
    },[]);
    return <span>{ remainingTime }</span>;
}


export default Timer;