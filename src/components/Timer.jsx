import React, {useState, useEffect} from 'react';

export default function Timer(props) {
    const [seconds, setSeconds] = useState(props.delay)
    useEffect(() => {
        let interval = setInterval(() => {
            setSeconds((seconds) => {
                if (seconds > 0) {
                    return (seconds - 1)
                }
                return clearInterval(interval)
            });
        }, 1000);
        return () => clearInterval(interval);
    }, []);
    return <span>{seconds}</span>;
}




/* https://ru.reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effect s */