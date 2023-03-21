import FrontRequest from "./request/FrontRequest";
import StringConst from "./tools/StringConst";
import Tools from "./tools/Tools";
import ProfileController from "../controller/ProfileController";

const ProfileService = {

    signOut: (navigate) => {
        localStorage.removeItem(StringConst.STAFF_SIGN);
        FrontRequest.toSignInPage(navigate);
    },

    getStaffSignHandler(setProfile) {
        ProfileController.getStaffSignRequester().then((result) => {
            if (result?.meta.status === 2000) {
                // 获取成功
                Tools.printSucceedLog(result);
                setProfile({
                    src: result.data.staffSign.photo,
                    signName: result.data.staffSign.name,
                });
                return;
            }
            // 获取失败
            Tools.printFailedLog(result);
        });
    }
}

export default ProfileService;