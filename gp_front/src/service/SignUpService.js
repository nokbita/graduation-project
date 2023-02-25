import SignUpRequest from "./request/SignUpRequest";

const SignUpService = {

    /**
     * 验证是否勾选用户协议
     * @param agree
     * @param setTip
     * @returns {boolean}
     */
    verifyAgreements: (agree, setTip) => {
        if (!agree) {
            setTip("您需要阅读并同意以下协议。");
            setTimeout(() =>{
                setTip("");
            }, 5000);
            return false;
        }
        return true;
    },


    /**
     * 验证注册码
     * @param regCode
     * @returns {Promise<JSON>}
     */
    verifyRegCode: (regCode) => {
        const body = {
            reg_code: regCode
        };
        return SignUpRequest.toRegCode(body);
    },


    /**
     * 注册
     * @param regCode
     * @param email
     * @param password
     * @returns {Promise<JSON>}
     */
    signUp: (regCode, email, password) => {
        const body = {
            // 默认账号为邮箱
            reg_code: regCode,
            email: email,
            password: password
        };
        return SignUpRequest.toSignUp(body);
    },



}


export default SignUpService;

