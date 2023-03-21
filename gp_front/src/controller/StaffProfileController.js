import StringConst, {Path} from "../service/tools/StringConst";
import FetchTools from "../service/tools/FetchTools";
import Controller from "./Controller";

const StaffProfileController = {
    staffProfileRequester() {
        const body = {STAFF_SIGN: localStorage.getItem(StringConst.STAFF_SIGN)}
        return FetchTools.post(FetchTools.backEndURL + "/staff/profile", body);
    },

    staffProfileByStaffEmailRequester(staffEmail) {
        const body = {staffEmail: staffEmail};
        return FetchTools.post(FetchTools.backEndURL + "/staff/profileByStaffEmail", body);
    },

    /**
     * 更新 StaffProfile
     * @param staffPhone
     * @param staffEmail
     * @param setShowStaffProfile
     * @param staffIdState
     * @param postState
     * @param departmentState
     * @param supervisorState
     * @param nameState
     * @param sexState
     * @param photoState
     * @param birthDateState
     * @param identifyNumState
     * @param educationState
     * @param nativePlaceState
     * @param addressState
     * @param phoneState
     * @param emailState
     * @param wechatState
     * @param qqState
     * @param passwordState
     * @returns {Promise<json>}
     */
    updateStaffProfileRequester(staffPhone, staffEmail, setShowStaffProfile,
                                staffIdState, postState, departmentState, supervisorState, nameState, sexState, photoState, birthDateState,
                                identifyNumState, educationState, nativePlaceState, addressState, phoneState, emailState, wechatState,
                                qqState, passwordState) {
        const [staffId, setStaffId] = staffIdState;
        const [post, setPost] = postState;
        const [department, setDepartment] = departmentState;
        const [supervisor, setSupervisor] = supervisorState;
        const [name, setName] = nameState;
        const [sex, setSex] = sexState;
        const [photo, setPhoto] = photoState;
        const [birthDate, setBirthdate] = birthDateState;
        const [identifyNum, setIdentifyNum] = identifyNumState;
        const [education, setEducation] = educationState;
        const [nativePlace, setNativePlace] = nativePlaceState;
        const [address, setAddress] = addressState;
        const [phone, setPhone] = phoneState;
        const [email, setEmail] = emailState;
        const [wechat, setWechat] = wechatState;
        const [qq, setQQ] = qqState;
        const [password, setPassword] = passwordState;

        const body = {
            staffPhone: staffPhone,
            staffEmail: staffEmail,
            staffAccount: {
                staffId: staffId
            },
            staffWork: {
                staffId: staffId,
                post: post,
                department: department,
                supervisor: supervisor
            },
            staffInfo: {
                staffId: staffId,
                name: name,
                photo: photo,
                sex: sex,
                birthTime: birthDate,
                identifyNum: identifyNum,
                education: education
            },
            staffContact: {
                staffId: staffId,
                nativePlace: nativePlace,
                address: address,
                phone: phone,
                email: email,
                wechat: wechat,
                qq: qq
            },
            staffSign: {
                staffId: staffId,
                name: name,
                photo: photo,
                phone: phone,
                email: email,
                password: password,
            },
        }

        return FetchTools.post(FetchTools.backEndURL + Path.STAFF_UPDATE, body);

    },

    changePhotoRequester(dataURL) {
        const body = {
            STAFF_SIGN: localStorage.getItem(StringConst.STAFF_SIGN),
            dataURL: dataURL
        }
        return FetchTools.post1("/staff/upload/photo-base64",body);
    },

    addByStaffHandler(postState, departmentState, supervisorState, nameState, sexState, photoState,
                      birthDateState, identifyNumState, educationState, nativePlaceState, addressState, phoneState,
                      emailState, wechatState, qqState) {
        const [post, setPost] = postState;
        const [department, setDepartment] = departmentState;
        const [supervisor, setSupervisor] = supervisorState;
        const [name, setName] = nameState;
        const [sex, setSex] = sexState;
        const [photo, setPhoto] = photoState;
        const [birthDate, setBirthdate] = birthDateState;
        const [identifyNum, setIdentifyNum] = identifyNumState;
        const [education, setEducation] = educationState;
        const [nativePlace, setNativePlace] = nativePlaceState;
        const [address, setAddress] = addressState;
        const [phone, setPhone] = phoneState;
        const [email, setEmail] = emailState;
        const [wechat, setWechat] = wechatState;
        const [qq, setQQ] = qqState;

        const body = {
            staffAccount: {

            },
            staffWork: {
                post: post,
                department: department,
                supervisor: supervisor
            },
            staffInfo: {
                name: name,
                photo: photo,
                sex: sex,
                birthTime: birthDate,
                identifyNum: identifyNum,
                education: education
            },
            staffContact: {
                nativePlace: nativePlace,
                address: address,
                phone: phone,
                email: email,
                wechat: wechat,
                qq: qq
            },
            staffSign: {
                name: name,
                photo: photo,
                phone: phone,
                email: email
            },
        }

        return FetchTools.post(FetchTools.backEndURL + Path.STAFF_ADD, body);

    }
}

export default StaffProfileController;