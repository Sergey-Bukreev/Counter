
import React, { useEffect} from 'react';
import './App.css';
import {Counter} from "./layout/counter/Counter";
import {Settings} from "./layout/settings/Settings";
import {useDispatch, useSelector} from "react-redux";
import {AppRootState} from "./store/store";
import {
    addNumAC, AddNumActionType,
    addSettingAC, AddSettingActionTYpe,
    changeMaxNumAC, ChangeMaxNumActionType,
    changeMinNumAC, ChangeMinNumActionType,
     resetNumAC, ResetNumActionType, setMaxNumAC, setMinNumAC, setNumAC
} from "./store/counter-reducer";

function App():JSX.Element {

    const dispatch = useDispatch();
    const num:number = useSelector((state:AppRootState)=> state.counter.num)
    const maxNum:number = useSelector((state:AppRootState)=> state.counter.maxNum)
    const minNum:number = useSelector((state:AppRootState)=> state.counter.minNum)

    const addNum = ():AddNumActionType=> dispatch(addNumAC());
    const resetNum = ():ResetNumActionType => dispatch(resetNumAC());
    const addSetting = ():AddSettingActionTYpe => dispatch(addSettingAC());
    const changeMaxNum = (newMaxNum: number):ChangeMaxNumActionType => dispatch(changeMaxNumAC(newMaxNum));
    const changeMinNum = (newMinNum: number):ChangeMinNumActionType => dispatch(changeMinNumAC(newMinNum));

    useEffect(():void => {
        let valueCounter:string | null = localStorage.getItem('value');
        if (valueCounter) {
            dispatch(setNumAC(JSON.parse(valueCounter)));
        }
    }, []);

    useEffect(():void => {
        localStorage.setItem('value', JSON.stringify(num));
    }, [num]);

    useEffect(():void => {
        let minValueCounter:string | null = localStorage.getItem('minValue');
        if (minValueCounter) {
            dispatch(setMinNumAC(JSON.parse(minValueCounter)));
        }
    }, []);

    useEffect(():void => {
        localStorage.setItem('minValue', JSON.stringify(minNum));
    }, [minNum]);

    useEffect(():void => {
        let maxValueCounter:string | null = localStorage.getItem('maxValue');
        if (maxValueCounter) {
            dispatch(setMaxNumAC(JSON.parse(maxValueCounter)));
        }
    }, []);

    useEffect(():void => {
        localStorage.setItem('maxValue', JSON.stringify(maxNum));
    }, [maxNum]);

    return (
        <div className="App">
            <Counter num={num} minNum={minNum} maxNum={maxNum} addNum={addNum} resetNum={resetNum} />
            <Settings maxNum={maxNum} changeMaxNum={changeMaxNum} minNum={minNum} changeMinNum={changeMinNum} addSettings={addSetting} />
        </div>
    );
}

export default App;
