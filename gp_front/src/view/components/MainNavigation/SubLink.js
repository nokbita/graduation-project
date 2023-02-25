import React from 'react';
import Css from "./SubLink.module.css";

const SubLink = (props) => {
    return (
        <div className={Css.subLink}>
            <span>{props.linkName}</span>
        </div>
    );
};

SubLink.defaultProps = {
    linkName: "员工管理"
}

export default SubLink;