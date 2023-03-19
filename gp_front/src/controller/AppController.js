
import Controller from "./Controller";

const AppController = {

    /**
     * 检查是否已登录
     * @returns {Promise<boolean>}
     */
    async isSignedInRequester() {
        return Controller.isSignedInRequester();
    },
    signInPageNavigator(navigate) {
        Controller.signInPageNavigator(navigate);
    },
    homePageNavigator(navigate) {
        Controller.homePageNavigator(navigate);
    }
}

export default AppController;