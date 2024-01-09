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


    return (
        <div className={"contentWrapper"}>
            <div className={`numberWrapper ${numberClass}`}>
                <h1>{props.num}</h1>
            </div>
            <div className={"buttonWrapper"}>
                <Button title={"ADD"} callBack={() => { props.addNum() }} disabled={isAddNumDisabled} />
                <Button title={"RESET"} callBack={() => { props.resetNum(); }} disabled={isResetDisabled} />
            </div>
        </div>
    );
};

