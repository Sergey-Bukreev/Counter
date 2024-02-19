import React from 'react';
import {Button} from "../../components/myButton/Button";

type CounterPropsType ={
    maxNum:number
    minNum:number
    num:number
    addNum:()=> void
    resetNum:()=> void
}

export const Counter:React.FC<CounterPropsType> = (props:CounterPropsType) => {
    const numberClass = props.num === props.maxNum ? 'maxCount' : '';
    const isAddNumDisabled = props.num === props.maxNum;
    const isResetDisabled = props.num === props.minNum;
const addNumHandler = ()=>{props.addNum()}
    const resetNumHandler = ()=> {props.resetNum()}
    return (
        <div className={"contentWrapper"}>
            <div className={`numberWrapper ${numberClass}`}>
                <h1>{props.num}</h1>
            </div>
            <div className={"buttonWrapper"}>
                <Button title={"ADD"} callBack={addNumHandler} disabled={isAddNumDisabled} />
                <Button title={"RESET"} callBack={resetNumHandler} disabled={isResetDisabled} />
            </div>
        </div>
    );
};

