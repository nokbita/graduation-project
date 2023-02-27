import React from 'react';
import Css from "./SubLink.module.css";

const SubLink = (props) => {
    return (
        <div className={Css.subLink}>
            <span className={Css.linkName}>{props.linkName}</span>
        </div>
    );
};

SubLink.defaultProps = {
    linkName: "子链接xxx"
}

export default SubLink;