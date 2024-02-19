import React, {ChangeEvent} from 'react';
import {Button} from "../../components/myButton/Button";
import {ChangeMaxNumActionType, ChangeMinNumActionType} from "../../store/counter-reducer";
type SettingsPropsTypes = {
    maxNum:number
    changeMaxNum: (maxNum:number)=> void
    minNum: number
    changeMinNum:(minNum:number)=> void
    addSettings: ()=> void

}
export const Settings = (props:SettingsPropsTypes) => {
    const onChangeMaxNum =(event:ChangeEvent<HTMLInputElement>)=> {
        props.changeMaxNum(+event.currentTarget.value)
    }
    const onChangeMinNum = (event:ChangeEvent<HTMLInputElement>)=> {
        props.changeMinNum(+event.currentTarget.value)
    }
    return (
        <div className={"contentWrapper"}>
            <div className={"settingWrapper" }>
                <div className={"itemSetWrapper"}>
                    <h3>Max Value</h3>
                    <input type={"number"} value={props.maxNum} onChange={onChangeMaxNum}/>
                </div>
                <div className={"itemSetWrapper"}>
                    <h3>Min Value</h3>
                    <input type={"number"} value={props.minNum} onChange={onChangeMinNum}/>
                </div>
            </div>
            <div className={"buttonWrapper"}>
                <Button title={"SET"} callBack={props.addSettings}  />
            </div>
        </div>
    );
};

