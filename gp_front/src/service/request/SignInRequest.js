import FetchTools from "../tools/FetchTools";


const SignInRequest = {


    /**
     * 发送登录请求
     * @param body
     * @returns {Promise<json>}
     */
    toSignIn: (body) => {
        return FetchTools.post("https://", body);
    }
}

export default SignInRequest;