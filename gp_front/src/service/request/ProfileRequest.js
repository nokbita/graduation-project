
const ProfileRequest = {


    /**
     * 跳转到登陆页面
     * @param navigate
     */
    toSignInPage: (navigate) => {
        // // 跳转
        // navigate("/sign_in");
        // 重定向
        navigate("/sign_in", {replace: true});
    },

    /**
     * 跳转到个人中心
     * @param navigate
     */
    toSetting: (navigate) => {
        navigate("/profile", {replace: true});
    }
}

export default ProfileRequest;