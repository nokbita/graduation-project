import React, {useContext, useEffect, useRef, useState} from 'react';
import Css from "./StaffProfile.module.css"
import StaffProfileItem from "./StaffProfileItem";
import BackgroundWhite from "../UI/BackgroundWhite";
import Button from "../UI/Button";
import {useLocation, useNavigate} from "react-router-dom";
import StaffProfileService from "../../../service/StaffProfileService";
import {Path} from "../../../service/tools/StringConst";
import InputWithRightLabel from "../UI/InputWithRightLabel";

const StaffProfile = (props) => {
    const passwordState = useState("");
    const accountProps = StaffProfileService.accountProps(passwordState);

    const staffIdState = useState("");
    const postState = useState("");
    const departmentState = useState("");
    const supervisorState = useState("");
    const postInfoProps = StaffProfileService.postInfoProps(staffIdState, postState, departmentState, supervisorState);

    const nameState = useState("");
    const sexState = useState("");
    const birthDateState = useState("");
    const identifyNumState = useState("");
    const educationState = useState("");
    const baseInfoProps = StaffProfileService.baseInfoProps(nameState, sexState, birthDateState, identifyNumState, educationState);

    const nativePlaceState = useState("");
    const addressState = useState("");
    const phoneState = useState("");
    const emailState = useState("");
    const wechatState = useState("");
    const qqState = useState("");
    const contactInfoProps = StaffProfileService.contactInfoProps(nativePlaceState, addressState, phoneState, emailState, wechatState, qqState);

    const photoState = useState();
    const [photo, setPhoto] = photoState;

    const navigate = useNavigate();
    // setting页面的取消、更新
    const cancelBySettingHandler = StaffProfileService.cancelBySettingHandler(props.setShowStaffProfile);
    const updateBySettingHandler = StaffProfileService.updateBySettingHandler(props.staffPhone, props.staffEmail, props.setShowStaffProfile,
        staffIdState, postState, departmentState, supervisorState, nameState, sexState, photoState, birthDateState,
        identifyNumState, educationState, nativePlaceState, addressState, phoneState, emailState, wechatState, qqState,
        passwordState, navigate, props.setUpdateList, props.setUpdateProfile);
    // staff管理页面的取消、更新、添加
    const cancelByStaffHandler = StaffProfileService.cancelByStaffHandler(props.setShowStaffProfile);
    const updateByStaffHandler = updateBySettingHandler;
    const addByStaffHandler = StaffProfileService.addByStaffHandler(props.setShowStaffProfile,
        staffIdState, postState, departmentState, supervisorState, nameState, sexState, photoState, birthDateState,
        identifyNumState, educationState, nativePlaceState, addressState, phoneState, emailState, wechatState, qqState,
        props.setUpdateList);

    const location = useLocation();
    useEffect(() =>{
        if (props.isSetting) {
            StaffProfileService.getProfileHandler(staffIdState, postState, departmentState, supervisorState,
                nameState, sexState, birthDateState, identifyNumState, educationState,
                nativePlaceState, addressState, phoneState, emailState, wechatState, qqState, photoState);
            return;
        }
        if (props.staffEmail) {
            StaffProfileService.getProfileHandlerByStaffEmail(props.staffEmail, staffIdState, postState, departmentState, supervisorState,
                nameState, sexState, birthDateState, identifyNumState, educationState,
                nativePlaceState, addressState, phoneState, emailState, wechatState, qqState, photoState);
        }
    },[]);

    const updateImgInputByRef = useRef();
    const changePhoto = StaffProfileService.changePhoto(updateImgInputByRef, setPhoto, props.staffEmail);

    const [password, setPassword] = passwordState;
    const passwordProps = {
        id: "password",
        label: "新密码",
        inputType: "password",
        inputValue: password,
        inputPlaceholder: "",
        onChangeListener: (e) => {
            setPassword(e.target.value);
        }
    };

    return (
        <BackgroundWhite className={Css.editStaffProfile}>
            <div className={Css.postInfo}>
                <StaffProfileItem props={postInfoProps} />
            </div>
            <div className={Css.baseInfo}>
                <StaffProfileItem props={baseInfoProps}/>
            </div>
            <div className={Css.contactInfo}>
                <StaffProfileItem props={contactInfoProps}/>
            </div>
            <div className={Css.account}>
                <div className={Css.staffProfileItem}>
                    <h2 className={Css.itemName}>账户设置</h2>
                    {/* 所有input的盒子 */}
                    <div className={Css.items}>
                        {/* input的盒子 */}
                        <div className={`${Css.item}`}>
                            <div className={Css.bigImgBox}>
                                <label htmlFor="imgFile">照片</label>
                                <div className={Css.imgBox} onClick={changePhoto}>
                                    <img src={photo} alt=""/>
                                </div>
                                <Button onClickHandler={changePhoto} btnName={"更换照片"} className={Css.changeImgBtn} />
                                <input type="file" accept="image/*" id={"imgFile"} ref={updateImgInputByRef} />
                            </div>
                        </div>
                        {/* 第二个input */}

                    </div>
                    {
                        props.isSetting
                        ? <div className={Css.items} style={{marginTop: "-20px"}}>
                                <div className={Css.item}>
                                    <InputWithRightLabel props={passwordProps} />
                                </div>
                            </div>
                        : null
                    }

                </div>
            </div>
            <div className={Css.btnBox}>
                {
                    props.isSetting
                    ? <div>
                        <Button onClickHandler={cancelBySettingHandler} btnName={"取消"} className={Css.cancel} />
                        <Button onClickHandler={updateBySettingHandler} btnName={"保存"}  />
                    </div>
                    : props.isUpdate
                        ? <div>
                            <Button onClickHandler={cancelByStaffHandler} btnName={"取消"} className={Css.cancel} />
                            <Button onClickHandler={updateByStaffHandler} btnName={"更新"}  />
                        </div>
                        : <div>
                            <Button onClickHandler={cancelByStaffHandler} btnName={"取消"} className={Css.cancel} />
                            <Button onClickHandler={addByStaffHandler} btnName={"添加"}  />
                        </div>
                }

            </div>
        </BackgroundWhite>
    );
};

StaffProfile.defaultProps = {
    isSetting: true,
    isUpdate: true,
}

export default StaffProfile;