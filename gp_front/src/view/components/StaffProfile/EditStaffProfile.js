import React, {useState} from 'react';
import Css from "./EditStaffProfile.module.css"
import StaffProfileItem from "./StaffProfileItem";
import EditStaffProfileService from "../../../service/EditStaffProfileService";
import BlockNav from "../MainNavigation/BlockNav";
import BackdropWhite from "../UI/BackdropWhite";
import Button from "../UI/Button";

const EditStaffProfile = () => {

    const [staffId, setStaffId] = useState("");
    const [post, setPost] = useState("");
    const [department, setDepartment] = useState("");
    const [supervisor, setSupervisor] = useState("");
    const postInfoProps = EditStaffProfileService.postInfoProps(staffId, setStaffId, post, setPost, department
        , setDepartment, supervisor, setSupervisor);

    const name = useState("");
    const sex = useState("");
    const birthDate = useState("");
    const identifyNum = useState("");
    const education = useState("");
    const baseInfoProps = EditStaffProfileService.baseInfoProps(name, sex, birthDate, identifyNum, education);

    const nativePlace = useState("");
    const address = useState("");
    const phone = useState("");
    const email = useState("");
    const wechat = useState("");
    const qq = useState("");
    const contactInfoProps = EditStaffProfileService.contactInfoProps(nativePlace, address, phone, email, wechat, qq);


    return (
        <BackdropWhite className={Css.editStaffProfile}>
            <div className={Css.postInfo}>
                <StaffProfileItem props={postInfoProps} />
            </div>
            <div className={Css.baseInfo}>
                <StaffProfileItem props={baseInfoProps}/>
            </div>
            <div className={Css.contactInfo}>
                <StaffProfileItem props={contactInfoProps}/>
            </div>
            <div className={Css.btnBox}>
                <Button btnName={"取消"} className={Css.cancel} /><Button btnName={"保存"} />
            </div>
        </BackdropWhite>
    );
};

export default EditStaffProfile;