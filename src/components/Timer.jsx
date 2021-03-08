import React, { useEffect, useState } from 'react';

function Timer( { delay } )
{
    const [remainingTime, setRemainingTime] = useState(delay);
    useEffect(() => {
        let time = remainingTime;
        let TimerID = 0;

        if (remainingTime) {
            TimerID = setInterval(() => {
                if (time > 0) {
                    time = time - 1;
                    setRemainingTime(time)
                }
            }, 1000);
        }
        return () => {
            clearInterval(TimerID);
        };
    },[]);
    return <span>{ remainingTime }</span>;
}


export default Timer;