import {Log} from "./StringConst";

/**
 * 接收一个js对象作为fetch方法的body，用于fetch方法的第二个参数。
 * 采用post方式发送json请求。
 * @param bodyJsObj
 * @returns {{headers: {"Content-type": string}, method: string, body: string}}
 */
const postBody = (bodyJsObj) => {
    return {
        method: "post",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify(bodyJsObj)
    }
};


const FetchTools = {
    backEndURL: "http://localhost:8080",
    /**
     * fetch方法的封装：
     * 1. 采用 post 方式发送 json 请求；
     * 2. 当 response.ok === false 时，打印异常状态；
     * 3. 以 json 格式返回响应内容。
     * @param url
     * @param body
     * @returns {Promise<null|json>}
     */
    post: async (url, body) => {
        try {
            const response = await fetch(url, postBody(body));
            if (!response.ok) {
                console.log(Log.ERROR, response.status, response.statusText);
                return null;
            }
            return response.json();
        } catch (error) {
            console.log(Log.ERROR, error);
            return null;
        }
    },

    /**
     *
     * @param relativeUrl
     * @param body
     * @returns {Promise<null|json>}
     */
    post1: async (relativeUrl, body) => {
        try {
            const response = await fetch(FetchTools.backEndURL + relativeUrl, postBody(body));
            if (!response.ok) {
                console.log(Log.ERROR, response.status, response.statusText);
                return null;
            }
            return response.json();
        } catch (error) {
            console.log(Log.ERROR, error);
            return null;
        }
    }
}

export default FetchTools;