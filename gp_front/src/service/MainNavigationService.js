import {faUser} from "@fortawesome/free-solid-svg-icons";
import MainNavigationRequest from "./request/MainNavigationRequest";

const MainNavigationService = {

    /**
     * 生成BlockNav组件的属性，返回对象。
     * @param navigate
     * @returns {{subLinks: [{link: link, linkName: string}, {link: link, linkName: string}], mainLink: {link: mainLink.link, frontIcon: IconDefinition, linkName: string}}}
     */
    blockNavProps: (navigate) => {
        return {
            mainLink: {
                frontIcon: faUser,
                link: () => {},
                linkName: "账户管理"
            },
            subLinks: [
                {
                    link: () => {
                        MainNavigationRequest.toStaff(navigate);
                    },
                    linkName: "员工管理"
                },
                {
                    link: () => {
                        MainNavigationRequest.toUser(navigate);
                    },
                    linkName: "用户管理"
                }
            ]
        }
    },

}

export default MainNavigationService;