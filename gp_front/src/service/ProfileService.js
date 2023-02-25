import ProfileRequest from "./request/ProfileRequest";

const ProfileService = {

    signOut: (navigate) => {
        localStorage.removeItem("signedInStaff");
        ProfileRequest.toSignInPage(navigate);
    }
}

export default ProfileService;