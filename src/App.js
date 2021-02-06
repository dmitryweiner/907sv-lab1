import React from 'react';
import './App.css';
import Timer from "./components/Timer";
import { useState } from 'react';

export default function App() {
    const [isShowing, setIsShowing] = useState(false);
    const [delay, setDelay] = useState('');

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
              onChange={e => setDelay( e.target.value )} />
        </div>
        <div>
          Показать таймер:
          <input
              type="checkbox"
              value={isShowing}
              onChange={e => setIsShowing( e.target.checked )} />
        </div>
        <div>
          {isShowing && <Timer delay={delay} />}
        </div>
      </div>
    );
}
