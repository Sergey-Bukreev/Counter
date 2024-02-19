export type SetNumActionType = { type:"SET-NUM", num:number}
export type SetMaxNumActionType = {type:"SET-MAX-NUM", maxNum:number}
export type SetMinNumActionType = {type:"SET-MIN-NUM", minNum:number}
export type AddNumActionType = {type: "ADD-NUM"}
export type ResetNumActionType = {type:"RESET-NUM"}
export type AddSettingActionTYpe = { type:"ADD-SETTING" }
export type ChangeMaxNumActionType = {type:"CHANGE-MAX-NUM", maxNum:number}
export type ChangeMinNumActionType = {type:"CHANGE-MIN-NUM", minNum:number}

export type CounterActionType = SetNumActionType | SetMaxNumActionType | SetMinNumActionType | AddNumActionType |
                                ResetNumActionType | AddSettingActionTYpe | ChangeMaxNumActionType |
                                ChangeMinNumActionType

export type InitialCounterStateType = { num:number, maxNum:number, minNum:number}
let initialState:InitialCounterStateType = {num: 0, maxNum:5, minNum:0 }

export const setNumAC = (num:number):SetNumActionType => { return {type:"SET-NUM", num }}
export const setMaxNumAC = (maxNum:number):SetMaxNumActionType =>{return {type:"SET-MAX-NUM", maxNum}}
export const setMinNumAC = (minNum:number):SetMinNumActionType=> {return {type:"SET-MIN-NUM", minNum}}
export const addNumAC = ():AddNumActionType => {return{type:"ADD-NUM"}}
export const resetNumAC = ():ResetNumActionType => {return {type:"RESET-NUM"}}
export const addSettingAC = ():AddSettingActionTYpe => {return{type:"ADD-SETTING"}}
export const changeMaxNumAC = (maxNum:number):ChangeMaxNumActionType => {return {type:"CHANGE-MAX-NUM", maxNum}}
export const changeMinNumAC = (minNum:number):ChangeMinNumActionType => {return {type:"CHANGE-MIN-NUM", minNum}}
export const counterReducer = (state:InitialCounterStateType = initialState, action:CounterActionType):InitialCounterStateType => {
    switch (action.type) {
        case "SET-NUM":
            return {...state, num:action.num}
        case "SET-MAX-NUM":
            return {...state, maxNum:action.maxNum}
        case "SET-MIN-NUM":
            return {...state, minNum:action.minNum}
        case "ADD-NUM":
            return {...state, num:state.num < state.maxNum ? state.num + 1 : state.num}
        case "RESET-NUM":
            return {...state, num: state.minNum, maxNum: state.maxNum }
        case "ADD-SETTING":
            return {...state, minNum:state.minNum, maxNum:state.maxNum, num:state.minNum}
        case "CHANGE-MAX-NUM":
            return {...state, maxNum:action.maxNum}
        case "CHANGE-MIN-NUM":
            return {...state,minNum:action.minNum}
        default:
            return state
    }
}