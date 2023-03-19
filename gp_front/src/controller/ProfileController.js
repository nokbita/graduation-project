import StringConst from "../service/tools/StringConst";
import FetchTools from "../service/tools/FetchTools";

const ProfileController = {

    getStaffSignRequester() {
        const body = {STAFF_SIGN: localStorage.getItem(StringConst.STAFF_SIGN)}
        return FetchTools.post(FetchTools.backEndURL + "/staff/sign-info", body);
    }
}

export default ProfileController;