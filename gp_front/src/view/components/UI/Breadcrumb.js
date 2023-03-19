import React from 'react';
import Css from "./Breadcrumb.module.css";

const Breadcrumb = (props) => {
    return (
        <div
            className={`${props.className} ${Css.Breadcrumb}`}
            onClick={props.onClickHandler}
        >
            {props.linkName}
        </div>
    );
};

export default Breadcrumb;