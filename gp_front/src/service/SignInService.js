import SignInRequest from "./request/SignInRequest";

/**
 * 业务逻辑
 */
const SignInService = {

    /**
     * 登录
     * @param email
     * @param password
     * @returns {Promise<json>}
     */
    signIn(email, password) {
        const body = {
            email: email,
            password: password
        }
        return SignInRequest.toSignIn(body);
    }
}

export default SignInService;