import React, {useContext, useEffect, useState} from 'react';
import Css from "./Profile.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUserCircle} from "@fortawesome/free-solid-svg-icons";
import BackgroundWhite from "../UI/BackgroundWhite";
import ProfileHandler from "../../../handler/ProfileHandler";
import {useLocation, useNavigate} from "react-router-dom";
import ProfileService from "../../../service/ProfileService";
import Backdrop from "../UI/Backdrop";
import StaffProfile from "../StaffProfile/StaffProfile";

const Profile = () => {

    const [profile, setProfile] = useState({});
    const [updateProfile, setUpdateProfile] = useState(false);
    useEffect(() =>{
        ProfileService.getStaffSignHandler(setProfile);
    },[profile.src, updateProfile]);

    const [isShow, setShow] = useState(false);
    // 用于跳转页面的路由
    const navigate = useNavigate();
    const [isShowStaffProfile, setShowStaffProfile] = useState(false);
    const showMenuHandler = ProfileHandler.showShortcutMenuHandler(setShow);
    const hideMenuHandler = ProfileHandler.hideShortcutMenuHandler(setShow);
    const signOutHandler = ProfileHandler.signOutHandler(navigate);
    const settingHandler = ProfileHandler.settingHandler(setShowStaffProfile);

    return (
        <div className={Css.profile} onMouseEnter={showMenuHandler} onMouseLeave={hideMenuHandler}>
            {
                isShowStaffProfile
                    ? <Backdrop>
                        <div className={Css.staffProfile}>
                            <StaffProfile
                                isSetting={true}
                                setUpdateProfile={setUpdateProfile}
                                setShowStaffProfile={setShowStaffProfile} />
                        </div>
                    </Backdrop>
                    : null
            }
            <div className={Css.signInStaff}>
                <div className={Css.imgBox}>
                    {
                        profile.src ?
                            <img src={profile.src} alt="" /> :
                            <FontAwesomeIcon icon={faUserCircle} className={Css.defaultImg} />
                    }
                </div>
                <div className={Css.usernameBox}>
                    <span>{profile.signName}</span>
                </div>
            </div>
            {
                isShow ?
                    <BackgroundWhite className={Css.shortcutMenu}>
                        <div onClick={settingHandler} className={Css.setting}>
                            <span>个人中心</span>
                        </div>
                        <div onClick={signOutHandler} className={Css.signOut}>
                            <span>退出登录</span>
                        </div>
                    </BackgroundWhite>
                    : null
            }

        </div>
    );
};

export default Profile;