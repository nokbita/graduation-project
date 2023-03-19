import ProfileService from "../service/ProfileService";
import {Path} from "../service/tools/StringConst";

const ProfileHandler = {

    /**
     * 展示快捷菜单
     * @param setShow
     * @returns {(function(): void)|*} 函数
     */
    showShortcutMenuHandler(setShow) {
        return () => {
            setShow(true);
        };
    },
    /**
     * 隐藏快捷菜单
     * @param setShow
     * @returns {(function(): void)|*} 函数
     */
    hideShortcutMenuHandler(setShow) {
        return () => {
            setShow(false);
        };
    },
    /**
     * 退出登录
     * @param navigate
     * @returns {(function(): void)|*} 函数
     */
    signOutHandler: (navigate) => {
        return () => {
            ProfileService.signOut(navigate);
        };
    },

    settingHandler: (navigate, location) => {
        return () => {
            if (location.pathname !== Path.SETTING_PROFILE) {
                ProfileService.settingProfile(navigate);
            }

        }
    }
}

export default ProfileHandler;