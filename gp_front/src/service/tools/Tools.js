import React from 'react';
import FrontRequest from "../request/FrontRequest";
import StringConst, {Log} from "./StringConst";

const Tools = {
    // 将 base64 转换位 blob
    dataURLtoBlob: (dataUrl) => {
        const arr = dataUrl.split(',');
        // 类型
        const mime = arr[0].match(/:(.*?);/)[1];
        // base64 字符串
        const base64Str = atob(arr[1]);
        let n = base64Str.length;
        const u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = base64Str.charCodeAt(n);
        }
        return new Blob([u8arr], { type: mime });
    },

    // 再将 blob 转换为 file
    blobToFile: (blob, fileName) => {
        blob.lastModifiedDate = new Date();  // 文件最后的修改日期
        blob.name = fileName;                // 文件名
        return new File([blob], fileName, {type: blob.type, lastModified: Date.now()});
    },




    /**
     * 成功日志
     * 用于 Fetch 请求后的result对象
     * @param result
     */
    printSucceedLog(result) {
        console.log(Log.SUCCEED, result.meta.message, result);
    },
    /**
     * 失败日志
     * @param result
     */
    printFailedLog(result) {
        console.log(Log.FAILED, result.meta.message, result);
    },
    /**
     * 异常日志
     * @param result
     */
    printErrorLog(result) {
        console.log(Log.ERROR, result.meta.message, result);
    },
}

export default Tools;