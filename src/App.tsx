
import React, {ChangeEvent, useEffect, useState} from 'react';
import './App.css';
import {Counter} from "./layout/counter/Counter";
import {Settings} from "./layout/settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState, store} from "./store/store";
import {
    addNumAC, AddNumActionType,
    addSettingAC, AddSettingActionTYpe,
    changeMaxNumAC, ChangeMaxNumActionType,
    changeMinNumAC, ChangeMinNumActionType,
     resetNumAC, ResetNumActionType, setMaxNumAC, setMinNumAC, setNumAC
} from "./store/counter-reducer";

function App() {

    const dispatch = useDispatch();
    const num:number = useSelector((state:AppRootState)=> state.counter.num)
    const maxNum:number = useSelector((state:AppRootState)=> state.counter.maxNum)
    const minNum:number = useSelector((state:AppRootState)=> state.counter.minNum)

    const addNum = ():AddNumActionType=> dispatch(addNumAC());
    const resetNum = ():ResetNumActionType => dispatch(resetNumAC());
    const addSetting = ():AddSettingActionTYpe => dispatch(addSettingAC());
    const changeMaxNum = (newMaxNum: number):ChangeMaxNumActionType => dispatch(changeMaxNumAC(newMaxNum));
    const changeMinNum = (newMinNum: number):ChangeMinNumActionType => dispatch(changeMinNumAC(newMinNum));
    // useEffect(() => {
    //     let valueCounter = localStorage.getItem('value');
    //     if (valueCounter) {
    //         dispatch(setNumAC(JSON.parse(valueCounter)));
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('value', JSON.stringify(num));
    // }, [num]);
    //
    // useEffect(() => {
    //     let minValueCounter = localStorage.getItem('minValue');
    //     if (minValueCounter) {
    //         // Замени вызов на setMinNum
    //         dispatch(setMinNumAC(JSON.parse(minValueCounter)));
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('minValue', JSON.stringify(minNum));
    // }, [minNum]);
    //
    // useEffect(() => {
    //     let maxValueCounter = localStorage.getItem('maxValue');
    //     if (maxValueCounter) {
    //         // Замени вызов на setMaxNum
    //         dispatch(setMaxNumAC(JSON.parse(maxValueCounter)));
    //     }
    // }, []);
    //
    // useEffect(() => {
    //     localStorage.setItem('maxValue', JSON.stringify(maxNum));
    // }, [maxNum]);

    return (
        <div className="App">
            <Counter num={num} minNum={minNum} maxNum={maxNum} addNum={addNum} resetNum={resetNum} />
            <Settings maxNum={maxNum} changeMaxNum={changeMaxNum} minNum={minNum} changeMinNum={changeMinNum} addSettings={addSetting} />
        </div>
    );
}

export default App;
