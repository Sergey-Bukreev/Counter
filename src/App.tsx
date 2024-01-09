
import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./layout/counter/Counter";
import {Settings} from "./layout/settings/Settings";

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


    return (
        <div className="App">
            <Counter num={num} minNum={minNum} maxNum={maxNum} addNum={addNum} resetNum={resetNum} />
            <Settings maxNum={maxNum} onChangeMaxNum={onChangeMaxNum} minNum={minNum} onChangeMinNum={onChangeMinNum} addSettings={addSettings}  />
        </div>
    );
}

export default App;
