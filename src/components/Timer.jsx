import React from 'react';
import { useState, useEffect } from 'react';

export default function Timer( {delay} ) {
    const [remainingTime, setRemainingTime] = useState(delay);

    useEffect(() => {
        const timerId = setInterval(() => {
            setRemainingTime(remainingTime => {
                if (remainingTime) {
                    return remainingTime - 1;
                } else {
                    clearInterval(timerId);
                }
            });
        }, 1000);

        return() => {
            clearInterval(timerId);
        }
    },[]);

    return <span>{remainingTime}</span>;
}
