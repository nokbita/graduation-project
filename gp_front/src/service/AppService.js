import AppController from "../controller/AppController";
import Controller from "../controller/Controller";

const AppService = {

    /**
     * 检查是否已登录
     * APP启动时触发。
     * @param location
     * @param navigate
     */
    signedInCheckHandler(location, navigate) {
        if (location.pathname !== "/sign-in" && location.pathname !== "/sign-up") {
            AppController.isSignedInRequester().then((result) => {
                if (result) {
                    // 已登录
                } else {
                    // 未登录
                    AppController.signInPageNavigator(navigate);
                }
            });
        }
        if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
            AppController.isSignedInRequester().then((result) => {
                if (result) {
                    // 已登录
                    AppController.homePageNavigator(navigate);
                }
            });
        }
    }
}

export default AppService;