const EditStaffProfileService = {

    postInfoProps: (staffId, setStaffId, post, setPost, department, setDepartment, supervisor, setSupervisor) => {
        return {
            itemName: "岗位信息",
            itemInfos: [
                {
                    id: "staffId",
                    label: "员工编号",
                    inputType: "text",
                    inputValue: staffId,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setPost(e.target.value);
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
    baseInfoProps: (name, sex, birthDate, identifyNum, education) => {
        const [name1, setName] = name;
        const [sex1, setSex] = sex;
        const [birthDate1, setBirthdate] = birthDate;
        const [identifyNum1, setIdentifyNum] = identifyNum;
        const [education1, setEducation] = education;

        return {
            itemName: "基本信息",
            itemInfos: [
                {
                    id: "name1",
                    label: "姓名",
                    inputType: "text",
                    inputValue: name1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setName(e.target.value);
                    }
                }, {
                    id: "sex1",
                    label: "性别",
                    inputType: "text",
                    inputValue: sex1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setSex(e.target.value);
                    }
                }, {
                    id: "birthDate1",
                    label: "出生年月",
                    inputType: "text",
                    inputValue: birthDate1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setBirthdate(e.target.value);
                    }
                }, {
                    id: "identifyNum1",
                    label: "身份证号",
                    inputType: "text",
                    inputValue: identifyNum1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setIdentifyNum(e.target.value);
                    }
                }, {
                    id: "education1",
                    label: "学历",
                    inputType: "text",
                    inputValue: education1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setEducation(e.target.value);
                    }
                },
            ]
        };
    },
    contactInfoProps: (nativePlace, address, phone, email, wechat, qq) => {
        const [nativePlace1, setNativePlace] = nativePlace;
        const [address1, setAddress] = address;
        const [phone1, setPhone] = phone;
        const [email1, setEmail] = email;
        const [wechat1, setWechat] = wechat;
        const [qq1, setQQ] = qq;

        return {
            itemName: "联系方式",
            itemInfos: [
                {
                    id: "nativePlace1",
                    label: "籍贯",
                    inputType: "text",
                    inputValue: nativePlace1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setNativePlace(e.target.value);
                    }
                }, {
                    id: "address1",
                    label: "住址",
                    inputType: "text",
                    inputValue: address1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setAddress(e.target.value);
                    }
                }, {
                    id: "phone1",
                    label: "手机",
                    inputType: "text",
                    inputValue: phone1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setPhone(e.target.value);
                    }
                }, {
                    id: "email1",
                    label: "邮箱",
                    inputType: "text",
                    inputValue: email1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setEmail(e.target.value);
                    }
                }, {
                    id: "wechat1",
                    label: "微信",
                    inputType: "text",
                    inputValue: wechat1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setWechat(e.target.value);
                    }
                }, {
                    id: "qq1",
                    label: "QQ",
                    inputType: "text",
                    inputValue: qq1,
                    inputPlaceholder: "",
                    onChangeListener: (e) => {
                        setQQ(e.target.value);
                    }
                },
            ]
        };
    }
}

export default EditStaffProfileService;