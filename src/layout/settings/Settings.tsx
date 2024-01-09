import React, {ChangeEvent} from 'react';
import {Button} from "../../components/myButton/Button";
type SettingsPropsTypes = {
    maxNum:number
    onChangeMaxNum: (e:ChangeEvent<HTMLInputElement>)=> void
    minNum: number
    onChangeMinNum:(e:ChangeEvent<HTMLInputElement>)=> void
    addSettings: ()=> void

}
export const Settings = (props:SettingsPropsTypes) => {
    return (
        <div className={"contentWrapper"}>
            <div className={"settingWrapper" }>
                <div className={"itemSetWrapper"}>
                    <h3>Max Value</h3>
                    <input type={"number"} value={props.maxNum} onChange={props.onChangeMaxNum}/>
                </div>
                <div className={"itemSetWrapper"}>
                    <h3>Min Value</h3>
                    <input type={"number"} value={props.minNum} onChange={props.onChangeMinNum}/>
                </div>
            </div>
            <div className={"buttonWrapper"}>
                <Button title={"SET"} callBack={props.addSettings}  />
            </div>
        </div>
    );
};

