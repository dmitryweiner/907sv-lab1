import React from 'react';
import './traffic-light.css';

function App() {
    const [count, setCount] = React.useState(10);
    const fin = 'finish';

    React.useEffect(() => {
        setInterval(() => {
            setCount((count1) => {
                return count1 > 0 ? count1 - 1 : false
            })
        }, 300)
    }, []);
    console.log(count);
    if( count <= 0 ){
        return <>
            { fin }
        </>;
    } else {
        return <>
            { count }
        </>;
    }
}

export default App;
