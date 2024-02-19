import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const RootReducer = combineReducers({
    counter: counterReducer
})
export type AppRootState = ReturnType<typeof RootReducer>
export const store = createStore(RootReducer)
