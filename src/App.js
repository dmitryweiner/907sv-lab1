import './App.css';
import Timer from "./components/Timer";
import React, { useState } from 'react';

function App() {
    /*
    constructor(props) {
        super(props);
        this.state = {
            isShowing: false,
            delay: ''
        }
    }
    */

    const [isShowing, setIsShowing] = useState(false);
    const [delay, setDelay] = useState(1);

    function handleShowingChange() {
        setIsShowing(!isShowing)
    }

    //const { isShowing, delay } = this.state;
    return (
        <div className="wrapper">
            <div>
                <h1>Лабораторная №1. Функциональные компоненты.</h1>
            </div>
            <div>
                Введите количество секунд:
                <input
                    type="text"
                    value={delay}
                    onChange={e => setDelay(Number(e.target.value))} />
            </div>
            <div>
                Показать таймер:
                <input
                    type="checkbox"
                    onChange={handleShowingChange} />
            </div>
            <div>
                {isShowing && <Timer delay={delay} />}
            </div>
        </div>
    );
}

export default App;
