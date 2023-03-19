
import Tools from "../service/tools/Tools";
import StringConst, {Path} from "../service/tools/StringConst";
import FetchTools from "../service/tools/FetchTools";

const Controller = {

    /**
     * 跳转到登录页面
     * @param navigate
     */
    signInPageNavigator(navigate) {
        navigate("/sign-in", {replace: true});
    },
    /**
     * 检查登录状态
     * @returns {Promise<boolean>}
     */
    async isSignedInRequester() {
        const body = {STAFF_SIGN: localStorage.getItem(StringConst.STAFF_SIGN)}
        const result = await FetchTools.post(FetchTools.backEndURL + "/staff/sign-status", body);
        if (!result) return false;

        if (result.meta.status !== 2000) {
            // 未登录
            Tools.printFailedLog(result);
            return false;
        } else {
            // 已登录...
            Tools.printSucceedLog(result);
            return true;
        }
    },
    homePageNavigator(navigate) {
        navigate(Path.ROOT, {replace: true});
    }
}

export default Controller;