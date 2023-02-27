import React from 'react';
import Css from "./MainLink.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp, faClose} from "@fortawesome/free-solid-svg-icons";


const MainLink = (props) => {

    return (
        <div className={Css.mainLink}>
            {/* 前置图标 */}
            <FontAwesomeIcon icon={props.frontIcon} className={Css.frontIcon}/>
            <span className={Css.linkName}>{props.linkName}</span>
            {/* 后置图标 */}
            {
                props.isExpand ?
                    // 展开符号
                    <FontAwesomeIcon icon={faAngleUp} />
                    :
                    // 收起符号
                    <FontAwesomeIcon icon={faAngleDown} />
            }
        </div>
    );
};

MainLink.defaultProps = {
    frontIcon: faClose,
    isExpand: false,
    linkName: "主链接xxx"
}

export default MainLink;