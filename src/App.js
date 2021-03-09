import React, { useState } from "react";
import './App.css';
import Timer from "./components/Timer";

function App(props) {
    const [isShowing, setIsShowing] = useState(false);
    const [delay, setDelay] = useState(10);

    return(
        <div className="wrapper">
            <div>
                <h1>Лабораторная №1. Функциональные компоненты.</h1>
                <input className={"radius"}
                type="text"
                value={delay}
                onChange={(e) => setDelay(e.target.value)}/>
            </div>
            <div>
                <h3>Запуск таймера</h3>
                <input id={"_checkbox"}
                value={isShowing}
                type={"checkbox"}
                onChange={(e) => setIsShowing(e.target.checked)}/>
                <label htmlFor={"_checkbox"}>
                    <div id={"tick_mark"}>
                    </div>
                </label>
            </div>
            <div>{isShowing && <Timer delay={delay}/>}</div>
        </div>
    );
}

export default App;