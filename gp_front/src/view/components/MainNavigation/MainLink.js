import React from 'react';
import Css from "./MainLink.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleUp} from "@fortawesome/free-solid-svg-icons";

const MainLink = (props) => {
    return (
        <div className={Css.mainLink}>
            <FontAwesomeIcon icon={props.fontIcon}/>&nbsp;&nbsp;
            <span>{props.linkName}</span>&nbsp;&nbsp;
            <FontAwesomeIcon icon={faAngleUp} />
        </div>
    );
};

MainLink.defaultProps = {
    linkName: "账户管理"
}

export default MainLink;