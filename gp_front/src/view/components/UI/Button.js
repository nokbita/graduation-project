import React from 'react';
import Css from "./Button.module.css";

const Button = (props) => {
    return (
        <button className={`${Css.button} ${props.className}`}>{props.btnName}</button>
    );
};

export default Button;