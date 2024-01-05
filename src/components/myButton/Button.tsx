import React from 'react';
import classes from "./Button.module.css"
export type ButtonPropsType = {
    title: string
    callBack: () => void
    disabled?: boolean;
}

export const Button: React.FC<ButtonPropsType> = (props: ButtonPropsType) => {
    const onClickHandler = () => {
        props.callBack()
    }

    return (
        <button
            className={`${classes.button} ${props.disabled ? classes.disabled : ''}`}
            onClick={onClickHandler}
            disabled={props.disabled}
        >
            {props.title}
        </button>
    );
};
