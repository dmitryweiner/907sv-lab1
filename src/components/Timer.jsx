import React, {useState, useEffect} from 'react';

export default function Timer(props)
{
    const [seconds, setSeconds] = useState(props.delay);

    useEffect(() => {
        let interval = null;

        if (seconds) {
            interval = setInterval(() => {
                setSeconds(seconds => seconds - 1);
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    });

    return <span>{seconds}</span>;
}
