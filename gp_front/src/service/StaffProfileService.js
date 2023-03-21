import Tools from "./tools/Tools";
import StaffProfileController from "../controller/StaffProfileController";
import StringConst, {Path} from "./tools/StringConst";
import Controller from "../controller/Controller";

const StaffProfileService = {
    postInfoProps: (staffIdState, postState, departmentState, supervisorState) => {
        const [staffId, setStaffId] = staffIdState;
        const [post, setPost] = postState;
        const [department, setDepartment] = departmentState;
        const [supervisor, setSupervisor] = supervisorState;
        return {
            itemName: "岗位信息",
            itemInfos: [
                {
                    id: "staffId",
                    label: "员工编号",
                    inputType: "text",
                    inputValue: staffId,
                    disabled: true,
                    style: {backgroundColor: "#efefef", cursor:"not-allowed"},
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setStaffId(e.target.value);
                    }
                }, {
                    id: "post",
                    label: "岗位名称",
                    inputType: "text",
                    inputValue: post,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setPost(e.target.value);
                    }
                }, {
                    id: "department",
                    label: "所在部门",
                    inputType: "text",
                    inputValue: department,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setDepartment(e.target.value);
                    }
                }, {
                    id: "supervisor",
                    label: "直属上级",
                    inputType: "text",
                    inputValue: supervisor,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setSupervisor(e.target.value);
                    }
                }
            ]
        };
    },
    baseInfoProps: (nameState, sexState, birthDateState, identifyNumState, educationState) => {
        const [name, setName] = nameState;
        const [sex, setSex] = sexState;
        const [birthDate, setBirthdate] = birthDateState;
        const [identifyNum, setIdentifyNum] = identifyNumState;
        const [education, setEducation] = educationState;

        return {
            itemName: "基本信息",
            itemInfos: [
                {
                    id: "name",
                    label: "姓名",
                    inputType: "text",
                    inputValue: name,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setName(e.target.value);
                    }
                }, {
                    id: "sex",
                    label: "性别",
                    inputType: "text",
                    inputValue: sex,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setSex(e.target.value);
                    }
                }, {
                    id: "birthDate",
                    label: "出生时间",
                    inputType: "datetime-local",
                    inputValue: birthDate,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setBirthdate(e.target.value);
                    }
                }, {
                    id: "identifyNum",
                    label: "身份证号",
                    inputType: "text",
                    inputValue: identifyNum,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setIdentifyNum(e.target.value);
                    }
                }, {
                    id: "education",
                    label: "学历",
                    inputType: "text",
                    inputValue: education,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setEducation(e.target.value);
                    }
                },
            ]
        };
    },
    contactInfoProps: (nativePlaceState, addressState, phoneState, emailState, wechatState, qqState) => {
        const [nativePlace, setNativePlace] = nativePlaceState;
        const [address, setAddress] = addressState;
        const [phone, setPhone] = phoneState;
        const [email, setEmail] = emailState;
        const [wechat, setWechat] = wechatState;
        const [qq, setQQ] = qqState;

        return {
            itemName: "联系方式",
            itemInfos: [
                {
                    id: "nativePlace",
                    label: "籍贯",
                    inputType: "text",
                    inputValue: nativePlace,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setNativePlace(e.target.value);
                    }
                }, {
                    id: "address",
                    label: "住址",
                    inputType: "text",
                    inputValue: address,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setAddress(e.target.value);
                    }
                }, {
                    id: "phone",
                    label: "手机",
                    inputType: "text",
                    inputValue: phone,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setPhone(e.target.value);
                    }
                }, {
                    id: "email",
                    label: "邮箱",
                    inputType: "text",
                    inputValue: email,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setEmail(e.target.value);
                    }
                }, {
                    id: "wechat",
                    label: "微信",
                    inputType: "text",
                    inputValue: wechat,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setWechat(e.target.value);
                    }
                }, {
                    id: "qq",
                    label: "QQ",
                    inputType: "text",
                    inputValue: qq,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setQQ(e.target.value);
                    }
                },
            ]
        };
    },
    accountProps(passwordState) {
        const [password, setPassword] = passwordState;
        return {
            itemName: "账户设置",
            itemInfos: [
                {
                    id: "password",
                    label: "新密码",
                    inputType: "password",
                    inputValue: password,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                    setPassword(e.target.value);
                }
            }]
        };
    },
    /**
     * 个人中心 的取消
     * @param navigate
     * @returns {(function())|*}
     */
    cancelBySettingHandler: (setShowStaffProfile) => {
        return () => {
            setShowStaffProfile(false);
        };
    },
    /**
     * 员工管理页面 的取消
     * @returns {undefined}
     * @param setShowStaffProfile
     */
    cancelByStaffHandler(setShowStaffProfile) {
        return () => {
            setShowStaffProfile(false);
        };
    },

    /**
     * 更新 profile
     * @returns {(function(): void)|*} 函数
     * @param staffPhone
     * @param staffEmail
     * @param setShowStaffProfile
     * @param staffIdState
     * @param postState
     * @param departmentState
     * @param supervisorState
     * @param nameState
     * @param photoState
     * @param sexState
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
     * @param navigate
     * @param setUpdateList
     */
    updateBySettingHandler: (staffPhone, staffEmail, setShowStaffProfile,
        staffIdState, postState, departmentState, supervisorState, nameState, sexState, photoState, birthDateState,
        identifyNumState, educationState, nativePlaceState, addressState, phoneState, emailState, wechatState, qqState,
        passwordState, navigate, setUpdateList, setUpdateProfile) => {

        // 对密码进行合法性校验
        const [password, setPassword] = passwordState;
        //....

        return () => {
            StaffProfileController.updateStaffProfileRequester(staffPhone, staffEmail, setShowStaffProfile,
                staffIdState, postState, departmentState, supervisorState, nameState, sexState, photoState, birthDateState,
                identifyNumState, educationState, nativePlaceState, addressState, phoneState, emailState, wechatState,
                qqState, passwordState)
                .then((result) => {
                    if (result?.meta.status === 2000) {
                        // 成功
                        Tools.printSucceedLog(result);
                        if (staffEmail) {
                            setUpdateList(true);
                        }
                        // 密码被修改
                        if (result.meta.details.isPasswordChanged) {
                            localStorage.removeItem(StringConst.STAFF_SIGN);
                            Controller.signInPageNavigator(navigate);
                        }
                        // 关闭 StaffProfile 面板
                        setShowStaffProfile(false);
                        // 个人中心更新头像
                        if (!staffEmail) {
                            setUpdateProfile(true);
                        }
                        return;
                    }
                    // 失败
                    Tools.printFailedLog(result);
            });
        };
    },



    /**
     * 从后台获取 profile
     * @param staffIdState
     * @param postState
     * @param departmentState
     * @param supervisorState
     * @param nameState
     * @param sexState
     * @param birthDateState
     * @param identifyNumState
     * @param educationState
     * @param nativePlaceState
     * @param addressState
     * @param phoneState
     * @param emailState
     * @param wechatState
     * @param qqState
     * @param photoState
     */
    getProfileHandler(staffIdState, postState, departmentState, supervisorState,
                      nameState, sexState, birthDateState, identifyNumState, educationState,
                      nativePlaceState, addressState, phoneState, emailState, wechatState, qqState, photoState) {

        const [staffId, setStaffId] = staffIdState;
        const [post, setPost] = postState;
        const [department, setDepartment] = departmentState;
        const [supervisor, setSupervisor] = supervisorState;
        const [name, setName] = nameState;
        const [sex, setSex] = sexState;
        const [birthDate, setBirthdate] = birthDateState;
        const [identifyNum, setIdentifyNum] = identifyNumState;
        const [education, setEducation] = educationState;
        const [nativePlace, setNativePlace] = nativePlaceState;
        const [address, setAddress] = addressState;
        const [phone, setPhone] = phoneState;
        const [email, setEmail] = emailState;
        const [wechat, setWechat] = wechatState;
        const [qq, setQQ] = qqState;
        const [photo, setPhoto] = photoState;

        StaffProfileController.staffProfileRequester().then((result) => {
            if (!result) return;
            if (result.meta.status !== 2000) {
                // 获取失败
                Tools.printFailedLog(result);
            } else {
                // 获取成功
                Tools.printSucceedLog(result);

                // const staffAccount = result.data.staff.staffAccount;
                const staffContact = result.data.staff.staffContact;
                const staffInfo = result.data.staff.staffInfo;
                const staffWork = result.data.staff.staffWork;
                setStaffId(staffWork.staffId);
                setPost(staffWork.post);
                setDepartment(staffWork.department);
                setSupervisor(staffWork.supervisor);

                setName(staffInfo.name);
                setPhoto(staffInfo.photo);
                setSex(staffInfo.sex);
                //修改为 yyyy-MM-ddThh:mm:ss.SSS
                setBirthdate((staffInfo.birthTime).substring(0,23));
                setIdentifyNum(staffInfo.identifyNum);
                setEducation(staffInfo.education);

                setNativePlace(staffContact.nativePlace);
                setAddress(staffContact.address);
                setPhone(staffContact.phone);
                setEmail(staffContact.email);
                setWechat(staffContact.wechat);
                setQQ(staffContact.qq);
            }
        });
    },

    getProfileHandlerByStaffEmail(staffEmail, staffIdState, postState, departmentState, supervisorState,
                                  nameState, sexState, birthDateState, identifyNumState, educationState,
                                  nativePlaceState, addressState, phoneState, emailState, wechatState, qqState,
                                  photoState) {

        const [staffId, setStaffId] = staffIdState;
        const [post, setPost] = postState;
        const [department, setDepartment] = departmentState;
        const [supervisor, setSupervisor] = supervisorState;
        const [name, setName] = nameState;
        const [sex, setSex] = sexState;
        const [birthDate, setBirthdate] = birthDateState;
        const [identifyNum, setIdentifyNum] = identifyNumState;
        const [education, setEducation] = educationState;
        const [nativePlace, setNativePlace] = nativePlaceState;
        const [address, setAddress] = addressState;
        const [phone, setPhone] = phoneState;
        const [email, setEmail] = emailState;
        const [wechat, setWechat] = wechatState;
        const [qq, setQQ] = qqState;
        const [photo, setPhoto] = photoState;

        StaffProfileController.staffProfileByStaffEmailRequester(staffEmail).then((result) => {
            if (result?.meta.status === 2000) {
                // 获取成功
                Tools.printSucceedLog(result);

                // const staffAccount = result.data.staff.staffAccount;
                const staffContact = result.data.staff.staffContact;
                const staffInfo = result.data.staff.staffInfo;
                const staffWork = result.data.staff.staffWork;
                setStaffId(staffWork.staffId);
                setPost(staffWork.post);
                setDepartment(staffWork.department);
                setSupervisor(staffWork.supervisor);

                setName(staffInfo.name);
                setPhoto(staffInfo.photo);
                setSex(staffInfo.sex);
                //修改为 yyyy-MM-ddThh:mm:ss.SSS
                setBirthdate((staffInfo.birthTime).substring(0,23));
                setIdentifyNum(staffInfo.identifyNum);
                setEducation(staffInfo.education);

                setNativePlace(staffContact.nativePlace);
                setAddress(staffContact.address);
                setPhone(staffContact.phone);
                setEmail(staffContact.email);
                setWechat(staffContact.wechat);
                setQQ(staffContact.qq);

                return;
            }
            // 获取失败
            Tools.printFailedLog(result);
        });
    },


    changePhoto: (updateImgInputByRef, setPhoto, staffEmail) => {
        return () => {
            // 获取 input DOM元素
            const input = updateImgInputByRef.current;
            // 触发点击事件
            input.click();
            // 监听变化
            input.addEventListener("change", () =>{
                // 获取FileList对象中的第一个文件（File对象）
                const file = input.files[0];
                //  FileReader主要用于将文件内容读入内存，通过一系列异步接口，可以在主线程中访问本地文件。
                //  使用FileReader对象，web应用程序可以异步的读取存储在用户计算机上的文件(或者原始数据缓冲)内容，可以使用File对象或者Blob对象来指定所要处理的文件或数据。
                const reader = new FileReader();
                // 异步读取文件内容，结果用data:url的字符串形式表示
                reader.readAsDataURL(file);
                console.log(reader);
                // 当读取操作成功完成时调用
                reader.onload = (e) => {
                    // e.target.result 中就是base64格式的图片
                    const dataURL = e.target.result;
                    setPhoto(dataURL);
                }
            });
        };
    },

    addByStaffHandler(setShowStaffProfile, staffIdState, postState, departmentState, supervisorState, nameState,
                      sexState, photoState, birthDateState, identifyNumState, educationState, nativePlaceState,
                      addressState, phoneState, emailState, wechatState, qqState, setUpdateList) {
        return () => {
            StaffProfileController.addByStaffHandler(postState, departmentState, supervisorState, nameState,
                sexState, photoState, birthDateState, identifyNumState, educationState, nativePlaceState,
                addressState, phoneState, emailState, wechatState, qqState).then((result) =>{
                    if (result?.meta.status === 2000) {
                        Tools.printSucceedLog(result);
                        setShowStaffProfile(false);
                        console.log("我是什么……………………")
                        console.log(setUpdateList)
                        setUpdateList(true);
                        return;
                    }
                    Tools.printFailedLog(result);
            });
        };
    }
}

export default StaffProfileService;