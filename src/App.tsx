
import React, { useState } from 'react';
import './App.css';
import { Button } from "./components/myButton/Button";

function App() {
    let [num, setNum] = useState(0);

    const addNum = () => {num < 5? setNum(++num):setNum(num)};

    const resetNum = () => {setNum(0)};

    const numberClass = num === 5 ? 'maxCount' : '';
    const isResetDisabled = num === 0;
    const isAddNumDisabled = num === 5;

    return (
        <div className="App">
            <div className={"contentWrapper"}>
                <div className={`numberWrapper ${numberClass}`}>
                    <h1>{num}</h1>
                </div>
                <div className={"buttonWrapper"}>
                    <Button title={"ADD"} callBack={() => { addNum() }} disabled={isAddNumDisabled} />
                    <Button title={"RESET"} callBack={() => { resetNum(); }} disabled={isResetDisabled} />
                </div>
            </div>

        </div>
    );
}

export default App;
