import React from 'react';
import ReactDOM from "react-dom";
import Css from "./Backdrop.module.css";

const backdropRoot = document.getElementById('backdrop-root');

const Backdrop = (props) => {
    return ReactDOM.createPortal(
        <div className={`${Css.Backdrop} ${props.className}`} onClick={props.onClick}>
            {props.children}
        </div>
    , backdropRoot);
};

export default Backdrop;