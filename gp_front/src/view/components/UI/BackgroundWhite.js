import React from 'react';
import Css from "./BackroundWhite.module.css";

const BackgroundWhite = (props) => {
    return (
        <div className={Css.backdrop + " " +props.className}>
            {props.children}
        </div>
    );
};

export default BackgroundWhite;