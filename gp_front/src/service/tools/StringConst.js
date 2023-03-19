/**
 * 字符串常量
 * @type {{STAFF_SIGN: string}}
 */
const StringConst = {
    STAFF_SIGN: "STAFF_SIGN",

}

/**
 * 日志常量
 * @type {{SUCCEED: string, FAILED: string, ERROR: string}}
 */
const Log = {
    SUCCEED: "GP-" + "成功--->>: ",
    FAILED: "GP-" + "失败--->>: ",
    ERROR: "GP-" + "异常--->>: ",
}

const Path = {
    ROOT: "/",
    SETTING: "/setting",
    SETTING_PROFILE: "setting/profile",
    ACCOUNT_STAFF: "account/staff",
    STAFF_EDIT: "/staff/edit",
    STAFF_UPDATE: "/staff/update",
    STAFF_SIGN: "/staff/sign-in",
    STAFF_LIST: "/staff/list",

}


export default StringConst;
export {Log, Path};