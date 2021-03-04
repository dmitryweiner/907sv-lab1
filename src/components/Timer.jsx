import React from 'react';

function Timer({ delay }) {
    const [counter, setCounter] = React.useState(delay);
    React.useEffect(() => {
        const timerId = setInterval(() => {
            setCounter(innerTime => {
                if (innerTime > 0) {
                    innerTime--;
                }
                return innerTime;
            });
        },1000)
        return () => clearInterval(timerId);
    },[]);
    return counter
}

export default Timer;