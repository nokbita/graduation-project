import React, {useState} from 'react';
import Css from "./Profile.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import BackdropWhite from "../UI/BackdropWhite";
import ProfileHandler from "../../../handler/ProfileHandler";
import {useNavigate} from "react-router-dom";

const Profile = (props) => {

    const [isShow, setShow] = useState(false);
    // 用于跳转页面的路由
    const navigate = useNavigate();

    const showMenuHandler = ProfileHandler.showShortcutMenuHandler(setShow);
    const hideMenuHandler = ProfileHandler.hideShortcutMenuHandler(setShow);

    const signOutHandler = ProfileHandler.signOutHandler(navigate);





    return (
        <div className={Css.profile} onMouseEnter={showMenuHandler} onMouseLeave={hideMenuHandler}>
            <div className={Css.signInStaff}>
                <div className={Css.imgBox}>
                    {
                        props.src ?
                            <img src={props.src} alt="" /> :
                            <FontAwesomeIcon icon={faUserCircle} className={Css.defaultImg} />
                    }
                </div>
                <div className={Css.usernameBox}>
                    <span>{props.username}</span>
                </div>
            </div>
            {
                isShow ?
                    <BackdropWhite className={Css.shortcutMenu}>
                        <div className={Css.setting}>
                            <span>个人中心</span>
                        </div>
                        <div onClick={signOutHandler} className={Css.signOut}>
                            <span>退出登录</span>
                        </div>
                    </BackdropWhite>
                    : null
            }

        </div>
    );
};

Profile.defaultProps = {
    // src:"123",
    username: "无名氏"
}

export default Profile;