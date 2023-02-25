import FetchTools from "../tools/FetchTools";

/**
 * 该类负责发送网络请求，所有方法返回JSON格式的返回体。
 *
 */
const SignUpRequest = {

    /**
     * 发送注册码请求
     * @param body 应包含注册码
     * @returns {Promise<any>}
     */
    toRegCode: async (body) => {
        return FetchTools.post("http://127.0.0.1:4523/m1/2213132-0-default/pet",body);
    },

    /**
     * 发送注册请求
     * @param body 应包含注册码、邮箱、密码
     * @returns {Promise<any>}
     */
    toSignUp: async (body) => {
        return FetchTools.post("http://127.0.0.1:4523/m1/2213132-0-default/pet",body);
    },




}

 export default SignUpRequest;