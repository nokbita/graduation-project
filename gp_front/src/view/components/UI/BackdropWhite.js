import React from 'react';
import Css from "./BackdropWhite.module.css";

const BackdropWhite = (props) => {
    return (
        <div className={Css.backdrop + " " +props.className}>
            {props.children}
        </div>
    );
};

export default BackdropWhite;