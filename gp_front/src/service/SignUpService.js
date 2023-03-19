import FrontRequest from "./request/FrontRequest";
import StringConst from "./tools/StringConst";

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
     * 注册
     * @param regCode
     * @param email
     * @param password
     * @returns {Promise<JSON>}
     */
    signUp: (regCode, email, password) => {
        const body = {
            // 默认账号为邮箱
            regCode: regCode,
            email: email,
            password: password
        };
        return FrontRequest.toSignUp(body);
    },


    signUpSucceed(navigate, jwt) {
        // 存储注册（登录）信息
        localStorage.setItem(StringConst.STAFF_SIGN, jwt);
        // 重定向到主页
        FrontRequest.toHomePage(navigate);
    }
}


export default SignUpService;

