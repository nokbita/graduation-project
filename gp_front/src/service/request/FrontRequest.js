import FetchTools from "../tools/FetchTools";
import {Path} from "../tools/StringConst";

const FrontRequest = {

    /**
     * 跳转到登陆页面
     * @param navigate
     */
    toSignInPage: (navigate) => {
        // // 跳转
        // navigate("/sign-in");
        // 重定向
        navigate("/sign-in", {replace: true});
    },

    /**
     * 跳转到个人中心
     * @param navigate
     */
    toSetting: (navigate) => {
        navigate(Path.SETTING_PROFILE);
    },


    /**
     * 发送登录请求
     * @param body
     * @returns {Promise<json>}
     */
    toSignIn: (body) => {
        return FetchTools.post(FetchTools.backEndURL + "/staff/sign-in", body);
    },

    /**
     * 发送注册请求
     * @param body 应包含注册码、邮箱、密码
     * @returns {Promise<any>}
     */
    toSignUp: async (body) => {
        return FetchTools.post(FetchTools.backEndURL + "/staff/sign-up", body);
    },

    toCheckSignStatus(body) {
        return FetchTools.post(FetchTools.backEndURL + "/staff/sign-status", body);
    }
}

export default FrontRequest;