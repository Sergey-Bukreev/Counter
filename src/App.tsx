
import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import { Button } from "./components/myButton/Button";

function App() {

    let [minNum, setMinNum] = useState(0)
    let [maxNum, setMaxNum] = useState(5)
    let [num, setNum] = useState(minNum);

    useEffect(() => {
        let valueCounter=localStorage.getItem("value")
       if(valueCounter) {setNum(JSON.parse(valueCounter))}
    }, []);

    useEffect(() => {
        localStorage.setItem("value", JSON.stringify(num))
    }, [num]);
    useEffect(() => {
       let minValueCounter =localStorage.getItem("minValue");
       if(minValueCounter) {setMinNum(JSON.parse(minValueCounter))}
       }, []);
    useEffect(() => {
        localStorage.setItem("minValue", JSON.stringify(minNum))
    }, [minNum]);

    useEffect(() => {
        let maxValueCounter =localStorage.getItem("maxValue");
        if(maxValueCounter) {setMaxNum(JSON.parse(maxValueCounter))}
    }, []);
    useEffect(() => {
        localStorage.setItem("maxValue", JSON.stringify(maxNum))
    }, [maxNum]);
    const addNum = () => {
        num < maxNum? setNum(++num):setNum(num); };

    const resetNum = () => {setNum(minNum); setMaxNum(maxNum)};
    const addSettings = ()=> {setNum(minNum)}
    const onChangeMaxNum = (e:ChangeEvent<HTMLInputElement>)=> {setMaxNum(Number(e.currentTarget.value))}
    const onChangeMinNum = (e:ChangeEvent<HTMLInputElement>)=> {setMinNum(Number(e.currentTarget.value))}

    const numberClass = num === maxNum ? 'maxCount' : '';
    const isResetDisabled = num === minNum;
    const isAddNumDisabled = num === maxNum;

    return (
        <div className="App">
            <div className={"contentWrapper"}>
                <div className={"settingWrapper" }>
                   <div className={"itemSetWrapper"}>
                       <h3>Max Value</h3>
                       <input type={"number"} value={maxNum} onChange={onChangeMaxNum}/>
                   </div>
                    <div className={"itemSetWrapper"}>
                        <h3>Min Value</h3>
                        <input type={"number"} value={minNum} onChange={onChangeMinNum}/>
                    </div>
                </div>
                <div className={"buttonWrapper"}>
                    <Button title={"SET"} callBack={addSettings} disabled={isAddNumDisabled} />
                </div>
            </div>


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
