import React from 'react';
import Css from "./Button.module.css";

const Button = (props) => {
    return (
        <button onClick={props.onClickHandler} className={`${Css.button} ${props.className}`} disabled={props.disabled}>{props.btnName}</button>
    );
};

export default Button;