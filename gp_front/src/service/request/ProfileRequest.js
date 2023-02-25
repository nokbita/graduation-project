
const ProfileRequest = {


    toSignInPage: (navigate) => {
        // // 跳转
        // navigate("/sign_in");
        // 重定向
        navigate("/sign_in", {replace: true});
    }
}

export default ProfileRequest;