import FetchTools from "../service/tools/FetchTools";
import {Path} from "../service/tools/StringConst";
import Controller from "./Controller";

const SignInController = {

    signInRequester(account, password) {
        const body = {
            email: account,
            password: password
        }
        return FetchTools.post(FetchTools.backEndURL + Path.STAFF_SIGN, body);
    },

    succeedSignInNavigator(navigate) {
        Controller.homePageNavigator(navigate)
    }
}

export default SignInController;