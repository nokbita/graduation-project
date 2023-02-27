import ProfileRequest from "./request/ProfileRequest";

const ProfileService = {

    signOut: (navigate) => {
        localStorage.removeItem("signedInStaff");
        ProfileRequest.toSignInPage(navigate);
    },

    settingProfile: (navigate) => {
        ProfileRequest.toSetting(navigate);
    }
}

export default ProfileService;