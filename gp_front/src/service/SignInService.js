import StringConst from "./tools/StringConst";
import SignInController from "../controller/SignInController";
import Tools from "./tools/Tools";

/**
 * 业务逻辑
 */
const SignInService = {

    /**
     * 登录
     * @param account
     * @param password
     * @param setTip
     * @param navigate
     * @returns {Promise<json>}
     */
    signInHandler(account, password, setTip, navigate) {
        return () => {
            SignInController.signInRequester(account, password).then((result) => {
                if (result?.meta.status === 2000) {
                    Tools.printSucceedLog(result);
                    // 登陆成功
                    localStorage.setItem(StringConst.STAFF_SIGN, result.meta.details.jwt);
                    SignInController.succeedSignInNavigator(navigate);
                    return;
                }
                // 登陆失败
                Tools.printFailedLog(result);
                setTip(result.meta.message);

            });
        }
    },


}

export default SignInService;