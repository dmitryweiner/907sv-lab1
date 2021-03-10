import React, {useState , useEffect} from 'react';

export default function Timer({delay}) {
    const [remainingTime, setRemainingTime] = useState(delay);

    useEffect(() => {
        if (!remainingTime) return;
        let remTime = remainingTime;
        const timerId = setInterval(() => {
            if (remTime > 0) {
                remTime--;
                setRemainingTime(remTime);
            }
        }, 1000)
        return ()=> clearInterval(timerId)
    }, [])

    return (
        <div>
            <span>{remainingTime}</span>
        </div>
    );
}

/*
export default class Timer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            remainingTime: props.delay
        };

        this.timerId = null;
    }

    componentDidMount() {
        this.timerId = setInterval(() => {
            if (this.state.remainingTime) {
                this.setState({ remainingTime: this.state.remainingTime - 1 });
            }
        }, 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    render() {
        const { remainingTime } = this.state;
        return <span>{remainingTime}</span>;
    }
}*/
