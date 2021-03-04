import React from 'react';

function Timer({delay}) {
    const [counter, setCounter] = React.useState({delay})
    React.useEffect(() => {
        let innerTime = counter;
        const timerId = setInterval(() => {
            setCounter(() => {
                if (innerTime > 0) {
                    innerTime -= 1;
                }
                return innerTime;
            });
        },1000)
        if (innerTime===0) {
            return () => clearInterval(timerId);
        }
    },[]);
    return ({counter});
}

export default Timer;