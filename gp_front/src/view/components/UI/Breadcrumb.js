import React from 'react';
import Css from "./Breadcrumb.module.css";

const Breadcrumb = (props) => {
    return (
        <div onClick={props.onClick} className={`${props.className} ${Css.Breadcrumb}`}>
            {props.linkName}
        </div>
    );
};

export default Breadcrumb;